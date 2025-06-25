import React from 'react';
import Button from '../common/Button';
import Row from '../common/Row';


const HeroSection = () => {
    return ( 
         <div className='w-full px-[10%] py-[50px]'>
      <Row className='w-full items-center justify-between'>
        <div className='w-[46%]'>
          <h1 className='text-slate-950 text-[74px] text-slate-700 font-light'>
            Collections
          </h1>
          <p className='mt-[50px] text-black text-[23px] text-bold'>
            You can explore and shop many products differnet collections from
            various brands here.
          </p>
          <Button/>
        </div>
        <div className='w-[46%]'>
          <div className='w-[400px] h-[442px] relative'>
            <img 
            className='animate-[wobbles_10s_ease-in] w-full h-full rounded-tl-[160px]  rounded-br-[160px]'
            src="https://plus.unsplash.com/premium_photo-1684445034987-5c13450cb5b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D"
             alt="Hero" />
             <div className="animate-[wobbles_10s_ease-in] absolute w-full h-full rounded-tl-[160px] rounded-br-[160px] border-[2px] border-[#00000040] top-[20px] left-[18px] -z-[1]"></div>

          </div>
        </div>

      </Row>
      </div> 
     );
}
 
export default HeroSection;