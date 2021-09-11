/** @jsxImportSource @emotion/react */

import React from "react";
import tw, { css, theme } from "twin.macro";
import * as A from "../../../components/styles/Animations.jsx";
import * as T from "../../../components/styles/Typography.jsx";

const TeamMember = ({ teamMember, setActiveTeamMember, teamMemberIndex }) => (
  <li
    key={teamMember.title.toLowerCase().replace(/ /g, `-`)}
    css={[
      css`
        &:hover {
          @media screen and (min-width: 1024px) {
            article {
              transform: scale(1);
              opacity: 1;
            }

            figure {
              transform: scale(0.975);
            }
          }
        }

        border-radius: 20px;

        figure {
          transition: transform 0.3s ${A.EASING_CUBIC};

          transform: scale(1);
        }

        article {
          transition: opacity 0.3s ${A.EASING_CUBIC},
            transform 0.3s ${A.EASING_CUBIC};

          opacity: 0;
          transform: scale(1.05);
        }
      `,
      tw`col-span-6 md:col-span-4 relative block overflow-hidden mb-8 md:mb-5`,
    ]}
  >
    <div
      css={[
        css`
          @media screen and (min-width: 1025px) {
            padding-bottom: 83.333%;
          }
        `,
        tw`relative`,
      ]}
    >
      <button
        type="button"
        onClick={() => setActiveTeamMember(teamMember)}
        css={[
          css`
            @media (max-width: 776px) {
              height: 185px;
            }
          `,
          tw`w-full md:h-full md:absolute md:top-0 md:right-0 md:bottom-0 md:left-0`,
        ]}
      >
        {(teamMember.image && (
          <figure
            css={[
              tw`w-full md:h-full md:absolute md:top-0 md:right-0 md:bottom-0 md:left-0`,
            ]}
          >
            <img
              src={teamMember.image}
              css={[
                css`
                  @media (max-width: 776px) {
                    height: 185px;
                  }
                `,
                tw`w-full h-full relative block object-cover`,
              ]}
              alt={teamMember.title}
            />
          </figure>
        )) || (
          <div
            css={[
              tw`w-full h-full absolute top-0 right-0 bottom-0 left-0 border`,
            ]}
          />
        )}

        <div
          css={[
            css`
              ${A.Keyframes(`disappear`, `1s ${A.EASING_CUBIC} forwards`, `1s`)}
              animation-delay: ${0.75 + teamMemberIndex * 0.125}s;

              background: ${theme`colors`[teamMember.backgroundColor || "red"]};
            `,
            tw`w-full h-full absolute top-0 right-0 bottom-0 left-0 z-20 pointer-events-none`,
          ]}
        />

        <article
          css={[
            css`
              @media (max-width: 776px) {
                height: auto;
                h2,
                p {
                  font-size: 16px;
                  display: none;
                }
              }
              background-color: ${teamMember.backgroundColor || "#e5e7eb"};
              background-image: -webkit-gradient(
                linear,
                left top,
                left bottom,
                color-stop(10%, ${teamMember.backgroundColor || "#f6004c"}),
                to(${teamMember.gradientColor})
              );
              background-image: -webkit-linear-gradient(
                ${teamMember.backgroundColor || "#f6004c"} 10%,
                ${teamMember.gradientColor}
              );
              background-image: linear-gradient(
                ${teamMember.backgroundColor || "#f6004c"} 10%,
                ${teamMember.gradientColor}
              );
              // background: ${teamMember.backgroundColor || "#e5e7eb"};
              color: ${teamMember.textColor || "black"};
            `,
            tw`w-full h-full relative z-10 flex flex-col items-center justify-center px-8`,
          ]}
        >
          <T.Heading font="b1">{teamMember.title}</T.Heading>

          <T.Body font="2" styles={[tw`mt-2`]}>
            {teamMember.role}
          </T.Body>
        </article>
      </button>

      <>
        <div
          css={[
            css`
              @media (max-width: 776px) {
                height: auto;
                p {
                  font-size: 16px;
                }
                span {
                  font-size: 12px;
                }
              }
            `,
            tw`col-span-12 md:col-span-3 mb-4 md:mb-0`,
          ]}
        >
          <T.Body
            font="2"
            styles={[
              css`
                @media (max-width: 776px) {
                  height: auto;
                  h2,
                  p {
                    font-size: 16px;
                  }
                }
              `,
              tw`mt-1`,
            ]}
          >
            {teamMember.title}
          </T.Body>
          <T.Caption
            styles={[
              css`
                @media (max-width: 776px) {
                  font-size: 16px;
                  h2,
                  p {
                    font-size: 16px;
                  }
                }
              `,
              tw`block`,
            ]}
            weight={300}
          >
            {teamMember.role}
          </T.Caption>
        </div>
      </>
    </div>
  </li>
);

export default TeamMember;
