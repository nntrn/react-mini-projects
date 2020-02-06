import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import Ajax from "../../service/Ajax";

import data from "../../data/userRepo";

// import './GitRepos.scss'

// class Contributors extends React.Component {
//   render() {
//     const { gitUser, repoName } = this.props

//     const config = data => {
//       return (
//         <div className={'contributions'}>
//           {data.map((e, i) => {
//             return (
//               <div
//                 key={i}
//                 className={'avi after'}
//                 style={{ backgroundImage: `url(${e.avatar_url})` }}
//                 name={e.login}
//                 value={e.contributions}
//                 title={`${e.contributions} contributions by ${e.login}`}
//               />
//             )
//           })}
//         </div>
//       )
//     }
//     return (
//       <Ajax
//         url={`https://api.github.com/repos/${gitUser}/${repoName}/contributors`}
//         config={config}
//       />
//     )
//   }
// }

const parseDate = str => {
  return new Date(Date.parse(str)).toLocaleDateString();
};

// class Github extends React.Component {
//   render() {
//     const { user } = this.props

//     const config = data => {
//       return (
//         <div id="github-activity">
//           {Object.entries(data).map((e, i) => {
//             return (
//               <div key={e[0]} className="repo-container">
//                 <a href={data[i]['html_url']} className="h3">
//                   {data[i]['name']}
//                 </a>
//                 <div className="repo-description">{data[i].description}</div>
//                 <div className="before margin-top" value="last updated: ">
//                   {parseDate(data[i]['updated_at'])}
//                 </div>
//                 {/* <Contributors gitUser={user} repoName={data[i]['name']} /> */}
//               </div>
//             )
//           })}
//         </div>
//       )
//     }

//     // return <Ajax url={`//api.github.com/users/${user}/repos?sort=updated`} config={config} />
//   }
// }

const Box = styled.div`
  border: 1px solid #d1d5da;
  padding: 16px;
  width: 80%;
  margin: auto;
`;

function stringReplacer(string, param = {}) {
  Object.keys(param).forEach(e => {
    string = string.replace(RegExp(`{${e}}`, "g"), param[e]);
  });
  return string;
}

stringReplacer("api.github.com/users/{user}/repos?sort=updated", { user: "nntrn" });

function addDb(name, key, value) {
  let db = JSON.parse(localStorage.getItem(name)) || [];

  db.push({ key, value });
  localStorage.setItem(name, JSON.stringify(db));
}

function dataManager() {}

function Github() {
  return (
    <div id="github-activity">
      {Object.entries(data).map((e, i) => {
        return (
          <Box key={e[0]} className="repo-container">
            <a href={data[i]["html_url"]} className="h3">
              {data[i]["name"]}
            </a>
            <div className="repo-description">{data[i].description}</div>
            <div className="before margin-top" value="last updated: ">
              {parseDate(data[i]["updated_at"])}
            </div>
            {/* <Contributors gitUser={user} repoName={data[i]['name']} /> */}
          </Box>
        );
      })}
    </div>
  );
}

function GitRepos() {
  const [inputValue, setValue] = useState("nntrn");
  const [user, setUser] = useState(inputValue);

  const handleSubmit = e => {
    e.preventDefault();
    setUser(inputValue);
  };

  return (
    <div>
      <center>
        <h2 className="project-title">github repo API</h2>
        repo contributors for <strong>{user}</strong>
        <form onSubmit={handleSubmit}>
          <input value={inputValue} onChange={e => setValue(e.target.value)} />
        </form>
      </center>

      <Github user={user} />
    </div>
  );
}

export default GitRepos;
