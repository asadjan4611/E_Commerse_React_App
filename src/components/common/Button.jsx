import React from 'react';

const Button = ({  
    className = 'h-[50px] w-[20%] mt-[50px]',  
    title = 'Shop Now',  
    onClick
}) => {  
    return (  
        <button  
        onClick={onClick}
            className={`text-white bg-black text-[15px] font-medium ${className}`}
        >  
    
            {title}  
        </button>  
    );  
};  

export default Button;