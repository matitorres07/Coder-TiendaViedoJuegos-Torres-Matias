import intro from "./video/intro.mp4";
import "./styles/home.css";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <div className="video-loop d-flex" style={{ height: "100%" }}>
      <video className="videoTag d-flex " autoPlay loop muted>
        <source src={intro} type="video/mp4" />
      </video>

      <div className="content-asd">
        <h1>Game Over</h1>
        <p>Press the button to start a new game...!</p>
        <Link to={"/juegos"}>
          <img
            className="btn-start"
            src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/aa6b705c829e6cd.png"
          ></img>
        </Link>
      </div>
    </div>
  );
};
export default home;
