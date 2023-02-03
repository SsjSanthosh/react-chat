import { createContext, useState } from "react";
import { loginWithGoogle } from "utils/auth";
import { UserProps, UserWithNull } from "utils/type";

interface AuthContextProps {
  user: UserWithNull;
  login?: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
});

const AuthProvider = (props: any) => {
  const [user, setUser] = useState<null | UserProps>(null);

  const login = async () => {
    const user: UserWithNull = await loginWithGoogle();

    if (!user) {
      // TODO: Handle failed login
    }

    setUser(user);
  };

  const value = { user, login };

  return <AuthContext.Provider value={value} {...props} />;
};

export { AuthContext, AuthProvider };
