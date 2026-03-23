// ContentDisplay.js

import React from "react";

// Reusable ContentDisplay component that accepts a "unit" prop
const ContentDisplay = ({ unit }) => {
  if (!unit) {
    return <div>No content available.</div>; // Handle the case when no unit is provided
  }

  return (
    <div>
      {unit.books.map((book) =>
        book.topics.map((topic) => (
          <div key={topic.id}>
            <h2>{topic.title}</h2>
            <ul>
              {topic.content
                .split("\n") // Split the content into an array of lines
                .map((line, index) => {
                  const cleanedLine = line.trim();
                  if (cleanedLine) {
                    return <li key={index}>{cleanedLine}</li>;
                  }
                  return null;
                })}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default ContentDisplay;