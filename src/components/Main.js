import React from "react";
import Nav from "./Nav";
import Section from "./Section";

function Main({ results, currentlyReading, wantToRead, read }) {
    return (
        <>
            <Nav />
            <Section
                results={results}
                books={currentlyReading}
                shelf="currently Reading"
            />
            <Section
                results={results}
                books={wantToRead}
                shelf="want To Read"
            />
            <Section results={results} books={read} shelf="read" />
        </>
    );
}

export default Main;
