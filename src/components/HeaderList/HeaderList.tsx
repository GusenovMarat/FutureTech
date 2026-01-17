interface HeaderListProps {
	isBold?: boolean
	children: React.ReactNode
}

const HeaderList = ({isBold = false, children}: HeaderListProps) => {
  return (
    <ul className ="header-list">
			<li
				className="header-item"
				style={{fontWeight: isBold ? "bold": "normal"}}
			>
				{children}
			</li>
		</ul>
  )
}

export default HeaderList;