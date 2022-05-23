import React, { useEffect, useState } from 'react';
import Item from './Item';
import { productList } from '../data/data.js';
import './styles/ItemList.css';
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { useAppContext } from './context/AppContext';
import NavBar from './NavBar';
import Footer from './Footer';



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
    }, 2000);
    
    
  }, []); 
  

  
  return (
    <div>
      <NavBar></NavBar>
      <div className="asd2">
      {
        
        products.length ? ( 
          <div className='grid grid-cols-5 gap-4 cardsind'>
          <>
            {
              
              products.map((product) => {
                
                return (
                    
                  <div key={product.id} className="grid justify-center grid-cols-6 cardsind2">
                    <Item
                      name={product.name}
                      thumbnail={product.thumbnail}
                      price={product.price}
                      stock={product.stock}
                      id={product.id}
                      tub2={product.tub2}
                    />
                  </div>
                );
              })
            }
          </>
          </div>
        ) : (
          <img className=''  src="https://pa1.narvii.com/7878/a30ff749e4268e8f8bdb196bc7a659cc8b340d9cr1-480-480_hq.gif" />
        ) 
      }
    </div>
    </div>
  );
};
export default ItemList;
