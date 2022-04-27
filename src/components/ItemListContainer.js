import React from 'react';
import ItemList from './ItemList';
import './styles/titulo.css';

const ItemListContainer = () => {
  return (
    <section >
      <h1 className='nada'>Nuestros productos</h1>

      <ItemList />
    </section>
  );
};

export default ItemListContainer;
