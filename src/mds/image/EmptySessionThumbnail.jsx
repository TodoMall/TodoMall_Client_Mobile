const EmptySessionThumbnail = ({ width = "100%", height = "100%" }) => {
    return (
        <img
            width={width}
            height={height}
            src="/image/empty_session_thumbnail.png"
            alt="empty session thumbnail"
        />
    );
};
export default EmptySessionThumbnail;
