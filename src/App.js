import "./App.css";
import Header from "./Header";
import RecommendedVideo from "./RecommendedVideo";
import SideBar from "./SideBar";
import Categories from "./Categories";
function App() {
  return (
    <div className="App">
      <Header />

      <div className="app_page">
        <SideBar />
        <div className="category">
          <hr />
          <div className="type">
            <Categories selected title="All" />
            <Categories title="Computer programming" />
            <Categories title="website" />
            <Categories title="Computers" />
            <Categories title="Cryptocurrency" />
            <Categories title="Job interviews" />
            <Categories title="Comedies" />
            <Categories title="Viral Videos" />
          </div>
          <hr />
          <RecommendedVideo />
        </div>
      </div>
    </div>
  );
}

export default App;
