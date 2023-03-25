import "./Container.css";

const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="center">{children}</div>
    </div>
  );
};

export default Container;
