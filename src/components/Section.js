import React, { useState } from "react";
import { update } from "../BooksAPI";
import Bookshelf from "./Bookshelf";
import Loading from "./Loading";

function Section({ books, shelf, results }) {
    const [loading, setLoading] = useState(false);
    const handleChange = async (shelf_, id) => {
        setLoading(true);
        await update(id, shelf_).then((res) => {
            results({ res, id, shelf: shelf_, prevShelf: shelf.split(" ").join("") });
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
