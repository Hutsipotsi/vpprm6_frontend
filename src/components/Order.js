import React from 'react';
import uuid from 'react-uuid';


export default function Order({cart, removeFromCart}) {
    let sum = 0;

    return (
        <div>
            <h3 className="header">Ostoskori</h3>
            <table className="table">
                <tbody>
                    {cart.map(product => {
                        sum+=parseFloat(product.price);
                        return (
                            <tr key={uuid()}>
                                <td>{product.name}</td>
                                <td>{product.price} €</td>
                                <td><a href="#" onClick={() => removeFromCart(product)}>Delete</a></td>
                            </tr>
                        )
                    })}
                    <tr key={uuid()}>
                        <td></td>
                        <td>{sum.toFixed(2)} $</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}