import './App.css';
import {useState} from "react";
import {FormListe} from "./components/EinkaufsListe/FormListe";
import {EinkaufsListe} from "./components/EinkaufsListe/EinkaufsListe";
import {v4 as V4} from 'uuid'

function App() {

    const [listed, setListed] = useState([])
    const addNewList = (text) => {
        const list = {
            text: text,
            id: V4()
        }
        setListed([...listed, list])
    }

    const deleteList = (id) => {
        setListed(listed.filter(t => t.id !== id))
    }
  return (
    <div className="App">
      <h1>Meine Einkaufsliste</h1>
        <FormListe addList={addNewList}/>
        <EinkaufsListe list={listed} deleteList={deleteList}/>
    </div>
  );
}

export default App;
