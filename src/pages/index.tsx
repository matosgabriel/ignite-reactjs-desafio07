import { Button, Box, Spinner } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

interface Image {
  url: string;
  id: string;
  title: string;
  description: string;
  ts: number;
}

interface ImagesReponse {
  data: Image[];
  after: string | null;
}

export default function Home(): JSX.Element {
  // function getNextPageParam(lastPageResponse: ImagesReponse): string | null {
  //   return lastPageResponse.after;
  // }

  const fetchImages = async ({ pageParam = null }): Promise<ImagesReponse> => {
    const response = await api.get(
      `http://localhost:3000/api/images/${
        pageParam != null ? `?after=${pageParam}` : ''
      }`
    );

    return response.data;
  };

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    // TODO AXIOS REQUEST WITH PARAM
    fetchImages,
    // TODO GET AND RETURN NEXT PAGE PARAM
    {
      getNextPageParam: lastPage => (lastPage.after ? lastPage.after : null),
    }
  );

  const formattedData = useMemo(() => {
    // TODO FORMAT AND FLAT DATA ARRAY
    const formatted = [];

    data?.pages.forEach(page => {
      page.data.forEach(image => {
        formatted.push(image);
      });
    });

    return formatted;
  }, [data]);

  // TODO RENDER LOADING SCREEN
  if (isLoading) {
    return <Loading />;
  }

  // TODO RENDER ERROR SCREEN
  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />

        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}
        {hasNextPage && (
          <Button onClick={() => fetchNextPage()} width="140px">
            {isFetchingNextPage ? <Spinner size="sm" /> : 'Carregar mais'}
          </Button>
        )}
      </Box>
    </>
  );
}
