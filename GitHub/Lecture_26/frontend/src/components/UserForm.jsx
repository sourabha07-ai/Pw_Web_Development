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
        <section className="card form-card">

            <div className="card-header">
                <h2>
                    {editId ? "Edit User" : "Add User"}
                </h2>

                <p>
                    {editId
                        ? "Update user information"
                        : "Create a new user"}
                </p>
            </div>

            <form onSubmit={onSubmit}>

                <div className="form-group">
                    <label>Name</label>

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={formData.name}
                        onChange={onChange}
                        className={
                            fieldErrors.name
                                ? "input-error"
                                : ""
                        }
                    />

                    {fieldErrors.name && (
                        <p className="field-error">
                            ❌ {fieldErrors.name}
                        </p>
                    )}
                </div>


                <div className="form-group">
                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={onChange}
                        className={
                            fieldErrors.email
                                ? "input-error"
                                : ""
                        }
                    />

                    {fieldErrors.email && (
                        <p className="field-error">
                            ❌ {fieldErrors.email}
                        </p>
                    )}
                </div>


                <div className="form-group">
                    <label>Age</label>

                    <input
                        type="number"
                        name="age"
                        placeholder="Enter age"
                        value={formData.age}
                        onChange={onChange}
                        className={
                            fieldErrors.age
                                ? "input-error"
                                : ""
                        }
                    />

                    {fieldErrors.age && (
                        <p className="field-error">
                            ❌ {fieldErrors.age}
                        </p>
                    )}
                </div>


                <div className="form-actions">

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                    >
                        {loading
                            ? "Saving..."
                            : editId
                                ? "Update User"
                                : "Add User"}
                    </button>

                    {editId && (
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={onCancel}
                            disabled={loading}
                        >
                            Cancel
                        </button>
                    )}

                </div>

            </form>

        </section>
    );
}

export default UserForm;