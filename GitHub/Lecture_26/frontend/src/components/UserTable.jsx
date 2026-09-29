function UserTable({
    users,
    loading,
    onEdit,
    onDelete
}) {
    if (loading && users.length === 0) {
        return (
            <div className="empty-state">
                <h3>Loading users...</h3>
            </div>
        );
    }

    if (users.length === 0) {
        return (
            <div className="empty-state">
                <h3>No users found</h3>

                <p>
                    Add your first user using the form.
                </p>
            </div>
        );
    }

    return (
        <div className="table-wrapper">

            <table>

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

                                    <div className="avatar">
                                        {user.name
                                            .charAt(0)
                                            .toUpperCase()}
                                    </div>

                                    <span>
                                        {user.name}
                                    </span>

                                </div>
                            </td>

                            <td>
                                <span className="email">
                                    {user.email}
                                </span>
                            </td>

                            <td>
                                <span className="age">
                                    {user.age}
                                </span>
                            </td>

                            <td>
                                <div className="actions">

                                    <button
                                        className="edit-btn"
                                        onClick={() =>
                                            onEdit(user)
                                        }
                                        disabled={loading}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={() =>
                                            onDelete(user._id)
                                        }
                                        disabled={loading}
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