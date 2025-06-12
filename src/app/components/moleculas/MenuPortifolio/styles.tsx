import styled from '@emotion/styled'

export const MenuPortifolioWrapper = styled.div`
  .mantine-Select-dropdown {
    background-color: red;
  }
  .select {
    input {
      background-color: transparent;
      margin-bottom: 15px;
      &:focus {
        border-color: ${(props) => props.theme.colors.primary};
        box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.1);
      }
    }
    @media (min-width: 800px) {
      display: none;
    }
  }
`

export const NavMenuDesk = styled.nav`
  display: none;

  @media (min-width: 800px) {
    display: block;
    margin-bottom: 15px;
    z-index: 3;
    background-color: #fff;
  }

  .listed {
    color: ${(props) => props.theme.colors.dark};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;

    button {
      background-color: transparent;
      color: ${(props) => props.theme.colors.leaf};
      all: unset;
      cursor: pointer;
    }
  }
`
