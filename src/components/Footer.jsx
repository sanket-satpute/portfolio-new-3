export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <p className="footer-brand">
                    <span className="footer-logo">SS</span>
                    Sanket Satpute
                </p>
                <p className="footer-copy">
                    Designed & Built with React · © {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}
