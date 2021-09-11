/** @jsxImportSource @emotion/react */

import React from "react";
import tw, { css } from "twin.macro";
import Grid from "../../../components/styles/Grid.jsx";
import * as T from "../../../components/styles/Typography.jsx";
import PortfolioGridList from "./PortfolioGridList.jsx";

const PortfolioGrid = ({
  portfolioSections,
  expanded,
  isDesktop,
  toggleExpandedItem,
}) => {
  return (
    <section css={[tw`pb-32 md:pb-64`]}>
      {Object.keys(portfolioSections).map((portfolioSectionKey) => {
        const portfolioSectionItems = portfolioSections[portfolioSectionKey];

        return (
          <div
            key={portfolioSectionKey}
            css={[
              css`
                //
              `,
              tw`mb-6 md:mb-8`,
            ]}
          >
            <Grid>
              <div css={[tw`col-span-12 md:col-span-3 h-full mb-6 md:mb-20`]}>
                <T.Heading
                  font="1"
                  level="2"
                  css={[
                    css`
                      top: 5rem;
                    `,
                    tw`sticky left-0 text-black`,
                  ]}
                >
                  {portfolioSectionKey}
                </T.Heading>
              </div>

              <ul
                css={[
                  css`
                    //
                  `,
                  tw`col-span-12 md:col-span-9 relative flex flex-wrap md:justify-between`,
                ]}
              >
                {portfolioSectionItems.map(
                  (portfolioSectionItem, portfolioSectionItemIndex) => {
                    const isExpanded =
                      expanded?.[0] &&
                      expanded.includes(portfolioSectionItem.title);

                    let logoJSX;
                    let logoImageJSX;

                    if (portfolioSectionItem?.logo) {
                      logoImageJSX = (
                        <img
                          tw="w-full"
                          src={portfolioSectionItem.logo}
                          alt={portfolioSectionItem.title}
                        />
                      );
                    }

                    if (logoImageJSX) {
                      logoJSX = (
                        <figure
                          className="portfolio__item__logo"
                          tw="w-full absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center pointer-events-none"
                        >
                          {logoImageJSX}
                        </figure>
                      );
                    }

                    //

                    const innerJSX = (
                      <>
                        {logoJSX || <></>}

                        <T.Heading
                          className="portfolio__item__title"
                          font="b1"
                          level="4"
                        >
                          {portfolioSectionItem.title}
                        </T.Heading>

                        <div>
                          {portfolioSectionItem?.content && (
                            <T.Body
                              font="3"
                              styles={[
                                tw`w-full absolute bottom-0 right-0 left-0 z-10 mb-3 text-center`,
                              ]}
                            >
                              {portfolioSectionItem.title}
                            </T.Body>
                          )}
                        </div>
                      </>
                    );

                    return (
                      <PortfolioGridList
                        portfolioSectionItem={portfolioSectionItem}
                        portfolioSectionItemIndex={portfolioSectionItemIndex}
                        isExpanded={isExpanded}
                        logoJSX={logoJSX}
                        isDesktop={isDesktop}
                        toggleExpandedItem={toggleExpandedItem}
                        innerJSX={innerJSX}
                      />
                    );
                  }
                )}

                {portfolioSectionItems.length % 3 !== 0 &&
                  Array((portfolioSectionItems.length - 1) % 3)
                    .fill(null)
                    .map((_, fillerIndex) => {
                      const key = `grid-filler-${fillerIndex}`;

                      return (
                        <li
                          key={key}
                          css={[
                            css`
                              width: calc(33.333% - 0.5rem);
                              height: 18vw;
                            `,
                            tw`relative mb-4 opacity-0 pointer-events-none`,
                          ]}
                        >
                          <></>
                        </li>
                      );
                    })}
              </ul>
            </Grid>
          </div>
        );
      })}
    </section>
  );
};

export default PortfolioGrid;
