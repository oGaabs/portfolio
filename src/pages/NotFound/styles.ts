import styled from "styled-components"
import { devices } from "../../styles/global"

export const Container = styled.div`
  padding: 10%;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
  }

  @media ${devices.tablet} {
    padding: 7% 10%;
  }

  @media ${devices.laptop} {
    padding: 5% 10%;
  }

  img{
    width: 50%;
  }

  .container{
      height: 100vh;
      display: flex;
      flex-direction: column;
      gap: 30px;
      align-items: center;
      justify-content: center;
  }
  
  h1{
      color: rgb(233, 238, 245);
      font-size: 20px;
      padding: 20px;
  }
  .btn-404{
      padding: 13px 30px;
      border-radius: 15px;
      border: none;
      background: var(--color-main);
      color: white;
  }

`

