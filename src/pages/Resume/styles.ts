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

  .react-pdf__Page__canvas {
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 8px 8px 16px var(--color-black);
    scale: 0.9;
  }
  .react-pdf__Page__textContent{
    display: none;
}
`

export const MainContainer = styled.main`
  flex: 2;
`

export const AsideContainer = styled.aside`
  display: none;
  flex: 1;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
  }

  div h1 {
      text-align: center;
      display: inline-block;
      width: 100%;
      margin-right: -50%;
  }

  div button {
      float: right;
  }

  @media ${devices.laptop} {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    img {
      object-fit: cover;
      border-radius: 40% 40% 50% 40%;
      width: 80%;
      position: sticky;
      top: 8%;
      margin-right: -10%;
      margin-bottom: 6%;

      border-bottom: 2px solid var(--color-highlight);
      box-shadow: 8px 8px 16px var(--color-black);
      color: var(--color-off-white);
      background: var(--color-bg-smooth);

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      background: purple;

      :hover {
        transform: scale(1.1);
        transition: 0.5s ease-in-out ;
      }

    }

  }

  @media ${devices.laptopXL} {
    flex: 0.75;
  }
`

export const FooterContainer = styled.footer``
