import HomeContent from "./home-content";
import Navbar from "./navbar";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <div className=" m-auto">
        <HomeContent />
      </div>
    </div>
  );
};

export default MainPage;
