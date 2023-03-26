const ToastMessage = ({ messages }) => (
    <div className="flex flex-col px-2 text-sm text-black">
        {Array.isArray(messages) ? (
            messages.map((message, i) =>
                i === 0 ? (
                    <p key={i}>{message}</p>
                ) : (
                    <p className="text-gray-700" key={i}>
                        {message}
                    </p>
                )
            )
        ) : (
            <p>{messages}</p>
        )}
    </div>
);

export default ToastMessage;
