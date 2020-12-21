import React, { useEffect, useState } from 'react';
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", ()=> {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });

        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
            />
            <img
                className="nav__avatar"
                src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQ4MC4xMzMgNDQ1LjkzYzAtNDguMjEyLTMyLjM0My05MC40MjktNzguODkzLTEwMi45NzdsLTM4Ljg5MS0xMC40ODRoLTk2LjM0OWwyMCAxNzkuNTMxaDE5NC4xMzN6IiBmaWxsPSIjZjVmMGViIi8+PHBhdGggZD0ibTIzNiAzMzIuNDY5IDIwIDE3OS41MzFoMzB2LTE3OS41MzF6IiBmaWxsPSIjZWZlMmRkIi8+PHBhdGggZD0ibTIwNiAzMzIuNDY5IDIwIDE3OS41MzFoMzB2LTE3OS41MzF6IiBmaWxsPSIjZjVmMGViIi8+PHBhdGggZD0ibTE0OS42NTEgMzMyLjQ2OS0zOC44OTEgMTAuNDg0Yy00Ni41NSAxMi41NDktNzguODkzIDU0Ljc2NS03OC44OTMgMTAyLjk3N3Y2Ni4wN2gxOTQuMTMzdi0xNzkuNTMxeiIgZmlsbD0iI2ZmZjVmNSIvPjxwYXRoIGQ9Im0zOTcuMDA1IDExMy40MTljLTE0LjE1NS02NC44NTYtNzEuOTA0LTExMy40MTktMTQxLjAwNS0xMTMuNDE5bC0yMCAxNTIuNWMxMjMgMCAxNjEuMDA1LTM5LjA4MSAxNjEuMDA1LTM5LjA4MXoiIGZpbGw9IiMwZjI0NGQiLz48cGF0aCBkPSJtMjU2IDBjLTY5LjEyNCAwLTEyNi44ODcgNDguNTk1LTE0MS4wMTkgMTEzLjQ4MyAwIDAgMzQuMDE5IDM5LjAxNyAxNDEuMDE5IDM5LjAxN3oiIGZpbGw9IiMyODNkNjYiLz48cGF0aCBkPSJtMTEzLjA1MyAyNTQuOTM4aC0xNy40MzJjLTI2LjQgMC00Ny44MDEtMjEuNDAxLTQ3LjgwMS00Ny44MDEgMC0yNi40IDIxLjQwMS00Ny44MDEgNDcuODAxLTQ3LjgwMWg0Ni4wNDR6IiBmaWxsPSIjZjJiYjg4Ii8+PHBhdGggZD0ibTM5OC44ODUgMjU0LjkzOGgxNy40MzNjMjYuNCAwIDQ3LjgwMS0yMS40MDEgNDcuODAxLTQ3LjgwMSAwLTI2LjQtMjEuNDAxLTQ3LjgwMS00Ny44MDEtNDcuODAxaC00Ni4wNDR6IiBmaWxsPSIjZDY5OTVjIi8+PHBhdGggZD0ibTQwMC4zMzUgMTQ0LjMzNXY5MC41NDljMCA3OS43MTQtNjQuNjIxIDE0NC4zMzUtMTQ0LjMzNSAxNDQuMzM1bC0yMC0xODguMDE2IDIwLTgwLjY5OGMxMi41MDgtNC4xMTggMjQuNjkyLTkuNjgyIDM1Ljk4LTE3LjExMSAwIDAgNDYuNDM3IDMzLjM1MiAxMDUuMDI1IDIwLjAyNiAyLjE3NCA5Ljk2IDMuMzMgMjAuMzAyIDMuMzMgMzAuOTE1eiIgZmlsbD0iI2YyYmI4OCIvPjxwYXRoIGQ9Im0xMTQuOTgxIDExMy40ODNjLTIuMTY1IDkuOTQxLTMuMzE2IDIwLjI2MS0zLjMxNiAzMC44NTJ2OTAuNTQ5YzAgNzkuNzE0IDY0LjYyMSAxNDQuMzM1IDE0NC4zMzUgMTQ0LjMzNXYtMjY4LjcxNGMtNjIuMjcyIDIwLjUwMS0xMzIuNjMxIDQuOTYtMTQxLjAxOSAyLjk3OHoiIGZpbGw9IiNmMmQxYTUiLz48cGF0aCBkPSJtMzA0LjgxMyAxNzYuMjAzaDMxLjg2N3YzMGgtMzEuODY3eiIgZmlsbD0iIzBmMjQ0ZCIvPjxwYXRoIGQ9Im0xNzUuMzE5IDE3Ni4yMDNoMzEuODY3djMwaC0zMS44Njd6IiBmaWxsPSIjMjgzZDY2Ii8+PHBhdGggZD0ibTMxOS43MzQgNDYzLjI2NnYtMzBoLTYzLjczNGwtMTAgMTUgMTAgMTV6IiBmaWxsPSIjMjgzZDY2Ii8+PHBhdGggZD0ibTE5Mi4yNjYgNDMzLjI2Nmg2My43MzR2MzBoLTYzLjczNHoiIGZpbGw9IiM0ZDU3OGMiLz48L2c+PC9zdmc+"
                alt="Profile Picture"
            />
        </div>
    )
}

export default Nav;