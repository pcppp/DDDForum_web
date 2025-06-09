export interface User {
  userId: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}
export interface Response {
  message: string;
  data: User;
  success: boolean;
}

export interface Vote {
  id: number;
  postId: number;
  voteType: 'Upvote' | 'Downvote';
}
export interface Comment {
  id: number;
  content: string;
  author: string;
  dateCreated: string;
}
export interface Article {
  id: number;
  title: string;
  content: string;
  dateCreated: string;
  memberPostedBy: {
    id: number;
    username: string;
    avatar?: string;
  };
  comments: Comment[];
  votes: Vote[];
}
