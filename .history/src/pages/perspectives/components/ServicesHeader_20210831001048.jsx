/** @jsxImportSource @emotion/react */

import React from "react";
import tw, { css, theme } from "twin.macro";
import Grid from "../../../components/styles/Grid.jsx";
import * as A from "../../../components/styles/Animations.jsx";
import * as T from "../../../components/styles/Typography.jsx";
import Go from "../../../components/Go.jsx";

const ServicesHeader = ({
  setTagsActive,
  tagsActive,
  setRendering,
  setFilters,
  tags,
  filters,
  toggleFilter,
}) => {
  let categ = [];

  categ.push(tags.sort());
  const sortCat = tags.sort();
  const arraySorted = [...new Set(sortCat)];

  return (
    <div
      css={[
        css`
          background: #f0f9ff;
        `,
        tw`w-full sticky top-0 right-0 left-0 z-20 pt-16 md:pt-32 pb-2`,
      ]}
    >
      <Grid node="header">
        <div
          css={[
            tw`col-span-10 md:col-span-7 md:col-start-4 relative flex pl-1 md:pl-0`,
          ]}
        >
          <div css={[tw`h-full flex items-center mr-8 text-yellow-600`]}>
            <T.Body font="2">All Services</T.Body>
          </div>

          <Go
            to="/perspectives/deepdives"
            inject={{
              tw: tw`h-full flex items-center text-gray-500`,
            }}
          >
            <T.Body font="2">Special Services</T.Body>
          </Go>
        </div>

        <div css={[tw`col-span-2 relative z-10 flex items-center justify-end`]}>
          <button
            type="button"
            css={[tw`h-12`]}
            onClick={() => setTagsActive(!tagsActive)}
          >
            <div
              css={[
                css`
                  color: ${tagsActive
                    ? theme`colors.yellow.900`
                    : theme`colors.gray.500`};
                `,
                tw`h-12 relative flex items-center overflow-hidden`,
              ]}
            >
              <T.Body font="2" styles={[tw`md:mr-3`]}>
                Tags
              </T.Body>

              <div
                css={[
                  css`
                    transition: 0.3s transform ${A.EASING_CUBIC};

                    transform: rotate(${tagsActive ? -135 : 0}deg);
                  `,
                  tw`w-10 h-10 relative flex items-center justify-center`,
                ]}
              >
                <T.Body font="1" level="6">
                  +
                </T.Body>
              </div>
            </div>
          </button>

          <div
            css={[
              css`
                transition: 0.3s opacity ${A.EASING_CUBIC},
                  0.3s transform ${A.EASING_CUBIC};

                opacity: ${tagsActive ? `1` : `0`};
                pointer-events: ${tagsActive ? `auto` : `none`};
                transform: translate3d(0, ${tagsActive ? `0` : `-0.5rem`}, 0);

                min-width: 140px;
                right: 0;

                @media screen and (min-width: 1024px) {
                  width: 100%;
                  right: -0.5rem;
                }
              `,
              tw`absolute top-12 text-right bg-white`,
            ]}
          >
            <ul>
              <li
                css={[
                  css`
                    color: ${theme`colors.gray.500`};
                  `,
                  tw`w-full h-12 relative flex items-center justify-end pr-4 pl-4`,
                ]}
              >
                <button
                  type="button"
                  onClick={() => {
                    setTagsActive(false);
                    setRendering(true);
                    setFilters([]);
                  }}
                >
                  <T.Body font="2">[Clear]</T.Body>
                </button>
              </li>

              {arraySorted.map((tag) => {
                return (
                  <li
                    key={tag}
                    css={[
                      css`
                        color: ${filters?.includes(tag)
                          ? theme`colors.yellow.900`
                          : theme`colors.gray.500`};
                      `,
                      tw`w-full h-12 relative flex items-center justify-end pr-4 pl-4`,
                    ]}
                  >
                    <button
                      type="button"
                      css={[tw`w-full h-12 relative block text-right`]}
                      onClick={() => toggleFilter(tag)}
                    >
                      <T.Body font="2">{tag}</T.Body>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default ServicesHeader;
