import "../styles/Message.css";

function Message({ error, success }) {
    if (!error && !success) {
        return null;
    }

    return (
        <div className="message-container">
            {error && (
                <div className="message error-message">
                    {error}
                </div>
            )}

            {success && (
                <div className="message success-message">
                    {success}
                </div>
            )}
        </div>
    );
}

export default Message;