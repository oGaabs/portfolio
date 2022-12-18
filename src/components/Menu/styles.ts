import styled from "styled-components"
import { IMenuTabContainerProps } from "../../interfaces/menu"
import { devices } from "../../styles/global"

export const NavContainer = styled.nav`
  border-bottom: 1px solid var(--color-dark-gray);
  display: flex;

  position: sticky;
  top: 0;
  background: var(--color-bg);

  @media ${devices.laptop} {
    position: relative;
  }

  :hover {
    box-shadow: 8px 8px 16px var(--color-black);
    border-radius: 17px;
    color: var(--color-off-white);
    
  }
`

export const MenuTabContainer = styled.button<IMenuTabContainerProps>`
  background: none;
  border: 0;
  border-bottom: 2px solid transparent;
  padding: 16px 12px;
  flex: 1;
  text-transform: uppercase;

  transition: var(--transition);

  border-bottom: ${(props) => props.isActive && "2px solid var(--color-main)"};

  &:hover {
    border-bottom: 2px solid var(--color-highlight);
    box-shadow: 8px 8px 16px var(--color-black);
    border-radius: 17px;
    color: var(--color-off-white);
    background: var(--color-bg-smooth);
  } 

  &:active {
    div {
      transform: scale(0.9);
    }
  }

  @media ${devices.laptop} {
    padding: 5px 12px;
  }
`
