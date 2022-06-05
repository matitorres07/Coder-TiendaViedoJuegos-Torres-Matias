import { useEffect, useState } from "react"
import StashipDetail from "./StashipDetail"

const StarshipContainer = () => {

    const [starship, setStarship] = useState([])
    useEffect(() => {
        getStarShips()
      
    }, [])
    

    const getStarShips = () => { 

        const URL = 'https://swapi.dev/api/starships'
        fetch(URL)
            .then(respuesta => 
                 respuesta.json()
            )
            .then (data => {
                console.log(data.results);
                setStarship(data.results)
            })

     }


  return (
    <div>{starship.map(s => <StashipDetail starship={s}/>)}</div>
  )
}
export default StarshipContainer