/* eslint-disable react/prop-types */
/** @jsxImportSource @emotion/react */

import React, { useContext, useState, useEffect } from "react";
import tw, { css } from "twin.macro";
import axios from "axios";
import * as A from "../../../components/styles/Animations.jsx";
import Grid from "../../../components/styles/Grid.jsx";
import * as T from "../../../components/styles/Typography.jsx";
import Go from "../../../components/Go.jsx";
import Footer from "../../../components/Footer.jsx";
import Layout from "../../../components/Layout.jsx";

const MCxPage = () => {
  const [mcx, setMcx] = useState([]);

  //GET DATA FROM ALL MCX
  useEffect(() => {
    axios
      .get("http://ballkanpress.com/meruswp/wp-json/wp/v2/mcx")
      .then((response) => {
        setMcx(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("MCX", mcx);

  //

  return (
    <>
      <Layout
        styles={[
          css`
            min-height: 100vh;
            background: #f2f5f2;
          `,
          tw`pt-32 md:pt-64`,
        ]}
      >
        {mcx[0] && (
          <Grid>
            <div
              css={[
                css`
                  ${A.Keyframes(
                    `appearRight`,
                    `1s ${A.EASING_CUBIC} forwards`,
                    `0.5s`
                  )}
                `,
                tw`col-span-12 md:col-span-7 mb-24 md:mb-48 text-gray-500 whitespace-pre-wrap`,
              ]}
            >
              <T.Heading font="3">{mcx[0].title.rendered}</T.Heading>

              {mcx[0]?.acf.login_url && (
                <T.Heading
                  font="3"
                  styles={[tw`mt-16 md:mt-24 flex items-center`]}
                >
                  <Go to={mcx[0].acf.login_url}>Login ↗</Go>
                </T.Heading>
              )}
            </div>
          </Grid>
        )}
        {mcx[0]?.content && (
          <Grid>
            <div
              css={[
                css`
                  ${A.Keyframes(
                    `appearLeft`,
                    `1s ${A.EASING_CUBIC} forwards`,
                    `0.75s`
                  )}
                  p {
                    font-size: 34px;
                    font-weight: 300;
                    line-height: 34px;
                    letter-spacing: -0.01em;
                  }
                `,
                tw`col-span-12 md:col-span-5 md:col-start-7 mb-24 md:mb-48 text-gray-500 whitespace-pre-wrap`,
              ]}
            >
              <T.Body>
                <div
                  dangerouslySetInnerHTML={{ __html: mcx[0].content.rendered }}
                ></div>
              </T.Body>
            </div>
          </Grid>
        )}
        <Footer />
      </Layout>
    </>
  );
};

export default MCxPage;
