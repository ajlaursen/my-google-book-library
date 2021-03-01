import React from 'react';
import "./style.css";

function BookCard(props) {
    let book = props.result

    console.log("props", props)
    console.log("result", props.result)
    
    return(
    <div className="card">
        <img src={book.volumeInfo.imageLinks?.thumbnail ?? "https://via.placeholder.com/150" } alt={book.volumeInfo.title}/>
        <div className="container">
            <p>{book.volumeInfo.title}</p>
        </div>
    </div>
    
    
    )
}

export default BookCard;