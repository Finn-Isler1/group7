import FriendItem, { type User } from "./FriendItem";

interface FriendListProps {
  users: User[];
  onFriendClick: (user: User) => void;
}

export const FriendList = ({ users, onFriendClick }: FriendListProps) => {
  return (
    <div className="friends-list">
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <FriendItem user={user} onFriendClick={onFriendClick} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-results">No friends found.</p>
      )}
    </div>
  );
};
