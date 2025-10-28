import "./App.css";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Counter from "./components/Counter";
function App() {
  return (
    <>
      <Header />
      <Greeting name="Zakariya" surname="Mohamed" />
      <Counter />
    </>
  );
}

export default App;
