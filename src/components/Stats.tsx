import React, { useState } from "react";
import { Link } from "react-router-dom";
import {StateProp} from '../contexts/usersContext'


interface Provider{

}

interface User {

}
const Stats = (props: StateProp ) => {
  const [address, setAddress] = useState<Provider[]>([]);
  const handleClick = (filter: string) => {
    const filtered: string[] = props.stateUsers.filter((user: Array<string> ) =>
      user.address.suite.includes(filter)
    );
    setAddress(filtered);
  };

  return (
    <div className='stats-wrapper'>
      <h1>Address Stats</h1>
      <div className='nav'>
        <span onClick={() => handleClick("Apt")}>Appt</span>
        <span onClick={() => handleClick("Suite")}>Suite</span>
      </div>
      <div className='stats'>
        {address.map((user) => {
          return (
            <div className='user-stats'>
              <Link
                to={`users/posts/${user.id}`}
                key={user.id}
                id='profile-link'>
                Username:
                {user.username}
              </Link>{" "}
              <span>
                Address:
                {user.address.suite}
              </span>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
