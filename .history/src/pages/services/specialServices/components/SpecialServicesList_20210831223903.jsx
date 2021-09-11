/** @jsxImportSource @emotion/react */

import React from "react";
import tw, { css, theme } from "twin.macro";
import * as A from "../../../../components/styles/Animations.jsx";
import * as T from "../../../../components/styles/Typography.jsx";
import Grid from "../../../../components/styles/Grid.jsx";
import Go from "../../../../components/Go.jsx";

const SpecialServicesList = ({
  specialServiceItems,
  expandedDeepDive,
  setExpandedDeepDive,
  isDesktop,
}) => {
  return (
    <ul css={[tw`relative`]}>
      {specialServiceItems[0].map((specialServ, specialServIndex) => {
        console.log("deepDive", specialServ);
        const { title, tagline } = specialServ;

        const key = `deep-dive-${specialServIndex}`;
        const active = expandedDeepDive === specialServIndex;
        console.log("deepDive title", title);
        console.log("specialServiceItems", specialServiceItems);

        return (
          <li
            key={key}
            css={[
              css`
                ${A.Keyframes(
                  `appearDown`,
                  `1s ${A.EASING_CUBIC} forwards`,
                  `${specialServIndex * 150}ms`
                )}

                color: ${active
                  ? theme`colors.white`
                  : theme`colors.purple.900`};

                @media not all and (pointer: coarse) {
                  &:hover {
                    color: ${theme`colors.white`};

                    .article-background {
                      opacity: 1;
                    }
                  }
                }
              `,
              tw`relative`,
            ]}
          >
            <Grid>
              <div
                className="article-background"
                css={[
                  css`
                    transition: opacity 0.15s ${A.EASING_CUBIC};

                    opacity: ${active ? `1` : `0`};

                    width: calc(100% - 1rem);
                    top: 50%;
                    left: 50%;
                    transform: translate3d(-50%, -50%, 0);

                    @media screen and (min-width: 1024px) {
                      width: calc(100% - 5rem);
                    }
                  `,
                  tw`h-full absolute bg-purple-900`,
                ]}
              />
              <div
                css={[
                  css`
                    height: 2px;
                  `,
                  tw`col-span-12 bg-blue-900`,
                ]}
              />
              <article
                css={[
                  tw`col-span-10 md:col-span-8 md:col-start-4 relative pr-3 md:pr-0 pl-3 md:pl-0`,
                ]}
              >
                <button
                  type="button"
                  onClick={() =>
                    setExpandedDeepDive(active ? null : specialServIndex)
                  }
                  css={[tw`relative block pt-10 md:pr-12 pb-10 text-left`]}
                >
                  <header>
                    <T.Heading font="3">{title}</T.Heading>
                  </header>
                </button>
                {active && (
                  <ul css={[tw`w-full relative mt-8 md:mt-20`]}>
                    {specialServiceItems[0].map((article, articleIndex) => (
                      <li
                        css={[
                          css`
                            ${A.Keyframes(
                              `appearDown`,
                              `0.5s ${A.EASING_CUBIC} forwards`,
                              `${articleIndex * 100}ms`
                            )}
                          `,
                          tw`w-full relative block mb-6 md:mb-8`,
                        ]}
                      >
                        <Go to={`/services/${article.slug}`}>
                          <T.Body font="2" styles={[tw`flex`]}>
                            <span css={[tw`w-6 block`]}>
                              {articleIndex + 1}.
                            </span>

                            <span css={[tw`block underline`]}>
                              {article.custom_title}
                            </span>
                          </T.Body>
                        </Go>
                      </li>
                    ))}
                  </ul>
                )}
              </article>

              <button
                type="button"
                css={[
                  tw`col-span-2 md:col-span-1 h-full relative flex items-center justify-start overflow-hidden`,
                ]}
                onClick={() =>
                  setExpandedDeepDive(active ? null : specialServIndex)
                }
              >
                <div
                  css={[
                    css`
                      transition: 0.3s transform ${A.EASING_CUBIC};

                      transform: rotate(${active ? -135 : 0}deg);
                    `,
                    tw`w-10 h-10 relative flex items-center justify-center`,
                  ]}
                >
                  {(isDesktop() && <T.Body font="1">+</T.Body>) || (
                    <T.Heading font="2" level="6">
                      +
                    </T.Heading>
                  )}
                </div>
              </button>
            </Grid>
          </li>
        );
      })}
    </ul>
  );
};

export default SpecialServicesList;
