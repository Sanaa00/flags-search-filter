import React from "react";

function Button({ isTrue, onClick, text }) {
  return (
    <div>
      <button
        className={`${
          isTrue
            ? "bg-green-500 px-3 py-1  text-darkperpule rounded-full"
            : "bg-gray-100 px-3 py-1  text-darkperpule  rounded-full"
        }`}
        // onClick={() => !isTrue}
        onClick={onClick}
      >
        {text}
      </button>
      {console.log(isTrue)}
    </div>
  );
}

export default Button;
