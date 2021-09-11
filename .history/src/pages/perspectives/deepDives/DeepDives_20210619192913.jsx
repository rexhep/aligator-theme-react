/** @jsxImportSource @emotion/react */

import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import tw, { css } from "twin.macro";
import { DocumentContext } from "../../../context/DocumentContext.jsx";
import Footer from "../../../components/Footer.jsx";
import Layout from "../../../components/Layout.jsx";
import Grid from "../../../components/styles/Grid.jsx";
import * as A from "../../../components/styles/Animations.jsx";
import { filter } from "../../utils";
import DeepDivesHeader from "./components/DeepDivesHeader.jsx";
import DeepDivesList from "./components/DeepDivesList.jsx";

const DeepDivesPage = () => {
  const { isDesktop } = useContext(DocumentContext);

  const [expandedDeepDive, setExpandedDeepDive] = useState(null);
  const [deepDives, setDeepDives] = useState([]);

  const deepDivesItems = [];

  //GET DATA FROM ALL PERSPECTIVES
  useEffect(() => {
    axios
      .get(
        "http://ballkanpress.com/meruswp/wp-json/wp/v2/perspectives?_embed=1"
      )
      .then((response) => {
        setDeepDives(response.data);
      })
      .catch((err) => console.log("err"));
  }, []);

  if (deepDives) {
    const filterDeep = filter(deepDives, "deep");
    console.log("deepDive filterDeep", filterDeep);
    deepDivesItems.push(filterDeep);
  }

  return (
    <>
      <Layout
        styles={[
          css`
            background: #f2f5f2;
          `,
          tw`min-h-screen relative pt-24 md:pt-64`,
        ]}
      >
        <DeepDivesHeader />
        <div css={[tw`relative mt-8 mb-32`]}>
          {deepDivesItems?.[0] && (
            <DeepDivesList
              deepDivesItems={deepDivesItems}
              expandedDeepDive={expandedDeepDive}
              setExpandedDeepDive={setExpandedDeepDive}
              isDesktop={isDesktop}
            />
          )}
          <Grid>
            <div
              css={[
                css`
                  transition: opacity 0.3s ${A.EASING_CUBIC};

                  height: 2px;
                `,
                tw`col-span-12 bg-blue-900`,
              ]}
            />
          </Grid>
        </div>
      </Layout>

      <Footer />
    </>
  );
};

export default DeepDivesPage;
