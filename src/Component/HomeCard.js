import React, { useState, useEffect } from "react";
import FilterCardHome from "./FilterCardHome";
import SearchHome from "./SearchHome";

function HomeCard() {
  const [fetchData, setFetchData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const requestData = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const country = await res.json();
    setFetchData(country);
    setFilteredData(country);
    console.log(country);
  };

  useEffect(() => {
    requestData();
  }, []);

  return (
    <>
      <SearchHome fetchData={fetchData} setFilteredData={setFilteredData} />
      <FilterCardHome fetchData={fetchData} setFilteredData={setFilteredData} />
      <div className="grid  gap-10 grid-cols-3 justify-between items-center my-10">
        {filteredData?.map((data) => {
          return (
            <div
              key={data.name.common}
              className="w-full shadow-lg hover:shadow-2xl  rounded-lg"
            >
              <img
                className="w-full h-48 object-cover  rounded-lg"
                src={data.flags.png}
                alt="nature"
              />
              <div className="  justify-between p-6">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-darkperpule">
                    {data.name.common}
                  </p>
                  <p className="font-bold text-darkperpule">
                    {data.continents}
                  </p>
                </div>
                <div className=" text-gray-600 font-semibold mt-2">
                  Capital: {data.capital}
                </div>
                <div className=" text-gray-600 font-semibold mt-2">
                  Population: {data.population}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HomeCard;
