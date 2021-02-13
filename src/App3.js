// import { Header, Footer } from "./components";
import ReactMarkdown from "react-markdown";
import { resume_info } from "./data/markdown";

const App3 = () => {
  return (
    <div className="home">
      {/* <Header /> */}

      <div id="content">
        <ReactMarkdown source={resume_info} />
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default App3;