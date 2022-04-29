import React from 'react';
import ItemList from './ItemList';
import './styles/titulo.css';

const ItemListContainer = () => {
  return (
    <div >
      <h3 className='nada'>Nuestros productos</h3>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
