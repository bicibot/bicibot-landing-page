import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/"


import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
// import Statistics from "./pages/Statistics";
import Implement from "./pages/Implement";

const Routes = () => (
  <BrowserRouter>
  <NavigationBar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sobre-nos" component={About} />
      {/* <Route path="/estatisticas" component={Statistics} /> */}
      <Route path="/implemente" component={Implement} />
      <Route path="*" component={() => <h1>Página não encontrada</h1>} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;