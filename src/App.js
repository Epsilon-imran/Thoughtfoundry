import { Redirect, Route, Routes } from "react-router-dom";

import React, { Suspense } from "react";

import "./App.scss";
import Layout from "./components/UI/Layout";
// import Homepage from "./pages/Homepage";

//Pages name

const Homepage = React.lazy(() => import("./pages/Homepage"));

function App() {
    return (
        <Layout>
            {/* <Suspense
                fallback={<div className="text-center">Loading.....</div>}
            ></Suspense> */}
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense
                            fallback={
                                <div className="text-center">Loading.....</div>
                            }
                        >
                            <Homepage />
                        </Suspense>
                    }
                />
            </Routes>
        </Layout>
    );
}

export default App;
