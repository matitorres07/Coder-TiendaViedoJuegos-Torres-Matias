import React, { useEffect, useState } from 'react';
import Item from './Item';
import { productList } from '../data/data.js';
import './styles/ItemList.css';
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";


const ItemList = () => {
 
  const [products, setProducts] = useState([]);

 
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
    }, 1000);
  });

 //Entrega al '02/05


 
  useEffect(() => {
    setTimeout(() => {
      const db = getFirestore()
    const itemsCollection = collection(db,'items')
    getDocs (itemsCollection).then(snapshot => { 
        const productList = []
       snapshot.docs.forEach(s=> { 
           //console.log(s.data());
           productList.push({id : s.id,...s.data()})
       })
       console.log(productList);
       setProducts(productList) 
     })
    }, 1000);
    
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
          <img className='loader'  src="https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg" />
        ) 
      }
    </div>
  );
};

export default ItemList;
