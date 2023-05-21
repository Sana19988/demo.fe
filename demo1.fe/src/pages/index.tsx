import Link from "next/link";
import {useState} from "react";

export default function HomePage() {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <h1>Home page</h1>
            <h1>{counter}</h1>
            <Link href={"users"}>Go to users page</Link>
            <br/>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>Increment counter
            </button>
        </>
    );
}
