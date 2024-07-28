import React from 'react';
import img1 from './../../../Images/BooksImages/book-luv2code-1000.png';
import BookModel from '../../../models/BookModel';

const ReturnBook: React.FC<{book: BookModel}> = ({ book }) => {
    return (
        <>
            <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
                <div className='text-center'>
                    {book.img ? <img src={book.img} width='151' height='233' alt='book'/> : <img src={img1} alt="book" width='151' height='233' /> }
                    <h6 className='mt-2'>{book.title}</h6>
                    <p>{book.author}</p>
                    <a className='btn main-color text-white' href="#">Reserve</a>
                </div>
            </div>
        </>
    );
}

export default ReturnBook;