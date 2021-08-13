import React, { useState } from "react";
import "./styles.css";

var bookList = {
  javascript: [
    "Eloquent JavaScript",
    "You Don't Know JS",
    "JavaScript & JQuery"
  ],
  fiction: [
    "Shiva Trilogy",
    "Harry Potter and the Sorcerer's Stone",
    "Invisible Man"
  ],
  Business: [
    "Never Split the Difference",
    "Loonshots",
    "The E-Myth by Michael Gerber"
  ]
};

var wekonwbooklist = Object.keys(bookList);
export default function App() {
  var [bookname, listofbookname] = useState("");
  function clickHandler(item) {
    var meaning = bookList[item];
    listofbookname(meaning);
  }
  return (
    <div className="App">
      <h1>📚 goodbooks</h1>
      <p>Checkout my favorite books. Select a genre to get started</p>
      <div>
        {wekonwbooklist.map((item) => {
          return (
            <li className="list" onClick={() => clickHandler(item)} key={item}>
              {item}
            </li>
          );
        })}
      </div>

      <hr />

      <ul style={{ margin: "center" }}>
        <li className="list1">{bookname[0]}</li>
        <li className="list1">{bookname[1]}</li>
        <li className="list1">{bookname[2]}</li>
      </ul>
    </div>
  );
}
