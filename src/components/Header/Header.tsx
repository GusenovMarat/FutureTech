import HeaderBottom from "../HeaderBottom/HeaderBottom";
import HeaderTop from "../HeaderTop/HeaderTop";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <HeaderTop />
			  <HeaderBottom />
      </div>
		</header>
  )
}

export default Header;