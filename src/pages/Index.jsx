import { Container, VStack, Heading, Text, Button, Box, Flex, Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl">Join Our Developer Community</Heading>
        <Text fontSize="lg">We are looking for talented programmers to join our team and work on exciting projects.</Text>
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