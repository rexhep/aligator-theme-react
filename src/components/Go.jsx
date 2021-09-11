/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from "gatsby";
import tw, { css } from "twin.macro";
import { fancyError } from "../utils/helpers";

/**
 * -----------------------------------------------------------------------------
 * The component through which all links are be passed. Accepts a parameters
 * obj for appending attributes onto the resulting URL string.
 * @param  {props} props Noted in PropTypes below
 * @return {node}        The resulting link node with mutated URLs
 */
const Go = ({ children, debug, inject, onClick, newTab, parameters, to }) => {
  const [parameterString, setParameterString] = useState(``);

  /**
   * ---------------------------------------------------------------------------
   * useEffect [parameters]
   * Set URL parameters based on object data from the calling component.
   */
  useEffect(() => {
    if (!parameters || !Object.keys(parameters)?.[0]) {
      return;
    }

    let newParameterString = ``;

    Object.keys(parameters).forEach((key) => {
      const parameter = parameters[key];

      if (!key || typeof key !== `string` || key === ``) {
        fancyError(`[Go.jsx] Invalid key: ${key}`);
        return;
      }

      if (!parameter || typeof parameter !== `string` || parameter === ``) {
        fancyError(`[Go.jsx] Invalid parameter: ${parameter}`);
        return;
      }

      newParameterString += `${
        newParameterString === `` ? `?` : `&`
      }${key}=${parameter}`;
    });

    setParameterString(newParameterString);
  }, [parameters]);

  /**
   * ---------------------------------------------------------------------------
   * useEffect [parameterString]
   * Debug the parameterString being set for any particular component instance.
   */

  const href = `${to}${parameterString !== `` ? parameterString : ``}`;

  return (
    <>
      {(!href.includes(`http`) && (
        <Nav defaultActiveKey="/">
          <Nav.Item
            as="li"
            onClick={onClick}
            css={[
              css`
                ${inject?.css || ``}
                a {
                  display: flex;
                }
              `,
              inject?.tw || tw``,
            ]}
          >
            <NavLink to={href}>{children}</NavLink>
          </Nav.Item>
        </Nav>
      )) || (
        <a
          href={href}
          onClick={onClick}
          rel={newTab ? `noopener noreferrer` : ``}
          target={newTab ? `_blank` : ``}
          css={[
            css`
              ${inject?.css || ``}
            `,
            inject?.tw || tw``,
          ]}
        >
          {children}
        </a>
      )}
    </>
  );
};

Go.defaultProps = {
  debug: false,
  inject: null,
  onClick: () => {},
  newTab: false,
  parameters: null,
};

Go.propTypes = {
  debug: PropTypes.bool,
  children: PropTypes.node.isRequired,
  inject: PropTypes.shape({
    css: PropTypes.string,
    tw: PropTypes.shape({}),
  }),
  onClick: PropTypes.func,
  newTab: PropTypes.bool,
  parameters: PropTypes.shape({}),
  to: PropTypes.string.isRequired,
};

export default Go;
