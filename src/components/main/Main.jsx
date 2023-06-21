import { useEffect, useState } from "react";
import "./Main.scss";
import UsersList from "./users-list/UsersList";
import { APIURL } from "../../api/api";
import axios from "axios";
import Loading from "../loading/Loading";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ active: false, message: "" });

  useEffect(() => {
    async function getUsers() {
      try {
        let { data } = await axios.get(APIURL);
        setUsers(data);
      } catch (error) {
        setIsError({ active: true, message: error.message });
      } finally {
        setIsLoading(false);
      }
    }
    getUsers();
  }, []);

  return (
    <main>
      {!isError.active && !isLoading && <UsersList users={users} />}
      {isLoading && <Loading />}
      {isError.active && !isLoading && <h1>{isError.message}</h1>}
    </main>
  );
};

export default Main;
