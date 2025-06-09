import ArticleList from './component/ArticleList';
import ArticleSwitcher from './component/ArticleSwitcher';
import { mockArticles } from '../../mock/articles';

const Home = () => {
  const articles = mockArticles;
  return (
    <div className="h-full w-3/5 mx-auto min-h-0">
      <div className="h-full flex items-center justify-center w-full ">
        <div>
          <ArticleSwitcher></ArticleSwitcher>
        </div>
        <div className="h-full w-full  flex-[5] px-1  overflow-y-auto no-scrollbar">
          <div className="flex items-center justify-between">
            {articles && <ArticleList articles={articles}></ArticleList>}
          </div>
        </div>
        <div className="h-full w-full  flex-[2] p-1">
          <div className="bg-white h-full w-full"></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
