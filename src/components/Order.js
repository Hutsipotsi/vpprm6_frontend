import axios from 'axios';
import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';

export default function Order({ url, cart, removeFromCart, updateAmount, emptyCart }) {
    const [inputs, _] = useState([]);
    const [inputIndex, setInputIndex] = useState(-1);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [street, setStreet] = useState('');
    const [postal, setPostal] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        for (let i = 0; i < cart.length; i++) {
            inputs[i] = React.createRef();
        }

    }, [cart.length])

    useEffect(() => {
        if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null) {
            inputs[inputIndex].current.focus();
        }
    }, [cart])

    function changeAmount(e, product, index) {
        updateAmount(e.target.value, product);
        setInputIndex(index);
    }

    function order(e) {
        e.preventDefault();

        const json = JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            street: street,
            postal: postal,
            city: city,
            phone: phone,
            cart: cart,
        });

        axios.post(url + 'order/saveorder.php', json, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                emptyCart();
                setFinished(true);
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            });
    }

    let sum = 0;

    if (finished === false) {
        return (
            <div>
                <h3 className="shoppingCart">Ostoskori</h3>
                <table className="table">
                    <tbody>
                        {cart.map((product, index) => {
                            sum += parseFloat(product.price) * product.amount;
                            return (
                                <tr key={uuid()}>
                                    <td>{product.name}</td>
                                    <td>{product.price} €</td>
                                    <td>
                                        <input type="number" ref={inputs[index]} style={{ width: '60px' }} value={product.amount} onChange={e => changeAmount(e, product, index)} />
                                    </td>
                                    <td><a href="#" onClick={() => removeFromCart(product)}>Delete</a></td>
                                </tr>
                            )
                        })}
                        <tr key={uuid()}>
                            <td></td>
                            <td>{sum.toFixed(2)} €</td>
                        </tr>
                    </tbody>
                </table>
                {cart.length > 0 &&
                    <>
                        <h3 className="header">Asiakastiedot</h3>
                        <form onSubmit={order}>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" for="firstname">Etunimi:</label>
                                <input className="col-sm-3" id="firstname" onChange={e => setFirstname(e.target.value)} />
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" for="lastname">Sukunimi:</label>
                                <input className="col-sm-3" id="lastname" onChange={e => setLastname(e.target.value)} />
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" for="street">Osoite:</label>
                                <input className="col-sm-3" id="street" onChange={e => setStreet(e.target.value)} />
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" for="postal">Postinumero:</label>
                                <input className="col-sm-3" id="postal" onChange={e => setPostal(e.target.value)} />
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" for="city">Postitoimipaikka:</label>
                                <input className="col-sm-3" id="city" onChange={e => setCity(e.target.value)} />
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" for="phone">Puhelinnumero:</label>
                                <input className="col-sm-3" id="phone" onChange={e => setPhone(e.target.value)} />
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" for="placeOrder"></label>
                                <button className="col-sm-2 btn btn-secondary" id="placeOrder">Tilaa</button>
                            </div>
                        </form>
                    </>
                }
            </div>
        )
    } else {
        return (<h3>Kiitos tilauksesta!</h3>);
    }
}