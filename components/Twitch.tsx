const Twitch = ({ channel }: { channel: string }) => (
    <iframe
        src={`https://player.twitch.tv/?channel=${channel}&parent=localhost&autoplay=false`}
        frameBorder="0"
        scrolling="no"
        allowFullScreen={true}
        height="100%"
        width="100%"
    ></iframe>
);

export default Twitch;
