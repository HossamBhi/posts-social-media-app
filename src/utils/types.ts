export type PostType = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};

export type CommentType = {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
};
