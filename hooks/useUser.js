import { useState, useEffect } from "react";
import { onAuthstateChanged } from "firebase/client";
import { useRouter } from "next/router";

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOW: undefined,
};

export default function useUser() {
  const router = useRouter();
  const [user, setUser] = useState(USER_STATES.NOT_KNOW);

  useEffect(() => {
    onAuthstateChanged(setUser);
  }, []);

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push("/");
  }, [user]);

  return user;
}
