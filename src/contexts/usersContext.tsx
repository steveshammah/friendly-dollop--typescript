import { createContext, useState, useEffect, ReactNode } from "react";

export const usersContext = createContext({});


export interface ProviderProps{
  children: ReactNode
}
export interface AppProps    {
  stateUsers: [
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

const UsersState = (props: ProviderProps) => {
  const [stateUsers, setStateusers] = useState({} as AppProps);
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
    <usersContext.Provider value={{ stateUsers, loading }}>
      {props.children}
    </usersContext.Provider>
  );
};

export default UsersState;
