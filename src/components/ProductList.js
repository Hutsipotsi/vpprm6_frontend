import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function ProductList({url,selectedProduct, setSelectedProduct}) {
    const [products, setProducts] = useState([]);


useEffect(() => {
    axios.get(url + 'products/getproducts.php/')
    .then((response) => {
        const json = response.data;
        if(json) {
            if(selectedProduct === null) {
                setSelectedProduct(json[0]);
            }
            setProducts(json);
        }

    }).catch (error => {
        alert(error.response === undefined ? error : error.response.data.error);
    })
}, [selectedProduct])

function onProductChange(value) {
    setSelectedProduct(products.filter(item => item.id === value));
}


return (
    <select value={selectedProduct?.id} onChange={(e) =>  onProductChange(e.target.value)}>
        {products.map((product) => (
            <option key={product.id} value={product.id}>{product.name}</option>
        ))}
        </select>
)
 }


