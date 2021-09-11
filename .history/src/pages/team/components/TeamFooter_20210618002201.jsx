/** @jsxImportSource @emotion/react */

import React from "react";
import tw, { css } from "twin.macro";
import Grid from "../../../components/styles/Grid.jsx";
import * as T from "../../../components/styles/Typography.jsx";
import imageUrl from "./images/peter-hsing.jpg";

const TeamFooter = ({ isDesktop }) => (
  <Grid>
    <figure
      css={[
        tw`col-span-6 md:col-span-4 lg:col-span-3 h-full relative flex items-center`,
      ]}
    >
      <img css={[tw`w-full relative block`]} src={imageUrl} alt="Peter Hsing" />
    </figure>

    <div
      css={[
        css`
          h2 {
            color: #fff;
          }
        `,
        tw`col-span-6 md:col-span-8 lg:col-span-9 relative pl-3 md:pl-12 flex flex-col justify-center`,
      ]}
    >
      {(isDesktop() && <T.Heading font="3">Peter Hsing</T.Heading>) || (
        <T.Body font="1">Peter Hsing</T.Body>
      )}

      {(isDesktop() && (
        <T.Body
          font="2"
          styles={[
            css`
              color: #fff;
            `,
            tw`mt-3 md:mt-6 mb-3 md:mb-8`,
          ]}
        >
          1968-2020
        </T.Body>
      )) || (
        <T.Caption
          styles={[
            css`
              color: #fff;
            `,
            tw`mt-3 md:mt-6 mb-3 md:mb-8`,
          ]}
        >
          1968-2020
        </T.Caption>
      )}

      {(isDesktop() && (
        <T.Body
          font="2"
          styles={[
            css`
              color: #fff;
            `,
          ]}
        >
          Friend, colleague, and fierce
          <br />
          advocate for founders
        </T.Body>
      )) || (
        <T.Caption>
          Friend, colleague, and fierce advocate for founders
        </T.Caption>
      )}
    </div>
  </Grid>
);

export default TeamFooter;
