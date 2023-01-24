import React from "react";
import '../App.css'

const Table = ({ data, repositories }) => {
  return (
    
    <table className="ui celled ">
      <thead>
        <tr className="table">
          <th>Name</th>
          <th>Avatar</th>
          <th>Location</th>
          <th>Bio</th>
          <th>Repositories</th>
        </tr>
      </thead>
      <tbody className="prophile_container1">
        <tr >
          <td>{data.name}</td>
          <td>
            {!data.avatar_url ? (
              " "
            ) : (
              <img
                className="ui small circular image"
                src={data.avatar_url}
                alt={data.avatar_url}
              />
            )}
          </td>
          <td>{data.location}</td>
          <td>{data.bio}</td>
          <td className="repo">
            {repositories.map(repo => (
              <div className="ui relaxed divided list" key={repo.name}>
                <div className="item">
                
                  <div className="content">
                    <div><i className="fa-brands fa-github"></i></div>
                  <div><a href={repo.html_url} className="header" target="_blank">
                      {repo.name}
                    </a></div>
                
                  </div>
                </div>
              </div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;