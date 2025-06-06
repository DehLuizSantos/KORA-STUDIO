import styled from '@emotion/styled'

export const HeaderLanding = styled.div`
  border: 2px solid ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  background-color: ${(props) => props.theme.colors.leaf};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  max-height: 60px;

  .hidden-mobile {
    display: none;

    @media (min-width: 800px) {
      display: block;
    }
  }
`

export const DrawerMobile = styled.div`
  border: 2px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.dark};
  width: 100%;
  height: 100vh;
  text-align: center;

  .close {
    margin: 5px;
    margin-left: 90vw;
  }

  img {
    margin-top: 100px;
  }
`

export const NavMenu = styled.nav`
  @media (min-width: 800px) {
    display: flex;
    gap: 60px;
  }

  a {
    display: block;
    cursor: pointer;
    margin: 60px 0;
    color: ${(props) => props.theme.colors.white};
  }
`
