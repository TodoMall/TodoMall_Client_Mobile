import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, currentPage }) => {
  return (
    <Fragment>
      <Header title={currentPage} />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
