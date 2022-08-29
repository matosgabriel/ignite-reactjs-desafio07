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
      <ModalContent>
        <ModalBody align="center" justify="center">
          {/* <Flex
            
            // backgroundImage="https://media.moneytimes.com.br/uploads/2021/12/shiba-inu2.jpg"
            backgroundImage="https://media.moneytimes.com.br/uploads/2021/12/shiba-inu2.jpg"
          /> */}

          <Image
            src={imgUrl}
            maxW="900px"
            maxH="600px"
            w="auto"
            h="auto"
            objectFit="contain"
            mt="5"
          />
        </ModalBody>

        <ModalFooter>Abrir original</ModalFooter>
      </ModalContent>
    </Modal>
  );
}
