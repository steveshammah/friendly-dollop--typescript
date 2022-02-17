import { createContext, useState, useEffect, ReactNode } from "react";


// export type Context = {
//   stateUsers: UserProps,
//   loading: boolean
// }


export interface ProviderProps{
  children: ReactNode
}

export interface UsersInterface{
  users: User[],
  loading?: boolean
}
export interface User{
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
  }


export const usersContext = createContext({} as UsersInterface);


const UsersState = (props: ProviderProps) => {
  const [users, setStateusers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      fetchData();
      setLoading(false);
    }, 3000);

    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/"
      );
      const data = await response.json();
      setStateusers(data);
    };
    return () => {};
  }, []);

  return (
    <usersContext.Provider value={{users, loading }}>
      {props.children}
    </usersContext.Provider>
  );
};

export default UsersState;
