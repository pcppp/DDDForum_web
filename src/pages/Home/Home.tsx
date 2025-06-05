import ArticleList from './component/ArticleList';

const Home = () => {
  return (
    <div className="h-full w-4/5 mx-auto">
      <div className="h-full flex items-center gap-8 justify-center w-full p-12">
        <div className=" h-full w-3/5  flex-[5] p-12">
          <ArticleList></ArticleList>
        </div>
        {/* <div className=" h-full w-3/5 bg-white  flex-[2]"></div> */}
      </div>
    </div>
  );
};
export default Home;
