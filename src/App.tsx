import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserPosts from "./components/UserPosts";
import { usersContext } from "./contexts/usersContext";
import { ReactNode, useContext } from "react";


export interface ProviderProps{
  children: ReactNode
}

function App() {
  const { stateUsers, loading } = useContext(usersContext);


  return (
    <div className='App'>
      <Router>
        <header>
          <Link to='/'>Home</Link>
        </header>
        <p className='banner'>
          Data present is from{" "}
          <a href='https://jsonplaceholder.typicode.com/' target={"_blank"}>
            jsonplaceholder
          </a>{" "}
          for demo purposes.
        </p>

        <Routes>
          <Route
            path='/'
            exact
            element={<Home users={stateUsers} loading={loading} />}
          />
          <Route
            path='/users/posts/:userId'
            element={<UserPosts users={stateUsers} loading={loading} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
