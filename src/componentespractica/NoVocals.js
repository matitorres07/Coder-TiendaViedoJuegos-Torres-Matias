const noVocals = () => {
  const onKeyDown = (event) => {
    console.log("se introdujo una tecla", event.key);
    const vocales = "aeiou";

    if (vocales.search(event.key) != -1) {
      //if(['a','e','i','o','u'].includes(event.key))
      event.preventDefault();
    }
  };
  return (
    <div>
      <div>No se admiten vocales</div>
      <input onKeyDown={onKeyDown} type={"text"}></input>
    </div>
  );
};
export default noVocals;
