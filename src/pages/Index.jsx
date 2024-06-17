import { Container, VStack, Heading, Text, Button, Box, Flex, Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import developerCommunity from "../../public/images/developer-community.jpg";
import joinTeam from "../../public/images/join-team.jpg";
import codingSession from "../../public/images/coding-session.jpg";
import techConference from "../../public/images/tech-conference.jpg";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} textAlign="center">
        <Image src={developerCommunity} alt="Developer Community" borderRadius="md" mb={8} />
        <Heading as="h1" size="2xl">Join Our Developer Community</Heading>
        <Text fontSize="lg">We are looking for talented programmers to join our team and work on exciting projects.</Text>
        <Image src={codingSession} alt="Coding Session" borderRadius="md" mt={8} />
        <Image src={joinTeam} alt="Join Our Team" borderRadius="md" mt={8} />
        <Image src={techConference} alt="Tech Conference" borderRadius="md" mt={8} />
        <Button colorScheme="teal" size="lg">Get Started</Button>
        <Flex justifyContent="center" width="100%" mt={8}>
          <Box as="a" href="https://github.com" target="_blank" mx={2}>
            <FaGithub size="2em" />
          </Box>
          <Box as="a" href="https://linkedin.com" target="_blank" mx={2}>
            <FaLinkedin size="2em" />
          </Box>
          <Box as="a" href="https://twitter.com" target="_blank" mx={2}>
            <FaTwitter size="2em" />
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;