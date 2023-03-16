import { useActions } from "../../hooks/useActions";
import { User } from "../../interfaces/User";
import "./index.scss";

interface UserListItemProps {
  user: User;
}

const UserListItem = ({ user }: UserListItemProps) => {
  const { deleteUser } = useActions();

  return (
    <li className="user-list-item">
      <div className="user-list-item__info">
        <div className="user-list-item__name">{user.name}</div>
        <div className="user-list-item__username">{user.username}</div>
        <div className="user-list-item__email">{user.email}</div>
      </div>
      <button
        className="user-list-item__delete"
        onClick={() => deleteUser(user.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default UserListItem;
