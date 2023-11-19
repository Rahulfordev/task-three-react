/* eslint-disable react/prop-types */
const NewsFeed = ({ books: { title, author, publicationDate, content } }) => {
  return (
    <div className="book-container">
      <h3>
        <strong><em>Title:</em></strong> {title}
      </h3>
      <h4>
        <strong><em>Author:</em></strong> {author}
      </h4>
      <p>
        <strong><em>Copyright:</em> </strong> {publicationDate}
      </p>
      <p>
        <strong><em>Content:</em></strong> {content}
      </p>
    </div>
  );
};

export default NewsFeed;
