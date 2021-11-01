import * as C from './style';
// import { ReactComponent as LogoAppImg } from '../../assets/images/logo_app.svg';
// import userImg from '../../assets/images/user_img.jpg';
export const Navbar = () => {
    return (
        <C.Navbar>
            <C.NavbarContainer>
                <C.LogoApp>
                    {/* <LogoAppImg
                        width="40px"
                        height="40px"
                    /> */}
                    <C.LogoText>Expense Manager</C.LogoText>
                </C.LogoApp>
                <C.UserProfile>
                    <C.UserImg
                        src="https://github.com/LeoRangel.png"
                        alt=""
                    />
                    <C.UserName>Leo Rangel</C.UserName>
                </C.UserProfile>
            </C.NavbarContainer >
        </C.Navbar >
    )
}