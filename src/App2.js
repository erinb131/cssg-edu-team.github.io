// import { Header, Footer } from "./components";
import ReactMarkdown from "react-markdown";
import { about_info } from "./data/markdown";

const App2 = () => {
  return (
    <div className="home">
      {/* <Header /> */}

      <div id="content">
        <ReactMarkdown source={about_info} />
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default App2;