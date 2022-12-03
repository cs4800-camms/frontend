import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./SearchBar.module.css";

export default function SearchBar({ searchYelp }) {
    const [searchInfo, setSearchInfo] = useState({
        term: "",
        location: "",
    })

    const handleSubmit = async (e) => {
        console.log("Term info: " + searchInfo.term);
        console.log("Location info: " + searchInfo.location);
        searchYelp(searchInfo.term, searchInfo.location);
        e.preventDefault();

    };

    return (
        <body className={classes.body}>
            <br></br>
            <div class="row">
                <div class="col">
                    <input type="text" id="floatingInput" class="form-control" placeholder="Search categories" onChange={(e) => setSearchInfo({ ...searchInfo, term: e.target.value })} value={searchInfo.term} required></input>
                </div>
                <div class="col">
                    <input type="text" id="floatingInput" class="form-control" placeholder="Where?" onChange={(e) => setSearchInfo({ ...searchInfo, location: e.target.value })} value={searchInfo.location} required></input>
                </div>
            </div>
            <br></br>
            <div>
                <button type="button" className="btn btn-primary btn-m" onClick={handleSubmit}> <i class="bi bi-search"></i> Find activities</button>
            </div>
        </body>
    );
}