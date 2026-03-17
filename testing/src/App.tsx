import NavMenu from "./NavMenu";

function App() {
  const menuItems1 = [1, 2, 3, 4, 5];
  const menuItems2 = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <NavMenu menuItems={menuItems1} />
      <NavMenu menuItems={menuItems2} />
    </>
  );
}
export default App;
