import axios from 'axios';
import ProductList from '../components/ProductList';
import {useState} from 'react';

export default function ManageProducts({url}) {
    const [newProduct, setNewProduct] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [addingProduct, setAddingProduct] = useState(false);

    function saveProduct(e) {
        e.preventDefault();
        const json = JSON.stringify({name: newProduct});
        axios.post(url + 'products/addproducts.php', json, {
            headers: {
                'Content-type' : 'application/json'
            }
        })
        .then((response) => {
            setNewProduct('');
            setAddingProduct(false);
            setSelectedProduct(response.data);
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
    }
    if(!addingProduct) {
        return (
            <>
            <h3>Hallinnoi tuotteita</h3>
            <div>
                <label>Tuotteet</label>
                <ProductList
                url={url}
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
                />
                <button className="btn btn-dark" type="button" onClick={() => setAddingProduct(true)}>Lisää</button>
                </div>
                </>
        
        )
    } else {
        return (
            <>
            <h3>Lisää uusi tuote</h3>
            <form onSubmit={saveProduct}>
                <div>
                    <label>Tuotteen nimi</label>
                    <input type="text" value={newProduct} onChange={(e) => setNewProduct(e.target.value)}/>
                </div>
                <button type="button" onClick={() => setAddingProduct(false)}>Peruuta</button>
                <button type="submit">Tallenna</button>
            </form>
            </>
        )
    }

}


