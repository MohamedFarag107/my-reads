import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { UncontrolledTooltip } from "reactstrap";

function Nav() {
    const navigate = useNavigate();
    return (
        <nav className="py-3 bg-primary">
            <div className="container d-flex justify-content-between align-items-center">
                <h2 className="text-white">MyReads</h2>
                <BiSearchAlt
                    id = "search"
                    onClick={() => navigate("/search")}
                    size={30}
                    color="#fff"
                />
                <UncontrolledTooltip
                    placement="right"
                    target="search"
                >
                    search
                </UncontrolledTooltip>
            </div>
        </nav>
    );
}

export default Nav;
