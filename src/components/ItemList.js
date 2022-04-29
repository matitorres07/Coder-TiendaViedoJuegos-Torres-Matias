import React, { useEffect, useState } from 'react';
import Item from './Item';
import { productList } from '../data/data.js';


const ItemList = () => {
 
  const [products, setProducts] = useState([]);

 
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
    }, 2000);
  });

 //Entrega al '02/05
  const getProductsFromDB = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      console.log(error);
      alert('No podemos mostrar los productos en este momento');
    }
  };

 
  useEffect(() => {
    getProductsFromDB();
  }, []); 

  return (
    <div className="grid grid-cols-4 gap-4">
      {
        
        products.length ? ( 
          <>
            {
              
              products.map((product) => {
                
                return (
                  <div key={product.id} className="flex justify-center grid-cols-4">
                    <Item
                      name={product.name}
                      thumbnail={product.thumbnail}
                      price={product.price}
                      stock={product.stock}
                      id={product.id}
                    />
                  </div>
                );
              })
            }
          </>
        ) : (
          <img className='' src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" />
        ) 
      }
    </div>
  );
};

export default ItemList;
