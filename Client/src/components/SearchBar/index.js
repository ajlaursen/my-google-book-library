import React, { useState } from "react";

function SearchBar(props) {
  const [input, setInput] = useState("");

  return (
    <>
      <form >
        <input
          placeholder="Enter book title"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="button" onClick={() => props.handleSearch(input)}>Search</button>
      </form>
    </>
  );
}

export default SearchBar;

// using an uncontrolled component method


// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.search = this.search.bind(this);
//     this.input = React.createRef();
//   }

//   search = (event) => {

//     event.preventDefault();

//     API.search(this.input.current.value).then((result) => {

//       const bookList = result.data.items;

//         prop.setSearchState(bookList)

//       console.log(bookList);

//     });
//   };

//   render() {
//     return (
//       <>
//         <form onSubmit={this.search}>
//           <input placeholder="Enter book title" type="text" ref={this.input} />
//           <input type="submit" value="submit" />
//         </form>
//       </>
//     );
//   }
// }

// export default SearchBar;
