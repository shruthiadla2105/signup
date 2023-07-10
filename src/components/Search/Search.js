import React, { useState } from "react";
import "./Search.css";

const Search = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [urlDetails, setUrlDetails] = useState(null);
  const [searchKey, setSearchKey] = useState("");

  const handleInputChange = (event) => {
    setInputUrl(event.target.value);
  };

  const handleSearch = () => {
    try {
      const url = new URL(inputUrl);
      const details = {
        protocol: url.protocol,
        hostname: url.hostname,
        pathname: url.pathname,
        search: url.search,
        searchParams: url.searchParams,
      };
      const search = url.search;
      setUrlDetails(details);
      console.log(details);
      console.log(search, "search");
      console.log(typeof search);
      setSearchKey(search);
    } catch (error) {
      console.error("Invalid URL:", error);
    }
  };

  const { protocol, hostname, pathname, search, searchParams } =
    urlDetails || {};

  return (
    <div className="page">
      <div className="search">
        <input
          type="text"
          placeholder="Please Enter URL"
          value={inputUrl}
          onChange={handleInputChange}
          className="search-input"
        />
        <button className="search-button" onClick={handleSearch}>
          Shorten URL
        </button>
      </div>

      {urlDetails && (
        <div className="details">
          <h2 className="url">URL Details:</h2>
          <p> Protocol: {protocol}</p>
          <p> Hostname: {hostname}</p>
          <p>Pathname: {pathname}</p>
          <p>{`Search: ${searchKey}`}</p>
          <p>Search Params: </p>
          <ul className="params">
            {Array.from(searchParams.entries()).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
