function Footer() {
    return (
        <footer className="page-footer blue">
            <div className="container">
                © {new Date().getFullYear()} 
            </div>
        </footer>
    );
}

export default Footer;