// src/api/userApi.ts
import type { Response, User } from '../interface/interface';
import { get, post } from './axios';

// 获取用户列表
export const fetchUsers = () => get<User[]>('/users');

// 创建用户
export const createUser = (user: {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}) => post<Response>('/users/new', user);

export const getArticles = () => post<Response>('/users/getArticles');
