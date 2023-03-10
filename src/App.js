import "./App.css";
import Header from "./components/header";
import SideBar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex" }}>
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
