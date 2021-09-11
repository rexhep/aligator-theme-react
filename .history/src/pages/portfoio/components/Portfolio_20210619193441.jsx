/* eslint-disable react/prop-types */
/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect, useState } from "react";
import { css } from "twin.macro";
import axios from "axios";
import { DocumentContext } from "../../../context/DocumentContext.jsx";
import Footer from "../../../components/Footer.jsx";
import Layout from "../../../components/Layout.jsx";
import PortfolioContent from "./PortfolioContent.jsx";
import CategoriesLayout from "./Categories";
import PortfolioList from "./PortfolioList";
import PortfolioGrid from "./PortfolioGrid.jsx";

const PortfolioLayout = () => {
  const { isDesktop } = useContext(DocumentContext);

  const [portfolio, setPortfolio] = useState([]);
  const [description, setDescription] = useState([]);
  const [displayMode, setDisplayMode] = useState(`grid`);
  const [expanded, setExpanded] = useState([]);

  //GET DATA FROM API
  useEffect(() => {
    axios
      .get("http://ballkanpress.com/meruswp/wp-json/wp/v2/portfolio")
      .then((response) => {
        setPortfolio(response.data);
      })
      .catch((err) => console.log("err"));
  }, []);

  useEffect(() => {
    axios
      .get("http://ballkanpress.com/meruswp/wp-json/wp/v2/portfolio_desc")
      .then((response) => {
        setDescription(response.data);
      })
      .catch((err) => console.log("err"));
  }, []);

  const portfolioItems = [];

  portfolio.forEach((partnerItem) => {
    portfolioItems.push(partnerItem);
  });

  portfolioItems.sort((a, b) => {
    const keyA = a.title.rendered;
    const keyB = b.title.rendered;

    if (keyA < keyB) {
      return -1;
    }

    if (keyA > keyB) {
      return 1;
    }

    return 0;
  });

  const portfolioSections = {};

  portfolioItems.forEach((portfolioItem) => {
    const alphaKey = portfolioItem.acf.alphabet;

    if (!portfolioSections?.[alphaKey]) {
      portfolioSections[alphaKey] = [];
    }

    portfolioSections[alphaKey].push(portfolioItem);
  });

  //

  const toggleExpandedItem = (key) => {
    const newExpanded = JSON.parse(JSON.stringify(expanded));
    const existingIndex = expanded.indexOf(key);

    if (existingIndex === -1) {
      newExpanded.push(key);
    } else {
      newExpanded.splice(existingIndex, 1);
    }

    setExpanded(newExpanded);
  };

  useEffect(() => {
    setExpanded([]);
  }, [displayMode]);

  return (
    <>
      <Layout
        styles={[
          css`
            min-height: 100vh;
            background: #f2f5f2;
          `,
        ]}
      >
        <PortfolioContent description={description} portfolio={portfolio} />

        {isDesktop() && (
          <CategoriesLayout
            setDisplayMode={setDisplayMode}
            displayMode={displayMode}
          />
        )}

        {isDesktop() && displayMode === `list` && (
          <PortfolioList
            portfolioSections={portfolioSections}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        )}

        {(!isDesktop() || displayMode === `grid`) && (
          <PortfolioGrid
            portfolioSections={portfolioSections}
            expanded={expanded}
            isDesktop={isDesktop}
            toggleExpandedItem={toggleExpandedItem}
          />
        )}

        <Footer />
      </Layout>
    </>
  );
};

export default PortfolioLayout;
