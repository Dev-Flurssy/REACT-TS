type User = {
  id: number;
  name: string;
  age: number;
};

const Users = () => {
  const users: User[] = [
    { id: 1, name: "Geeks", age: 30 },
    { id: 2, name: "for", age: 25 },
    { id: 3, name: "Geeks", age: 20 },
  ];
  return (
    <div>
      <h1>First set of users (using index)</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} is {user.age} years old
          </li>
        ))}
      </ul>

      <h1>Second set of users (using id)</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} is {user.age} years old
          </li>
        ))}
      </ul>

      <h1>Third set of users (above Thirty)</h1>
      <ul>
        {users.map((user) =>
          user.age > 30 ? (
            <li key={user.id}>{user.name} is older than 30 years old</li>
          ) : (
            <li key={user.id}>{user.name} is younger than 30 years old</li>
          ),
        )}
      </ul>
    </div>
  );
};

export default Users;
