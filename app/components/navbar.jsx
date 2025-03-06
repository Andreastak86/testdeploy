import React from "react";

export default function Navbar() {
    return (
        <div>
            <h1>Navbar</h1>
            <p>This is a navbar</p>
            <button>Click Me</button>
            <a href='#'>Link</a>
            {/* <img src='logo.png' alt='Logo' /> */}
            <input type='text' placeholder='Search...' />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}
