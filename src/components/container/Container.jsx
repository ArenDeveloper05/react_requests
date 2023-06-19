const Container = ({ data }) => {
  return (
    <div className="container">
      {data.map((item) => {
        return (
          <div
            className="container-item"
            key={item.id}
            style={{ border: "solid" }}
          >
            <h1>{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Container;
