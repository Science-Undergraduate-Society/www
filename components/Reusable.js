// Reusable components for styled components
import styled, { keyframes } from 'styled-components';

const breakpoints = {
    mobile: '768px',
    tablet: '1024px',
};

const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
`

export const Button = styled.button`
    font-size: 15px;
    text-decoration: none;
    border: none;
    border-radius: 7px;
    background-color: #046bd2;
    color: white;
    padding: 15px 50px;
    &:hover {
        background-color: #0357a9;
        animation: ${pulse} 1.2s ease-in-out infinite;
    }

    @media (max-width: ${breakpoints.mobile}) {
        padding: 10px 30px;
    }
`