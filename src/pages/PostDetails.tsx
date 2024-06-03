import {FlatList} from 'react-native';
import {
  CommentCard,
  CustomText,
  Loader,
  PageError,
  PostCard,
} from '../components';
import PageWrapper from '../components/PageWrapper';
import {useComments} from '../hooks';
import {PostDetailsNav} from '../navigation/types';

const PostDetails = ({route}: PostDetailsNav) => {
  const {post} = route.params;
  const {data, isPending, isError, error, isLoading} = useComments(post.id);

  const renderPost = () => {
    if (isError) return <PageError message={error?.message} />;

    return (
      <FlatList
        className="w-full px-4"
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id?.toString()}
        renderItem={({item}) => <CommentCard item={item} />}
        ListHeaderComponent={
          <PostCard
            item={post}
            className="p-0 border-b-2 pb-2 mb-2 border-primary"
          />
        }
        ListEmptyComponent={
          isPending ? (
            <Loader />
          ) : (
            <CustomText>No comments was found!</CustomText>
          )
        }
      />
    );
  };

  return (
    <PageWrapper title="Post Details" isShowBack>
      {renderPost()}
    </PageWrapper>
  );
};

export default PostDetails;
