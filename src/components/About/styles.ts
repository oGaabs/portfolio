import styled from "styled-components"
import { devices } from "../../styles/global"

export const AboutContainer = styled.section`
  padding: 5% 0;

  a {
    color: var(--color-link-text);

    :hover {
      text-decoration: underline;
    }
  }

  p {
    line-height: 1.6rem;
    color: var(--color-off-white);
    font-size: 0.9rem;
    text-align: justify;
  }

  p + p {
    margin-top: 8%;
  }

  @media ${devices.laptop} {
    padding: 2% 0;

    p {
      font-size: 1rem;
    }

    p + p {
      margin-top: 2%;
    }
  }

  @media ${devices.laptopL} {
    padding: 3% 0;
    
    p {
      font-size: 1.2rem;
    }
  }
`
