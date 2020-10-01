import Button from "components/button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { addRequest, uploadImage } from "firebase/client";
import Head from "next/head";
import Avatar from "components/Avatar";

const COMPOSE_STATE = {
  USER_NOT_KNOW: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
};

const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3,
};

export default function ComposeServices() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [valueServis, setValueServis] = useState();
  const [status, setStatus] = useState(COMPOSE_STATE.USER_NOT_KNOW);
  const router = useRouter();

  const handleChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus(COMPOSE_STATE.LOADING);
    addServis({
      name: name,
      description: message,
      valueServis: valueServis,
    })
      .then(() => {
        router.push("/Home");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (task) {
      const onProgress = () => {};
      const onError = () => {};
      const onComplete = () => {
        task.snapshot.ref.getDownloadURL().then(setImgURL);
      };
      task.on("state_changed", onProgress, onError, onComplete);
    }
  }, [task]);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGE_STATES.NONE);
  };

  const handleDrog = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGE_STATES.NONE);
    const file = e.dataTransfer.files[0];
    const task = uploadImage(file);
    setTask(task);
  };
  const isButtondisable = !message.length || status === COMPOSE_STATE.LOADING;

  return (
    <>
      <Head>
        <title>Crear Servicio / Minca</title>
      </Head>
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="¿En que te ayudo?"
            onChange={handleChange}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrog}
            value={message}
          ></textarea>

          <div>
            <Button disabled={isButtondisable}>Enviar</Button>
          </div>
        </form>
      </section>

      <style jsx>{`
        button {
          position: absolute;
          top: 15px;
          border: 0;
          right: 15px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 999px;
          color: #fff;
          width: 30px;
          height: 30px;
          font-size: 22px;
        }
        .remove-image {
          position: relative;
        }
        .form-container {
          align-items: flex-start;
          display: flex;
        }
        .avatar-container {
          padding-top: 30px;
          padding-left: 10px;
        }
        textarea {
          border: 0;
          font-size: 21px;
          padding: 15px;
          resize: none;
          width: 100%;
          outline: 0;
          min-height: 200px;
          border: ${drag === DRAG_IMAGE_STATES.DRAG_OVER
            ? "3px dashed #89f"
            : "3px solid transparent"};
          border-radius: 10px;
        }
        div {
          padding: 15px;
        }

        form {
          padding: 10px;
        }

        img {
          border-radius: 10px;
          height: auto;
          width: 100%;
        }
      `}</style>
    </>
  );
}
/**
 * const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE);
  const [task, setTask] = useState(null);
  const [imgURL, setImgURL] = useState(null);
  userId: user.id,
      userName: user.username,
      createdAt: user.createdAt,
      img: imgURL,
      {user && (
          <section className="avatar-container">
            <Avatar src={user.avatar} />
          </section>
        )}
        {imgURL && (
            <section className="remove-image">
              <button onClick={() => setImgURL(null)}>x</button>
              <img src={imgURL} />
            </section>
          )}
 */
