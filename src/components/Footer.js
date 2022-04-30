import React from 'react';

export default function Footer() {
    return (
        <footer className="container-fluid py-1 mt-auto">
            <div className="d-flex justify-content-center">
                <p className="m-0 fw-bold text-white text-center"></p>
                    <table id="footerText">
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
                    <h5 id="footerIcons">Seuraa kiekkokulmaa:
                        <a href="https://www.instagram.com/" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="https://fi-fi.facebook.com/" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="https://twitter.com/?lang=fi" className="twitter"><i className="bi bi-twitter"></i></a>
                    </h5>
            </div>
        </footer>
    );
}