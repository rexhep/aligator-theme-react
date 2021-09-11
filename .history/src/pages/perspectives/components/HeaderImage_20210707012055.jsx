import React from "react";
import tw, { css } from "twin.macro";
import Layout from "../../../components/Layout.jsx";
import Grid from "../../../components/styles/Grid.jsx";
import * as A from "../../../components/styles/Animations.jsx";
import * as T from "../../../components/styles/Typography.jsx";

const HeaderImage = ({ backgroundImage }) => (
  <Layout
    styles={[
      css`
        background-image: url(${backgroundImage});
        position: relative;
        width: 100%;
        // height: 400px;
        overflow: hidden;

        :before {
          content: "";
          background-color: #00010c;
          position: absolute;
          z-index: 1;
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }
      `,
      tw`h-96 relative pt-0 md:pt-0`,
    ]}
  >
    <Grid node="header">
      <T.Body font="2" styles={[tw`md:mr-3`]}>
        Tags
      </T.Body>
    </Grid>
  </Layout>
);

export default HeaderImage;
