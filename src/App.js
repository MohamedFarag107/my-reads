import React, { useEffect, useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { Route, Routes } from "react-router-dom";
import { getAll } from "./BooksAPI";
import Main from "./components/Main";
import Page404 from "./components/Page404";
import Search from "./components/Search";

function App() {
    const [showScroll, setShowScroll] = useState(false);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const handleScroll = (event) => {
            if (window.scrollY > 700 && !showScroll) {
                setShowScroll(true);
            }
            if (window.scrollY < 700 && showScroll) {
                setShowScroll(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [showScroll]);

    useEffect(() => {
        const all = async () => {
            const data = await getAll();
            setBooks(data);
        };
        all();
    }, []);


    const updateBookShelf = (book) =>{
        setBooks([...books.filter((b) => b.id !== book.id), book])
    }

    return (
        <div className="app">
            <Routes>
                <Route
                    path="/"
                    element={<Main updateBookShelf={updateBookShelf} books={books} />}
                />
                <Route path="/search" element={<Search myBooks={books} updateBookShelf={updateBookShelf} />} />
                <Route path="*" element={<Page404 />} />
            </Routes>

            <BsFillArrowUpSquareFill
                onClick={() => window.scrollTo(0, 0)}
                className={`scroll-to-top position-fixed ${
                    showScroll ? "show" : ""
                }`}
            />
        </div>
    );
}

export default App;
