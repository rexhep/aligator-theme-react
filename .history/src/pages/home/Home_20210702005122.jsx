/** @jsxImportSource @emotion/react */

import React, { useContext, useState, useEffect } from "react";
import tw, { css } from "twin.macro";
import axiox from "axios";
import { DocumentContext } from "../../context/DocumentContext.jsx";
import { useTimeout } from "../../utils/hooks";
import Layout from "../../components/Layout.jsx";
import ScreenHeight from "../../components/ScreenHeight.jsx";
import Grid from "../../components/styles/Grid.jsx";
import Footer from "../../components/Footer.jsx";
import Content from "./components/Content.jsx";

const HomePage = () => {
  const { isDesktop } = useContext(DocumentContext);
  const [state, setState] = useState();

  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    axiox
      .get("http://ballkanpress.com/meruswp/wp-json/wp/v2/home_page")
      .then((response) => {
        setState(response.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

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
          background: linear-gradient(1deg, rgb(0 0 0 / 80%), rgb(0 0 0 / 90%)),url(/static/media/office_team.e47bad50.jpg) no-repeat;
          background-size: cover;
          `,
        ]}
      >
        <ScreenHeight>
          <Grid styles={[tw`h-full`]}>
            <Content isDesktop={isDesktop} state={state} rendered={rendered} />
          </Grid>
        </ScreenHeight>

        {rendered && <Footer />}
      </Layout>
    </>
  );
};

export default HomePage;
