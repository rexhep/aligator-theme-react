/** @jsxImportSource @emotion/react */

import React from "react";
import tw, { css } from "twin.macro";
import Grid from "../../../components/styles/Grid.jsx";

const HeaderImage = ({ backgroundImage, title }) => (
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
    <Grid node="header">
      <div
        css={[
          css`
          padding-top: 200px;
          padding-bottom: 150px;vvvvvvvvv
        `,
          tw`col-span-10 md:col-span-7 md:col-start-4 relative flex pl-1 md:pl-0`,
        ]}
      >
        <span
          css={css`
            z-index: 99;
            background: #22d3ee;
            background: -webkit-linear-gradient(305deg, #22d3ee, #67e8f9);
            background: linear-gradient(145deg, #22d3ee, #67e8f9);
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
    </Grid>
  </div>
);

export default HeaderImage;
