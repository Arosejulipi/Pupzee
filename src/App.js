
import './App.css';
import NavBar from './Components/navBar/NavBar';
import ItemListContainer from './Components/itemListContainer/ItemListContainer';


function App() {
  return (
    <div>
           <NavBar/>
           <ItemListContainer greeting={"Nada es verdad. Todo está permitido ,Assassin's Creed"}/>
          
    </div>
  );
}

export default App;
