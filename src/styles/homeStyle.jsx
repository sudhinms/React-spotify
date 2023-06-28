import styled from "styled-components";
import bg from "../assets/spotify_md.png"

const MainContainer=styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(${bg});
  background-size: cover;
  overflow: auto;

  @media (max-width: 200px) {
    max-width: 200px;
    max-height: 300px;
  }
 

  li{
    list-style: none;
    padding-right: 15px;
  }
  nav{
    display: flex;
    width: 100%;
    height: 10%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    align-items: center;
  }
  ul{
    display: flex;
    flex-direction: row;
    margin-left: auto;
  }
  img{
    width: 10%;
    height: 44%;
  }
  .container2{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30%;
  height: 40%;
  transform: translate(-50%, -50%);
  color: white;
  }

  h1{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 1000;
    font-size: 4rem;
  }

  button{
    background-color: green;
    color: white;
    height: 30px;
    width: 100px;
    border-radius: 15px;
    border-style: hidden;
    margin-left: 20px;
  }
  h3{
    margin-left: 20px;
    font-size: 2em;
    font-weight: bold;
  }
  
`;

export default MainContainer