/** @jsxImportSource @emotion/react */

import React, { useContext, useState, useEffect } from "react";
import tw, { css } from "twin.macro";
import { DocumentContext } from "../../../context/DocumentContext.jsx";
import Footer from "../../../components/Footer.jsx";
import Layout from "../../../components/Layout.jsx";
import Grid from "../../../components/styles/Grid.jsx";
import * as A from "../../../components/styles/Animations.jsx";
import { filter } from "../../utils";
import DeepDivesHeader from "./components/DeepDivesHeader.jsx";
import DeepDivesList from "./components/DeepDivesList.jsx";
import { servicesData } from "../servicesData";

const SpecialServicesPage = () => {
  const { isDesktop } = useContext(DocumentContext);

  const [expandedDeepDive, setExpandedDeepDive] = useState(null);
  const [specialService, setSpecialService] = useState([]);

  const specialServiceItems = [];

  useEffect(() => {
    setSpecialService(servicesData);
  }, []);

  if (specialService) {
    const filterDeep = filter(specialService, "special");
    console.log("deepDive filterDeep", filterDeep);
    specialServiceItems.push(filterDeep);
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
          {specialServiceItems?.[0] && (
            <DeepDivesList
              specialServiceItems={specialServiceItems}
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

export default SpecialServicesPage;
