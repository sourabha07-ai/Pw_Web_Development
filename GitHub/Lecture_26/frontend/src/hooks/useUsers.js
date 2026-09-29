import { useEffect, useState } from "react";

import {
    getUsers,
    createUser,
    updateUser,
    deleteUser
} from "../services/userService";

function useUsers() {
    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const [success, setSuccess] = useState("");

    const [fieldErrors, setFieldErrors] = useState({});

    const loadUsers = async () => {
        try {
            setLoading(true);
            setError("");

            const data = await getUsers();

            setUsers(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        loadUsers();
    }, []);

    const addUser = async (userData) => {
        try {
            setLoading(true);
            setError("");
            setSuccess("");
            setFieldErrors({});

            await createUser(userData);

            setSuccess("User created successfully");

            await loadUsers();

            return true;
        } catch (error) {
            setError(error.message);

            setFieldErrors(error.errors || {});

            return false;
        } finally {
            setLoading(false);
        }
    };

    const editUser = async (id, userData) => {
        try {
            setLoading(true);
            setError("");
            setSuccess("");
            setFieldErrors({});

            await updateUser(id, userData);

            setSuccess("User updated successfully");

            await loadUsers();

            return true;
        } catch (error) {
            setError(error.message);

            setFieldErrors(error.errors || {});

            return false;
        } finally {
            setLoading(false);
        }
    };

    const removeUser = async (id) => {
        try {
            setLoading(true);
            setError("");
            setSuccess("");
            setFieldErrors({});

            await deleteUser(id);

            setSuccess("User deleted successfully");

            await loadUsers();

            return true;
        } catch (error) {
            setError(error.message);

            return false;
        } finally {
            setLoading(false);
        }
    };
    const clearFieldError = (field) => {
    setFieldErrors((previous) => {
        const updated = { ...previous };

        delete updated[field];

        return updated;
    });
};
     
   return {
    users,
    loading,
    error,
    success,
    fieldErrors,
    clearFieldError,
    addUser,
    editUser,
    removeUser
};
}

export default useUsers;