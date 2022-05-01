import React, { useEffect } from "react";
import axios from "axios";

export default function Logout({ url, setUserName }) {

    useEffect(() => {
        axios
          .get(url + "user/logout.php")
          .then(() => {
              setUserName('');
          })
          .catch((error) => {
            alert(error.response === undefined ? error : error.response.data.error);
          });
      }, []);

    return (<h3><p>Olet kirjautunut ulos.</p></h3>);
}

