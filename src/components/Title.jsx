/** @jsxImportSource @emotion/react */

import React from "react";
import tw, { css } from "twin.macro";
import Grid from "./styles/Grid.jsx";
import * as A from "./styles/Animations.jsx";
import * as T from "./styles/Typography.jsx";

const TitleJSX = ({ teamDesc }) => (
  <Grid styles={[tw`h-full`]}>
    <div
      css={[
        css`
          ${A.Keyframes(
            `appearRight`,
            `0.75s ${A.EASING_CUBIC} forwards`,
            `0.8s`
          )}
        `,
        tw`col-span-12 md:col-span-6 h-full flex items-center`,
      ]}
    >
      <T.Heading
        font="3"
        level="2"
        styles={[tw`whitespace-pre-wrap text-gray-800`]}
      >
        {teamDesc}
      </T.Heading>
    </div>
  </Grid>
);

export default TitleJSX;
