/* eslint-disable react/prop-types */
/** @jsxImportSource @emotion/react */
import React from "react";
import TitleJSX from "../../../components/Title";
import tw, { css } from "twin.macro";
import Grid from "../../../components/styles/Grid.jsx";
import * as A from "../../../components/styles/Animations.jsx";
import * as T from "../../../components/styles/Typography.jsx";

const PortfolioContent = ({ description, portfolio }) => {
  return (
    <>
      <section css={[tw`pt-20 md:pt-32 pb-32 md:pb-48`]}>
        <TitleJSX teamDesc={description[0]?.title.rendered} />
      </section>
      {portfolio && (
        <Grid>
          <div
            css={[
              css`
                ${A.Keyframes(
                  `appearRight`,
                  `0.75s ${A.EASING_CUBIC} forwards`,
                  `1s`
                )}
              `,
              tw`col-span-12 md:col-span-5 md:col-start-7 mb-48 text-gray-500`,
            ]}
          >
            <T.Body font="2">
              <span
                dangerouslySetInnerHTML={{
                  __html: description[0]?.content.rendered,
                }}
              />
            </T.Body>
          </div>
        </Grid>
      )}
    </>
  );
};

export default PortfolioContent;
