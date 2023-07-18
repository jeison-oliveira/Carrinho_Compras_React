const Navbar = (props) => {
  const { carregarCarrinho } = props;
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="teste">
          Loja Virtual
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="teste"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={carregarCarrinho("home")}
              >
                Produto
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="teste">
                    Cadastrar
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="teste">
                    Editar
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="teste">
                    Deletar
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="teste">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="teste">
                Signup
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                onClick={carregarCarrinho("shoppingcart")}
                href="teste"
              >
                Carrinho
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
