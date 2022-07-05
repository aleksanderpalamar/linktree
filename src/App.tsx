import { Box, Img, Text } from "@chakra-ui/react";
import {
  AppWindow,
  Envelope,
  InstagramLogo,
  TwitchLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";
import { SocialButton } from "./components/Buttons/SocialButton";

function App() {
  return (
    <>
      <Box
        as="main"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt="20"
      >
        <Img
          src="/images/ching.png"
          w="calc(3rem + 32px)"
          h="calc(3rem + 32px)"
          borderRadius={8}
          border="4px solid #202024"
          outline="3px solid #FFCF00"
          objectFit="cover"
          alt="Profile image"
        />
        <Text
          as="h1"
          fontWeight="bold"
          fontSize="2xl"
          lineHeight="1.2"
          display="block"
          mt="4"
        >
          Ching_13
          <Text
            as="h2"
            fontSize="sm"
            color="gray.300"
            display="flex"
            alignItems="center"
            gap="2"
          >
            <Envelope size="24" />
            vinicius.ching@hotmail.com
          </Text>
        </Text>
        <Box as="section" mt="20">
          <SocialButton
            url="https://www.instagram.com/vbchiing/"
            title="Instagram"
            icon={InstagramLogo}
            alt="Instagram"
          />
          <SocialButton
            url="https://www.twitch.tv/ching_13"
            title="Twitch"
            icon={TwitchLogo}
            alt="Twitch"
          />
          <SocialButton
            url="https://twitter.com/Chiinng"
            title="Twitter"
            icon={TwitterLogo}
            alt="Twitter"
          />
          <SocialButton
            url=""
            title="Youtube"
            icon={YoutubeLogo}
            alt="Youtube"
          />
          <SocialButton
            url=""
            title="Portfolio"
            icon={AppWindow}
            alt="Portfolio"
          />
        </Box>
      </Box>      
    </>
  );
}

export default App;
