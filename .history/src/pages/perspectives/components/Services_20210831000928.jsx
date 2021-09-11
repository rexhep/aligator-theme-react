/* eslint-disable react/prop-types */
/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect, useState } from "react";
import tw, { css } from "twin.macro";
import { DocumentContext } from "../../../context/DocumentContext.jsx";
import Layout from "../../../components/Layout.jsx";
import { filter } from "../../utils";
import Footer from "../../../components/Footer.jsx";
import PerspectiveHeader from "./PerspectiveHeader.jsx";
import ServicesItem from "./ServicesItem.jsx";
import backgroundImage from "../images/pattern-1.jpg";
import HeaderImage from "../../../components/HeaderImage.jsx";
import { servicesData } from "../servicesData.js";

const ServicesLayout = () => {
  const { isDesktop, scrollTop } = useContext(DocumentContext);

  // const submitRef = useRef();

  const [services, setServices] = useState([]);

  // const [email, setEmail] = useState(null);
  const [filters, setFilters] = useState([]);
  const [rendering, setRendering] = useState(false);
  // const [submitting, setSubmitting] = useState(false);
  // const [submitted, setSubmitted] = useState(false);
  const [tagsActive, setTagsActive] = useState(false);

  useEffect(() => {
    setServices(servicesData);
  }, []);

  const articles = [];
  const tags = [];

  useEffect(() => {
    if (tagsActive) {
      setTagsActive(false);
    }
  }, [tagsActive, scrollTop]);

  useEffect(() => {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: `smooth`,
      });
    }

    setTimeout(() => {
      setRendering(false);
    }, 200);
  }, [filters]);

  let arrayCat = [];
  // Get all categories name
  useEffect(() => {
    services.map((category) => arrayCat.push(category));
  }, [arrayCat, services]);

  if (services) {
    services.forEach((node) => {
      articles.push(node);

      if (node.category) {
        // node._embedded["wp:term"][0]
        //   .map((tags) => tags.name)
        //   .forEach((tag) => {
        //     tags.push(tag);
        //   });
        tags.push(node.category);
      }
    });
  }

  tags.sort();

  const specialCategory = [];

  if (specialCategory) {
    const filterDeep = filter(services, "special");
    specialCategory.push(filterDeep);
  }

  const toggleFilter = (tag) => {
    const filtersClone = JSON.parse(JSON.stringify(filters));

    const currentIndex = filtersClone.indexOf(tag);

    if (currentIndex === -1) {
      filtersClone.push(tag);
    } else {
      filtersClone.splice(currentIndex, 1);
    }

    setRendering(true);
    setFilters(filtersClone);
  };

  let visibleArticleCount = 0;

  return (
    <>
      <Layout
        styles={[
          css`
            background: #f0f9ff;
          `,
          tw`min-h-screen relative pt-24 md:pt-0`,
        ]}
      >
        <HeaderImage backgroundImage={backgroundImage} title="Services" />
        <PerspectiveHeader
          setTagsActive={setTagsActive}
          tagsActive={tagsActive}
          setRendering={setRendering}
          setFilters={setFilters}
          tags={tags}
          filters={filters}
          toggleFilter={toggleFilter}
        />

        <ServicesItem
          rendering={rendering}
          articles={articles}
          specialCategory={specialCategory}
          filters={filters}
          visibleArticleCount={visibleArticleCount}
          isDesktop={isDesktop}
        />
      </Layout>

      <Footer />
    </>
  );
};

export default ServicesLayout;
