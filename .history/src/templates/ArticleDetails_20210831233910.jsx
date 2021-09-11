/** @jsxImportSource @emotion/react */

import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import tw, { css, theme } from "twin.macro";
import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { DocumentContext } from "../context/DocumentContext.jsx";
import Grid from "../components/styles/Grid.jsx";
import * as A from "../components/styles/Animations.jsx";
import * as T from "../components/styles/Typography.jsx";
import Footer from "../components/Footer.jsx";
import Go from "../components/Go.jsx";
import Layout from "../components/Layout.jsx";
import { DATE_OPTIONS } from "../pages/utils";
import { servicesData } from "../pages/services/servicesData.js";
import backgroundImage from "../pages/services/images/pattern-1.jpg";
import HeaderImage from "../components/HeaderImage.jsx";

const ArticleDetails = ({ data, location }) => {
  const { slug } = useParams();
  const { isDesktop } = useContext(DocumentContext);

  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setServices(servicesData.filter((service) => service.slug === slug));
  }, []);

  useEffect(() => {
    setCategories(services[0]?.category);
  }, [services]);

  const cdate = new Date().toLocaleDateString("en-US", DATE_OPTIONS);

  const specialCat = services[0]?.category.includes("Special");

  const articleTags = services?.tags;

  if (articleTags?.[0]) {
    articleTags.sort();
  }

  return (
    <>
      <Layout
        styles={[
          css`
            background: #f0f9ff;
          `,
          tw`min-h-screen text-gray-800`,
        ]}
      >
        <HeaderImage backgroundImage={backgroundImage} title="Services" />
        <div
          css={[
            css`
              min-height: calc(100vh - 120px);
              padding-top: 8rem;
              padding-bottom: 120px;

              @media screen and (min-width: 1024px) {
                padding-top: 8rem;
                padding-bottom: 180px;
              }
            `,
          ]}
        >
          <Grid>
            <div
              css={[
                tw`col-span-10 md:col-span-7 md:col-start-4 relative flex mb-8 pl-1 md:pl-0`,
              ]}
            >
              <button
                type="button"
                css={[
                  css`
                    a {
                      text-decoration: none;
                    }

                    li {
                      list-style: none;
                    }

                    color: ${!specialCat
                      ? theme`colors.gray.500`
                      : theme`colors.yellow.500`};
                  `,
                  tw`mr-8`,
                ]}
              >
                <Go to="/services">
                  <T.Body font="2">All Services</T.Body>
                </Go>
              </button>

              <div
                css={[
                  css`
                    a {
                      text-decoration: none;
                    }

                    li {
                      list-style: none;
                    }

                    color: ${specialCat
                      ? theme`colors.yellow.500`
                      : theme`colors.gray.500`};
                  `,
                  tw``,
                ]}
              >
                <Go to="/services/specialServices">
                  <T.Body font="2">Special Services</T.Body>
                </Go>
              </div>
            </div>

            <header
              css={[
                css`
                  ${A.Keyframes(
                    `appearLeft`,
                    `1s ${A.EASING_CUBIC} forwards`,
                    `${300}ms`
                  )}
                `,
                tw`col-span-12 md:col-span-3 order-2 md:order-1 relative z-10 flex flex-col justify-between`,
              ]}
            >
              <div>
                <T.Heading font="b2" level="4">
                  {cdate}
                </T.Heading>
                {categories && (
                  <T.Heading font="b2" level="3">
                    <span css={[tw`text-gray-500`]}>{categories}</span>
                  </T.Heading>
                )}
              </div>

              <div>
                {services[0]?.author_name && (
                  <Go
                    inject={{
                      css: `
                            text-decoration: none !important;

                            p {
                            text-decoration: none !important;
                            }
                        `,
                      tw: tw`relative block mt-2 md:mt-12 mb-16 md:mb-8`,
                    }}
                    to={`/team?member=${encodeURIComponent(
                      services[0].author_name
                    )}`}
                  >
                    <T.Body font="3" styles={[tw`text-yellow-900`]}>
                      {services[0].author_name}
                    </T.Body>
                  </Go>
                )}
              </div>
            </header>
            <T.Heading
              css={[
                css`
                  ${A.Keyframes(
                    `appearRight`,
                    `1s ${A.EASING_CUBIC} forwards`,
                    `${300}ms`
                  )}
                `,
                tw`col-span-12 md:col-span-7 md:col-start-4 order-1 md:order-2 mt-6 md:mt-0 mb-8 md:mb-0`,
              ]}
              font="3"
              level="1"
            >
              {services[0]?.title}
            </T.Heading>
          </Grid>
          <section
            css={[
              css`
                ${A.Keyframes(
                  `appearRight`,
                  `1s ${A.EASING_CUBIC} forwards`,
                  `${450}ms`
                )}

                a {
                  text-decoration: underline;
                }
              `,
            ]}
          >
            <Grid>
              {isDesktop() && specialCat && (
                <div
                  css={[
                    css`
                      height: 4rem;
                    `,
                    tw`col-span-3 relative z-20`,
                  ]}
                >
                  <div
                    css={[
                      css`
                        bottom: -100%;
                        span {
                          font-size: 11px;
                          font-weight: 300;
                          line-height: 13px !important;
                          letter-spacing: 0px;
                          display: block;
                          margin-bottom: 3rem;
                        }
                        p {
                          margin-bottom: 2.75rem;
                          padding-right: 2rem;
                          font-weight: 300;
                          line-height: 34px;
                          letter-spacing: -0.01em;
                        }

                        background-image: -webkit-gradient(
                          linear,
                          left top,
                          left bottom,
                          color-stop(10%, #1e3a8a),
                          to(#1e40af)
                        );
                        background-image: -webkit-linear-gradient(
                          #1e3a8a 10%,
                          #1e40af
                        );
                        background-image: linear-gradient(#1e3a8a 10%, #1e40af);
                      `,
                      tw`w-full relative block pt-4 pr-3 pb-4 pl-3 text-white`,
                    ]}
                  >
                    <T.Caption styles={[tw`block mb-12`]} weight={300}>
                      Part of Special Services:
                    </T.Caption>

                    <T.Body styles={[tw`mb-11 pr-8`]}>
                      {services[0]?.title}
                    </T.Body>

                    <Go
                      to="/services/specialServices"
                      inject={{
                        css: `
                          text-decoration: none !important;
                          list-style: none !important;
                          a {
                              text-decoration: none !important;
                          }
                          `,
                      }}
                    >
                      <T.Body font="2" styles={[tw`text-yellow-500`]}>
                        See more →
                      </T.Body>
                    </Go>
                  </div>
                </div>
              )}
            </Grid>
            <Grid>
              <T.Heading
                css={[
                  css`
                    ${A.Keyframes(
                      `appearRight`,
                      `1s ${A.EASING_CUBIC} forwards`,
                      `${300}ms`
                    )}

                    h2 {
                      font-size: 56px;
                      font-weight: 300;
                      line-height: 56px;
                      padding-bottom: 30px;
                    }
                    ,
                    p {
                      font-size: 22px;
                      font-weight: 300;
                      line-height: 24px;
                      letter-spacing: 0.01em;
                    }
                    ul {
                      padding-top: 30px;
                      padding-bottom: 30px;
                      li {
                        font-size: 22px;
                        font-weight: 300;
                        line-height: 24px;
                        letter-spacing: 0.01em;
                        margin-bottom: 0.5rem;
                        padding-left: 10px;
                        margin-left: 15px;
                      }
                      li::marker {
                        content: "•";
                        color: ${theme`colors.black`};
                        display: inline-block;
                        width: 15px;
                        font-size: 30px;
                        padding-right: 10px;
                        margin-right: 10px;
                        line-height: 26px;
                      }
                    }
                    ol {
                      list-style: none;
                      counter-reset: item;
                      li {
                        counter-increment: item;
                        font-size: 22px;
                        font-weight: 300;
                        line-height: 24px;
                        letter-spacing: 0.01em;
                        margin-bottom: 0.5rem;
                        :before {
                          content: counter(item) ". ";
                          color: #000;
                          display: inline-block;
                          width: 15px;
                          font-size: 20px;
                          padding-right: 10px;
                          margin-right: 10px;
                          line-height: 26px;
                          font-weight: bold;
                        }
                      }
                    }
                  `,
                  tw`col-span-12 md:col-span-7 md:col-start-4 order-1 md:order-2 mt-6 md:mt-0 mb-8 md:mb-0`,
                ]}
                font="4"
                level="1"
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: services[0]?.desc,
                  }}
                />
              </T.Heading>
            </Grid>
          </section>
          {specialCat && (
            <Grid>
              <div
                css={[
                  css`
                    background-image: -webkit-gradient(
                      linear,
                      left top,
                      left bottom,
                      color-stop(10%, #d97706),
                      to(#f59e0b)
                    );
                    background-image: -webkit-linear-gradient(
                      #d97706 10%,
                      #f59e0b
                    );
                    background-image: linear-gradient(#d97706 10%, #f59e0b);
                  `,
                  tw`col-span-full relative mt-12 pt-6 md:pt-6 pr-3 md:pr-6 pb-6 md:pb-6 pl-3 md:pl-6 text-white`,
                ]}
              >
                <T.Body font="2">Part of Special Services:</T.Body>

                <T.Heading
                  font={isDesktop() ? `7` : `3`}
                  styles={[tw`relative pt-10 md:pt-20 pb-10 md:pb-20`]}
                >
                  {services[0]?.title}
                </T.Heading>

                <Go
                  to="/services/specialServices"
                  inject={{
                    css: `
                      text-decoration: none !important;
                          list-style: none !important;
                          a {
                              text-decoration: none !important;
                          }
                      `,
                  }}
                >
                  <T.Body font="2" styles={[tw`text-yellow-500`]}>
                    See more →
                  </T.Body>
                </Go>
              </div>
            </Grid>
          )}

          <Grid node="section">
            <div
              css={[
                css`
                  a {
                    text-decoration: none;
                    display: inline-block;

                    &:hover {
                      text-decoration: underline;
                    }
                  }
                `,
                tw`col-span-12 md:col-span-7 md:col-start-4 relative mt-20 md:mb-12`,
              ]}
            >
              <Go to="/services">
                <T.Body font="2" styles={[tw`text-yellow-900`]}>
                  ← Back to Services
                </T.Body>
              </Go>
            </div>
          </Grid>

          {typeof window !== `undefined` && (
            <Grid>
              <ul
                css={[
                  css`
                    ${A.Keyframes(
                      `appearRight`,
                      `1s ${A.EASING_CUBIC} forwards`,
                      `${600}ms`
                    )}
                  `,
                  tw`col-span-12 md:col-span-6 md:col-start-4 relative pt-8 md:pt-12 flex justify-start`,
                ]}
              >
                <li>
                  <div css={[tw`block mr-4 md:mr-6`]}>
                    <T.Body
                      font="2"
                      styles={[tw`pt-3 px-1 pb-3 text-gray-500`]}
                    >
                      Share via:
                    </T.Body>
                  </div>
                </li>

                <li>
                  <div
                    css={[
                      css`
                        &:hover {
                          p {
                            text-decoration: underline;
                          }
                        }
                      `,
                      tw`block mr-8 md:mr-6`,
                    ]}
                  >
                    <TwitterShareButton url={window?.location?.href}>
                      <T.Body
                        font="2"
                        styles={[tw`pt-3 px-1 pb-3 text-yellow-900`]}
                      >
                        Twitter
                      </T.Body>
                    </TwitterShareButton>
                  </div>
                </li>

                <li>
                  <div
                    css={[
                      css`
                        &:hover {
                          p {
                            text-decoration: underline;
                          }
                        }
                      `,
                      tw`block mr-8 md:mr-6`,
                    ]}
                  >
                    <LinkedinShareButton url={window?.location?.href}>
                      <T.Body
                        font="2"
                        styles={[tw`pt-3 px-1 pb-3 text-yellow-900`]}
                      >
                        LinkedIn
                      </T.Body>
                    </LinkedinShareButton>
                  </div>
                </li>

                <li>
                  <div
                    css={[
                      css`
                        &:hover {
                          p {
                            text-decoration: underline;
                          }
                        }
                      `,
                      tw`block mr-8 md:mr-6`,
                    ]}
                  >
                    <EmailShareButton url={window?.location?.href}>
                      <T.Body
                        font="2"
                        styles={[tw`pt-3 px-1 pb-3 text-yellow-900`]}
                      >
                        Email
                      </T.Body>
                    </EmailShareButton>
                  </div>
                </li>
              </ul>
            </Grid>
          )}
        </div>
      </Layout>

      <Footer />
    </>
  );
};

export default ArticleDetails;
