import HeaderList from "./components/HeaderList/HeaderList";

const App = () => {
  return (
    <header className="header">
			<div className="header-top"></div>
			<div className="header-bottom">
				<div className ="header-logo">
					<div className="header-logo_icon"></div>
				</div>
				<HeaderList />
				<div className ="header-right"></div>
			</div>
		</header>
  )
}

export default App;