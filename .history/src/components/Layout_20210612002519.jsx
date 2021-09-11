/** @jsxImportSource @emotion/react */
import React, { useContext } from "react";
import tw, { css, theme } from "twin.macro";
import { Global } from "@emotion/react";
import PropTypes from "prop-types";
import { AppContext } from "../context/AppContext.jsx";
import { DocumentContext } from "../context/DocumentContext.jsx";
import * as A from "./styles/Animations.jsx";

const Layout = ({ children, styles }) => {
  const { menuActive } = useContext(AppContext);
  const { getMenuWidth } = useContext(DocumentContext);

//   console.log('theme33::', theme);

  return (
    <>
      <Global
        styles={css`
          body {
            background: ${theme`colors.gray.200`};
          }

          a:focus,
          button:focus,
          input:focus,
          textarea:focus {
            outline: none;
          }

          input {
            border-radius: 0;
          }
        `}
      />

      <main
        id="layout"
        css={[
          ...styles,
          css`
            transition: ${menuActive ? `0.725` : `0.6`}s ${A.EASING_CUBIC}
              transform;
            transform: translate3d(
              ${menuActive ? `${getMenuWidth()}` : ``},
              0,
              0
            );
            box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.1);
          `,
          tw`z-10`
        ]}
      >
        {children}
      </main>
    </>
  );
};

Layout.defaultProps = {
  styles: []
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.arrayOf(PropTypes.shape({}))
};

export default Layout;