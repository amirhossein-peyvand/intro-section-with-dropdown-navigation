import MainArea from "./components/MainArea";
import Navbar from "./components/Navbar";
import "./sass/App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <MainArea />
    </div>
  );
}

export default App;
