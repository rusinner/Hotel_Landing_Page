const BookButton = ({ text, onClick }) => {
  return (
    <div className="book-button-wrapper">
      <button className="book-button" type="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default BookButton;
