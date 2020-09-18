import AppLayout from "components/AppLayout";
import Button from "components/button";
import useUser from "hooks/useUser";
import { useRouter } from "next/router";
import { useState } from "react";
import {addRequest} from 'firebase/client'

const COMPOSE_STATE = {
  USER_NOT_KNOW: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1
};


export default function ComposeRequest() {
  const user = useUser();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATE.USER_NOT_KNOW)
  const router = useRouter();

  const handleChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus(COMPOSE_STATE.LOADING)
    addRequest({
      avatar: user.avatar,
      content: message,
      userId: user.id,
      userName: user.username
    }).then(() => {
      router.push('/Home')
    }).catch(err => {
      console.error(err)
    })
  };

  const isButtondisable = !message.length || status === COMPOSE_STATE.LOADING

  return (
    <>
      <AppLayout>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="¿En que te ayudo?"
            onChange={handleChange}
            value={message}
          ></textarea>
          <div>
            <Button disabled={isButtondisable}>Enviar</Button>
          </div>
        </form>
      </AppLayout>
      <style jsx>{`
        textarea {
          border: 0;
          font-size: 21px;
          padding: 15px;
          resize: none;
          width: 100%;
          outline: 0;
          min-height: 200px;
        }
        div {
          padding: 15px;
        }
      `}</style>
    </>
  );
}
