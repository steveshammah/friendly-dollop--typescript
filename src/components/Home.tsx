import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import Stats from "./Stats";


interface HomeProps  {
  users: [
  {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
  },
],
  loading: boolean
}

const Home = (props: HomeProps) => {
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

          <Stats stateUsers={props.users} />
        </div>
      )}
    </>
  );
};

export default Home;
