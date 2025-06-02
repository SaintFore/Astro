import { useState } from "preact/hooks";

export default function Greeting({message}) {
    const randomMessage = () => message[(Math.floor(Math.random() * message.length))];

    const [greeting, setGreeting] = useState(message[0]);

    return (
        <dvi>
            <h3>{greeting}! 欢迎来访！</h3>
            <button onClick={() => setGreeting(randomMessage())}>
                换个问候语
            </button>
        </dvi>
    );
}