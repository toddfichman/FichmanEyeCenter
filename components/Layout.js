import { Component } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import {initGA, logPageView} from '../utils/analytics';

class Layout extends Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  
  render() {
    return (
      <div className="app">
        <Nav />
        <section>{this.props.children}</section>

        <Footer />
      </div>
    );
  }
}

export default Layout;
