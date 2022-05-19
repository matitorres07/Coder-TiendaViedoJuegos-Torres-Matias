import React, { useEffect, useState } from 'react';
import Item from './Item';
import { productList } from '../data/data.js';
import './styles/ItemList.css';
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { useAppContext } from './context/AppContext';



const ItemList = () => {
 
  const [products, setProducts] = useState([]);

  const {products1} = useAppContext()

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
