import "../styles/UserForm.css";

function UserForm({
    formData,
    editId,
    loading,
    fieldErrors,
    onChange,
    onSubmit,
    onCancel
}) {
    return (
        <div className="user-form">
            <h2>{editId ? "Edit User" : "Add User"}</h2>

            <p className="form-subtitle">
                {editId ? "Update user information" : "Create a new user"}
            </p>

            <form onSubmit={onSubmit}>
                <label>Name</label>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={onChange}
                />

                {fieldErrors?.name && (
                    <p className="field-error">
                        {fieldErrors.name}
                    </p>
                )}

                <label>Email</label>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={onChange}
                />

                {fieldErrors?.email && (
                    <p className="field-error">
                        {fieldErrors.email}
                    </p>
                )}

                <label>Age</label>

                <input
                    type="number"
                    name="age"
                    placeholder="Enter age"
                    value={formData.age}
                    onChange={onChange}
                />

                {fieldErrors?.age && (
                    <p className="field-error">
                        {fieldErrors.age}
                    </p>
                )}

                <button type="submit" disabled={loading}>
                    {loading
                        ? "Saving..."
                        : editId
                            ? "Update User"
                            : "Add User"}
                </button>

                {editId && (
                    <button
                        type="button"
                        className="cancel-button"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                )}
            </form>
        </div>
    );
}

export default UserForm;