import React , {useState,useEffect} from 'react';
import Container from '../common/Container';
import axios  from 'axios';
import Row from '../common/Row';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import apiEndpoints from '../../apis';
const PopularProducts = () => {
const [products,ProductState] = useState([]);



 const getData =async () => {
    try {
     const response = await axios.get('https://fakestoreapi.com/products?limit=10');
   const res= await response.data;
   ProductState(res);   
    } catch (error) {
         console.log(error);      
    }
 }
         
 useEffect(() => {
   getData();
  }, []);

    return (
         <Container>
      <Row className='uppercase justify-center my-[25px]'>
        <h1 className='text-[#0b0f13] font-semibold text-[30px]'>popular products</h1>
      </Row>
  <Row className='gap-[11px]'>

    <div className="h-[600px] w-[52px] relative">
      <p className="text-[29px] w-[450px] h-[470px]  text-black -rotate-90 absolute text-center -z-[1]">
        Explore new and popular styles
      </p>
    </div>

    {/* Image Section */}
    <Link to={`/product/${products[1]?.id}`}>
 
  <img
    className="w-[500px] h-[500px] object-cover cursor-pointer"
     src={products[1]?.image}
    alt="top popular"
  />

    </Link>

<Row className="flex-wrap h-[500px] gap-[11px]">
{products.slice(2,6).map((product) => (
  <div key={product.id} className="w-[46%] object-cover h-[245px]">
    <Link to={`/product/${product.id}`}>
      <img
        className="w-full h-full object-fit"
        src={product.image}
        alt="Nothing is happening"
      />
    </Link>
  </div>
))}



  
   
 
</Row>


  </Row>
</Container>
      );
}
 
export default PopularProducts;