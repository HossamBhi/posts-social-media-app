import {useQuery} from '@tanstack/react-query';
import axios, {AxiosError} from 'axios';
import {PostType} from '../utils/types';

const usePosts = () =>
  useQuery<PostType[], Error>({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
  });

const fetchPosts = async () => {
  try {
    const {data} = await axios.get(`public/v2/posts`);
    return data;
  } catch (error) {
    if (
      error instanceof AxiosError &&
      error.response &&
      error.response.status === 404
    )
      return null;

    throw error;
  }
};

export default usePosts;
