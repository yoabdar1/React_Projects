/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const useGetQuery = (config = {}) => {
  const [data, setData] = useState(null); // Initial value is `null` to represent no data yet
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Track errors if they happen

  useEffect(() => {
    // const url = "https://jsonplaceholder.typicode.com/users";
    fetch(config.url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        setError(error.message); // Save the error message if an error occurs
      })
      .finally(() => {
        setIsLoading(false); // Set loading to false once the fetch completes
      });
  }, []);

  return { data, isLoading, error }; // Return error as well for error handling
};

export default useGetQuery;
