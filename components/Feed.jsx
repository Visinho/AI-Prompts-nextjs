"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const Feed = () => {

  const [searchText, setsearchText] = useState("");
  const [ posts, setPosts ] = useState([]);

  const handleSearchChange = (e) => {

  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompts");
      const data = await response.json();

      setPosts(data);
    }
    fetchPosts();
  }, [])

  const PromptCardList = ({ data, handleTagClick}) => {
      return (
        <div className="mt-16 prompt_layout">

        </div>
      )
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

      <PromptCardList 
        data={posts}
        handleTagClick={() => {}}
      />
    </section>
  );
};

export default Feed;
