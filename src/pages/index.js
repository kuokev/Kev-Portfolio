import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

import img_gatsby from "assets/images/cover.png";

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Kevin | HCDE @ UW</title>
      </Helmet>
      <Container>
        {/* <p className="cover">
          <img src={img_gatsby} alt="Profile Picture would be here" />
        </p> */}
        <h1 className="heading">Hello! I'm Kevin</h1>
        <p>Welcome to your new site.</p>
      </Container>
    </Layout>
  );
};

export default IndexPage;
