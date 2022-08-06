import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import { useContext } from 'react';


export default function Header () {
    const {image, setImage}=useContext(UserContext); 
    const teste = image;
    return (
        <HeaderStyle>
           <h1>TrackIt</h1>
           <img src={teste}/>
           {console.log(teste)}
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
width: 100%;
height: 70px;
font-family: 'Playball';
font-weight: 400;
font-size: 40px;
background-color: #126BA5;
position: fixed;
top: 0;
left: auto;
right: auto;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
img {
    width: 51px;
    height: auto;
    border-radius: 100%;
}
`