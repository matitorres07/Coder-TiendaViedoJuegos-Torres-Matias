import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount.js';

import './styles/Item.css';

const Item = ({ name, thumbnail, price, id, stock ,tub2}) => {
  const onAdd = (count) => {
    alert(`Has agregado ${count} Juegos`);
  };

  

  return (
    <body>
      
    <div className='container'>
      <div className='card'>
        <div className='face face1'>
          <div className='content'>
            <img className='' src={thumbnail} ></img>
            <h3>{name}</h3>
          </div>
        </div>
        <div className='face face2' >
        <img src = {tub2} style={{width : '300px', height : '350px'}}></img>
        <div className='text'>
        <div className='content w-96 ...'>
          <div className='text_holder_2' style={{}}>
          <span className="product-card__name">Precio : ${price}</span>

          <span className="" >Stock : {stock}</span>
          <Link to={`/datalles/${id}`} className="btn btn-accent" >
              Ver mas!
          </Link>
          </div>

          </div>
        </div>
        </div>
      </div>
      
    </div>

  </body>
  );
};



export default Item;


