import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Stack, SimpleGrid } from "@chakra-ui/core";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import { SpeakerCard } from "components/Speakers/_partials/SpeakerCard";

export const Speakers = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "speakers" } }
      ) {
        nodes {
          childMdx {
            frontmatter {
              name
              image {
                publicURL
              }
              company
              bio
              References
              twitterLink
              githubLink
            }
            body
          }
        }
      }
    }
  `);

  dayjs.locale("fr");

  const speakers = data.allFile.nodes.filter(speaker => speaker.childMdx);

  return (
    <Stack my={5}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5}>
        {speakers.map((speaker, index) => (
          <SpeakerCard key={`speaker-${index}`} speaker={speaker} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};