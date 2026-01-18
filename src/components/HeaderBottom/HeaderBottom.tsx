import HeaderList from "../HeaderList/HeaderList";

const HeaderBottom = () => {

  return (
		<div className="header-bottom">
			<div className ="header-bottom_logo">
				<div className="header-bottom_icon"></div>
			</div>
			<HeaderList items = {["home", "news", "podcasts", "resources"]}/>
			<div className ="header-right"></div>
		</div>
  )
}

export default HeaderBottom;