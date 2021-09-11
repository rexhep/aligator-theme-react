/** @jsxImportSource @emotion/react */

import React from "react";
import tw, { css, theme } from "twin.macro";
import * as A from "../../../components/styles/Animations.jsx";
import * as T from "../../../components/styles/Typography.jsx";
import * as Icon from "../../../components/svg/Icons.jsx";

const PortfolioGridList = ({
  portfolioSectionItem,
  portfolioSectionItemIndex,
  isExpanded,
  logoJSX,
  isDesktop,
  toggleExpandedItem,
  innerJSX,
}) => {
  return (
    <li
      key={portfolioSectionItem.title}
      css={[
        css`
          ${A.Keyframes(
            `appearRight`,
            `0.5s ${A.EASING_CUBIC} forwards`,
            `${portfolioSectionItemIndex * 75}ms`
          )}

          width: 100%;
          height: 80vw;
          background: ${portfolioSectionItem.color};
          color: ${portfolioSectionItem.font_color};

          @media screen and (min-width: 1024px) {
            width: calc(33.333% - 0.5rem);
            height: 18vw;
          }
        `,
        tw`relative mb-3`,
      ]}
    >
      <div
        css={[
          css`
            .portfolio__item__logo {
              transition: 0.66s ${A.EASING_CUBIC} opacity,
                0.66s ${A.EASING_CUBIC} transform;
              transition-delay: 0.075s;
              opacity: ${isExpanded ? 1 : 0};

              @media screen and (max-width: 1024px) {
                transform: translate3d(0, ${isExpanded ? `-2.5rem` : `0`}, 0);
              }

              @media screen and (min-width: 1025px) {
                transform: translate3d(0, ${isExpanded ? `-3.5vw` : `0`}, 0);
              }
            }

            .portfolio__item__tagline {
              transition: 0.66s ${A.EASING_CUBIC} opacity,
                0.66s ${A.EASING_CUBIC} transform;
              opacity: ${isExpanded ? 1 : 0};
              transform: scale(${isExpanded ? 1 : 0.95});
            }

            .portfolio__item__title {
              transition: 0.66s ${A.EASING_CUBIC} opacity,
                0.66s ${A.EASING_CUBIC} transform;
              opacity: ${!isExpanded || (isExpanded && !logoJSX) ? 1 : 0};
              transform: translate3d(0, ${isExpanded ? `-2vw` : `0`}, 0);
            }

            ${isDesktop() &&
            `
            @media not all and (pointer: coarse) {
                &:hover {
                .portfolio__item__logo {
                    opacity: 1;
                    transform: translate3d(
                    0,
                    -2.5vw,
                    0
                    );
                }

                .portfolio__item__tagline {
                    opacity: 1;
                    transform: scale(1);
                }

                .portfolio__item__title {
                    opacity: ${!logoJSX ? 1 : 0};
                    transform: translate3d(
                    0,
                    -2vw,
                    0
                    );
                }
                }
            }
            `}
          `,
          tw`w-full h-full relative block`,
        ]}
      >
        <div
          className="portfolio__item__tagline"
          css={[
            css`
              ${!isDesktop() &&
              `pointer-events: ${isExpanded ? `auto` : `none`};
                                      `}
            `,
            tw`w-full h-full absolute top-0 right-0 bottom-0 left-0 z-40 flex flex-col items-center justify-center pt-24 px-8 text-center`,
          ]}
        >
          {!isDesktop() && (
            <button
              type="button"
              onClick={() => toggleExpandedItem(portfolioSectionItem.title)}
              css={[css``, tw`w-8 h-8 absolute top-0 right-0 block mt-2 mr-2`]}
            >
              <Icon.Cross
                color={theme`colors`[portfolioSectionItem.fontColor]}
                styles={[css``, tw`w-8 h-8`]}
              />
            </button>
          )}
          <div css={[tw`relative z-20`]}>
            <T.Heading font="b2" level="4">
              <span
                dangerouslySetInnerHTML={{
                  __html: portfolioSectionItem.content.rendered,
                }}
              />
            </T.Heading>
            {portfolioSectionItem?.acf.url && (
              <a
                href={portfolioSectionItem.acf.url}
                rel="noopener noreferrer"
                target="_blank"
                css={[
                  css`
                    &:hover {
                      text-decoration: underline;
                    }
                  `,
                  tw`flex items-center justify-center mt-1`,
                ]}
              >
                <T.Body font="3">Visit</T.Body>

                <Icon.ArrowUp
                  styles={[tw`w-3 relative block ml-2`]}
                  color={theme`colors`[portfolioSectionItem.fontColor]}
                />
              </a>
            )}
          </div>
        </div>
        {(isDesktop() && (
          <div
            css={[
              tw`w-full h-full relative flex flex-col items-center justify-center mb-4 px-3 text-center`,
            ]}
          >
            {innerJSX}
          </div>
        )) || (
          <button
            type="button"
            onClick={() =>
              toggleExpandedItem(portfolioSectionItem.title.rendered)
            }
            css={[
              tw`w-full h-full relative flex flex-col items-center justify-center mb-4 px-3 text-center`,
            ]}
          >
            {innerJSX}
          </button>
        )}
      </div>
    </li>
  );
};

export default PortfolioGridList;
