import React from "react";
import { Routes, Route,} from "react-router-dom";
import { Provider } from 'react-redux';
import './App.css';
import store from "./store";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";



function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="detail" element={<DetailPage />} />
            </Routes>
        </Provider>
    </div>
  );
}

export default App;
