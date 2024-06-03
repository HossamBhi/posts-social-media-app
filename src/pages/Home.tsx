import React from 'react';
import {FlatList, View} from 'react-native';
import {Loader, PageError, PostCard} from '../components';
import PageWrapper from '../components/PageWrapper';
import { usePosts } from '../hooks';

const Home = () => {
  const {isPending, isError, data, error} = usePosts();

  const renderPosts = () => {
    if (isPending) return <Loader />;

    if (isError) return <PageError message={error.message} />;

    return (
      <FlatList
        className="w-full"
        data={data}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({item}) => <PostCard item={item} />}
        ItemSeparatorComponent={() => (
          <View className="w-full h-[1px] bg-primary my-2" />
        )}
      />
    );
  };

  return <PageWrapper title="Posts">{renderPosts()}</PageWrapper>;
};

export default Home;
