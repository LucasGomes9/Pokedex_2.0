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


export const Upper = styled.div`
    flex: 1;
    background-color: #559EDF;

`;

export const Info = styled.div`
      margin-top: 10px;
      padding: 40px;
      max-width: 320px;
      background-color: #f4f4f4;
      color: #222;
      text-align: center;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      img{
        width: 200px;
        }
      h2{
        text-transform: capitalize;
        margin-bottom: 0px;
        font-size: 32px;
        font-weight: normal;
        }
      p{
        margin-top: 5px;
        color: #666;
        font-weight: lighter;
        }
`;
