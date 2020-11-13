import React, {useEffect, useRef, useState} from "react";
import {DEV_VERSION} from "../../../../config";
import socketIo from "socket.io-client";

// const socket = socketIo("https://samurai-chat-back.herokuapp.com/");
// const socket = socketIo("http://localhost:7542/");
const socket = socketIo("https://neko-back.herokuapp.com/");
let id = "0";

const Chat = () => {
    const [m, setM] = useState<any[]>([]);
    const [v, setV] = useState<string>('Hi all!');
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        socket.on('init-messages-published', (messages: any[]) => {
            setM(messages);
        });

        socket.on('new-message-sent', (message: any) => {
            setM((m) => [...m, message]);
        });

        socket.emit("init", id, (answer: string) => alert(answer));

    }, []);

    const send = () => {
        socket.emit("client-message-sent", v, (answer: string) => alert(answer));
        setV("");
    }
    const sendName = () => {
        socket.emit("client-name-sent", "Ignat", (answer: string) => alert(answer));
    }

    useEffect(() => {
        ref.current?.scrollIntoView({behavior: "smooth"})
    }, [m])

    ////////////////////////////////////////////////////////////

    DEV_VERSION && console.log("render Chat");
    return (
        <div>
            <div style={{height: 500, overflowY: "scroll"}}>
                {m.map(m => (
                    <div key={m._id}>
                        {JSON.stringify(m)}
                    </div>
                ))}
                <div ref={ref}/>
            </div>

            <textarea value={v} onChange={e => {
                setV(e.target.value);
                socket.emit('client-typed',)
            }}/>
            <button onClick={send}>send</button>
            <button onClick={sendName}>send name</button>

        </div>
    );
};

export default Chat;
