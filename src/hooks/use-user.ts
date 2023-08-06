import { useEffect, useState } from "react";
import axios from "axios";

export const useUser = () => {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    try {
      axios.get("/api/users/me").then(({ data }) => {
        setUser(data.data._id);
      });
    } catch (err: any) {
      throw Error("Error: ", err.message);
    }
  }, []);

  return {
    user,
  };
};
