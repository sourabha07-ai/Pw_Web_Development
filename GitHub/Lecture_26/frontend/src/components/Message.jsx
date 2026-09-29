function Message({ error, success }) {
    if (!error && !success) {
        return null;
    }

    return (
        <>
            {error && (
                <div className="message error">
                    {error}
                </div>
            )}

            {success && (
                <div className="message success">
                    {success}
                </div>
            )}
        </>
    );
}

export default Message;