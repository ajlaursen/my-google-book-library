import React from "react";
import BookCard from "../BookCard"
import './style.css'


function SearchResults(props) {
    return(
        <>
        <h1>Search Results</h1>
        {props.searchState ? props.searchState.map(
            (result) => {
                
                return(
                    <>
                    <div className="book-card">
                    <BookCard key={result.id} result={result}/>
                    </div>
                    </>
                    
                )
            }
        ): <p>no results"</p>}
        </>
    )
}

export default SearchResults


// props.searchStat?.title ?? "no title"