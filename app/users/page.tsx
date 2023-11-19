import { User } from '../types/users';

async function getUsers() {
  const data = await fetch('http://localhost:3000/api/users');
  const response = await data.json();
  return response;
}

export default async function Users() {
  const users = await getUsers();
  return (
    <ul>
      {users?.map((user: User) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
