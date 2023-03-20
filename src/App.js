import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Searchbar from './components/Searchbar';
import products from './components/Products';


function App() {
  return (
    <div className="App">

    <Navbar/>

    <>
    <Card 
    img={products[0].img}
    product={products[0].product}
    price={products[0].price}
    />
    <Card 
    img={products[1].img}
    product={products[1].product}
    price={products[1].price}
    />
    <Card 
    img={products[2].img}
    product={products[2].product}
    price={products[2].price}
    />
    <Card 
    img={products[3].img}
    product={products[3].product}
    price={products[3].price}
    />
    <Card 
    img={products[4].img}
    product={products[4].product}
    price={products[4].price}
    />
    <Card 
    img={products[5].img}
    product={products[5].product}
    price={products[5].price}
    />
    <Card 
    img={products[6].img}
    product={products[6].product}
    price={products[6].price}
    />
    <Card 
    img={products[7].img}
    product={products[7].product}
    price={products[7].price}
    />
    </>

    
    </div>
  );
}


export default App;