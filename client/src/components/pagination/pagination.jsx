import React from "react";
import "./pagination.css"

export default function pagination({ shipsPage, allships, pagination }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(allships / shipsPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumber &&
          pageNumber.map( number => {
            return (
              <a key={number}>
                <button className="btnPageNumber" onClick={() => pagination(number)}>
                  {number}
                </button>
              </a>
            );
          })}
      </ul>
    </nav>
  );
}
