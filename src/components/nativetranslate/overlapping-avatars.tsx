const OverlappingAvatars = ({ avatars }: { avatars: string[] }) => {
    return (
        <div className="flex items-center">
            {avatars.map((avatar, index) => (
                <div
                    key={index}
                    className="w-9 h-9 rounded-full overflow-hidden border-2 border-dark-200"
                    style={{
                        marginLeft: index !== 0 ? '-0.75rem' : '0',
                        zIndex: avatars.length - index,
                    }}
                >
                    <img
                        src={avatar}
                        alt={`Avatar ${index + 1}`}
                        className="object-cover w-full h-full"
                    />
                </div>
            ))}
        </div>
    );
};

export default OverlappingAvatars;
