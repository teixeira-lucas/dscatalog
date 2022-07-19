import './styles.css';
import 'bootstrap/js/src/collapse.js'; /* JS do Bootstrap para o button */

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className='container-fluid' /* Do bootstrap. Ajuda a não ter quebra de linha entre os itens */>
        <a href="link" className="nav-logo-text">
          <h4>DS Catalog</h4>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscatalog-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className='collapse navbar-collapse' id="dscatalog-navbar" /* id que liga esse elemento ao button */>
          <ul className='navbar-nav offset-md-2 main-menu' /* offset = espaço, 2 = 2 colunas das 12 do bootstrap */>
            <li>
              <a href="link" className="active">HOME</a>
            </li>
            <li>
              <a href="link">CATÁLOGO</a>
            </li>
            <li>
              <a href="link">ADMIN</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
