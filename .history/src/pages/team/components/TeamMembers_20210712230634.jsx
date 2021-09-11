/** @jsxImportSource @emotion/react */

import React from "react";
import tw, { css } from "twin.macro";
import Grid from "../../../components/styles/Grid.jsx";
import * as A from "../../../components/styles/Animations.jsx";
import TeamMember from "./TeamMember";

const TeamMembers = ({ setActiveTeamMember, member }) => (
  <>
    <section
      css={[
        css`
          ${A.Keyframes(`appear`, `1s ${A.EASING_CUBIC} forwards`, `0.25s`)}
        `,
        tw`pt-32 md:pt-64`,
      ]}
    >
      <Grid node="ul">
        {member &&
          member.map((teamMember, teamMemberIndex) => {
            return (
              <TeamMember
                teamMember={teamMember}
                setActiveTeamMember={setActiveTeamMember}
                teamMemberIndex={teamMemberIndex}
              />
            );
          })}
      </Grid>
    </section>
  </>
);

export default TeamMembers;
