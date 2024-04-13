import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import axios from 'axios';
// import { getAllProducts } from './services/apiService'

function App() {

  const showProdutcs = async () => {
    let data = await getAllProducts()
    setproducts(data)
    console.log(data);
  }
  const [products, setproducts] = useState([])

  useEffect(() => {
    // Fetch data from backend API
    axios.get('http://localhost:3000/api/products')
      .then(response => {
        // Set the fetched items to state
        setproducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run effect only once on component mount



  return (
    <>
      <Navbar />
      {/* <button onClick={showProdutcs}>show products</button>
      {
        products.map((item, index) => {
          return (<div key={index} style={{backgroundColor : 'aqua', border : '2px solid black', width : '25vw'}}>
          <img src={item.image} alt="no image"  style={{backgroundColor: 'grey',width : '25vw'}}/>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>)
        })

      } */}
      <h2>Products</h2>
      <div style={{display: 'flex', gap: '10px'}}>
        {products.map(item => (
          <div key={item._id} style={{backgroundColor : 'aqua', border : '2px solid black', width : '25vw'}}>
          <img src={item.image} alt="no image"  style={{backgroundColor: 'grey',width : '25vw'}}/>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
