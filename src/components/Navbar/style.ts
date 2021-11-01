import styled from 'styled-components';

export const Navbar = styled.nav`
    padding: 10px;
`;

export const NavbarContainer = styled.nav`
    margin: auto;
    max-width: 980px;
    display: flex;
    justify-content: space-between;
`;

export const LogoApp = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoText = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
    margin-left: 10px;
`;

export const UserProfile = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    margin-left: 10px;
    display: flex;
    align-items: center;
`;

export const UserImg = styled.img`
    width: 32px;
    height: 32px;
    border: 2px solid rgba(0,0,0,.1);
    border-radius: 50%;
`;

export const UserName = styled.span`
    font-size: 1rem;
    font-weight: bold;
    margin-left: 10px;
`;