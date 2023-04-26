import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100vh;
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 10px;

        @media screen and (max-width: 1680px) {
        font-size: 9.5px;
        }

        @media screen and (max-width: 1366px) {
        font-size: 9px;
        }
    }

    body, input, button, textarea {
        font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: 400;
    }

    body {
        background-color: ${({ theme }) => theme.colors.primary};
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    a, u, p, ul, li {
        font-size: 1.4rem;
    }

    .ReactModal__Overlay {
        background-color: ${({ theme }) => theme.colors.quartz} !important;
    }

    .ReactModal__Content {
        padding: 0 !important;
        margin: 0 auto;
        width: fit-content;
        max-width: 50rem;
        height: fit-content;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .Toastify__toast-icon {
        svg {
            fill: ${({ theme }) => theme.colors.white};
        }
    }

    .Toastify__toast--error {
        background-color: ${({ theme }) => theme.colors.danger} !important;
    }

    .Toastify__toast--success {
        background: ${({ theme }) => theme.colors.secondary};
    }

    .Toastify__progress-bar {
        background-color: rgb(255, 255, 255, 0.4);
    }

    .Toastify__close-button {
        color: ${({ theme }) => theme.colors.white};
        opacity: 0.7;

        &:hover {
        opacity: 1;
        }
    }

    .Toastify__toast {
        border-radius: 0.3rem;
    }

    .Toastify__toast-body {
        font-size: 1.3rem;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.white};
    }
`;
