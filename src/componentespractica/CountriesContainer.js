import { useEffect, useState } from "react"
import ItemCount from "../components/ItemCount"



function CountriesContainer() {
    const countriesList = ['Mexico','Argentina']

const [countries, setCountries] = useState([])
    useEffect(() => {
        console.log("holaaaa") 
        console.log('lista de paises',countriesList) ;
        
        const promesa = new Promise((res,rej) => {
            const rand = Math.random()
            console.log('random num',rand);

            setTimeout (() => {

                if (rand >= 0.5) {
                    res (countriesList)
                } else {
                    rej ('rechazadaaaaa')
                }
            },5000)


        })
        promesa.then((result) => {
            console.log("la promesa fue satisfehca",result);
            setCountries(result)

        }).catch ((err) => {
            console.log("la promesa fue rechazada",err);

        })
    }, [])
    
  return (
    <div style={{border : 'solid'}}>
        <h1>
        {countries.map((c,i)=> <li key={i}>{c}</li>) }
        <ItemCount></ItemCount>
        </h1>
    </div>
  )
}
export default CountriesContainer
