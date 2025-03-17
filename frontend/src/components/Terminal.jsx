export default function Terminal({className, title, children }) {
    return (
        <div className={`terminal ${className}`}>
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <div className="terminal-button terminal-close"></div>
                    <div className="terminal-button terminal-minimize"></div>
                    <div className="terminal-button terminal-maximize"></div>
                </div>
                <div className="terminal-title">{title}</div>
                <div style={{width: "40px"}}></div>
            </div>
            <div className="terminal-body">{children}</div>
        </div>
    );
}
