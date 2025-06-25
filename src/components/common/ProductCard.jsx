

import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Row from './Row';
 const ProductCard = ({data}) => {
    
    return ( 
        <Link className='w-full shadow pb-[5px]' to ={`/product/${data.id}`}>
            <img
            className='h-[350px] object-cover w-full'
             src={data.image}
              alt="productCard" />
              <Row className='px-[10px]'>
                 <h6 className='text-black font-semibold mt-[18px] text-[16px]' >{data.title}</h6>
              </Row>

              <Row className='justify-between mt-[16px] px-[10px] mb-[10px]'>
                <p className='text-[16px] text-black'>{data.category}</p>
                <p className='text-[16px] text-black font-semibold'>${data.price}</p>

              </Row>
        </Link>
     );
 }
  
 export default ProductCard;