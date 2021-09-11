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
            background: #e8ecf1;

            background: linear-gradient(
                1deg,
                rgb(91 134 228 / 70%),
                rgb(0 212 255 / 80%)
              ),
              url(${image}) no-repeat;
            background-size: cover;

            :before {
              position: absolute;
              content: "";
              height: 100%;
              width: 100%;
              z-index: -1;
              background: #fd4766;
              background: var(--color-primary);
              background: linear-gradient(
                90deg,
                #1c99fe 20.69%,
                #7644ff 50.19%,
                #fd4766 79.69%
              );
              background: linear-gradient(
                90deg,
                #1c99fe 20.69%,
                #7644ff 50.19%,
                var(--color-primary) 79.69%
              );
              filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="var(--color-primary)",endColorstr="var(--color-secondary)",GradientType=1);
              top: 0;
              left: 0;
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
