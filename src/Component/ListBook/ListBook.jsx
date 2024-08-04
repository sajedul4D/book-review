import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navigation from '../Navigaton/Navigation';
import { getStoredBook } from '../../Unliti/Ulitiy';

const ListBook = () => {
    const books=useLoaderData([])
    const [addedBooks, setAddedBooks] = useState([]);
    useEffect(() => {
        const storedBookIds = getStoredBook();
        if (books.length > 0) {
          const booksAdded = [];
          for (const bookId of storedBookIds) {
            const book = books.find((book) => book.bookId === bookId);
            if (book) {
              booksAdded.push(book);
            }
          }
          setAddedBooks(booksAdded);
        }
      }, []);
    return (
        <div>
        <div className="bg-gray-200 text-center p-4 rounded-lg">
          <h1>Books</h1>
        </div>
  
        <div className="text-center">
          <details className="dropdown">
            <summary className="btn m-1 bg-green-400">Sort By</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li>
                <a>Rating</a>
              </li>
              <li>
                <a>Number of pages</a>
              </li>
              <li>
                <a>Publisher year</a>
              </li>
            </ul>
          </details>
        </div>
        <Navigation></Navigation>
        <div>
          <ul>
            {addedBooks.map((book) => (
              <li key={book.bookId}>
                <div className="card card-side bg-base-100 shadow-xl">
                  <figure>
                    <img src={book.image} className="w-24" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{book.bookName}</h2>
                    <p>By: {book.author}</p>
                    <div> Tag 
                      {
                        book.tags.map((item) => <div key={book.bookId} className="badge badge-secondary">{item}</div>)
                      }
                    </div>
                    <div className="card-action">
                    <Link to={`/books/${book.bookId}`}><button className="btn btn-primary">View Details</button>
                       </Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

export default ListBook;