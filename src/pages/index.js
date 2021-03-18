import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

import img_gatsby from "assets/images/kevin_bird.png";


const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Kevin | HCDE @ UW</title>
        <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/emojidex/112/man-tipping-hand_1f481-200d-2642-fe0f.png"/>

      </Helmet>
      <Container>
        <p className="cover">
          <img src={img_gatsby} alt="Image of a bird that shares the name of Kevin" />
        </p>
        <h1 className="heading">Hello, I'm Kevin! </h1>
        <p>[Add one of those cool fill-in-the-blank transition texts later]</p>
      </Container>
    </Layout>
  );
};

export default IndexPage;
