import PageWrapper from '../components/PageWrapper';
import {useComments} from '../hooks';
import {PostDetailsNav} from '../navigation/types';

const PostDetails = ({route}: PostDetailsNav) => {
  const {id} = route.params;
  // const {data, isPending, isError, error} = useComments(id);

  return <PageWrapper title="Post Details" isShowBack></PageWrapper>;
};

export default PostDetails;
