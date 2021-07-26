import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .then(data => {
          setIsError(false);
          setLoading(false);
          setUser(data);
        })
        .catch(err => {
          setIsError(true);
          setLoading(false);
          setUser({});
        });
    }, 2000);
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  return (
    <div className="users">
      <li>
        <img src={user.avatar_url} alt={user.login} />
        <h4>{user.login}</h4>
      </li>
    </div>
  );
};

export default MultipleReturns;
