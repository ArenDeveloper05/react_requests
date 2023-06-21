const UsersList = ({ users }) => {
  return (
    <div className="users-list">
      {users &&
        users.map(({ id, name }) => {
          return (
            <div key={id} className="users-list-item">
              {name}
            </div>
          );
        })}
    </div>
  );
};

export default UsersList;
