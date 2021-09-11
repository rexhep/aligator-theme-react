/** @jsxImportSource @emotion/react */

import React from "react";
import tw, { css } from "twin.macro";
import Grid from "../../../components/styles/Grid.jsx";

const CategoriesLayout = ({ setDisplayMode, displayMode }) => {
  return (
    <Grid>
      <div css={[tw`col-span-12 relative flex items-end justify-end mb-12`]}>
        <button
          type="button"
          onClick={() =>
            setDisplayMode(displayMode === `list` ? `grid` : `list`)
          }
        >
          {(displayMode === `list` && (
            <div
              css={[
                tw`w-8 h-8 relative flex flex-wrap items-center justify-center`,
              ]}
            >
              {Array(4)
                .fill(null)
                .map((_, listIndex) => {
                  const key = `grid-icon-square-${listIndex}`;

                  return (
                    <div
                      key={key}
                      css={[
                        css`
                          width: 0.7rem;
                          height: 0.7rem;
                          margin: 2px;
                        `,
                        tw`relative block bg-black`,
                      ]}
                    />
                  );
                })}
            </div>
          )) || (
            <div css={[tw`w-8 h-8 relative flex flex-col justify-between p-1`]}>
              {Array(3)
                .fill(null)
                .map((_, listIndex) => {
                  const key = `list-icon-line-${listIndex}`;

                  return (
                    <div
                      key={key}
                      css={[tw`w-full h-1 relative block bg-black`]}
                    />
                  );
                })}
            </div>
          )}
        </button>
      </div>
    </Grid>
  );
};

export default CategoriesLayout;
