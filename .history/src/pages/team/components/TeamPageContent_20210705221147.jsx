/** @jsxImportSource @emotion/react */

import React from "react";
import tw from "twin.macro";
import Grid from "../../../components/styles/Grid.jsx";
import * as T from "../../../components/styles/Typography.jsx";
import TitleJSX from "../../../components/Title";

const TeamPageContent = ({ teamDesc }) => (
  <>
    <section css={[tw`pt-20 md:pt-48 pb-0 md:pb-0`]}>
      <TitleJSX
        teamDesc={teamDesc && teamDesc.map((value) => value.acf.sub_title)}
      />
    </section>
    <section css={[tw`pt-20 md:pt-10 pb-32 md:pb-48`]}>
      <TitleJSX
        teamDesc={
          teamDesc &&
          teamDesc.map((value) => {
            console.log("valueee", value);
          })
        }
      />
    </section>

    {teamDesc && (
      <Grid>
        <div
          css={[
            tw`col-span-12 md:col-span-5 md:col-start-7 mb-32 md:mb-48 whitespace-pre-wrap text-gray-900`,
          ]}
        >
          <T.Body font="2">
            <span
              dangerouslySetInnerHTML={{
                __html: teamDesc.description,
              }}
            />
          </T.Body>
        </div>
      </Grid>
    )}
  </>
);

export default TeamPageContent;
