import "../templates/styles/styles-contact.css";

function FaleConosco() {
  return (
    <section id="contact" className="contact">
      <div className="container py-4">
        <div className="section-title">
          <h2>Contatos</h2>
          <p>
            Nossos contatos caso haja alguma dúvida sobre nossa empresa, ou caso
            queira nos direcionar um feedback. Contate-nos &nbsp;&nbsp;&nbsp; ;
            )
          </p>
        </div>
        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Localização:</h4>
                <p>
                  Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP,
                  01414-001
                </p>
              </div>
              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>contato-empresa@unibook.com.br</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Número de Contato:</h4>
                <p>+55 11 4002-8922</p>
              </div>
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=S%C3%A3o%20Paulo%20Tech%20School+(UniBook%20Empresa)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                frameborder="0"
                style={{ border: "0", width: "100%", height: "290px" }}
                title="Localização"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="" method="post" className="form-email">
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="name">Seu Nome:</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control rounded"
                    id="name"
                    required
                  />
                </div>
                <div className="form-group col-md-6 mt-3 mt-md-0">
                  <label for="name">Seu Email:</label>
                  <input
                    type="email"
                    className="form-control rounded"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <label for="name">Assunto:</label>
                <input
                  type="text"
                  className="form-control rounded"
                  name="subject"
                  id="subject"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label for="name">Mensagem:</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Carregando</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Sua mensagem foi enviada!. Obrigado!
                </div>
              </div>
              <div className="text-center">
                <button className="button-mensagem" type="submit">Mandar mensagem</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaleConosco;
