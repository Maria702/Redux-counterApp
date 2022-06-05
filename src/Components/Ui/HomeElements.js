import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: grey;
    height: 100vh;
    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60vh;
    height: 60vh;
    background-color: white;
    border-radius: 40px;
    padding: 20px;
    @media (max-width: 768px) {
        justify-content: center;
        width: 30vh;
        height: 30vh;
        border-radius: 20px;
    }
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: purple;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const Items = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : center;
`;

export const MinusButton = styled.button`
    background-color:  #f5f5f5;
    height: 10vh;
    margin: 1rem;
    border-radius: 50%;
    width: 10vh;
    outline: none;
    cursor: pointer;
    font-size: 2rem;
    font-weight: bold;
    color: purple;
    &:hover {
        color: blue;
    }
    @media (max-width: 768px) {
        height: 5vh;
        width:  5vh;
        font-size: 1rem;
    }
`;

export const ItemsInput = styled.input`
    background-color:  #f5f5f5;
    height: 30vh;
    width: 30vh;
    border-radius: 100%;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    color: purple;
    @media (max-width: 768px) {
    height: 15vh;
    width:  15vh;
    font-size: 1rem;
}
`;

export const PlusButton = styled.button`
    background-color:  #f5f5f5;
    margin: 1rem;
    font-weight: bold;
    height: 10vh;
    border-radius: 50%;
    width: 10vh;
    outline: none;
    cursor: pointer;
    font-size: 2rem;
    color: purple;

    &:hover {
        color : blue;
    }
    @media (max-width: 768px) {
        height: 5vh;
        width:  5vh;
    font-size: 1rem;
    }
`;

