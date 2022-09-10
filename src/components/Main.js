import React from "react";
import Nav from "./Nav";
import Section from "./Section";

function Main({ books,updateBookShelf }) {
    return (
        <>
            <Nav />
            <Section
                books={books.filter(
                    (book) => book.shelf === "currentlyReading"
                )}
                updateBookShelf={updateBookShelf}
                shelf="currently Reading"
            />
            <Section
                updateBookShelf={updateBookShelf}
                books={books.filter((book) => book.shelf === "wantToRead")}
                shelf="want To Read"
            />
            <Section
                updateBookShelf={updateBookShelf}
                books={books.filter((book) => book.shelf === "read")}
                shelf="read"
            />
        </>
    );
}

export default Main;
