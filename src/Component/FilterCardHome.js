import React from "react";

function FilterCardHome({ fetchData, setFilteredData }) {
  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredData(fetchData);
    } else {
      const filteredDatas = fetchData.filter((card) => {
        console.log(card.continents);
        return card.continents[0] === category;
      });
      setFilteredData(filteredDatas);
    }
  };
  return (
    <div className="flex mt-10 text-gray-50">
      <button
        className="bg-darkperpule py-1 px-3 mx-1 rounded-full hover:opacity-80 shadow-md hover:shadow-lg"
        onClick={() => handleFilter("All")}
      >
        All
      </button>
      <button
        className="bg-darkperpule py-1 px-3 mx-1 rounded-full hover:opacity-80 shadow-md hover:shadow-lg"
        onClick={() => handleFilter("Africa")}
      >
        Africa
      </button>
      <button
        className="bg-darkperpule py-1 px-3 mx-1 rounded-full hover:opacity-80 shadow-md hover:shadow-lg"
        onClick={() => handleFilter("Europe")}
      >
        Europe
      </button>{" "}
      <button
        className="bg-darkperpule py-1 px-3 mx-1 rounded-full hover:opacity-80 shadow-md hover:shadow-lg"
        onClick={() => handleFilter("South America")}
      >
        South America
      </button>
      <button
        className="bg-darkperpule py-1 px-3 mx-1 rounded-full hover:opacity-80 shadow-md hover:shadow-lg"
        onClick={() => handleFilter("North America")}
      >
        North America
      </button>{" "}
      <button
        className="bg-darkperpule py-1 px-3 mx-1 rounded-full hover:opacity-80 shadow-md hover:shadow-lg"
        onClick={() => handleFilter("Asia")}
      >
        Asia
      </button>{" "}
      <button
        className="bg-darkperpule py-1 px-3 mx-1 rounded-full hover:opacity-80 shadow-md hover:shadow-lg"
        onClick={() => handleFilter("Oceania")}
      >
        Oceania
      </button>{" "}
      <button
        className="bg-darkperpule py-1 px-3 mx-1 rounded-full hover:opacity-80 shadow-md hover:shadow-lg"
        onClick={() => handleFilter("Antarctica")}
      >
        Antarctica
      </button>
    </div>
  );
}

export default FilterCardHome;
