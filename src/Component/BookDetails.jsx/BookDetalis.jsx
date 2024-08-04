import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBook } from "../../Unliti/Ulitiy";

const BookDetalis = () => {
    const details = useLoaderData();
    const { bookId } = useParams();
    const book = details.find(
      (book) => parseInt(book.bookId) === parseInt(bookId)
    );
    const { image, bookName, author, category, tags, totalPages, rating,BookId } = book;
    const notify = () =>{
      saveBook(parseInt(bookId));
      toast("Added to Read List");
    }
    return (
        <Link to={`/book/${BookId}`} className="grid grid-cols-2 gap-4">
      <div className="border-2 mx-auto">
        <img src={image} className="w-96" alt="" />
      </div>
      <div>
        <h1 className="text-3xl font-bold">{bookName}</h1>
        <p className="font-light text-sm">By: {author}</p>
        <h2 className="text-sm font-light">{category}</h2>
        <p><span className="font-bold text-sm">Review:</span>Very good book.</p>
        <div>
          {" "}
          <span className="font-bold text-sm">Tag</span>{" "}
          {tags.map((item) => (
            <div key={bookId} className="badge">
              <p>#{item}</p>
            </div>
          ))}
        </div>
        <p className="text-sm font-light">Number of Pages: <span className="font-bold">{totalPages}</span></p>
        <p className="text-sm font-light">Rating: <span className="font-bold">{rating}</span></p>
        <div>
          <button onClick={notify} className="btn">Read</button>
          <button className="btn">Wishlist</button>
        </div>
        <ToastContainer />
      </div>
    </Link>
    );
};

export default BookDetalis;