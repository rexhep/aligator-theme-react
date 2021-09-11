/** @jsxImportSource @emotion/react */

import React from "react";
import tw, { css } from "twin.macro";
import * as A from "../../../components/styles/Animations.jsx";
import * as T from "../../../components/styles/Typography.jsx";

const HomePage = ({ isDesktop, rendered, state }) => (
  <>
    <div
      css={[
        css`
          ${A.Keyframes(`appearDown`, `1s ${A.EASING_CUBIC} forwards`, `0.75s`)}

          padding-left: ${isDesktop() ? `3vw` : `0.25rem`};
        `,
        tw`col-span-6 md:col-span-3 col-start-7 md:col-start-9 flex items-end text-gray-500`,
      ]}
    >
      <T.Body font="2">
        <span
          dangerouslySetInnerHTML={{
            __html: state && state.content.rendered,
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
              font-size: 18.5vw !important;
              line-height: 1 !important;
              color: rgb(23, 33, 56);
            `,
            tw`block`,
          ]}
        >
          Merus
        </span>
        <span
          css={[
            css`
              font-size: 18.5vw !important;
              font-weight: 200;
              line-height: 1 !important;
              color: rgb(23, 33, 56);
            `,
            tw`block `,
          ]}
        >
          Capital
        </span>
      </h1>
    </div>
  </>
);

export default HomePage;
