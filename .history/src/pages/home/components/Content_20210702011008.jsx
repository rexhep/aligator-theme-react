/** @jsxImportSource @emotion/react */

import React from "react";
import tw, { css } from "twin.macro";
import * as A from "../../../components/styles/Animations.jsx";
import * as T from "../../../components/styles/Typography.jsx";

const backgroundText = [{
  background: #f81f01;
              background: -webkit-linear-gradient(145deg, #f81f01, #ee076e);
              background: -webkit-linear-gradient(305deg, #f81f01, #ee076e);
              background: linear-gradient(145deg, #f81f01, #ee076e);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              display: inline-block;
}]

const HomePage = ({ isDesktop, rendered, state }) => (
  <>
    <div
      css={[
        css`
          ${A.Keyframes(`appearDown`, `1s ${A.EASING_CUBIC} forwards`, `0.75s`)}

          padding-left: ${isDesktop() ? `3vw` : `0.25rem`};
          p {
            color: #fff;
          }
        `,
        tw`col-span-6 md:col-span-6 col-start-7 md:col-start-1 flex items-end text-gray-500`,
      ]}
    >
      <T.Body font="2">
        <span
          dangerouslySetInnerHTML={{
            __html: state,
          }}
        />
      </T.Body>
    </div>

    <div
      css={[
        css`
          transition: opacity 1s ${A.EASING_CUBIC},
            transform 1s ${A.EASING_CUBIC};

          opacity: ${rendered ? `1` : `0`};
          transform: translate3d(0, ${rendered ? `0` : `2vw`}, 0);
        `,
        tw`col-span-12 h-full flex items-end pb-6 md:pb-12`,
      ]}
    >
      <h1
        css={[
          tw`w-full relative block flex items-center justify-center text-center`,
        ]}
      >
        <span
          css={[
            css`
              font-size: 16vw !important;
              color: #fff;
              background: #f81f01;
              background: -webkit-linear-gradient(145deg, #f81f01, #ee076e);
              background: -webkit-linear-gradient(305deg, #f81f01, #ee076e);
              background: linear-gradient(145deg, #f81f01, #ee076e);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              display: inline-block;
            `,
            tw`block`,
          ]}
        >
          Aligator
        </span>
        <span
          css={[
            css`
              font-size: 15vw !important;
              font-weight: 200;
              color: $fff;
              background: #f81f01;
              background: -webkit-linear-gradient(145deg, #f81f01, #ee076e);
              background: -webkit-linear-gradient(305deg, #f81f01, #ee076e);
              background: linear-gradient(145deg, #f81f01, #ee076e);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              display: inline-block;
            `,
            tw`block `,
          ]}
        >
          Theme
        </span>
      </h1>
    </div>
  </>
);

export default HomePage;
