import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 40px;
    color: #000;
    max-width: 280px;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    font-weight: 900;
    margin-top: 20px;

    text-align: center;

`;

export const Button = styled.button`
    width: 100px;
    height: 50px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
`;

export const Upper = styled.div`
    flex: 1;
    background-color: #559EDF;

`

export const Info = styled.div`
      margin-top: 10px;
      padding: 40px;
      max-width: 280px;
      background-color: #222;
      color: #222;
      text-align: center;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      background: linear-gradient(180deg,  #FFC0CB 45%, #00FFFF 55%);
      img{
        width: 200px;

        }
      h2{
        text-transform: capitalize;
        margin-bottom: 0px;
        font-size: 32px;
        font-weight: bold;

        }
      p{
        margin-top: 5px;
        color: #000;

        }
`;
