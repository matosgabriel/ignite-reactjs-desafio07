import { Button, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onClose, onOpen } = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [selectedImageUrl, setSeletedImageUrl] = useState();

  // TODO FUNCTION HANDLE VIEW IMAGE
  const handleViewImage = useCallback(() => {
    onOpen();
  }, []);

  return (
    <>
      {/* TODO CARD GRID */}
      <Button onClick={onOpen}>abrir modal</Button>

      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl={selectedImageUrl}
      />
    </>
  );
}
