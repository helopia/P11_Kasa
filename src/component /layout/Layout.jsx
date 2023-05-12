import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
// class layout extends Component {
//     render(){
//         return (
//             <>
//                 <header />
//                 <main>{this.props.children}</main>
//                 <footer />
//             </>
//         )
//     }
// }
export default Layout;
