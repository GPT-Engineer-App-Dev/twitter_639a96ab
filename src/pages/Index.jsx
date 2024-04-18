import React, { useState } from "react";
import { Box, VStack, HStack, Avatar, Text, Heading, Textarea, Button, Divider, IconButton, Input } from "@chakra-ui/react";
import { FaTwitter, FaHome, FaBell, FaEnvelope, FaUser } from "react-icons/fa";

const Index = () => {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState("");

  const handleTweetSubmit = () => {
    if (newTweet.trim() !== "") {
      setTweets([...tweets, { id: Date.now(), content: newTweet }]);
      setNewTweet("");
    }
  };

  return (
    <Box maxW="600px" mx="auto" py={8}>
      <HStack justify="space-between" mb={8}>
        <IconButton icon={<FaTwitter />} fontSize="2xl" variant="ghost" />
        <HStack spacing={4}>
          <IconButton icon={<FaHome />} variant="ghost" />
          <IconButton icon={<FaBell />} variant="ghost" />
          <IconButton icon={<FaEnvelope />} variant="ghost" />
          <Avatar size="sm" name="John Doe" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMzQwOTE3OHww&ixlib=rb-4.0.3&q=80&w=1080" />
        </HStack>
      </HStack>

      <VStack spacing={4} align="stretch">
        <HStack>
          <Avatar name="John Doe" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMzQwOTE3OHww&ixlib=rb-4.0.3&q=80&w=1080" />
          <Textarea placeholder="What's happening?" value={newTweet} onChange={(e) => setNewTweet(e.target.value)} />
        </HStack>
        <Button colorScheme="twitter" onClick={handleTweetSubmit}>
          Tweet
        </Button>
      </VStack>

      <Divider my={8} />

      <VStack spacing={6} align="stretch">
        {tweets.map((tweet) => (
          <Box key={tweet.id}>
            <HStack>
              <Avatar size="sm" name="John Doe" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMzQwOTE3OHww&ixlib=rb-4.0.3&q=80&w=1080" />
              <VStack align="start" spacing={0}>
                <HStack>
                  <Text fontWeight="bold">John Doe</Text>
                  <Text color="gray.500">@johndoe</Text>
                </HStack>
                <Text>{tweet.content}</Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
