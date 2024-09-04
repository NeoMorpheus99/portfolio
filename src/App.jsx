import NavBar from "./Nav.jsx";
//import Profile from "./Profile.jsx";
import Card from "./Cardy.jsx";
import Carousel from "./Carousel.jsx";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <div className="row">
          <div className="col-md-6">
            <Card />
          </div>
          <div className="col">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
