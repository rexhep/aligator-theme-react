/** @jsxImportSource @emotion/react */

import React from "react";
import tw, { css, theme } from "twin.macro";
import Grid from "../../../components/styles/Grid.jsx";
import * as T from "../../../components/styles/Typography.jsx";
import * as Icon from "../../../components/svg/Icons.jsx";

const ActiveMember = ({
  setActiveTeamMember,
  overlayStyles,
  activeTeamMember,
}) => (
  <Grid node="section">
    <div
      css={[
        css``,
        tw`col-span-12 md:col-span-8 md:col-start-3 relative mt-16 md:mt-48 md:mb-16`,
      ]}
    >
      <div
        css={[
          css``,
          tw`w-8 h-8 absolute top-0 right-0 -mt-10 md:-mt-8 -mr-2 md:-mr-8`,
        ]}
      >
        <button
          type="button"
          onClick={() => setActiveTeamMember(null)}
          css={[css``, tw`w-8 h-8 relative block`]}
        >
          <Icon.Cross
            color={overlayStyles.textColor}
            styles={[css``, tw`w-8 h-8`]}
          />
        </button>
      </div>
      {activeTeamMember?.image && (
        <div
          css={[
            css`
              padding-bottom: 70%;
            `,
            tw`w-full relative`,
          ]}
        >
          <figure tw="w-full h-full absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
            <img
              src={activeTeamMember.image}
              css={[css``, tw`w-full h-full relative block object-cover`]}
              alt={activeTeamMember.title}
            />
          </figure>
        </div>
      )}
    </div>

    <header css={[tw`col-span-12 md:col-span-12 md:col-start-3 mt-4 md:mt-0`]}>
      <T.Heading font="3" level="2">
        {activeTeamMember?.title || ``}
      </T.Heading>

      <T.Heading font="b1" styles={[tw`mt-2 mb-8 md:mb-0`]}>
        {activeTeamMember?.role || ``}
      </T.Heading>
    </header>

    <div
      css={[
        css`
          font-family: ${theme`fontFamily`};
          font-weight: 300;
        `,
        tw`col-span-12 md:col-span-8 mb-24 md:col-start-3 md:mb-64 text-base whitespace-pre-wrap`,
      ]}
      dangerouslySetInnerHTML={{
        __html: activeTeamMember?.description || ``,
      }}
    />
  </Grid>
);

export default ActiveMember;
