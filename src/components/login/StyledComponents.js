import styled from 'styled-components'

export const FlexContainer = styled.div`
    height: 97vh;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction:column;
`;

export const LoginForm = styled.form`
    background-color: white;
    width: 500px;
    box-shadow: 5px 15px 15px lightgray;
    padding: 5px;
    `;

export const FacebookButton = styled.a`
    text-align: center;
    width: 280px;
    background-color: #3b5998;
    color: white;
    padding: 8px 20px;
    border-radius: 3px;
    &:hover {
    background-color: rgba(59,89,152, 0.9);
    cursor: pointer;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const GoogleButton = styled.a`
    text-align: center;
    width: 280px;
    background-color: #d34836;
    color: white;
    padding: 8px 20px;
    border-radius: 3px;
    &:hover {
        background-color: rgba(211, 72, 54, 0.9);
        cursor: pointer;
    }
`;

export const Button = styled.button`
    padding: 8px;
    background-color: rgb(62, 132, 255);
    color: white;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: rgba(62, 132, 255, 0.9);
    }
`;