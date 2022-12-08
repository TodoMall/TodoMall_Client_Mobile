import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, breadCrumbs }) => {
  return (
    <Fragment>
      <Header title={breadCrumbs} />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
