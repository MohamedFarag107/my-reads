import React from "react";
import { update } from "../BooksAPI";
import Bookshelf from "./Bookshelf";

function Section({ setUpdate, books, shelf }) {
    const handleChange = async (e, id) => {
        await update(id, e.target.value).then(() => {
            setUpdate(new Date().getTime());
        });
    };
    const relatedBooks = [...books].filter(
        (book) => book.shelf === shelf.split(" ").join("")
    );
    return (
        <div className="container my-4">
            <h3 className="text-capitalize">{shelf}</h3>
            <hr />
            <Bookshelf books={relatedBooks} handleChange={handleChange} />
        </div>
    );
}

export default Section;
