import * as React from "react";
import { ThemeProvider } from "./ThemeContext";
import Home from "./Home";
import { Route, Switch } from "react-router";
import About from "./About";
import Contact from "./Contact";

const routes = [
  <Route exact key="home" path="/" component={Home} />,
  <Route exact key="about" path="/about" component={About} />,
  <Route exact key="contact" path="/contact" component={Contact} />,
];

const App = () => {
  return (
    <ThemeProvider>
      <Switch>{routes}</Switch>
    </ThemeProvider>
  );
};

export default App;
