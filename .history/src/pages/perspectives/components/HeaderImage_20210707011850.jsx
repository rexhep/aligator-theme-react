import React from "react";
import tw, { css } from "twin.macro";
import Layout from "../../../components/Layout.jsx";

const HeaderImage = ({ backgroundImage }) => {
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
    <h2>sfsdfsdf</h2>
  </Layout>;
};

export default HeaderImage;
