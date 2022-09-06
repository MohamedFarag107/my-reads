import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Book({ books }) {
    const { id } = useParams();
    const [book] = useState(books.filter((book) => book.id === id)[0]);
    console.log(book);
    return (
        <div className="d-flex flex-wrap gap-3 container">
            <img src={book.imageLinks.thumbnail} alt="thumbnail" />
            <div>
                <h1>{book.title}</h1>
                <h4>{book.subtitle}</h4>
                <p style={{width:"300px"}}>{book.description}</p>
            </div>
        </div>
    );
}

export default Book;
