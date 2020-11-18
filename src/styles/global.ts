import {createGlobalStyle} from 'styled-components';
import background from '../assets/images/back.jpg';

export default createGlobalStyle `

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

}

body {
    background: #fff url(${background}) no-repeat 110% center;
    background-size: 100%;
    background-attachment: fixed;
    -webkit-font-smoothing: antialiased;
}

body, input, button {
    font: 16px Roboto, sans-serif;
}

#root {
    width: 100%;
    height:100%;
    margin: 0 auto;
    padding: 40px 20px;
}

button{
    cursor: pointer;
}
`;
