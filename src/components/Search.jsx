import React, { useEffect, useState } from "react";
import { Alert, Input, UncontrolledTooltip } from "reactstrap";
import { search, update } from "../BooksAPI";
import BookshelfItem from "./BookshelfItem";
import { TiArrowBackOutline } from "react-icons/ti";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

function Search({ setUpdate, myBooks }) {
    const navigate = useNavigate()
    const [searchBook, setSearchBook] = useState("");
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState([]);
    const handleChange = async (e, id) => {
        setLoading(true);
        await update(id, e.target.value).then((id) => {
            setUpdate(new Date().getTime());
            setLoading(false);
        });
    };
    useEffect(() => {
        const load = async () => {
            if (searchBook) {
                const results = await search(searchBook, 2);
                results.items ? setBooks(results.items) : setBooks(results);
            } else {
                setBooks([]);
            }
        };
        const id = setTimeout(() => {
            load();
        }, 200);
        return () => {
            clearTimeout(id);
        };
    }, [searchBook]);
    return (
        <div className="container">
            <Loading loading={loading} />
            <div className="mt-3 d-flex align-items-center gap-3">
                <Input
                    value={searchBook}
                    onChange={(e) => setSearchBook(e.target.value)}
                    placeholder="Search by title, author, or ISBN"
                />
                <TiArrowBackOutline id = "back" onClick={() => navigate('/')} size={30} />
                <UncontrolledTooltip
                    placement="right"
                    target="back"
                >
                    back
                </UncontrolledTooltip>
            </div>

            <hr />
            <ol className="list-unstyled row">
                {books.length === 0 && <Alert color="primary">No Books</Alert>}
                {books
                    .filter((book) => book.imageLinks.thumbnail)
                    .map((book) => (
                        <BookshelfItem
                            key={book.id}
                            book={
                                myBooks.find((el) => el.id === book.id) || book
                            }
                            loading={loading}
                            handleChange={handleChange}
                        />
                    ))}
            </ol>
        </div>
    );
}

export default Search;
