import { useEffect, useState } from "react"
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";

const Products = () => {
    const [products, setProducts] = useState ([])
    useEffect(() => {
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

    }, [])
    
  return (
    <div>Products</div>
  )
}
export default Products