/* eslint-disable react/prop-types */
/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import tw, { css } from "twin.macro";
import { DocumentContext } from "../../../context/DocumentContext.jsx";
import Layout from "../../../components/Layout.jsx";
import { filter } from "../../utils";
import Footer from "../../../components/Footer.jsx";
import PerspectiveHeader from "./PerspectiveHeader.jsx";
import AllPerspectiveItems from "./AllPerspectiveItems.jsx";
import backgroundImage from "../images/pattern-1.jpg";
import HeaderImage from "../../../components/HeaderImage.jsx";
import { servicesData } from "../servicesData.js";

const PerspectivesLayout = () => {
  const { isDesktop, scrollTop } = useContext(DocumentContext);

  const submitRef = useRef();

  const [perspectives, setPerspectives] = useState([]);

  const [email, setEmail] = useState(null);
  const [filters, setFilters] = useState([]);
  const [rendering, setRendering] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [tagsActive, setTagsActive] = useState(false);

  useEffect(() => {
    setPerspectives(servicesData);
  }, []);

  const articles = [];
  const tags = [];

  console.log("Services", servicesData);

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
    perspectives.map((category) => arrayCat.push(category));
  }, [arrayCat, perspectives]);

  if (perspectives) {
    perspectives.forEach((node) => {
      articles.push(node);

      if (node.categories) {
        node._embedded["wp:term"][0]
          .map((tags) => tags.name)
          .forEach((tag) => {
            tags.push(tag);
          });
      }
    });
  }

  tags.sort();

  const deepDives = [];

  if (deepDives) {
    const filterDeep = filter(perspectives, "deep");
    deepDives.push(filterDeep);
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

  const submitProxy = () => {
    if (submitRef?.current) {
      submitRef.current.click();
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || email === `` || submitting || submitted) {
      return false;
    }

    if (
      typeof window !== `undefined` &&
      window.location.href.includes(`localhost:8000`)
    ) {
      setSubmitting(true);

      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
      }, 3000);

      return false;
    }

    setSubmitting(true);

    const mailchimpData = {
      email,
    };

    fetch(`${process.env.GATSBY_NETLIFY_FUNCTIONS}/mailchimp`, {
      body: JSON.stringify(mailchimpData),
      method: `POST`,
    })
      .then(() => {
        setSubmitting(false);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error(error);
      });

    return false;
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

        <AllPerspectiveItems
          rendering={rendering}
          articles={articles}
          deepDives={deepDives}
          filters={filters}
          visibleArticleCount={visibleArticleCount}
          isDesktop={isDesktop}
          submitted={submitted}
          submitting={submitting}
          onSubmit={onSubmit}
          submitRef={submitRef}
          setEmail={setEmail}
          submitProxy={submitProxy}
        />
      </Layout>

      <Footer />
    </>
  );
};

export default PerspectivesLayout;
