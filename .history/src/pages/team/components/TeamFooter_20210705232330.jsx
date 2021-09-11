/** @jsxImportSource @emotion/react */

import React from "react";
import tw, { css } from "twin.macro";
import Grid from "../../../components/styles/Grid.jsx";
import * as T from "../../../components/styles/Typography.jsx";
import imageUrl from "./images/pattern-1.png";

const TeamFooter = ({ isDesktop }) => (
  <Grid>
    <div
      css={[
        css`
          background: -webkit-linear-gradient(305deg, #f81f01, #ee076e);
          background: linear-gradient(145deg, #f81f01, #ee076e);
          position: relative;
          padding: 120px 50px;

          ::before {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background-image: url(${imageUrl});
            content: "";
            z-index: 1;
            opacity: 0.5;
            border-top-right-radius: 6px;
          }
        `,
        tw`col-span-6 md:col-span-4 lg:col-span-3 h-full relative flex items-center`,
      ]}
    >
      <div class="inner">
        <T.Body font="1">Peter Hsing</T.Body>
        <h2>
          Let's get <br /> to work
        </h2>
        <a class="rn-button-style--2" href="/contact">
          <span>Contact Us</span>
        </a>
      </div>
    </div>

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
