"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const Feed = () => {

  const [searchText, setsearchText] = useState("")

  const handleSearchChange = (e) => {

  }

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input 
          className="search_input peer"
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required />
      </form>
    </section>
  );
};

export default Feed;
