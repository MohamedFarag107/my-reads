import React from "react";
import Nav from "./Nav";
import Section from "./Section";

function Main({setUpdate,books}) {
    return (
        <>
            <Nav />
            <Section
                setUpdate={setUpdate}
                books={books}
                shelf="currently Reading"
            />
            <Section setUpdate={setUpdate} books={books} shelf="want To Read" />
            <Section setUpdate={setUpdate} books={books} shelf="read" />
        </>
    );
}

export default Main;
