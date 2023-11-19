import bookData from "./data.json";
import "./App.css";
import NewsArticle from "./components/articles/NewsArticle";

function App() {
  return (
    <>
      <div>
        <NewsArticle bookInfo={bookData} />
      </div>
    </>
  );
}

export default App;
