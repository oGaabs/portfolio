import styled, { css } from "styled-components"
import { IContactIconContainerProps } from "../../interfaces/header"
import { ILangButtonProps } from "../../interfaces/lang"
import { devices } from "../../styles/global"

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  /*background: #121214;*/

  @media ${devices.laptop} {
    position: sticky;
    top: 0;
    z-index: 1;
  }
`
export const ContactContainer = styled.div`
  width: fit-content;
  display: flex;
`

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${devices.mobileS} ${devices.mobileM} ${devices.mobileL} {
    display: none;
  }
  
`

export const LangsContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const LangButton = styled.button<ILangButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.3rem;

  margin: 5px;
  padding: 10px 20px;

  transition: var(--transition);
  cursor: pointer;

  

  color: var(--color-off-white);
  background: var(--color-bg-smooth);         
  
  ${(props) =>
    props.selected
      ? css`
          border-bottom: 2px solid var(--color-highlight);
    
          :hover {
            box-shadow: inset 0px 0px 5px var(--color-black);
          }
        `
      : css`

          :hover {
            box-shadow: inset 0px 0px 5px var(--color-off-white);
          }
        `};

        &:hover {
          border-bottom: 2px solid var(--color-highlight);
          box-shadow: 8px 8px 16px var(--color-black);
          border-radius: 17px;
          color: var(--color-off-white);
          background: var(--color-bg-smooth);
        } 

  :active {
    > span {
      border-bottom: 2px solid var(--color-highlight);
      transform: scale(0.8);
    }
  }
`

export const ContactIcon = styled.span<IContactIconContainerProps>`
  display: flex;
  justify-content: center;

  border: 1px solid var(--color-border-dark);
  border-radius: 0.6rem;

  margin: 5px;
  padding: 10px 20px;

  transition: var(--transition);
  cursor: pointer;

  border-bottom: 2px solid var(--color-highlight);
  box-shadow: 8px 8px 16px var(--color-black);
  border-radius: 17px;
  color: var(--color-off-white);
  background: var(--color-bg-smooth);

  > span {
    display: none;
  }

  :active {
    svg {
      transform: scale(0.9);
      
    }
  }

        ${(props) => {
    if (props.contactType === "linkedin") {
      return css`
      background: var(--color-linkedin);
      :hover {
        background: var(--color-linkedin-hover);
      }`
    } else if (props.contactType === "github") {
      return css`
                background: var(--color-github);
                :hover {
                  background: var(--color-github-hover);
                }
              `
    }
    else {
      return css`
            background: var(--color-highlight-active); 
            flex-wrap: wrap;
            flex: 1;
            padding-left: 6%;
            :hover {
              border-bottom: 2px solid var(--color-highlight);
              box-shadow: 8px 8px 16px var(--color-black);
              border-radius: 17px;
              color: var(--color-off-white);
              background: var(--color-bg-smooth);
            }
          `
    }
  }};

  @media ${devices.mobileL} {
    svg {
      margin-right: 0.5rem;
    }

    > span {
      display: inline;
    }
  }

  @media ${devices.tablet} {
    padding: 12px 24px;

    svg {
      margin-right: 1rem;
    }
  }
`
