import React, { useState } from "react";
import { update } from "../BooksAPI";
import Bookshelf from "./Bookshelf";
import Loading from "./Loading";

function Section({ setUpdate, books, shelf }) {
    const [loading, setLoading] = useState(false);
    const handleChange = async (e, id) => {
        setLoading(true);
        await update(id, e.target.value).then(() => {
            setUpdate(new Date().getTime());
            setLoading(false);
        });
    };
    const relatedBooks = [...books].filter(
        (book) => book.shelf === shelf.split(" ").join("")
    );
    return (
        <>
        {
            <Loading loading={loading}/>
        }
            <div className="container my-4">
            <h3 className="text-capitalize">{shelf}</h3>
            <hr />
            <Bookshelf books={relatedBooks} handleChange={handleChange} />
        </div>
        </>
    );
}

export default Section;
