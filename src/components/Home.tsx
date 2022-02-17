import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import Stats from "./Stats";
import { UsersInterface} from '../contexts/usersContext';





const Home = (props: UsersInterface) => {
  return (
    <>
      {props.loading && props.users ? (
        <Spinner />
      ) : (
        <div className='user-container'>
          {props.users.map((user) => {
            return (
              <Link to={`users/posts/${user.id}`} key={user.id}>
                <div className='user-data'>
                  <h1> {user.name}</h1>
                  <h2>Username: {user.username}</h2>
                  <h3>Email: {user.email}</h3>

                  <div className='meta-data'>
                    <span>
                      Phone: <i>{user.phone}</i>
                    </span>

                    <span>Address: {user.address.street}</span>
                    <span>Suite: {user.address.suite}</span>
                  </div>
                </div>
              </Link>
            );
          })}

          <Stats users={props.users} />
        </div>
      )}
    </>
  );
};

export default Home;
