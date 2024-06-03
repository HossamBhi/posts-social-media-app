import {useQuery} from '@tanstack/react-query';
import axios, {AxiosError} from 'axios';
import {PostType} from '../utils/types';

const useComments = (id: PostType['id']) =>
  useQuery<PostType[], Error>({
    queryKey: ['Comments'],
    queryFn: () => fetchComments(id),
  });

const fetchComments = async (id: PostType['id']) => {
  try {
    const {data} = await axios.get(`public/v2/posts/${id}/comments`);
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

export default useComments;
