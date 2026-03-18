type MenuType = {
  item: string | number;
};
type NavType = {
  items: (string | number)[];
};

const Menu = ({ item }: MenuType) => {
  return <li>{item}</li>;
};

const NavMenu = ({ items }: NavType) => {
  const lists = items.map((list) => (
    <Menu key={list.toLocaleString()} item={list}></Menu>
  ));

  return (
    <div>
      <ul>{lists}</ul>
    </div>
  );
};

export default NavMenu;
