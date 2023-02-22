import Navbar from './components/Navbar';
import './app.css';
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Bienvenido a Tropical Store Medellín" />
    </div>
  );
}

export default App;
