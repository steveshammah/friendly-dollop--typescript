import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, UsersInterface} from '../contexts/usersContext'

interface Address {
      street: string,
      suite: string
      city: string,
      zipcode: string,
      geo : {
        lat: string
        lng: string
      }
}
interface Provider{
  username: string,
  id: number,
  address:  Address
}


const Stats = (props:UsersInterface) => {
  const [address, setAddress] = useState<Provider[]>([]);
  const handleClick = (filter: string) => {
    const filtered:any= props.users.filter((user: User ) =>
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
