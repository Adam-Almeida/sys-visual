import { Container, Content, Footer } from "./style";
import logo from '../../assets/logo.svg'

const AuthLogin = () => {
  return (
    <Content>
      <Container>
        <div className="container_l">
          <p>
            A sua
            <br /> melhor <strong>opção</strong>
          </p>
          <a href="#">
            <span>Enviar Arquivos</span>
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
        <div className="container_h">
          <div className="content">
            <form action="">
              <header>
                <div className="error">
                  <i className="bi bi-exclamation-circle"></i>
                  <p>Login ou Chave de acesso incorreta</p>
                </div>
                {/* <img src={logo} alt="Logo">  */}
              </header>
              <span>
                <i className="bi bi-person-video3"></i>
                <input type="text" placeholder="DIGITE SEU LOGIN" />
              </span>
              <span>
                <i className="bi bi-key"></i>
                <input type="password" placeholder="CHAVE DE ACESSO" />
              </span>
              <p>
                <a href="#">Esqueci minha senha</a>
              </p>
              <button type="button">
                ACESSAR O SISTEMA{" "}
                <i className="bi bi-arrow-up-right-square"></i>
              </button>
            </form>
            <Footer>
              Sistema Desenvolvido com <i className="bi bi-heart"></i> por
              FourLife Sistemas
            </Footer>
          </div>
        </div>
      </Container>
    </Content>
  );
};
export default AuthLogin;
