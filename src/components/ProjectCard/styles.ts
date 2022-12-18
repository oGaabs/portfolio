import styled from "styled-components";
import { devices } from "../../styles/global";

export const CardContainer = styled.div`
  text-align: center;
  padding: 1rem;
  margin: 1rem 0;
  box-shadow: 2px 2px 5px var(--color-black);
  border-radius: 8px;
  background: var(--color-bg-smooth);

  :hover {
    box-shadow: 8px 8px 16px var(--color-black);
    border-radius: 17px;
    border: 1px solid var(--color-dark-gray);
  } 

  &:hover {
    border-bottom: 2px solid var(--color-highlight);
    color: var(--color-off-white);
    background: var(--color-bg-smooth);
  } 

  transition: var(--transition);

  h4 {
    margin: 10px 0 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--color-dark-gray);
  }

  p {
    font-weight: 300;
    font-size: 0.9rem;
    color: var(--color-off-white);
    line-height: 1.2rem;
    padding: 1rem 0;
    border-bottom: 1px solid var(--color-dark-gray);

    @media ${devices.tablet} {
      height: calc(1.2rem * 6);

      display: flex;
      align-items: center;
      align-content: center;
      text-align: justify;
    }

    @media ${devices.laptop} {
      height: calc(1.2rem * 7);
    }
  }

  @media ${devices.tablet} {
    margin: 6% 0 0 0;
  }

  @media ${devices.laptopL} {
    p {
      font-size: 1rem;
    }
  }
`;

export const CardButtonsContainer = styled.div`
  padding: 1rem 0;

  button {
    width: 48%;
    padding: 5px;

    background: var(--color-main);
    border: 0;
    margin: 0 1%;
    border-radius: 0.2rem;
    font-weight: 500;

    box-shadow: 1px 1px 2px var(--color-black);

    transition: var(--transition);

    :hover {
      box-shadow: 3px 3px 4px var(--color-black);
      background: var(--color-highlight);
    }

    :active {
      background: var(--color-highlight-active);
    }
  }
`;
