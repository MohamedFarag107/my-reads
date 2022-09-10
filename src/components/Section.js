import React, { useState } from "react";
import { update } from "../BooksAPI";
import Bookshelf from "./Bookshelf";
import Loading from "./Loading";

function Section({ books, shelf, updateBookShelf }) {
    const [loading, setLoading] = useState(false);
    const handleChange = async (book) => {
        setLoading(true);
        await update(book.id, book.shelf).then((res) => {
            updateBookShelf(book);
            setLoading(false);
        });
    };
    return (
        <>
            {<Loading loading={loading} />}
            <div className="container my-4">
                <h3 className="text-capitalize">{shelf}</h3>
                <hr />
                <Bookshelf books={books} handleChange={handleChange} />
            </div>
        </>
    );
}

export default Section;
