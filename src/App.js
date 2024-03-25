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
            id: V4(),
            completed: false
        }
        setListed([...listed, list])
    }

    const toggleList = (id) => {
        // Finde die entsprechende Aufgabe in der Liste
        const updatedList = listed.map(item => {
            if (item.id === id) {
                // Wenn die ID der Aufgabe übereinstimmt, ändere den completed-Status
                return {...item, completed: !item.completed};
            }
            return item;
        });
        // Aktualisiere den Zustand mit der aktualisierten Liste
        setListed(updatedList);
    };

    const deleteList = (id) => {
        setListed(listed.filter(t => t.id !== id))
    }
  return (
    <div className="App">
      <h1>Meine Einkaufsliste</h1>
        <FormListe addList={addNewList}/>
        <EinkaufsListe list={listed} deleteList={deleteList} toggleList={toggleList}/>
    </div>
  );
}

export default App;
