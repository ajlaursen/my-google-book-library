import React, {useState} from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults"
import API from "../utils/API";

function Search() {
    const [searchState, setSearchState] = useState([])
    const handleSearch = (book) => {
        console.log("book:",book)
        API.search(encodeURI(book)).then((result) => {

            const bookList = result.data.items;
            
            setSearchState(bookList)
      
            console.log(bookList);
      
          })
    }

    return(
        <>
        <SearchBar handleSearch={handleSearch}/>
        <SearchResults searchState={searchState}/>
        </>
    )
}

export default Search