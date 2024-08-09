import React from "react";
import List from './list.jsx'
function Body({ val }) {
  return (
    <>
    <ol>
      {val.map((item) => {
          return (
            <List key={item.id} item={item}/>
          ); 
        })}
    </ol>
    </>
  );
}

export default Body;
