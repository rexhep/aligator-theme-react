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
          ${A.Keyframes(`appearDown`, `1s ${A.EASING_CUBIC} forwards`, `0.75s`)}

          p {
            color: #000;
          }
        `,
        tw`col-span-6 md:col-span-6 col-start-7 md:col-start-1 flex items-end text-gray-500`,
      ]}
    >
      <T.Body font="2">
        <span>dsfsdfdsf</span>
      </T.Body>
    </div>
  </div>
);

export default HeaderImage;
