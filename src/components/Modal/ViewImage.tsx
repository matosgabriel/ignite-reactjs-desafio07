import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
  Flex,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      orientation="vertical"
      size="5xl"
      isCentered
    >
      <ModalOverlay />
      <ModalContent bg="pGray.800">
        <ModalBody align="center" justify="center">
          <Image
            src={imgUrl}
            maxW="900px"
            maxH="600px"
            w="100%"
            h="100%"
            objectFit="contain"
            mt="5"
          />
        </ModalBody>

        <ModalFooter>Abrir original</ModalFooter>
      </ModalContent>
    </Modal>
  );
}
