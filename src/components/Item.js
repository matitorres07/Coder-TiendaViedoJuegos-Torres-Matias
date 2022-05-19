import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount.js';

import './styles/Item.css';

const Item = ({ name, thumbnail, price, id, stock }) => {
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
        <div className='face face2'>
          <div className='content'>
          <div className='text_holder_2'>
          <span className="product-card__name">Precio : ${price}</span>

          <span className="" >Stock : {stock}</span>
          <Link to={`/datalles/${id}`} className="btn btn-link" >
              Ver mas!
          </Link>
          </div>

          </div>

        </div>
      </div>
      
    </div>

  </body>
  );
};

export default Item;


