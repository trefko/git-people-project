import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Search from "../../components/search/Search";

const URL = "https://randomuser.me/api/?results=15";

const hideEmail = (email) => {
  const [username, domain] = email.split("@");

  if (username.length <= 6) {
    return "***@" + domain;
  }

  const firstThree = username.slice(0, 3);
  const lastThree = username.slice(-3);

  return `${firstThree}...${lastThree}@${domain}`;
};

const MainPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [grid, setGrid] = useState(false);
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        const males = data.results.filter(
          (user) => user.gender === "male"
        ).length;
        const females = data.results.filter(
          (user) => user.gender === "female"
        ).length;
        setMaleCount(males);
        setFemaleCount(females);
        setTimeout(() => {
          setLoading(false);
        }, 200);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const filteredSearch = users.filter((e) =>
    e.name.first.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header setGrid={setGrid} />
      <Search search={search} setSearch={setSearch} />
      <div className="gender-count">
        <p>Male: {maleCount}</p>
        <p>Female: {femaleCount}</p>
      </div>
      <div className="info-box">
        {loading ? (
          <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
          </div>
        ) : (
          <div className={`users-list ${grid ? "list" : ""}`}>
            {filteredSearch.length > 0 ? (
              filteredSearch.map((user) => (
                <div
                  className="user"
                  key={user.login.uuid}
                  style={{
                    backgroundColor:
                      user.gender === "female" ? "#ffcccc" : "#fff",
                  }}
                >
                  <img
                    src={user.picture.thumbnail}
                    alt={`${user.name.first} ${user.name.last}`}
                  />
                  <div className="info">
                    <h2>{`${user.name.first} ${user.name.last}`}</h2>
                    <p>
                      <i className="material-icons">email</i>
                      Email: {hideEmail(user.email)}
                    </p>
                    <p>
                      <i className="material-icons">cake</i>
                      Birthday: {user.dob.date}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No users found</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default MainPage;
