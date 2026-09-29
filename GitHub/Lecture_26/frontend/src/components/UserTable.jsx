import "../styles/UserTable.css";

function UserTable({
    users,
    loading,
    onEdit,
    onDelete
}) {
    if (loading) {
        return (
            <div className="table-message">
                Loading users...
            </div>
        );
    }

    if (users.length === 0) {
        return (
            <div className="table-message">
                <h3>No users found</h3>
                <p>Add your first user using the form.</p>
            </div>
        );
    }

    return (
        <div className="user-table-wrapper">
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>
                                <div className="user-name">
                                    <span className="avatar">
                                        {user.name.charAt(0).toUpperCase()}
                                    </span>

                                    {user.name}
                                </div>
                            </td>

                            <td>{user.email}</td>

                            <td>
                                <span className="age">
                                    {user.age}
                                </span>
                            </td>

                            <td>
                                <div className="actions">
                                    <button
                                        className="edit-button"
                                        onClick={() => onEdit(user)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="delete-button"
                                        onClick={() => onDelete(user._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;