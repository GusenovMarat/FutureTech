const App = () => {
  return (
    <header className="header">
			<div className="header_top"></div>
			<div className="header_bottom">
				<div className ="header_logo">
					<div className="header_logo-icon"></div>
				</div>
				<div className ="header_main">
					<ul>
						<li className="header_item">home</li>
						<li className="header_item">news</li>
						<li className="header_item">podcasts</li>
						<li className="header_item">resourses</li>
					</ul>
				</div>
			</div>
			<div className ="header_right"></div>
		</header>
  )
}

export default App;