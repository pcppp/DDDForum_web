import { useEffect, useState } from 'react';
import { getArticles } from '../../../api/api';

const ArticleList = () => {
  useEffect(() => {});
  const [articleList, setArticleList] = useState();
  function getArticleList() {
    try {
      const res = getArticles();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="flex items-center col-auto w-4/5 h-full p-12"></div>
    </>
  );
};
export default ArticleList;
