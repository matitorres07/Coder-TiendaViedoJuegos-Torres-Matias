import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect } from "react";
const ProductDetail = () => {

    useEffect(() => {
    const db = getFirestore()
    const juego = doc(db,'items','2BKNvr99nosHU2HFFwBD')
    getDoc (juego).then(res => {
        if(res.exists()){
            console.log(res.data());
        }
    })

    }, [])


  return (
    <div>ProductDetail</div>
  )
}
export default ProductDetail