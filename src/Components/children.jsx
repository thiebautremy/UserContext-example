import "./children.css";
const Article = ({ children }) => {
  return (
    <div className="article">
      {children}
      <SharedButton />
    </div>
  );
};

const SharedButton = () => {
  return <button>Share this article</button>;
};

const Post = () => {
  return (
    <>
      <Article>
        <h1>Awesome title !</h1>
        <p>Tremendous description !!</p>
      </Article>
      <Article>
        <h1>Did you see this title ?</h1>
        <p>And did you see this description ?</p>
      </Article>
    </>
  );
};

export default Post;
