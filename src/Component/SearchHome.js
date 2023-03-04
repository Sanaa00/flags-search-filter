import React, { useState, useEffect } from "react";

function SearchHome({ fetchData, setFilteredData }) {
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    setFilteredData(
      searchData
        ? fetchData.filter((flagname) =>
            flagname?.name.common
              .toLowerCase()
              .includes(searchData.toLowerCase())
          )
        : fetchData
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchData]);

  const searchHandler = (e) => {
    setSearchData(e.target.value);
  };
  return (
    <div>
      <div className="flex justify-center items-center mt-10 ">
        <input
          placeholder="Search"
          className="border-gray-200 border-2 w-80 h-10 px-3 rounded-full focus:outline-darkperpule"
          onChange={searchHandler}
        />
      </div>
    </div>
  );
}

export default SearchHome;
