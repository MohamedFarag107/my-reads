import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle,
    Input,
} from "reactstrap";

function BookshelfItem({ book, handleChange }) {
    const [value, setValue] = useState(book.shelf || "none");
    const handleOptions = (e) => {
        handleChange(e, book.id);
        setValue(e.target.value);
    };
    return (
        <li className="col-6 col-md-4 col-lg-3 p-2">
            <Card className="h-100">
                <img
                    style={{ width: "150px", height: "250px" }}
                    className="m-auto mt-2"
                    alt="Sample"
                    src={book.imageLinks.thumbnail}
                />
                <CardBody className="d-flex flex-column justify-content-between">
                    <div>
                        <CardTitle tag="h5">{book.title}</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            {book.subtitle}
                        </CardSubtitle>
                        <CardText className="text-truncate">
                            {book.description}
                        </CardText>
                    </div>
                    <div>
                    <p className="m-0 mt-3">authors</p>
                    <ul className="mb-3">
                        {book.authors && book.authors.map((author, index) => (
                            <li key={index}>{author}</li>
                        ))}
                    </ul>
                    </div>
                    <div>
                        <Input
                            className="mb-3"
                            type="select"
                            value={value}
                            onChange={handleOptions}
                        >
                            <option value="none" disabled>
                                Move to...
                            </option>
                            <option value="currentlyReading">
                                Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </Input>
                    </div>
                </CardBody>
            </Card>
        </li>
    );
}

export default BookshelfItem;
