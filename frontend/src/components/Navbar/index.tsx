import { ReactComponent as GithubImage } from 'assets/img/github.svg';
import './styles.css'

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-navbar-content">
                    <h1 > DSMovie</h1>
                    <a href="https://github.com/YohanToledo">
                        <div className="dsmovie-contact-container">
                            <GithubImage />
                            <p className="dsmovie-link">/YohanToledo</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>

    );
}

export default Navbar;