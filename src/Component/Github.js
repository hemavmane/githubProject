import React, { useState } from "react";
import Table from "./Table";
import '../App.css'

const  Github = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = e => {
    setUsername(e.target.value);
  };

  const submitHandler = async e => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    // console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };
  return (
    <>
    <h1 className="picture"><i class="fa-brands fa-github"></i></h1>
   
      <div  style={{ padding: 20 }}>
        <div className="ui search ">
          <div className="ui icon input ">
          
            <input
              className="prompt"
              placeholder="search username here..."
              type="text"
              value={username}
              onChange={onChangeHandler}
            />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>

          <button
            className="ui primary button"
            type="submit"
            onClick={submitHandler}
          >
            <i class="fa-brands fa-github"></i>
            Search
          </button>
         
        </div>

        <Table  data={data} repositories={repositories} />
      </div>
    </>
  );
};
export default Github;