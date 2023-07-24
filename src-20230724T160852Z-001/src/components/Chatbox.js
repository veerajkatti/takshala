import './Chatbox.css';
import { useEffect, useRef, useState } from 'react';
import { getDatabase, ref, push, set, onChildAdded , onValue} from 'firebase/database';
import { BiSend } from "react-icons/bi";

 function Chatbox() {
  const [name, setName] = useState('');
  const [chats, setChats] = useState([]);
  const [msg, setMsg] = useState('');
  const chatContainerRef = useRef(null);

  const db = getDatabase();
  const chatListRef = ref(db, 'chats');

  useEffect(() => {
    onValue(chatListRef, (snapshot) => {
      const chatsData = snapshot.val();
      if (chatsData) {
        const chatsList = Object.values(chatsData);
        setChats(chatsList);
      }
    });
  }, []);
  useEffect(() => {
    onChildAdded(chatListRef, (data) => {
      setChats((chats) => {
        const existingChat = chats.find(
          (c) =>
            c.name === data.val().name && c.message === data.val().message
        );
        if (!existingChat) {
          return [...chats, data.val()];
        }
        return chats;
      });
    });
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chats]);

  const sendChat = () => {
    if (msg.trim() !== '') {
      const chatRef = push(chatListRef);
      set(chatRef, {
        name,
        message: msg
      });

      setMsg('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendChat();
    }
  };

  const handleLoginKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setName(e.target.value);
    }
  };

  return (
    <div className="all">
      {!name ? (
        <div className="main">
          <form>
            <input
              type="area"
              placeholder="Enter your name"
              onBlur={(e) => setName(e.target.value)}
              onKeyPress={handleLoginKeyPress}
            />
            <h5 className="namee">Join Our Chat Room</h5>
          </form>
        </div>
      ) : (
        <div className="chatroom-container"><lable>
          <h3>Welcome to our chat room: {name}</h3>
          <div className="chat-container" ref={chatContainerRef}>
            {chats.map((c, i) => (
              <div
                key={i}
                className={`container ${c.name === name ? 'me' : 'other'}`}
              >
                <p className="chatbox">
                  <strong>{c.name}</strong>
                  <br />
                  <span>{c.message}</span>
                </p>
              </div>
            ))}
          </div></lable>
          <div className="btm">
            <form onSubmit={(e) => e.preventDefault()} className="input-container">
              <div className="input-row">
              <label >
                <input
                  type="text"
                  onInput={(e) => setMsg(e.target.value)}
                  value={msg}
                  placeholder="Enter your message"
                  onKeyPress={handleKeyPress}                  
                />
                <button className="send-button" onClick={sendChat}>
                  <BiSend size={20} />
                </button></label>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default Chatbox;