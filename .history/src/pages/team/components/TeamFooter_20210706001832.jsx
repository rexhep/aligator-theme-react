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
          padding: 120px 120px;

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
            border-radius: 20px;
          }
        `,
        tw`col-span-12 md:col-span-12 lg:col-span-6 h-full relative flex items-center`,
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
              line-height: 75px;
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
              margin-top: 10px;
              display: block;
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
        tw`col-span-12 md:col-span-12 lg:col-span-6 relative pl-3 md:pl-12 flex flex-col justify-center`,
      ]}
    >
      {(isDesktop() && (
        <T.Heading font="3">Lorem Ipsum has been the industry's</T.Heading>
      )) || <T.Body font="1">Lorem Ipsum has been the industry's g</T.Body>}

      {(isDesktop() && (
        <T.Body
          font="2"
          styles={[
            css`
              color: #fff;
              padding-top: 20px;
            `,
          ]}
        >
          Contrary to popular belief, Lorem Ipsum is not simply random text.
          <br />
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old.
        </T.Body>
      )) || (
        <T.Caption>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </T.Caption>
      )}
    </div>
  </Grid>
);

export default TeamFooter;
