/** @jsxImportSource @emotion/react */

import React from "react";
import tw, { css } from "twin.macro";
import * as A from "../../../components/styles/Animations.jsx";
import Grid from "../../../components/styles/Grid.jsx";
import AllPerspectiveItemsList from "./AllPerspectiveItemsList.jsx";

const AllPerspectiveItems = ({
  rendering,
  articles,
  specialCategory,
  filters,
  visibleArticleCount,
  isDesktop,
  submitted,
  submitting,
  onSubmit,
  submitRef,
  setEmail,
  submitProxy,
}) => {
  console.log("articles::", articles);
  return (
    <div css={[tw`relative pt-8 pb-32`]}>
      {!rendering && articles && (
        <ul css={[tw`relative`]}>
          {articles.map((article) => {
            const key = article?.slug;

            let isSpecialCategory = false;
            let visible = true;
            specialCategory.forEach((artc) => {
              if (!artc[0]?.id || isSpecialCategory) {
                return;
              }

              artc.forEach((specialCategoryArticle) => {
                if (isSpecialCategory) {
                  return;
                }

                if (article?.category === specialCategoryArticle?.category) {
                  isSpecialCategory = true;
                }
              });
            });

            if (filters?.[0]) {
              visible = false;

              filters.forEach((filter) => {
                if (visible) {
                  return;
                }

                visible = article.map((tags) => tags.name).includes(filter);
              });
            }

            if (visible) {
              visibleArticleCount += 1;
            }

            const articleTags = [article?.tags];

            console.log("articleTags", articleTags);

            if (articleTags?.[0]) {
              articleTags.sort();
            }

            return (
              <AllPerspectiveItemsList
                key={key}
                visibleArticleCount={visibleArticleCount}
                visible={visible}
                article={article}
                articleTags={articleTags}
                isDesktop={isDesktop}
                isCustomCategory={isSpecialCategory}
                submitted={submitted}
                submitting={submitting}
                onSubmit={onSubmit}
                submitRef={submitRef}
                setEmail={setEmail}
                submitProxy={submitProxy}
              />
            );
          })}
        </ul>
      )}
      <Grid>
        <div
          css={[
            css`
              transition: opacity 0.3s ${A.EASING_CUBIC};

              height: 2px;
              opacity: ${rendering ? `0` : `1`};
            `,
            tw`col-span-12 bg-blue-900`,
          ]}
        />
      </Grid>
    </div>
  );
};

export default AllPerspectiveItems;
