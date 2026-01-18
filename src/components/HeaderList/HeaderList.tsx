interface HeaderListProps {
  items: React.ReactNode[];
}

const HeaderList = ({ items }: HeaderListProps) => (
  <ul className="header-list">
    {items.map((item, index) => (
      <li key={index} className="header-item">
        {item}
      </li>
    ))}
  </ul>
);

export default HeaderList;