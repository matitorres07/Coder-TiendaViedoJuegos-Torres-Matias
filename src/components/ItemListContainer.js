const ItemListContainer = ({name,producto}) => {
  return (
    <div>
        <h1 className="text-4xl font-bold" style={{color:'red'}}>
        Hola este es el contenedor de la {name} , aqui van a ir todos los {producto} disponibles!
    </h1>
    </div>
  )
}
export default ItemListContainer