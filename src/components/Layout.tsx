import React, { FC } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { SEO } from "./SEO";
import Gravatar from "react-gravatar";

const GlobalStyles = createGlobalStyle`
body {
    min-height: 100vh;
    background: linear-gradient(
        35deg,
        #000 0%,
        #333 5%,
        #29295c 50%,
        #333 95%,
        #000 100%
    );
    background-size: 400% 400%;
    animation: gradient 35s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}`;

const Layout: FC<{}> = ({ children }) => (
    <>
        <SEO pageTitle="Christopher Vachon" />
        <GlobalStyles />
        <div className="container mx-auto my-4">
            <div className="container-content rounded shadow border-2 p-4 bg-white text-gray-800 dark:bg-gray-900 dark:text-white flex gap-4">
                <div>
                    <Gravatar
                        email="code@christophervachon.com"
                        size={400}
                        className="w-28 rounded-full border-2"
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <header>
                        <p className="text-4xl font-bold">Christopher Vachon</p>
                        <nav>
                            <ul className="flex gap-2 m-0 p-0">
                                <li>Home</li>
                                <li>Articles</li>
                                <li>Code</li>
                                <li>Beer</li>
                            </ul>
                        </nav>
                    </header>
                    <main>{children}</main>
                    <footer className="text-xs">
                        <p>&copy; {new Date().getFullYear()}</p>
                    </footer>
                </div>
            </div>
        </div>
    </>
);

export default Layout;
export { Layout };
