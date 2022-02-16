import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
  
const PageNotFound: FunctionComponent = () => {
  
  return (
    <div className="center">
      <img src="#"alt="Page non trouvée"/>
      <h1>Page non trouvée !</h1> 
      
    </div>
  );
}
  
export default PageNotFound;