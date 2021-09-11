/** @jsxImportSource @emotion/react */

import React, { useContext, useState } from "react";
import tw, { css } from "twin.macro";
import { DocumentContext } from "../../context/DocumentContext.jsx";
import { useTimeout } from "../../utils/hooks";
import Layout from "../../components/Layout.jsx";
import ScreenHeight from "../../components/ScreenHeight.jsx";
import Grid from "../../components/styles/Grid.jsx";
import Footer from "../../components/Footer.jsx";
import Content from "./components/Content.jsx";
import image from "./images/bg-image-1.jpg";

const data =
  "We empower ambitious teams building tomorrow’s industry-defining platforms";

const HomePage = () => {
  const { isDesktop } = useContext(DocumentContext);

  const [rendered, setRendered] = useState(false);

  useTimeout(() => {
    setRendered(true);
  }, 1500);

  return (
    <>
      <Layout
        styles={[
          css`
            min-height: 99vh;
            background-image: url(${image})
            background-size: cover;

            &::before {
              content: "";
              background: linear-gradient(
                1deg,
                rgb(91 134 228 / 70%),
                rgb(0 212 255 / 80%)
              );
              background: #e8ecf1;
            
            
            }
          `,
        ]}
      >
        <ScreenHeight>
          <Grid styles={[tw`h-full`]}>
            <Content isDesktop={isDesktop} state={data} rendered={rendered} />
          </Grid>
        </ScreenHeight>

        {rendered && <Footer />}
      </Layout>
    </>
  );
};

export default HomePage;
