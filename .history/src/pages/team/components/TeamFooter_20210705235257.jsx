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
        tw`col-span-6 md:col-span-4 lg:col-span-6 h-full relative flex items-center`,
      ]}
    >
      <div
        class="inner"
        css={[
          css`
            z-index: 9;
          `,
        ]}
      >
        <span
          css={[
            css`
              color: #fff;
              font-size: 15px;
              text-transform: uppercase;
              letter-spacing: 4px;
            `,
          ]}
        >
          Ready To Do This
        </span>
        <h2
          css={[
            css`
              color: #fff;
              font-size: 75px;
              font-weight: 900;
            `,
          ]}
        >
          Let's work
        </h2>
        <a
          class="rn-button-style--2"
          href="/contact"
          css={[
            css`
              margin-top: 30px;
            `,
          ]}
        >
          <span
            css={[
              css`
                font-size: 16px;
                text-transform: uppercase;
                letter-spacing: 2px;
                border: 2px solid #fff;
                padding: 15px 40px;
                border-radius: 6px;
                display: inline-block;
                font-weight: 500;
                -webkit-transition: 0.3s;
                transition: 0.3s;
                color: #fff;

                :hover {
                  background: #fff;
                  border-color: #fff;
                  color: #f9004d;
                }
              `,
            ]}
          >
            Contact Us
          </span>
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
        tw`col-span-6 md:col-span-8 lg:col-span-6 relative pl-3 md:pl-12 flex flex-col justify-center`,
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
