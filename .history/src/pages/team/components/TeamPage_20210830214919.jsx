/* eslint-disable react/prop-types */
/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import tw, { css, theme } from "twin.macro";
import { DocumentContext } from "../../../context/DocumentContext.jsx";
import * as A from "../../../components/styles/Animations.jsx";
import Layout from "../../../components/Layout.jsx";
import Footer from "../../../components/Footer";
import TeamFooter from "../components/TeamFooter.jsx";
import TeamMembers from "../components/TeamMembers.jsx";
import ActiveMember from "../components/ActiveMember";
import TeamPageContent from "../components/TeamPageContent.jsx";
import { useKeyPress } from "../../../utils/hooks";
import { parseQueryString } from "../../utils";
import { teamData, teamDesc as teamContent } from "../teamData.js";
import HeaderImage from "../../../components/HeaderImage.jsx";
import backgroundImage from "../images/pattern-1.jpg";

const TeamPage = () => {
  const { isDesktop } = useContext(DocumentContext);
  const location = useLocation();

  const queryParams = useMemo(
    () => parseQueryString(location.search),
    [location]
  );

  const [activeTeamMember, setActiveTeamMember] = useState(null);
  const [overlayed, setOverlayed] = useState(false);
  const [overlayStyles, setOverlayStyles] = useState({
    background: theme`colors.gray`,
    color: theme`colors.white`,
  });
  const [member, setMembers] = useState([]);
  const [teamDesc, setTeamDesc] = useState([]);

  //GET DATA FROM API
  useEffect(() => {
    setMembers(teamData);
    setTeamDesc(...teamContent);
  }, []);

  const teamMembers = [];

  if (member) {
    member.forEach((teamMember) => {
      teamMembers.push(teamMember);
    });
  }

  const escKeyPressed = useKeyPress(`Escape`);

  useEffect(() => {
    if (escKeyPressed) {
      setActiveTeamMember(false);
    }
  }, [escKeyPressed]);

  useEffect(() => {
    if (member) {
      member.forEach((teamMember) => {
        if (teamMember?.title === queryParams.member) {
          setTimeout(() => {
            setActiveTeamMember(teamMember);
          }, 1000);
        }
      });
    }
  }, [member]);

  useEffect(() => {
    if (activeTeamMember) {
      setOverlayed(true);
      setOverlayStyles({
        background: activeTeamMember.backgroundColor,
        color: activeTeamMember.textColor,
      });
      console.log("overlayStyles useeff", overlayStyles);
    } else {
      setOverlayed(false);
    }
  }, [activeTeamMember]);

  return (
    <>
      <div
        css={[
          css`
            transition: opacity 0.5s ${A.EASING_CUBIC},
              transform 0.5s ${A.EASING_CUBIC};

            opacity: ${overlayed ? `1` : `0`};
            pointer-events: ${overlayed ? `auto` : `none`};
            transform: scale(${overlayed ? `1.025` : `1`});

            background: ${overlayStyles.background || theme`colors.yellow.200`};
            color: ${overlayStyles.color};
          `,
          tw`w-screen h-screen fixed top-0 right-0 bottom-0 left-0 z-50 overflow-y-scroll px-4 md:px-0`,
        ]}
      >
        <ActiveMember
          setActiveTeamMember={setActiveTeamMember}
          overlayStyles={overlayStyles}
          activeTeamMember={activeTeamMember}
        />
      </div>

      <Layout
        styles={[
          css`
            overflow: ${overlayed ? `hidden` : `auto`};
            background: #f0f9ff;
          `,
        ]}
      >
        <HeaderImage backgroundImage={backgroundImage} title="Team Members" />
        <TeamMembers
          setActiveTeamMember={setActiveTeamMember}
          member={member}
        />
        <TeamPageContent teamDesc={teamDesc} />

        <section
          css={[
            css`
              background: #292524;
            `,
            tw`w-full relative pt-4 md:pt-6 pb-4 md:pb-6`,
          ]}
        >
          <TeamFooter isDesktop={isDesktop} />
        </section>

        <Footer />
      </Layout>
    </>
  );
};

export default TeamPage;
