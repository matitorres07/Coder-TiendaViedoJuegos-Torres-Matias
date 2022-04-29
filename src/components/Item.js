import React from 'react';
import ItemCount from './ItemCount.js';

import './styles/Item.css';

const Item = ({ name, thumbnail, price, id, stock }) => {
  const onAdd = (count) => {
    alert(`Has agregado ${count} Juegos`);
  };

  return (
    
    <div className="card w-96 bg-base-100 shadow-xl" style={{ padding : '20px'}}>
      
      <figure><img className="product-card__image" src={thumbnail}  alt="Shoes" /></figure>
      

      <h3 className="card-title">{name}</h3>
      <p>Aca iria una descricion del juego que voy a ir agregando mas adelante!</p>
      <span className="product-card__name">${price}</span>
      <span className="">Stock : {stock}</span>
      <div style={{margin : '10px'}}>
      <ItemCount stock={stock} onAdd={onAdd} initial={1} />
      </div>
      
    </div>


  );
};

export default Item;