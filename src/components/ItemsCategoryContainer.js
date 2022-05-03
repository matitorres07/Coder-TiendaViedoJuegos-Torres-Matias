import React from 'react';
import ItemsCategory from './ItemsCategory';
import './styles/titulo.css';

const ItemListContainer = () => {
  return (
    <div >
      <h3 className='nada'>Nuestros productos</h3>
      <ItemsCategory />
    </div>
  );
};

export default ItemListContainer;
