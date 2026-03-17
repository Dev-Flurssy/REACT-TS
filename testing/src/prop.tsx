type Igreet = {
  name: string;
};
function Greet({ name }: Igreet) {
  return <h1>Welcome back {name}!</h1>;
}
type Ibye = {
  name: string;
};

const Byes = ({ name }: Ibye) => {
  return <h1>Good Bye {name}!</h1>;
};
export { Greet, Byes };
