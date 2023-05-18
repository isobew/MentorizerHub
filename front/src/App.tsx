import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Content from "./components/layout/Content";
import Menu from "./components/layout/Menu";
import GlobalStyle from "./GlobalStyle/globalStyles";

interface apptypes {
  props?: any;
}

function App(props: apptypes) {

  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Menu />
        <Content />
      </Router>
    </div>
  );
}

export default App;
