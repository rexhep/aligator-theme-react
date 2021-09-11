/** @jsxImportSource @emotion/react */

import React from "react";
import tw, { css, theme } from "twin.macro";
import * as A from "../../../components/styles/Animations.jsx";
import * as T from "../../../components/styles/Typography.jsx";
import Go from "../../../components/Go.jsx";
import { DATE_OPTIONS } from "../../utils";
import Grid from "../../../components/styles/Grid.jsx";

const ServicesItemList = ({
  key,
  visibleArticleCount,
  visible,
  article,
  articleTags,
  isDesktop,
  isSpecialCategory,
}) => {
  return (
    <li
      key={key}
      css={[
        css`
          ${A.Keyframes(
            `appearDown`,
            `1s ${A.EASING_CUBIC} forwards`,
            `${visibleArticleCount * 150}ms`
          )}

          display: ${visible ? `block` : `none`};
        `,
        tw`relative`,
      ]}
    >
      <Go
        to={`/perspectives/${article.slug}`}
        inject={{
          css: `
            color: ${theme`colors.blue.600`};

            article {
            width: 100%;
            }
            

            @media not all and (pointer: coarse) {
            &:hover {
                color: ${theme`colors.white`};

                .article-background {
                opacity: 1;
                }

                .article-type {
                color: ${theme`colors.white`};
                }
            }
            }
        `,
          tw: tw`block`,
        }}
      >
        <Grid node="article" styles={[tw`relative items-center pb-8`]}>
          <div
            className="article-background"
            css={[
              css`
                transition: opacity 0.15s ${A.EASING_CUBIC};

                opacity: 0;

                width: calc(100% - 5rem);
                top: 50%;
                left: 50%;
                transform: translate3d(-50%, -50%, 0);
              `,
              tw`h-full absolute bg-blue-900`,
            ]}
          />
          <div
            css={[
              css`
                height: 2px;
              `,
              tw`col-span-12 mb-4 md:mb-8 bg-blue-900`,
            ]}
          />
          <header
            css={[
              css``,
              tw`col-span-12 md:col-span-3 h-full relative order-2 md:order-1 z-10 pt-4 md:pt-2 pr-3 md:pr-0 pb-4 md:pb-2 pl-3 md:pl-4`,
            ]}
          >
            <div css={[tw`mb-2 md:mb-0`]}>
              <T.Heading font="b2" level="4">
                {new Date(article.date).toLocaleDateString(
                  "en-US",
                  DATE_OPTIONS
                )}
              </T.Heading>
              {articleTags?.[0] && (
                <div
                  css={[
                    css`
                      color: ${theme`colors.gray.500`};
                    `,
                  ]}
                >
                  <T.Heading color="light-grey" font="b2" level="4">
                    {articleTags.map((tag, tagIndex) => {
                      return (
                        <span key={tag}>
                          {tag}
                          {tagIndex <= article.tags.length - 2 ? `  ` : ``}
                        </span>
                      );
                    })}
                  </T.Heading>
                </div>
              )}
            </div>
            {article?.author_name && (
              <div
                css={[
                  css`
                    span {
                      font-weight: 300;
                    }
                  `,
                  tw`mt-2 text-yellow-600`,
                ]}
              >
                {(isDesktop() && (
                  <T.Caption>{article.author_name}</T.Caption>
                )) || <T.Body font="3">{article.author_name}</T.Body>}
              </div>
            )}
            {isSpecialCategory && (
              <div
                className="article-type"
                css={[
                  css`
                    transition: color 0.15s ${A.EASING_CUBIC};

                    span {
                      font-weight: 300;
                    }
                  `,
                  tw`mt-1 text-blue-900`,
                ]}
              >
                {(isDesktop() && <T.Caption>Special Category</T.Caption>) || (
                  <T.Body font="3">Special Category</T.Body>
                )}
              </div>
            )}
          </header>
          <div
            css={[
              tw`col-span-12 md:col-span-8 md:h-32 relative z-10 order-1 md:order-2 flex items-center mt-4 md:mt-0 pr-3 md:pr-4 pl-3 md:pl-0`,
            ]}
          >
            <T.Heading font="3" level="2">
              {article.title}
            </T.Heading>
          </div>
        </Grid>
      </Go>
    </li>
  );
};

export default ServicesItemList;
