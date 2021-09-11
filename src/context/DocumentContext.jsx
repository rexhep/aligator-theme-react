/** @jsxImportSource @emotion/react */
import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import _ from "underscore";
import { theme } from "twin.macro";
import { getWindowDimensions } from "../utils/dom";

const MENU_WIDTH = `540px`;
const MENU_WIDTH_XS = `85vw`;

export const DocumentContext = createContext({});

const DocumentProvider = ({ children }) => {
    const [documentHeight, setDocumentHeight] = useState(0);
    const [screen, setScreen] = useState(null);
    const [scrollTop, setScrollTop] = useState(0);
    const [scrollingDown, setScrollingDown] = useState(false);
    const [scrollTopLast, setScrollTopLast] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
  
    const handleResize = () => {
      if (typeof window === `undefined`) {
        return;
      }
  
      let detectedScreen = `xs`;
  
      if (window.matchMedia(`(min-width: ${theme`screens.sm`})`).matches) {
        detectedScreen = `sm`;
      }
  
      if (window.matchMedia(`(min-width: ${theme`screens.md`})`).matches) {
        detectedScreen = `md`;
      }
  
      if (window.matchMedia(`(min-width: ${theme`screens.lg`})`).matches) {
        detectedScreen = `lg`;
      }
  
      if (window.matchMedia(`(min-width: ${theme`screens.xl`})`).matches) {
        detectedScreen = `xl`;
      }
  
      setScreen(detectedScreen);
      setDocumentHeight(document.documentElement.offsetHeight);
      setWindowHeight(getWindowDimensions().height);
      setWindowWidth(getWindowDimensions().width);
    };
  
    const handleScroll = (e) => {
      setScrollTop(e.target.scrollingElement.scrollTop);
    };
  
    const isDesktop = () => screen !== `xs` && screen !== `sm`;
  
    const getMenuWidth = () => {
      switch (screen) {
        case `xl`:
        case `lg`:
        case `md`:
          return MENU_WIDTH;
  
        case `sm`:
          return MENU_WIDTH_XS;
  
        case `xs`:
        default:
          return MENU_WIDTH_XS;
      }
    };
  
    //
  
    useEffect(() => {
      if (typeof document !== `undefined` && document?.addEventListener) {
        document.addEventListener(`scroll`, _.throttle(handleScroll), false);
      }
  
      if (typeof window !== `undefined` && window?.addEventListener) {
        window.addEventListener(`resize`, _.throttle(handleResize), false);
  
        handleResize();
      }
    }, []);
  
    useEffect(() => {
      if (typeof window === `undefined` || typeof document === `undefined`) {
        return;
      }
  
      document.documentElement.style.setProperty(
        `--windowheight`,
        `${windowHeight}px`
      );
  
      document.documentElement.style.setProperty(
        `--windowwidth`,
        `${windowWidth}px`
      );
    }, [windowHeight, windowWidth]);
  
    useEffect(() => {
      if (scrollTop > scrollTopLast) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
  
      setScrollTopLast(scrollTop);
    }, [scrollTop]);
  
    //
  
    return (
      <DocumentContext.Provider
        value={{
          documentHeight,
          getMenuWidth,
          isDesktop,
          screen,
          scrollTop,
          scrollingDown,
          windowHeight,
          windowWidth
        }}
      >
        {children}
      </DocumentContext.Provider>
    );
  };
  
  DocumentProvider.propTypes = {
    children: PropTypes.node.isRequired
  };
  
  export default DocumentProvider;