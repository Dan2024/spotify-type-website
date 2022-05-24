import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Player from "./Player";
import "./App.css";

function App() {
  return (
    <div className="App bg-black h-screen overflow-scroll">
      <main className="ff-p two-col-grid__expand-two">
        <Sidebar />
        <Hero />
      </main>
      <Player />
    </div>
  );
}

export default App;
