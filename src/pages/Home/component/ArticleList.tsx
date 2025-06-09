import { useEffect, useState } from 'react';
import type { Article } from '../../../interface/interface';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import {
  Heart,
  MessageCircle,
  Share2,
  Clock,
  User,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';

const ArticleList = ({ articles }: { articles: Article[] }) => {
  const [articleList, setArticleList] = useState(articles);
  const [articleExpandList, setArticleExpandList] = useState(new Set());
  useEffect(() => {
    setArticleList(articles);
  }, [articles]);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };
  const getWordCount = (text: string) => {
    // 中文字符 + 英文单词
    const chineseChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
    const englishWords = (text.match(/[a-zA-Z]+/g) || []).length;
    return chineseChars + englishWords;
  };
  const shouldHide = (text: string) => getWordCount(text) > 150;
  const getHidedText = (text: string) => text.slice(0, 150);
  const getUpVotes = (votes: any[]) => {
    return votes.filter((vote) => vote.voteType === 'Upvote').length;
  };
  const isHiding = (articleId: number) => !articleExpandList.has(articleId);
  const toggleExpanded = (articleId: number) => {
    setArticleExpandList((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(articleId)) {
        newSet.delete(articleId);
      } else {
        newSet.add(articleId);
      }
      return newSet;
    });
  };
  return (
    <div className="h-full w-full mx-auto">
      <div className="space-y-1">
        {articleList.map((article) => (
          <Card
            key={article.id}
            className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500 gap-1 py-3">
            <CardHeader className="pt-0">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={article.memberPostedBy.avatar} />
                    <AvatarFallback>
                      <User className="h-3 w-3" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium">
                    {article.memberPostedBy.username}
                  </span>
                </div>

                <Separator orientation="vertical" className="h-4" />

                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{formatDate(article.dateCreated)}</span>
                </div>

                <Separator orientation="vertical" className="h-4" />
              </div>
            </CardHeader>
            <CardContent className="pb-3 px-12">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold leading-tight text-gray-900 hover:text-blue-600 cursor-pointer transition-colors">
                    {article.title}
                  </h3>
                  <p className={`text-gray-600 mt-2 leading-relaxed `}>
                    {isHiding(article.id)
                      ? getHidedText(article.content)
                      : article.content}
                  </p>
                  {shouldHide(article.content) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpanded(article.id)}
                      className="mt-2 h-auto p-0 text-blue-600 hover:text-blue-800 hover:bg-transparent font-medium transition-colors">
                      {!isHiding(article.id) ? (
                        <div className="flex items-center space-x-1">
                          <span>收起</span>
                          <ChevronUp className="h-4 w-4" />
                        </div>
                      ) : (
                        <div className="flex items-center space-x-1">
                          <span>展开更多</span>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      )}
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>

            <CardFooter className="pt-0">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-1">
                  <Button variant="ghost" size="sm" className="h-8 px-0 ps-0">
                    <Heart className="h-4 w-4 mr-0 px-0" />
                    点赞 ({getUpVotes(article.votes)})
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-0">
                    <MessageCircle className="h-4 w-4 mr-0 px-0" />
                    评论 ({article.comments.length})
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-0">
                    <Share2 className="h-4 w-4 mr-0 px-0" />
                    分享
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      {articleList.length === 0 && (
        <Card className="p-12 text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-gray-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">暂无文章</h3>
              <p className="text-gray-500 mt-1">
                还没有人发布文章，成为第一个吧！
              </p>
            </div>
            <Button>发布文章</Button>
          </div>
        </Card>
      )}
    </div>
  );
};
export default ArticleList;
