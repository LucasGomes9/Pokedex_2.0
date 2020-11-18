import styled from 'styled-components';

export const Message = styled.h1`
    font-size: 40px;
    color: #3a3a3a;
    max-width: 700px;
    line-height: 56px;
    align-items: center;
    font-weight: 900;
    font-style: italic;
    text-shadow: 2px 2px #fff;
    margin-top: 20px;
    margin-left: 20px;
`;

export const IMG = styled.img`

    max-width: 900px;
    display: flex;
    margin-left: auto;
    margin-right: auto;

`;


export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;

    input{
        flex: 1;
        height: 50px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;

        &::placeholder{
            color: #a8a8b3;
        }
    }
    button{
        width: 210px;
        height: 50px;
        background: #04d361;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;
    }
`;

export const Listas2 = styled.div`

    margin-top: 80px;
    max-width: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    a{
        text-decoration: none;
        margin-left: 50px;
        margin-top: 10px;

        img{
            max-width: 300%;
            width: 100px;
            border-radius: 10px 10px 10px 10px;

        }
        strong{
            color: #000000;
            display: block;
            justify-content: center;
            align-items: center;
        }
    }
`;

export const Listas = styled.div`

    margin-top: 80px;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;


        a{
            text-decoration: none;
            margin-left: 50px;
            margin-top: 20px;

            li{
                list-style: none;
                padding: 40px;
                border-radius: 50px;
                background-color: #f4f4f4;
                color: #222;
                text-align: center;
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

        }
    }
`;

export const PokeList = styled.div`
    margin-top: 80px;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    ul{
        display:flex;
        flex-wrap:wrap;
        width:100%;


            li{

                margin: 20px;
                list-style: none;
                padding: 40px;
                border-radius: 50px;
                background-color: #f4f4f4;
                color: #222;
                text-align: center;
                a{
                    text-decoration: none;
                    margin-left: 50px;
                    margin-top: 20px;

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
            }
        }

    }



`;
