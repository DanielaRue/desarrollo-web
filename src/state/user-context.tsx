import { createContext, useState } from "react";
import type { Dispatch, SetStateAction, PropsWithChildren } from "react";

type User = {
  username: string;
  role: string;
} | null;

const initialValues: {
  user: User;
  setUser: Dispatch<SetStateAction<User>> | null;
} = {
  user: null,
  setUser: null,
};

const userContext = createContext(initialValues);

function UserContext({ children }: PropsWithChildren) {
  const [user, setUser] = useState(initialValues.user);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}

export { userContext };
export default UserContext;
