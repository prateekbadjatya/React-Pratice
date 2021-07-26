import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUSer = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    /*  fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then(data => {
        setUsers(data);
      })
      .catch(err => {
        console.error("error occur while fetching data", err);
      }); */
    getUSer();
  }, []);
  return (
    <>
      <h3>Git Hub Users</h3>
      <ul className="users">
        {users.map(user => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a target="_blank" href={html_url}>
                  Profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
