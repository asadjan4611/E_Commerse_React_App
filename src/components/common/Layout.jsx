import React from 'react';
import Footer from '../Footer';
import TopHeader from '../HeaderButton/TopHeader';
const Layout = ({children}) => {
    return (  
        <div className='w-full h-[50px] bg-[#0b0f130d]'>
   <TopHeader/>
   {children}
    <Footer/>
  </div>
    );
}
 
export default Layout;