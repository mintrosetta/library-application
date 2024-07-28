import { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";
import SpinerLoading from "../utils/SpinnerLoading";
import SearchBook from "./components/SearchBook";

const SearchBookPage = () => {
    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetchSearch().catch((err) => setHttpError(err.message)).finally(() => {
            setIsLoading(false);
        });
    }, []);

    const fetchSearch = async () => {
        const baseUrl: string = "http://localhost:8080/api/books";
        const url: string = `${baseUrl}?page=0&size=5`;

        const response = await fetch(url);
        if (!response.ok) throw new Error("Some thing went wrong");

        const responseJson = await response.json();
        const data = responseJson._embedded.books;
        const loadedBooks: BookModel[] = [];
        for (let key of data) {
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
    }

    if (httpError) return (
        <>
            <p>{httpError}</p>  
        </>
    );

    if (isLoading) return <SpinerLoading />

    return (
        <>
            <div>
                <div className="container">
                    <div>
                        <div className="row mt-5">
                            <div className="col-6">
                                <div className="d-flex">
                                    <input type="search" className="form-control me-2" placeholder="search" area-labelledby="Search" />
                                    <button className="btn btn-outline-success">
                                        Search
                                    </button>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="dropdown">
                                    <button 
                                        className="btn btn-secondary dropdown-toggle" 
                                        type="button" 
                                        id="dropdownMenuButton1" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                    >
                                        Category 
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <a className="dropdown-item" href="#">All</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Frontend</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Backend</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Data</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">DevOps</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-3">
                                <h5>Number of results: (22)</h5>
                            </div>
                            <p>
                                1 to 5 of 22 items
                            </p>
                            {books.map(book => (
                                <SearchBook book={book} key={book.id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchBookPage;