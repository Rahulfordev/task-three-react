/* eslint-disable react/prop-types */
import NewsFeed from "./NewsFeed";
import './book.css';
const NewsArticle = ({ bookInfo }) => {
  let bookDetails = bookInfo.map((book, index) => (
    <NewsFeed key={index} books={book} />
  ));
  return <section className="book">{bookDetails}</section>;
};

export default NewsArticle;
