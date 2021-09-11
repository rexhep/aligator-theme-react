/** @jsxImportSource @emotion/react */

import React from "react";
import tw, { css } from "twin.macro";
import Grid from "../../../../components/styles/Grid.jsx";
import Go from "../../../../components/Go.jsx";
import * as T from "../../../../components/styles/Typography.jsx";

const DeepDivesHeader = () => {
  return (
    <div
      css={[
        css`
          background: #f2f5f2;
        `,
        tw`w-full sticky top-0 right-0 left-0 z-20 pt-16 md:pt-24 pb-2`,
      ]}
    >
      <Grid node="header">
        <div
          css={[
            tw`col-span-10 md:col-span-7 md:col-start-4 relative flex pl-1 md:pl-0`,
          ]}
        >
          <Go
            to="/perspectives"
            type="button"
            inject={{
              tw: tw`h-12 flex items-center mr-8 text-gray-500`,
            }}
          >
            <T.Body font="2">All Services</T.Body>
          </Go>
          <div css={[tw`h-12 flex items-center text-yellow-500`]}>
            <T.Body font="2">Special Service</T.Body>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default DeepDivesHeader;
