const API_URL = `${import.meta.env.VITE_API_URL}/api/users`;

const handleResponse = async (response) => {
    const data = await response.json();

    if (!response.ok) {
        const error = new Error(
            data.message || "Something went wrong"
        );

        error.errors = data.errors || {};

        throw error;
    }

    return data;
};

export const getUsers = async () => {
    const response = await fetch(API_URL);

    return handleResponse(response);
};

export const createUser = async (userData) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    return handleResponse(response);
};

export const updateUser = async (id, userData) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    return handleResponse(response);
};

export const deleteUser = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    return handleResponse(response);
};