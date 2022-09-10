import React, { useEffect, useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { Route, Routes } from "react-router-dom";
import { getAll } from "./BooksAPI";
import Main from "./components/Main";
import Page404 from "./components/Page404";
import Search from "./components/Search";

function App() {
    const [showScroll, setShowScroll] = useState(false);
    const [books, setBooks] = useState({
        currentlyReading: [],
        wantToRead: [],
        read: [],
    });

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
            const formattedData = {
                currentlyReading: [],
                wantToRead: [],
                read: [],
            };
            formattedData["currentlyReading"] = data.filter(
                (book) => book.shelf === "currentlyReading"
            );
            formattedData["wantToRead"] = data.filter(
                (book) => book.shelf === "wantToRead"
            );
            formattedData["read"] = data.filter(
                (book) => book.shelf === "read"
            );
            setBooks(formattedData);
        };
        all();
    }, []);

    const results = (res) => {
        const { shelf, id, prevShelf } = res;
        // remove from prev shelf
        const temp = books;
        const index = temp[prevShelf].findIndex((book) => book.id === id);
        const book = temp[prevShelf].splice(index, 1)[0];
        // update shelf
        book.shelf = shelf;
        // add to new shelf
        temp[shelf].push(book);

        setBooks({ ...temp });
    };

    const searchUpdate = (a) => {
        const { id, shelf } = a;
        
    };

    return (
        <div className="app">
            <Routes>
                <Route
                    path="/"
                    element={
                        <Main
                            currentlyReading={books["currentlyReading"]}
                            read={books["read"]}
                            wantToRead={books["wantToRead"]}
                            results={results}
                        />
                    }
                />
                <Route
                    path="/search"
                    element={
                        <Search searchUpdate={searchUpdate} myBooks={books} />
                    }
                />
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
