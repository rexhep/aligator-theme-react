/* eslint-disable react/prop-types */
/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect, useState } from "react";
import tw, { css, theme } from "twin.macro";
import { AppContext } from "../context/AppContext.jsx";
import { DocumentContext } from "../context/DocumentContext.jsx";
import * as A from "./styles/Animations.jsx";
import * as T from "./styles/Typography.jsx";
import Go from "./Go.jsx";
import Header from "../components/Header.jsx";
import ScreenHeight from "./ScreenHeight.jsx";
import { useKeyPress } from "../utils/hooks";

const customBackgrounds = {
  mainPage: "rgb(23, 33, 56)",
  teamPage: "rgb(87, 69, 156)",
  portfolioPage: "rgb(217, 92, 74)",
  servicePage: "#312E81",
  aboutUs: "rgb(64, 54, 128)",
};

const Nav = () => {
  const {
    menuActive,
    setMenuActive,
    menuTransitioning,
    setMenuTransitioning,
    // pathname
  } = useContext(AppContext);
  const { getMenuWidth, isDesktop } = useContext(DocumentContext);

  const [colourStyle, setColourStyle] = useState([]);

  const pathname = window?.location?.pathname;

  const links = [
    {
      name: `Home`,
      target: `/`,
    },
    {
      name: `Team`,
      target: `/team`,
    },
    {
      name: `Portfolio`,
      target: `/portfolio`,
    },
    {
      name: `Services`,
      target: `/services`,
    },
    {
      name: `About Us`,
      target: `/aboutUs`,
    },
  ];

  useEffect(() => {
    if (menuTransitioning) {
      setMenuActive(false);
      setTimeout(() => {
        setMenuTransitioning(false);
      }, 300);
    }
  }, [menuTransitioning]);

  useEffect(() => {
    let newColourStyles = {
      background: theme`colors.green`,
      color: theme`colors.white`,
      colorActive: theme`colors.green`,
      crossColor: theme`colors.blue`,
    };

    if (!pathname) {
      setColourStyle(newColourStyles);
      return;
    }

    const pathnameSplit = pathname.split(`/`);

    if (!pathnameSplit?.[1]) {
      setColourStyle(newColourStyles);
      return;
    }

    const pathId = pathnameSplit[1].toLowerCase();

    switch (pathId) {
      case `aboutUs`:
        newColourStyles = {
          background: customBackgrounds.aboutUs,
          color: theme`colors.white`,
          colorActive: "rgb(217, 92, 74)",
        };
        break;

      case `services`:
        newColourStyles = {
          background: customBackgrounds.servicePage,
          color: theme`colors.white`,
          colorActive: "rgb(217, 92, 74)",
        };
        break;

      case `portfolio`:
        newColourStyles = {
          background: customBackgrounds.portfolioPage,
          color: theme`colors.white`,
          colorActive: "rgb(217, 92, 74)",
        };
        break;

      case `team`:
        newColourStyles = {
          background: customBackgrounds.teamPage,
          color: theme`colors.white`,
          colorActive: "rgb(217, 92, 74)",
        };
        break;

      default:
        newColourStyles = {
          background: "red",
          color: theme`colors.black`,
          colorActive: "rgb(217, 92, 74)",
          crossColor: theme`colors.white`,
        };

        break;
    }

    setColourStyle(newColourStyles);
  }, [pathname]);

  const escKeyPressed = useKeyPress(`Escape`);

  useEffect(() => {
    if (escKeyPressed && menuActive) {
      setMenuActive(false);
    }
  }, [escKeyPressed]);

  //

  let withDelay = false;

  if (menuTransitioning) {
    withDelay = !menuActive;
  }

  //

  return (
    <>
      <ScreenHeight
        styles={[
          css`
            transition: color 0.25s ${A.EASING_CUBIC},
              background 0.25s ${A.EASING_CUBIC},
              transform 0.6s ${A.EASING_CUBIC} ${!withDelay ? `` : `0.2s`};
            transform: translate3d(
              ${menuActive ? `0` : `-${getMenuWidth()}`},
              0,
              0
            );

            width: ${getMenuWidth()};
            background: ${pathname === "/"
              ? customBackgrounds.mainPage
              : colourStyle.background};
            color: ${colourStyle.color};
          `,
          tw`fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center overflow-hidden pointer-events-none`,
        ]}
      >
        <div
          css={[
            css`
              transition: transform 0.6s ${A.EASING_CUBIC}
                ${!withDelay ? `` : `0.2s`};
              transform: translate3d(
                ${menuActive ? `0` : `${getMenuWidth()}`},
                0,
                0
              );

              z-index: 999;
              clip: rect(auto, auto, auto, auto);
            `,
            tw`w-full h-full fixed top-0 right-0 bottom-0 left-0 z-40`,
          ]}
        >
          <Header clipcross={colourStyle?.crossColor} />
        </div>

        <ul
          css={[
            css`
              //
            `,
            tw`w-full h-full relative flex flex-col justify-center pl-6 md:pl-12`,
          ]}
        >
          {links.map((link) => {
            let pathId = pathname;
            const samePath = pathId === "/" && link.target === "/";

            if (!pathId || pathId === `` || pathId === `/`) {
              pathId = `/`;
            } else if (pathId.endsWith(`/`)) {
              pathId = pathId.slice(0, -1);
            }

            //

            return (
              <li key={link.target} css={[tw`w-full relative block`]}>
                <Go
                  to={link.target}
                  onClick={(e) => {
                    if (pathId === link.target) {
                      e.preventDefault();
                      setMenuActive(false);
                    } else {
                      setMenuTransitioning(true);
                    }
                  }}
                  inject={{
                    css: `
                      color: ${
                        samePath
                          ? "rgb(217, 92, 74)"
                          : pathId === link.target &&
                            colourStyle.background === colourStyle.colorActive
                          ? "black"
                          : pathId === link.target
                          ? colourStyle.colorActive
                          : `inherit`
                      };
                      font-size: 5vw !important;

                      pointer-events: ${menuTransitioning ? `none` : `auto`};

                      &:hover {
                        h2 {
                          transform: translate3d(
                            ${menuTransitioning ? 0 : `0.5rem`},
                            0,
                            0
                          );
                        }
                      }

                      h2 {
                        transition: transform ${menuActive ? `0.3s` : `0.3s`}
                          ${A.EASING_CUBIC};
                      }
                    `,
                    tw: tw`inline-block pt-3 pb-3`,
                  }}
                >
                  {(link?.name !== `aboutUs` && (
                    <T.Heading
                      font="7"
                      level="2"
                      styles={[
                        css`
                          font-size: 75px;
                          font-weight: 300;
                          line-height: 72px;
                          letter-spacing: -0.02em;
                        `,
                      ]}
                    >
                      {link.name}
                    </T.Heading>
                  )) || (
                    <T.Heading
                      font="2"
                      level="2"
                      styles={[
                        css`
                          font-size: 75px;
                          font-weight: 300;
                          line-height: 72px;
                          letter-spacing: -0.02em;
                        `,
                        tw`flex`,
                      ]}
                    >
                      <span>About</span>
                      <span
                        css={[
                          css`
                            margin-top: ${isDesktop() ? `-9px` : `-5px`};
                          `,
                        ]}
                      >
                        Us
                      </span>
                    </T.Heading>
                  )}
                </Go>
              </li>
            );
          })}
        </ul>
      </ScreenHeight>
    </>
  );
};

export default Nav;
