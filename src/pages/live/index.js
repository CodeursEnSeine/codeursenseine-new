import React from "react";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import { Box, Stack, Heading } from "@chakra-ui/react";
import Layout from "components/layout";

import Seo from "components/seo";
import RedirectCodeursEnSeine from "components/RedirectCodeursEnSeine";

const Meetups = ({ data }) => {
  if (process.env.GATSBY_ARCHIVE) {
    return <RedirectCodeursEnSeine path="/live" />;
  }

  return (
    <Layout theme="twitch">
      <Seo
        title="Live"
        meta={[
          {
            property: `og:image`,
            content: `${process.env.GATSBY_ORIGIN}/images/meetups/social.jpg`,
          },
        ]}
      />
      <Box>
        <Stack spacing={6}>
          <Heading as="h1" mb={6}>
            Live Twitch
          </Heading>
        </Stack>
        <ReactTwitchEmbedVideo channel="codeursenseine" width="100%" />
      </Box>
    </Layout>
  );
};

export default Meetups;
