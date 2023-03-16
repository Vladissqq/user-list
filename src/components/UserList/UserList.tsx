import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { RootState } from "../../redux/reducers";
import ErrorPreview from "../ErrorPreview/Error";
import Preloader from "../Preloader/Preloader";
import UserListItem from "../UserListItem/UserListItem";
import "./index.scss";

const UserList = () => {
  const { getUsers } = useActions();
  const { users, error, loading } = useSelector(
    (state: RootState) => state.usersReducer
  );

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-list">
      <div className="user-list__search">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {loading && <Preloader />}
      {error && <ErrorPreview error={error} />}
      {users && (
        <ul className="user-list__list">
          {filteredUsers.map((user) => (
            <UserListItem key={user.id} user={user} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
