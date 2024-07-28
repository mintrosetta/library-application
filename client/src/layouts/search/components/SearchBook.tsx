import img1 from '../../../Images/BooksImages/book-luv2code-1000.png';

import React from "react";
import BookModel from "../../../models/BookModel";

const SearchBook: React.FC<{ book: BookModel }> = ({ book }) => {
    return (
        <>
            <div className="card mt-3 shadow p-3 mb-3 bg-body rounded">
                <div className="row g-0">
                    <div className='col-md-2'>

                    </div>
                    <div className="d-none d-lg-block">
                        {book.img ? (
                            <img src={book.img} width={123} height={196} alt="book" />
                        ) : (
                            <img src={img1} width={123} height={196} alt="book" />
                        )}
                    </div>
                </div>
                <div className='d-lg-none d-flex justify-content-center align-items-center'>
                    <div className="d-none d-lg-block">
                        {book.img ? (
                            <img src={book.img} width={123} height={196} alt="book" />
                        ) : (
                            <img src={img1} width={123} height={196} alt="book" />
                        )}
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='card-body'>
                        <h5 className='card-title'>{book.author}</h5>
                        <h4>{book.title}</h4>
                        <p className='card-text'>{book.description}</p>
                    </div>
                </div>
                <div className='col-mb-4 d-flex justify-content-center align-items-center'>
                    <a href="#" className='btn btn-md main-color text-white'>View Detail</a>
                </div>
            </div>
        </>
    );
}

export default SearchBook;