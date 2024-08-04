import React from 'react';
import { Link } from 'react-router-dom';

const Books = ({book}) => {
    const { bookId, bookName, author, image, rating, category, tags } = book;
    return (
        <Link to={`/books/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src= {image}
              className='w-24'
            />
          </figure>
          <div className="card-body">
            <div className="flex">
            <div>
          {tags.map((item) => (
            <div key={item} className="badge badge-secondary">{item}</div>
          ))}
        </div>
            </div>
            <h1>{bookName}</h1>
            <p>By: {author}</p>
          </div>
          <hr />
          <div className='flex justify-around'>
                <p>{category}</p>
                <p>{rating}</p>
          </div>
        </div>
        </Link>
      );
    };
    
   


export default Books;