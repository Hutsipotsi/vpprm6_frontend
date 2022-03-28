import React from 'react';

export default function Footer() {
    return (
        <footer className="container-fluid py-1 mt-auto">
            <div className="d-flex justify-content-center p-1">
                <p className="m-0 fw-bold text-white text-center"></p>
                    <table>
                     <tr>
                      <th>Yhteystiedot:</th>
                     <tr>
                      <td>Puh. 0445821041</td>
                     </tr> 
                     <tr>
                      <td>Ark. klo 10-18 ja la klo 10-15</td>
                     </tr>
                      <td>Sähköp. kiekkokulma@hotmail.com</td>
                     </tr> 
                    </table>
            </div>
        </footer>
    );
}