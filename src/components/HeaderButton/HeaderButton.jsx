import React from 'react';
import Row  from '../common/Row';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const HeaderButton =(props)=>{
    const {title,Icon,className,url}= props;
 return (
        <Link   to={url}> 
      
       <Row className= {className} >
             <Icon/>
             <p className="hover:text-slate-400 ml-2">
               {title}
             </p>
            </Row>
            </Link>
 );
}

export default HeaderButton;