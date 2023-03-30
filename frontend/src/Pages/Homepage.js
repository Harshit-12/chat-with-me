import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import '../App.css'
function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) history.push("/chats");
  }, [history]);

  return (
    <div className="test">
    <Container maxW="xl" centerContent>
        <Box
          bg="transparent"
        d="flex"
        justifyContent="center"
        p={3}
        // bg="white"
        w="100%"
          m="40px 0 15px 0"
          // border=""
        // borderRadius="lg"
        // borderWidth="1px"
      >
        <Text align="center" color="white" fontSize="4xl" fontFamily="Trebuchet MS" >
          Chat With Me
        </Text>
      </Box>
      <Box bg="transparent" w="100%" p={4}>
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab bg="transparent" color="white">Login</Tab>
            <Tab bg="transparent" color="white">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      </Container>
      </div>
  );
}

export default Homepage;