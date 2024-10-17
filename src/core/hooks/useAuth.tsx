import React from "react";
import { httpClient, privateHttpClient } from "../httpclient";
import {
  ISignInCredentials,
  ISignUpCredentials,
} from "../interfaces/auth.interface";
import { NextRouter } from "next/router";

interface IAuthContext {
  user: any;
  isLoading: boolean;
  errors: Array<any>;
  signIn: (cred: ISignInCredentials, router?: NextRouter) => void;
  signOut: () => void;
  refresh: () => void;
  autoSignIn: () => void;
  signUp: (cred: ISignUpCredentials) => void;
  validateSession: () => void;
  isAuthenticated: () => boolean;
}

const authContextInitialValue: IAuthContext = {
  user: null,
  isLoading: false,
  errors: [],
  signIn: (cred: ISignInCredentials) => {},
  signUp: (cred: ISignUpCredentials) => {},
  signOut: () => {},
  refresh: () => {},
  validateSession: () => {},
  autoSignIn: () => {},
  isAuthenticated: () => false,
};
const authContext = React.createContext<IAuthContext>(authContextInitialValue);

export const ProvideAuth = ({ children }: React.PropsWithChildren) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
export const useAuth = () => {
  return React.useContext(authContext);
};

const useProvideAuth = (): IAuthContext => {
  const [user, setUser] = React.useState<any>(null);
  const [errors, setErrors] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const isAuthenticated = React.useCallback(() => !!user, [user]);
  const signIn = (
    { signInId, password }: ISignInCredentials,
    router?: NextRouter
  ) => {
    setIsLoading(true);
    httpClient
      .post("/api/v1/auth/signin", { signInId, password })
      .then(async () => {
        const user = await privateHttpClient("/api/v1/user/me");
        setUser(user);
        setErrors([]);
        router?.push("/");
      })
      .catch((errors) => {
        setUser(null);
        setErrors(errors);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const signUp = ({ email, username, password }: ISignUpCredentials) => {
    setErrors([]);
    setIsLoading(true);
    httpClient
      .post("/api/v1/auth/signup", { email, username, password })
      .then(async () => {
        const user = await privateHttpClient.get("/api/v1/user/me");
        setUser(user);
        setErrors([]);
      })
      .catch((errors) => {
        setUser(null);
        setErrors(errors);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const signOut = () => {
    const res = privateHttpClient
      .post("/api/v1/auth/signout")
      .then((result: any) => {
        return result;
      })
      .catch(console.log);
    return res;
  };

  const refresh = () => {
    const res = privateHttpClient
      .post("/api/v1/auth/refresh")
      .then((result: any) => {
        return result;
      })
      .catch(console.log);
    return res;
  };
  const autoSignIn = () => {
    setErrors([]);
    setIsLoading(true);
    privateHttpClient
      .get("/api/v1/user/me")
      .then((res) => {
        setUser(res.data);
        setErrors([]);
      })
      .catch((errors) => {
        setUser(null);
        setErrors(errors);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const validateSession = () => {
    setErrors([]);
    setIsLoading(true);
    privateHttpClient
      .post("/api/v1/auth/validate-tokens")
      .then((res) => {
        setUser(res.data);
        setErrors([]);
      })
      .catch((errors) => {
        setUser(null);
        setErrors(errors);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return {
    user,
    isLoading,
    errors,
    signIn,
    signOut,
    signUp,
    refresh,
    validateSession,
    autoSignIn,
    isAuthenticated,
  };
};
