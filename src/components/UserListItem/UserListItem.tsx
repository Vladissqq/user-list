import { useActions } from "../../hooks/useActions";
import { User } from "../../interfaces/User";
import highlightMatch from "../../utils/highlightMatch";
import "./index.scss";

interface UserListItemProps {
  user: User;
  searchTerm: string;
  onUserClick: (user: User) => void;
}

const UserListItem = ({ user, searchTerm, onUserClick }: UserListItemProps) => {
  const { deleteUser } = useActions();

  const handleOnUserClick = () => {
    onUserClick(user);
  };
  return (
    <li className="user-list-item">
      <div className="user-list-item__info" onClick={handleOnUserClick}>
        <div className="user-list-item__name">
          {highlightMatch(user.name, searchTerm)}
        </div>
        <div className="user-list-item__username">
          {highlightMatch(user.username, searchTerm)}
        </div>
        <div className="user-list-item__email">
          {highlightMatch(user.email, searchTerm)}
        </div>
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
