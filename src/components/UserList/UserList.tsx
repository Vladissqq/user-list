import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { RootState } from "../../redux/reducers";
import ErrorPreview from "../ErrorPreview/Error";
import Preloader from "../Preloader/Preloader";
import UserListItem from "../UserListItem/UserListItem";
import Search from "../Search/Search";
import { User } from "../../interfaces/User";
import Modal from "../Modal/Modal";
import UserInfo from "../UserInfo/UserInfo";
import "./index.scss";

const UserList = () => {
  const { getUsers } = useActions();
  const { setSearchTerm } = useActions();

  const { searchTerm } = useSelector((state: RootState) => state.searchReducer);
  const { users, error, loading } = useSelector(
    (state: RootState) => state.usersReducer
  );

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleReset = () => {
    setSearchTerm("");
    getUsers();
  };

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="user-list">
      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <div className="user-list__reset">
        <button onClick={handleReset}>Reset</button>
      </div>
      {loading && <Preloader />}
      {error && <ErrorPreview error={error} />}
      {users && (
        <ul className="user-list__list">
          {filteredUsers.map((user) => (
            <UserListItem
              key={user.id}
              user={user}
              searchTerm={searchTerm}
              onUserClick={handleUserClick}
            />
          ))}
        </ul>
      )}
      {selectedUser && (
        <Modal onClose={handleCloseModal}>
          <UserInfo user={selectedUser} />
        </Modal>
      )}
    </div>
  );
};

export default UserList;
