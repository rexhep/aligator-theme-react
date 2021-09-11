/** @jsxImportSource @emotion/react */

import React from "react";
import tw, { css, theme } from "twin.macro";
import Grid from "../../../components/styles/Grid.jsx";
import * as A from "../../../components/styles/Animations.jsx";
import * as T from "../../../components/styles/Typography.jsx";
import * as Icon from "../../../components/svg/Icons.jsx";

const PortfolioList = ({ portfolioSections, expanded, setExpanded }) => {
  return (
    <section css={[tw`pb-64`]}>
      {Object.keys(portfolioSections).map((portfolioSectionKey) => {
        const portfolioSectionItems = portfolioSections[portfolioSectionKey];

        return (
          <div tw="mb-32">
            <Grid>
              <T.Heading
                font="1"
                level="2"
                styles={[tw`col-span-12 mb-24 text-black`]}
              >
                {portfolioSectionKey}
              </T.Heading>
            </Grid>
            <ul>
              {portfolioSectionItems.map(
                (portfolioSectionItem, portfolioSectionItemIndex) => {
                  const isExpanded =
                    expanded && expanded.includes(portfolioSectionItem.title);

                  return (
                    <li
                      key={portfolioSectionItem.title}
                      css={[
                        css`
                          transition: all 0.5s ${A.EASING_CUBIC};

                          height: ${isExpanded ? `auto` : `8rem`};
                        `,
                      ]}
                    >
                      <button
                        className={`portfolio-item ${
                          isExpanded ? `active` : ``
                        }`}
                        onClick={() => {
                          setExpanded(
                            isExpanded ? null : [portfolioSectionItem.title]
                          );
                        }}
                        css={[
                          css`
                            color: ${theme`colors.black`};

                            &:focus {
                              outline: none;
                            }

                            //
                            // transitions

                            .portfolio-item__background {
                              transition: 0.3s ${A.EASING_CUBIC} opacity;

                              opacity: 0;
                            }

                            .portfolio-item__cross {
                              transition: 0.3s ${A.EASING_CUBIC} opacity,
                                0.3s ${A.EASING_CUBIC} transform;
                            }

                            //
                            // hovers

                            &.active,
                            &:hover {
                              & > div {
                                color: ${theme`colors.white`};
                              }

                              .portfolio-item__background {
                                opacity: 1;
                                transform: translate3d(-50%, -50%, 0) scaleY(1);
                              }
                            }

                            &:hover {
                              .portfolio-item__cross {
                                transform: rotate(180deg);
                              }
                            }

                            &.active {
                              .portfolio-item__cross {
                                transform: rotate(45deg);
                              }
                            }
                          `,
                          tw`w-full h-32 relative block text-left`,
                        ]}
                        type="button"
                      >
                        <Grid styles={[tw`h-32 items-center`]}>
                          <div
                            className="portfolio-item__background"
                            css={[
                              css`
                                width: calc(100% - 5rem);
                                height: 100%;
                                top: 50%;
                                left: 50%;
                                transform: translate3d(-50%, -50%, 0);
                              `,
                              tw`h-full absolute pointer-events-none bg-red-500`,
                            ]}
                          />

                          <div
                            css={[
                              css`
                                width: calc(100% - 5rem);
                                height: ${portfolioSectionItemIndex === 0
                                  ? `2`
                                  : `1`}px;
                                left: 50%;
                                transform: translate3d(-50%, 0, 0);
                              `,
                              tw`absolute top-0 z-10 pointer-events-none bg-black`,
                            ]}
                          />

                          <T.Heading
                            font="b1"
                            level="3"
                            styles={[tw`col-span-3 relative z-10 pl-4`]}
                          >
                            {portfolioSectionItem.title}
                          </T.Heading>

                          <T.Heading
                            font="b1"
                            level="3"
                            styles={[
                              tw`col-span-7 relative z-10 whitespace-pre-wrap`,
                            ]}
                          >
                            {portfolioSectionItem.status}
                          </T.Heading>

                          <div css={[tw`col-span-2 relative z-10`]}>
                            <div
                              className="portfolio-item__cross"
                              css={[
                                tw`w-12 h-12 flex items-center justify-center`,
                              ]}
                            >
                              <T.Heading font="3" level="6">
                                +
                              </T.Heading>
                            </div>
                          </div>

                          <div
                            css={[
                              css`
                                width: calc(100% - 5rem);
                                height: ${portfolioSectionItemIndex ===
                                portfolioSectionItems.length - 1
                                  ? `2`
                                  : `1`}px;
                                left: 50%;
                                transform: translate3d(-50%, 0, 0);
                                opacity: ${isExpanded ? 0 : 1};
                              `,
                              tw`absolute bottom-0 z-10 pointer-events-none bg-black`,
                            ]}
                          />
                        </Grid>
                      </button>

                      {(isExpanded && (
                        <Grid>
                          <div
                            css={[
                              tw`col-span-12 pt-2 px-4 pb-10 bg-red-500 text-white`,
                            ]}
                          >
                            <article
                              css={[
                                css`
                                  ${A.Keyframes(
                                    `appearDown`,
                                    `0.5s ${A.EASING_CUBIC} forwards`
                                  )}
                                `,
                              ]}
                            >
                              <T.Body font="1">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: portfolioSectionItem.desc,
                                  }}
                                />
                              </T.Body>

                              {portfolioSectionItem?.acf.url && (
                                <a
                                  href={portfolioSectionItem.url}
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  tw="relative z-20 flex mt-12"
                                >
                                  <T.Body font="2">Visit</T.Body>

                                  <Icon.ArrowUp
                                    styles={[tw`w-4 relative block ml-2`]}
                                    color={theme`colors.white`}
                                  />
                                </a>
                              )}
                            </article>
                          </div>
                        </Grid>
                      )) || <></>}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default PortfolioList;
