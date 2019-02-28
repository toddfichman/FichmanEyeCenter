import { Component } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

class Layout extends Component {
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
