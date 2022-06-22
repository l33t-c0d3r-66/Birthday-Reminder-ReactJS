import React from 'react';

const List = (props) => {
  return (
    <>
      {props.people.map(person => {
        <article key={person.id} ></article>
      })}
    </>
  );
};

export default List;