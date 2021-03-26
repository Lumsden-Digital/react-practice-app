import "./styles/styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Message from "./components/Message";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Message />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}
