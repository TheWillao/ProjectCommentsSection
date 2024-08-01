import Input from "./components/Input";
import TextArea from "./components/TextArea";
import Title from "./components/Title";
import Button from "./components/Button";
import CommentsArea from "./components/CommentsArea";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [posts, setPost] = useState([]);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      email: email,
      comment: comment,
      date: new Date(),
    };

    setPost((state) => [newComment, ...state]);
    setComment("");
    setEmail("");
  };

  return (
    <>
      <div
        className="bg-light container-fluid h-100 d-flex flex-column justify-content-between align-items-center rounded-5"
        style={{ minHeight: "60vh", maxHeight: "60vh", width: "30vw" }}
      >
        <form
          onSubmit={handleSubmit}
          className="bg-primary-subtle h-100 d-flex flex-column align-items-center m-5 rounded-5 overflow-y-auto"
          style={{ width: "25vw" }}
        >
          <Title text="Escreva um comentário: " />
          <Input
            value={email}
            text="E-mail: "
            placeholderValue="joao@mail.com"
            type="email"
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <TextArea
            value={comment}
            text="Comentário: "
            placeholderValue="Escreva um comentário"
            onChange={(ev) => setComment(ev.target.value)}
          />
          <Button text="Comentar" type="submit" />
          <hr className="w-75" />
          <section className=" w-100 px-4 my-2 overflow-y-auto h-25">
            {posts.length > 0 ? (
              posts.map((post) => (
                <CommentsArea
                  key={post.id}
                  email={post.email}
                  date={post.date.toLocaleString()}
                  comment={post.comment}
                />
              ))
            ) : (
              <p>Seja o primeiro a comentar!</p>
            )}
          </section>
        </form>
      </div>
    </>
  );
}

export default App;
