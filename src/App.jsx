import "./App.css";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import { Tiriye } from "./components/Counter"; 
import ThemeToggle from "./components/ThemeSwitcher";
import Clicker from "./components/Clicker";
import Inputer from "./components/Inputer";
import WelcomeMessage from "./components/WelcomeMessage";
import Dashboard from "./components/Dashboard"; 
import Notification from "./components/Notifications"
function App() {
  return (
    <>
      <ThemeToggle />
      <Header />
      <Notification hasNewMessages={true} />
      <Dashboard isLoggedIn={true} />
      <WelcomeMessage isLoggedIn={true} />
      <Inputer />
      <Greeting name="Zakariya" surname="Mohamed" />
      <Greeting name="Zakariya" surname="Mohamed" />
      <Clicker />
      <Tiriye />
    </>
  );
}

export default App;
