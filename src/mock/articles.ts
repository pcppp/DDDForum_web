import type { Article } from '../interface/interface';

const mockArticles: Article[] = [
  {
    id: 1,
    title: '理解领域驱动设计中的聚合根',
    content:
      '聚合根是DDD中的核心概念，它定义了事务边界和数据一致性规则,事件溯源是一种强大的数据存储模式，特别适合于微服务架构,事件溯源是一种强大的数据存储模式，特别适合于微服务架构,聚合根是DDD中的核心概念，它定义了事务边界和数据一致性规则,事件溯源是一种强大的数据存储模式，特别适合于微服务架构,事件溯源是一种强大的数据存储模式，特别适合于微服务架构',
    dateCreated: '2024-06-08T10:00:00Z',
    memberPostedBy: {
      id: 1,
      username: '张三',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zhangsan',
    },
    comments: [
      {
        id: 1,
        content: '这篇文章写得很好，对聚合根的解释很清晰！',
        author: '李四',
        dateCreated: '2024-06-08T11:30:00Z',
      },
      {
        id: 2,
        content: '能否分享一些实际项目中的应用案例？',
        author: '王五',
        dateCreated: '2024-06-08T14:20:00Z',
      },
    ],
    votes: [
      { id: 1, postId: 1, voteType: 'Upvote' },
      { id: 2, postId: 1, voteType: 'Upvote' },
      { id: 3, postId: 1, voteType: 'Downvote' },
    ],
  },
  {
    id: 2,
    title: '微服务架构中的事件溯源模式',
    content: '事件溯源是一种强大的数据存储模式，特别适合于微服务架构',
    dateCreated: '2024-06-07T15:30:00Z',
    memberPostedBy: {
      id: 2,
      username: '架构师Alex',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
    },
    comments: [
      {
        id: 3,
        content: '事件溯源确实很强大，但实施起来有哪些挑战？',
        author: '小明',
        dateCreated: '2024-06-07T16:45:00Z',
      },
    ],
    votes: [
      { id: 4, postId: 2, voteType: 'Upvote' },
      { id: 5, postId: 2, voteType: 'Upvote' },
      { id: 6, postId: 2, voteType: 'Upvote' },
      { id: 7, postId: 2, voteType: 'Upvote' },
    ],
  },
  {
    id: 3,
    title: 'CQRS模式的实践与思考',
    content: '命令查询职责分离（CQRS）是DDD中的重要模式，本文分享实践经验',
    dateCreated: '2024-06-06T09:15:00Z',
    memberPostedBy: {
      id: 3,
      username: '技术专家',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=expert',
    },
    comments: [
      {
        id: 4,
        content: 'CQRS确实能解决很多复杂查询的问题',
        author: '开发者A',
        dateCreated: '2024-06-06T10:30:00Z',
      },
      {
        id: 5,
        content: '什么时候应该选择CQRS，什么时候不应该？',
        author: '新手小白',
        dateCreated: '2024-06-06T12:00:00Z',
      },
      {
        id: 6,
        content: '感谢分享，很有启发性！',
        author: '学习者',
        dateCreated: '2024-06-06T14:20:00Z',
      },
    ],
    votes: [
      { id: 8, postId: 3, voteType: 'Upvote' },
      { id: 9, postId: 3, voteType: 'Upvote' },
    ],
  },
  {
    id: 4,
    title: '如何在团队中推广DDD实践',
    content:
      '很多团队想要采用DDD，但往往不知道从何开始。本文分享一些实用建议,命令查询职责分离（CQRS）是DDD中的重要模式，本文分享实践经验,命令查询职责分离（CQRS）是DDD中的重要模式，本文分享实践经验,命令查询职责分离（CQRS）是DDD中的重要模式，本文分享实践经验',
    dateCreated: '2024-06-05T13:45:00Z',
    memberPostedBy: {
      id: 4,
      username: '团队Leader',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=leader',
    },
    comments: [],
    votes: [
      { id: 10, postId: 4, voteType: 'Upvote' },
      { id: 11, postId: 4, voteType: 'Upvote' },
      { id: 12, postId: 4, voteType: 'Upvote' },
      { id: 13, postId: 4, voteType: 'Downvote' },
    ],
  },
  {
    id: 5,
    title: '值对象设计的最佳实践',
    content:
      '值对象是DDD中被低估的概念之一，正确使用值对象可以大大提升代码质量',
    dateCreated: '2024-06-04T08:20:00Z',
    memberPostedBy: {
      id: 5,
      username: '代码工匠',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=craftsman',
    },
    comments: [
      {
        id: 7,
        content: '值对象的不可变性确实很重要！',
        author: '函数式爱好者',
        dateCreated: '2024-06-04T09:30:00Z',
      },
    ],
    votes: [
      { id: 14, postId: 5, voteType: 'Upvote' },
      { id: 15, postId: 5, voteType: 'Upvote' },
    ],
  },
  {
    id: 6,
    title: '值对象设计的最佳实践',
    content:
      '值对象是DDD中被低估的概念之一，正确使用值对象可以大大提升代码质量,值对象是DDD中被低估的概念之一，正确使用值对象可以大大提升代码质量,值对象是DDD中被低估的概念之一，正确使用值对象可以大大提升代码质量',
    dateCreated: '2024-06-04T08:20:00Z',
    memberPostedBy: {
      id: 6,
      username: '代码工匠',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=craftsman',
    },
    comments: [
      {
        id: 3,
        content: '值对象的不可变性确实很重要！',
        author: '函数式爱好者',
        dateCreated: '2024-06-04T09:30:00Z',
      },
    ],
    votes: [
      { id: 14, postId: 5, voteType: 'Upvote' },
      { id: 15, postId: 5, voteType: 'Upvote' },
    ],
  },
];
export { mockArticles };
