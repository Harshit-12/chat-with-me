import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
  Center,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
          <IconButton marginLeft={{ base: "55%", md: "70%" }} d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay />
              <Center>
        <ModalContent h="410px">
          <ModalHeader
            fontSize="40px"
            fontFamily="Work sans"
            d="flex"
            justifyContent="center"
            textAlign="center"
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            d="flex"
            flexDir="column"
                          alignItems="center"
                          
            justifyContent="space-between"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              marginLeft={150}
              src={user.pic}
              alt={user.name}
            />
            <Text
              fontSize={{ base: "20px", md: "25px" }}
                              fontFamily="Work sans"
                              textAlign="center"
                              marginTop={10}
            >
              Email: {user.email}
            </Text>
          </ModalBody>
          <ModalFooter>
                          <Button
                              colorScheme="pink"
                              onClick={onClose}>Close</Button>
          </ModalFooter>
                  </ModalContent>
                  </Center>
      </Modal>
    </>
  );
};

export default ProfileModal;