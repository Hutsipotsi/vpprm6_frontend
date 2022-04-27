import axios from 'axios';
import CategoryList from '../components/CategoryList';
import {useState} from 'react';

export default function ManageCategories({url}) {
    const [newCategory, setNewCategory] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [addingCategory, setAddingCategory] = useState(false);

    function saveCategory(e) {
        e.preventDefault();
        const json = JSON.stringify({name: newCategory});
        axios.post(url + 'products/addcategory.php', json, {
            headers: {
                'Content-type' : 'application/json'
            }
        })
        .then((response) => {
            setNewCategory('');
            setAddingCategory(false);
            setSelectedCategory(response.data);
        }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
        })
    }
    if(!addingCategory) {
        return (
            <>
            <div className="catlist">
            <h3>Hallinnoi kategoriaa</h3>
            <div>
                <label className='catlist'>Kategoria</label>
                <CategoryList
                url={url}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                />
                <button className="btn btn-warning" type="button" onClick={() => setAddingCategory(true)}>Lisää</button>
                </div>
                </div>
                </>
        
        )
    } else {
        return (
            <>
            <div className="catlist">
            <h3>Lisää uusi kategoria</h3>
            <form onSubmit={saveCategory}>
                <div>
                    <label className="catlist">Kategorian nimi</label>
                    <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}/>
                </div>
                <button className="catlist" type="button" onClick={() => setAddingCategory(false)}>Peruuta</button>
                <button className="catlist" type="submit">Tallenna</button>
            </form>
            </div>
            </>
        )
    }

}


