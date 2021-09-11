/** @jsxImportSource @emotion/react */

import React from "react";
import tw, { css } from "twin.macro";
import Layout from "../../../components/Layout.jsx";
import Grid from "../../../components/styles/Grid.jsx";
import * as A from "../../../components/styles/Animations.jsx";
import * as T from "../../../components/styles/Typography.jsx";

const HeaderImage = ({ backgroundImage }) => (
  <div
    css={[
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
    <div
      css={[
        css`
          padding-top: 200px;
          padding-bottom: 150px;vvvvvvvvv
        `,
        tw`w-full sticky top-0 right-0 left-0 z-20 pt-16 md:pt-24 pb-2`,
      ]}
    >
      <span
        css={css`
          text-align: center;
          display: block;
          /* color: red; */
          z-index: 99;
          width: 100%;
          font-size: 60px;
          background: #f81f01;
          background: -webkit-linear-gradient(305deg, #f81f01, #ee076e);
          background: linear-gradient(145deg, #f81f01, #ee076e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 54px;
          font-weight: 700;
          line-height: 54px;
        `}
      >
        Services
      </span>
    </div>
  </div>
);

export default HeaderImage;
