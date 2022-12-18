import styled from "styled-components"
import { devices } from "../../styles/global"

export const Container = styled.section`
  display: flex;
  justify-content: center;
`

export const ProjectsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 5%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 15px;
  

  li {
    width: 100%;
    height: auto;
  }

  @media ${devices.tablet} {
    flex-direction: row;
    gap: 3%;
    flex-wrap: wrap;

    li {
      width: 48.5%;
    }
  }

  @media ${devices.laptopXL} {
    justify-content: space-between;
    gap: unset;

    li {
      width: 32%;
    }
  }
`
