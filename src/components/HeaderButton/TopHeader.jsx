import React, { useContext } from 'react';
import Row from '../common/Row';
import SearchIcon from '../../svgs/SearchIcon';
import RotatedSquare from '../../svgs/RotatedSquare';
import HeaderButton from './HeaderButton';
import UserIcon from '../../svgs/UserIcon';
import BucketIcon from '../../svgs/BucketIcon';
import { CartContext } from '../../ContextAPI';
const TopHeader = () => {
const {cartItems} = useContext(CartContext);
console.log("the totatl cart item  is comming from  function .....",cartItems.length);

    return ( 
         <div className='w-full h-full px-[10%]'>
      <Row className='flex h-full items-center justify-between'>
        <SearchIcon/>
        <Row className='flex items-center'>
        <RotatedSquare/>
         <h1 className='text-[28px] text-black mx-[10px]'>CodeRift</h1>
        <RotatedSquare/>
          </Row>
          <Row>

        <HeaderButton title = "Account" Icon = {UserIcon} url='/'/>
        <HeaderButton  className= 'ml-5' title = {`Cart ${cartItems.length}`} Icon = {BucketIcon} url='/Cart'/>

      

          </Row>
      </Row>
    </div> 
    );
}
 
export default TopHeader;