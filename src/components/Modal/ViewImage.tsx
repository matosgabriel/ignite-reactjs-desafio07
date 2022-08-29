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
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        bg="pGray.800"
        w="auto"
        maxW="900px"
        p="0"
        overflow="hidden"
      >
        <ModalBody align="center" justify="center" p="0">
          <Image
            src={imgUrl}
            maxW="900px"
            maxH="600px"
            w="auto"
            h="auto"
            objectFit="cover"
            objectPosition="center"
          />
        </ModalBody>

        <ModalFooter flexFlow="row-reverse">
          <Link href={imgUrl} target="_blank">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
