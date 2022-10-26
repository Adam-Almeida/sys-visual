import { Container, Content, Footer } from "./style";
import logo from "../../assets/logo.svg";
import { useState } from "react";

const AuthLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit", { email, password });
  };

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
            <form onSubmit={handleSubmit}>
              <header>
                <div className="error">
                  <i className="bi bi-exclamation-circle"></i>
                  <p>Login ou Chave de acesso incorreta</p>
                </div>
                {/* <img src={logo} alt="Logo">  */}
              </header>
              <span>
                <i className="bi bi-person-video3"></i>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="DIGITE SEU LOGIN"
                />
              </span>
              <span>
                <i className="bi bi-key"></i>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="CHAVE DE ACESSO"
                />
              </span>
              <p>
                <a href="#">Esqueci minha senha</a>
              </p>
              <button type="submit">
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
