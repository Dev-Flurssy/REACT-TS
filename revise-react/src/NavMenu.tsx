type MenuType = {
  item: string | number;
};

type NavType = {
  menuItems: (string | number)[];
};

function MenuItems({ item }: MenuType) {
  return <li>{item}</li>;
}
const NavMenu = ({ menuItems }: NavType) => {
  const updatedItem = menuItems.map((items) => (
    <MenuItems key={items.toString()} item={items} />
  ));
  return (
    <div>
      <ul>{updatedItem}</ul>
    </div>
  );
};

export default NavMenu;
