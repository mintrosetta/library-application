import { useEffect, useState } from 'react';
import ReturnBook from './ReturnBook';

import BookModel from '../../../models/BookModel';

export default function Carousel() {
    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        async function fetchBooks() {
            const baseUrl: string = "http://localhost:8080/api/books";

            const url: string = `${baseUrl}?page=0&size=9`;

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            const responseJson = await response.json();
            console.log(responseJson);

            const responseData = responseJson._embedded;

            const loadedBooks: BookModel[] = [];
            for (const key of responseData.books) {
                loadedBooks.push({
                    id: key.id,
                    title: key.title,
                    author: key.author,
                    description: key.description,
                    copies: key.copies,
                    copiesAvaliable: key.copiesAvaliable,
                    img: key.img
                });
            }
            
            setBooks(loadedBooks);
            setIsLoading(false);
        }

        fetchBooks().then().catch((err: any) => {
            setIsLoading(false);
            setHttpError(err.message);
        })
    }, []);

    if (isLoading) {
        return (
            <div className='container m-5'>
                <p>Loading...</p>
            </div>
        )
    }

    if (httpError) {
        return (
            <div className='container m-5'>
                <p>{httpError}</p>
            </div>
        )
    }
    
    return (
        <>
            <div className="container mt-5" style={{ height: "550px" }}>
                <div className="homepage-carousel-title">
                    <h3>Find your next "I stayed up too late reading book"</h3>
                </div>
                <div id="carouselExampleControls" className="carousel carousel-dark slide mt-5 d-none d-lg-block " data-bs-interval="false">
                    {/* desktop */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row d-flex justify-content-center align-items-center">
                                {books.slice(0,3).map((book) => (
                                    <ReturnBook key={book.id} book={book} />
                                ))}
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row d-flex justify-content-center align-items-center">
                                {books.slice(3,6).map((book) => (
                                    <ReturnBook key={book.id} book={book} />
                                ))}
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row d-flex justify-content-center align-items-center">
                            {books.slice(6,9).map((book) => (
                                    <ReturnBook key={book.id} book={book} />
                                ))}
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" area-hidden="true"></span>
                            <span className="visually-hidden">Previos</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" area-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    {/* mobile */}
                    <div className="d-lg-none mt-3">
                        <div className='row d-flex justify-content-center align-content-center'>
                        <div className="text-center">
                           <ReturnBook book={books[0]} />
                        </div>
                        </div>
                    </div>
                </div>
                <div className='homepage-carousel-title mt-3'>
                    <a className='btn btn-outline-secondary btn-lg' href="#">View More</a>
                </div>
            </div>
        </>
    );
}