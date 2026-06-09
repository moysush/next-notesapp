import Link from "next/link";
import { getUsers } from "../services/users";

const Users = async () => {
  const users = await getUsers();
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            {user.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Users;
