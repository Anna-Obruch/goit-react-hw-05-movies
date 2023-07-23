import { Suspense } from "react";
import styled from "styled-components";
import { Outlet,  NavLink } from "react-router-dom";
import { Container, NavItem, NavList, Navigation } from './SharedLayout.module';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const SharedLayout = () => {
    return(
        <Container>
            <header>
                <Navigation>
                    <NavList>
                        <NavItem>
                        <StyledLink to ='/'>Home</StyledLink>
                        </NavItem>
                        <NavItem>
                            <StyledLink to ='/movies'>Movies</StyledLink>
                        </NavItem>
                    </NavList>
                </Navigation>
            </header>
            <Suspense fallback ={<div>Loading page...</div>}>
                <Outlet/>
            </Suspense>
        </Container>
    );
};


export default SharedLayout;