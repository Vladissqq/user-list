import { User } from "../../interfaces/User";
import "./index.scss";

interface UserInfoProps {
  user: User;
}

const UserInfo = ({ user }: UserInfoProps) => {
  const { address, company } = user;
  const addressString = `${address.suite}, ${address.street}, ${address.city}, ${address.zipcode}`;
  const companyString = `${company.name}, ${company.catchPhrase}, ${company.bs}`;
  return (
    <div className="user-info" onClick={(e) => e.stopPropagation()}>
      <h2 className="user-info__title">{user.name}</h2>
      <div className="user-info__info">
        <p>
          <span className="user-info__info-label">Address:</span>
          {addressString}
        </p>
        <p>
          <span className="user-info__info-label">Company:</span>
          {companyString}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
