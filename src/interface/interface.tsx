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
export interface Article {
  title: string;
}
