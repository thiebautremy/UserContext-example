import { useRef, useEffect } from "react";

const UseRefBasics = ({ title, author, date }) => {
  const refContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  console.log(title);
  useEffect(() => {
    refContainer.current.focus();
  }, []);

  return (
    <div>
      <p>{title}</p>
      <p>{author}</p>
      <p>{date}</p>

      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input ref={refContainer} type="text" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UseRefBasics;
