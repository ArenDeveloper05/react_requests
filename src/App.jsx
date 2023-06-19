import { useEffect, useState } from "react";
import "./App.scss";
import Modal from "./components/modal/Modal";
import Container from "./components/container/Container";
import Loading from "./components/loading/Loading";

function App() {
  const APIUrl = "https://jsonplaceholder.typicode.com/todos";
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        let data = await fetch(APIUrl);
        data = await data.json();
        setData(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  // useEffect(() => {
  //   console.log(show);
  // }, [show]);

  // useEffect(() => {
  //   return () => {
  //     console.log("unmount");
  //   };
  // });

  return (
    <div className="App">
      {loading && <Loading />}
      {!loading && (
        <button
          onClick={() => {
            setShow((prev) => !prev);
          }}
        >
          Show
        </button>
      )}
      {show && <Modal />}
      {data.length !== 0 && !loading && <Container data={data} />}
    </div>
  );
}

export default App;
