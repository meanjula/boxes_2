const Box = ({ name, title, age }) => {
  const changeNameHandler = () => {
    console.log("WOOW");
  };
  return (
    <div className="box">
      <div>
        <h2>{name}</h2>
        <p>Title: {title}</p>
        <p>Age:{age}</p>
        <button onClick={changeNameHandler}>Click ME</button>
      </div>
    </div>
  );
};
export default Box;
