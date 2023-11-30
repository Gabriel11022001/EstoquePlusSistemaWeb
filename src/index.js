import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './views/Home';
import GestaoCategoria from './views/GestaoCategoria';
import './reset.css';
import './estilos-base.css';
import './tabelas.css';
import Login from './views/Login';
import CadastroCategoria from './views/CadastroCategoria';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/categorias',
        element: <GestaoCategoria />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/categoria/cadastrar',
        element: <CadastroCategoria />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={ router } />
    </React.StrictMode>
);

reportWebVitals();
