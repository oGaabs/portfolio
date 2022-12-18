import styled from "styled-components"
import { devices } from "../../styles/global"

export const TechsContainer = styled.div`
  margin-top: 10%;

  h3 {
    text-align: center;
    margin-bottom: 2rem;
  }

  @media ${devices.laptop} {
    margin-top: 4%;
  }
`
export const TechListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    width: 50%;
    text-align: center;
    padding: 16px;

    @media ${devices.tablet} {
      width: 33.33%;
    }

    @media ${devices.laptop} {
      width: 16.66%;
    }

    @media ${devices.laptopXL} {
      width: 14.285714%;
    }
  }
`
