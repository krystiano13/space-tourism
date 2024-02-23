import Logo from '../../assets/shared/logo.svg';
export function Navbar() {
    return (
        <nav class="fixed w-full p-12">
            <img src={Logo} alt="logo" />
            <div id="line"></div>
            <div>
                <a href="/">HOME</a>
                <a href="/destination">DESTINATION</a>
                <a href="/crew">CREW</a>
                <a href="/technology">TECHNOLOGY</a>
            </div>
        </nav>
    )
}