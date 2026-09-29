 import { useState } from "react";

import useUsers from "./hooks/useUsers";

import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import Message from "./components/Message";

import "./App.css";

function App() {
    const {
        users,
        loading,
        error,
        success,
        addUser,
        editUser,
        removeUser
    } = useUsers();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: ""
    });

    const [editId, setEditId] = useState(null);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            age: ""
        });

        setEditId(null);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = {
            ...formData,
            age: Number(formData.age)
        };

        let success;

        if (editId) {
            success = await editUser(editId, userData);
        } else {
            success = await addUser(userData);
        }

        if (success) {
            resetForm();
        }
    };

    const handleEdit = (user) => {
        setEditId(user._id);

        setFormData({
            name: user.name,
            email: user.email,
            age: user.age
        });
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this user?"
        );

        if (!confirmDelete) {
            return;
        }

        await removeUser(id);
    };

    return (
        <div className="app">

            <header className="header">

                <div>
                    <h1>User Management</h1>

                    <p>
                        Manage your users from one place
                    </p>
                </div>

                <div className="user-count">
                    {users.length} Users
                </div>

            </header>

            <main className="dashboard">

                <UserForm
                    formData={formData}
                    editId={editId}
                    loading={loading}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onCancel={resetForm}
                />

                <section className="card users-card">

                    <div className="card-header">

                        <h2>Users</h2>

                        <p>
                            {users.length} registered users
                        </p>

                    </div>

                    <Message
                        error={error}
                        success={success}
                    />

                    <UserTable
                        users={users}
                        loading={loading}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />

                </section>

            </main>

            <footer>
                <p>
                    User Management • React + Node.js + MongoDB
                </p>
            </footer>

        </div>
    );
}

export default App;