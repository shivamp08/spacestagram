import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <NavigationBar title="Spacestagram" />
      <Content />
    </div>
  );
}

export default App;
