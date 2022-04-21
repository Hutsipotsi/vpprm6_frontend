import axios from "axios";
import React, {useState, useEffect} from "react";
import CategoryList from "../components/CategoryList";
import uuid from "react-uuid";
import Table from 'react-bootstrap/Table'

export default function ManageProducts({url}) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([]);
    const [addingProduct, setAddingProduct] = useState(false);
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [image,setImage] = useState('');
    const [manufacturer,setManufacturer] = useState('');
    const [prodcategory,setProdcategory] = useState('');

    useEffect(() => {
      if (selectedCategory !== null) {
        axios.get(url + 'products/getproducts.php/' + selectedCategory.id)
        .then((response) => {
            const json = response.data;
            if (json) {
                setProducts(json.products);
            }
        }).catch (error => {
            alert(error.response === undefined ? error : error.response.data.error);
      })
    } 
}, [url,selectedCategory])

function saveProduct(e) {
    e.preventDefault();
    const json = JSON.stringify({name: name,price: price,image: image,manufacturer: manufacturer,category: prodcategory,id: selectedCategory.id});
    axios.post(url + 'products/addproducts.php',json,{
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then((response) => {
        const updateProducts = [...products,response.data];
        setProducts(updateProducts);
        setAddingProduct(false);
    }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
    });
}
    
if (!addingProduct) {
    return (
        <>
        <div className="prodlist">
        <h3>Hallitse tuotteita</h3>
        <CategoryList url={url} selectedCategory = {selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <table className="prodtable">
            <thead>
                <tr key={uuid()}>
                    <th>Nimi</th>
                    <th>Hinta</th>
                    <th>Kuva</th>
                    <th>Valmistaja</th>
                    <th>Tuotekatekoria</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={uuid()}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.image}</td>
                        <td>{product.manufacturer}</td>
                        <td>{product.prodcategory}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div>
        <button className="btn btn-dark" type="button" onClick={()=> setAddingProduct(true)}>Lisää</button> 
        </div>
        </div>
        </>
    )
} else {
    return (
        <>
        <div className="addprodlist">
        <h3>Lisää uusi tuote</h3>
        <form onSubmit={saveProduct}>
        <div>
            <label className="addprodlist">Tuote nimi</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
            <label className="addprodlist">Hinta</label>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
        </div>
        <div>
            <label className="addprodlist">Kuva</label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
        </div>
        <div>
            <label className="addprodlist">Valmistaja</label>
            <input type="text" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)}/>
        </div>
        <div>
            <label className="addprodlist">Tuotekatekoria</label>
            <input type="text" value={prodcategory} onChange={(e) => setProdcategory(e.target.value)}/>
        </div>
        <button className="addlist" type="button" onClick={()=> setAddingProduct(false)}>Peruuta</button>
        <button className="addlist" type="submit">Tallenna</button>
        </form>
        </div>
        </>
    )
}
}