function Saludo({ name, edad }) {
  return (
    <h1 className="text-4xl font-bold" style={{ color: "red" }}>
      hola {name} tienes {edad} años
    </h1>
  );
}
export default Saludo;
