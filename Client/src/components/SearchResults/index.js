import React from "react";


function SearchResults(props) {
    console.log("searchResult:",props)
    return(
        <>
        <h1>Search Results</h1>
        {props.searchState ? props.searchState.map(
            () => {
                return(
                    <>
            
                    </>
                )
            }
        ): <p>no results"</p>}
        </>
    )
}

export default SearchResults


// props.searchStat?.title ?? "no title"