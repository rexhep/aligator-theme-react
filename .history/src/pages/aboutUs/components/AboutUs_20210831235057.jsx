/* eslint-disable react/prop-types */
/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from "react";
import tw, { css } from "twin.macro";
import axios from "axios";
import * as A from "../../../components/styles/Animations.jsx";
import Grid from "../../../components/styles/Grid.jsx";
import * as T from "../../../components/styles/Typography.jsx";
import Go from "../../../components/Go.jsx";
import Footer from "../../../components/Footer.jsx";
import Layout from "../../../components/Layout.jsx";
import { aboutUsData } from "../aboutUsData.js";

const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState([]);

  //GET DATA FROM About Us
  useEffect(() => {
    setAboutUs(aboutUsData);
  }, []);

  console.log("aboutUs", aboutUs);
  console.log("aboutUsData", aboutUsData);

  return (
    <>
      <Layout
        styles={[
          css`
            min-height: 100vh;
            background: #f0f9ff;
          `,
          tw`pt-32 md:pt-64`,
        ]}
      >
        {aboutUs && (
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
              <T.Heading font="3">{aboutUs?.title}</T.Heading>

              {aboutUs?.login_url && (
                <T.Heading
                  font="3"
                  styles={[tw`mt-16 md:mt-24 flex items-center`]}
                >
                  <Go to={aboutUs?.login_url}>Login ↗</Go>
                </T.Heading>
              )}
            </div>
          </Grid>
        )}
        {aboutUs?.content && (
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
                  dangerouslySetInnerHTML={{ __html: aboutUs.content }}
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

export default AboutUs;
