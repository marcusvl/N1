import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-box">
      <div className="footer-box-newsletter">
        <h6 className="footer-box-newsletter-paragraph">
          Cadastre-se e seja um dos primeiros a saber de todas as novidades e
          ofertas.
        </h6>
        <form className="footer-box-newsletter-form">
          <input
            className="footer-box-newsletter-form-input"
            placeholder="Nome"
          ></input>
          <input
            className="footer-box-newsletter-form-input"
            placeholder="Email"
          ></input>
          <button className="footer-box-newsletter-form-button">
            Cadastrar
          </button>
        </form>
      </div>
      <div className="footer-box-footer">
        <div className="footer-box-footer-links">
          <div className="footer-box-footer-links-desenvolvimento">
            <icon className="footer-box-footer-links-desenvolvimento-icon" />
            <ul className="footer-box-footer-links-desenvolvimento-lista1">
              <button>
                <icon className="footer-box-footer-links-desenvolvimento-lista1-facebook" />
              </button>
              <button>
                <icon className="footer-box-footer-links-desenvolvimento-lista1-twiter" />
              </button>
              <button>
                <icon className="footer-box-footer-links-desenvolvimento-lista1-instagran" />
              </button>
              <button>
                <icon className="footer-box-footer-links-desenvolvimento-lista1-youtube" />
              </button>
              <button>
                <icon className="footer-box-footer-links-desenvolvimento-lista1-tik-tok" />
              </button>
            </ul>
            <div className="footer-box-footer-links-desenvolvimento-bar" />
            <ul className="footer-box-footer-links-desenvolvimento-lista2">
              <li className="footer-box-footer-links-desenvolvimento-lista2-telefone">
                <icon className="footer-box-footer-links-desenvolvimento-lista2-telefone-icon" />
                <p>11 99999-9999</p>
              </li>
              <li className="footer-box-footer-links-desenvolvimento-lista2-whatsapp">
                <icon className="footer-box-footer-links-desenvolvimento-lista2-whatsapp-icon" />
                <p>contato@agencian1.com.br</p>
              </li>
              <li className="footer-box-footer-links-desenvolvimento-lista2-email">
                <p>Seg. à Sex. das 09:00h às 18:00h</p>
                <p>Sábado das 10:00h às 14:00h</p>
              </li>
            </ul>
          </div>
          <div className="footer-box-footer-links-institucional">
            <div className="footer-box-footer-links-institucional-box1">
              <div className="footer-box-footer-links-institucional-box1-main">
                <div className="footer-box-footer-links-institucional-box1-main-title">
                  <p className="footer-box-footer-links-institucional-box1-main-title-text">
                    Institucional
                  </p>
                  <icon className="footer-box-footer-links-institucional-box1-main-title-icon" />
                </div>
                <div className="footer-box-footer-links-institucional-box1-main-title-text-line" />
                <div className="footer-box-footer-links-institucional-box1-main-list">
                  <p>Quem Somos</p>
                  <p>Nossas Lojas</p>
                  <p>Seja um Revendedor</p>
                </div>
              </div>
              <div className="footer-box-footer-links-institucional-box1-second">
                <div className="footer-box-footer-links-institucional-box1-second-title">
                  <p className="footer-box-footer-links-institucional-box1-second-title-text">
                    Minha conta
                  </p>
                  <icon className="footer-box-footer-links-institucional-box1-second-title-icon" />
                </div>
                <div className="footer-box-footer-links-institucional-box1-main-title-text-line" />
                <div className="footer-box-footer-links-institucional-box1-second-list">
                  <p>Meus Dados</p>
                  <p>Meus Pedidos</p>
                  <p>Login</p>
                </div>
              </div>
              <div className="footer-box-footer-links-institucional-box1-second">
                <div className="footer-box-footer-links-institucional-box1-second-title">
                  <p className="footer-box-footer-links-institucional-box1-second-title-text">
                    Suporte
                  </p>
                  <icon className="footer-box-footer-links-institucional-box1-second-title-icon" />
                </div>
                <div className="footer-box-footer-links-institucional-box1-main-title-text-line" />
                <div className="footer-box-footer-links-institucional-box1-second-list">
                  <p>Política de privacidade</p>
                  <p>Perguntas Frequentes</p>
                  <p>Troca ou devolução</p>
                </div>
              </div>
            </div>
            <div className="footer-box-footer-links-institucional-box2">
              <div className="footer-box-footer-links-institucional-box2-pagamentos">
                <p>Pagamentos</p>
                <div className="footer-box-footer-links-institucional-box2-pagamentos-list">
                  <div className="footer-box-footer-links-institucional-box2-pagamentos-list-cards">
                    <div className="footer-box-footer-links-institucional-box2-pagamentos-list-cards-box">
                      <icon className="footer-box-footer-links-institucional-box2-pagamentos-list-cards-box-master" />
                    </div>
                    <div className="footer-box-footer-links-institucional-box2-pagamentos-list-cards-box">
                      <icon className="footer-box-footer-links-institucional-box2-pagamentos-list-cards-box-visa" />
                    </div>
                    <div className="footer-box-footer-links-institucional-box2-pagamentos-list-cards-box">
                      <icon className="footer-box-footer-links-institucional-box2-pagamentos-list-cards-box-elo" />
                    </div>
                    <div className="footer-box-footer-links-institucional-box2-pagamentos-list-cards-box">
                      <icon className="footer-box-footer-links-institucional-box2-pagamentos-list-cards-box-pix" />
                    </div>
                    <div className="footer-box-footer-links-institucional-box2-pagamentos-list-cards-box">
                      <icon className="footer-box-footer-links-institucional-box2-pagamentos-list-cards-box-code" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-box-footer-links-institucional-box2-segurança">
                <p>Segurança</p>
                <icon className="footer-box-footer-links-institucional-box2-segurança-image" />
              </div>
              <div className="footer-box-footer-links-institucional-box2-desenvolvimento">
                <div className="footer-box-footer-links-institucional-box2-desenvolvimento-agencia">
                  <p>Created by</p>
                  <icon className="footer-box-footer-links-institucional-box2-desenvolvimento-agencia-icon" />
                </div>
                <div className="footer-box-footer-links-institucional-box2-desenvolvimento-vtex">
                  <p>Powered by</p>
                  <icon className="footer-box-footer-links-institucional-box2-desenvolvimento-vtex-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-box-footer-n1">
        <p>Agência N1 - Todos os Direitos Reservados</p>
      </div>
    </div>
  );
};

export default Footer;
