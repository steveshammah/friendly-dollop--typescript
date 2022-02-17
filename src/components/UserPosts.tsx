import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "./Spinner";
import editIcon from "../edit-icon.svg";
import saveIcon from "../save-icon.svg";
import {UsersInterface} from '../contexts/usersContext';



export interface DicType {
  name: string,
  username: string
}

export interface DicTypeI {
  userId: number,
  id: number,
  title: string,
  body: string
}



const UserPosts = (props: UsersInterface) => {
  let { userId } = useParams();
  const [usersPosts, setUsersPosts] = useState({} as DicTypeI);
  const [editName, setEditName] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const [user, setUser] = useState({} as DicType);
  
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
  }, [user]);


  const fetchData = async () => {
    const response = await fetch(
      `http://jsonplaceholder.typicode.com/posts/${userId}`
    );
    const data = await response.json();
    const findUser:any = props.users.find((author) => author.id === parseInt(userId));
    setUser(findUser);
    setUsersPosts(data);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleChange = (e:any) => {
    const newName = e.target.value;
    user.name = newName;
  };

  return (
    <>
      {loading && props.users ? (
        <Spinner />
      ) : (
        <div className='post-section'>
          <Link to='/' className='btn'>
            Go Back
          </Link>
          <div className='post-details'>
            <div className={`name ${editName && "active"}`}>
              <h2>{user.name}</h2>{" "}
              <img src={editIcon} onClick={() => setEditName(!editName)} />
            </div>
            <div className={`edit-name ${!editName ? " " : "active"}`}>
              <input
                type={"text"}
                onChange={handleChange}
                placeholder={user.name}
              />
              <img src={saveIcon} onClick={() => setEditName(!editName)} />
            </div>
            <h4>@{user.username}</h4>
            <div className='post'>
              <h3>Title: {usersPosts.title}</h3>
              <p> {usersPosts.body}</p>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserPosts;
