import logo from "./logo.svg";
import "./App.css";
import Login from "./Componets/login";
import { useSelector } from "react-redux";
import { selectUser } from "./fetures/userSlice";
import Logout from "./Componets/Logout";

function App() {
  const user = useSelector(selectUser);
  return <div className="App">{user ? <Logout /> : <Login />}</div>;
}

export default App;
