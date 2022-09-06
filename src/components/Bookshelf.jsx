import React from "react";
import { Alert } from "reactstrap";
import BookshelfItem from "./BookshelfItem";

function Bookshelf({ handleChange, books }) {
    return (
        <>
            {books.length === 0 && (
                <Alert color="primary">
                    No Books in the Shelf
                </Alert>
            )}
            <ol className="list-unstyled row">
                {books.map((book) => (
                    <BookshelfItem
                        key={book.id}
                        book={book}
                        handleChange={handleChange}
                    />
                ))}
            </ol>
        </>
    );
}

export default Bookshelf;
