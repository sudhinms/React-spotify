import styled from "styled-components";

const LoginMain=styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #0d6dda;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  overflow: auto;

  @media (max-width: 200px) {
    max-width: 200px;
    
  }
 
  .container2{
    background-color: white;
    width: 25%;
    height: 45%;
    justify-content: center;
    padding: 10px;
    align-items: center;
    padding-top: 20px;
    border-radius: 20px;
    overflow: auto;

  }

  .heading{
    text-align: center;
  }

  form{
    display: flex;
    flex-direction: column;
  }

  .labels{
    text-align: left;
  }
  #label2{
    margin-top: 10px;
  }

  #password{
    margin-bottom: 10px;
  }
  .inp{
    height: 30px;
  }

  #submitbtn{
    margin-top: 15px;
    background-color: #187718;
    color: white;
    border: #187718;
    border-radius: 10px;
  }
    .para1{
        padding-top: 7px;
    }
  .para2{
    padding-top: 2px;
  }

`;

export default LoginMain