import "../templates/styles/styles-quem-somos.css";

import biaPic from "../templates/images/integrantes/bia.jpg";
import brunoPic from "../templates/images/integrantes/bruno.jpg";
import henriquePic from "../templates/images/integrantes/henrique.jpeg";
import joaoPic from "../templates/images/integrantes/joao.jpg";
import luizPic from "../templates/images/integrantes/luiz.jpg";

function QuemSomos() {
  return (
    <>
      <div className="container bg-primary mt-4 rounded text-white">
        <div className="row">
          <div className="col-12 col-md-6 p-1">
            <h1 className="font-weight-bold text-center">Nossa Historia</h1>
            <p className="text-justify m-2">
              Um grupo de colegas de sala da faculdade São Paulo Tech School
              (SPTECH), tiveram a brilhante idéia, com contribuição de um de
              seus professores de criar um site para suprir a necessidade de
              livros acessíveis para pessoas que necessitam achar livros mais
              baratos, com isso criamos o site UniBook
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              className="img-fluid"
              src="https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2021/01/As-32-Melhores-Ideias-de-Pequenos-Negocios-para-Comecar-em-2021.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <br />
      <div className="container bg-primary mt-4 rounded text-white">
        <div className="row">
          <div className="col-12 col-md-6">
            <img
              className="img-fluid"
              src="https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2020/04/17-Melhores-Ideias-para-Trabalhar-em-Casa-Edi%C3%A7ao-2020.png"
              alt=""
            />
          </div>
          <div className="col-12 col-md-6 p-1">
            <h1 className="font-weight-bold text-center">Nossos Princípios</h1>
            <p className="text-justify m-2">
              Temos como um de nossos princípios a passagem de livros antigos
              para pessoas que necessitam, já que além de pagar mais barato você
              estará contribuindo com o meio-ambiente. Contamos também com a
              diversidade, que é algo primordial para nossa empresa, já que com
              ela conseguimos ter diferentes ideias, assim evoluindo o projeto
              cada vez mais!
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="container bg-primary my-4 rounded text-white">
        <div className="row">
          <div className="col-12 col-md-6 p-1">
            <h1 className="font-weight-bold text-center">Propostas Futuras</h1>
            <p className="text-justify m-2">
              Queremos aumentar a troca de livro no Brasil, para diminuir os
              gastos de livros e consequentemente diminuir o desperdício de
              livros. Com isso ajudar na evoluição da sociedade ao não
              desperdício.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              className="img-fluid"
              src="https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2019/05/21-Ideias-de-Negocios-Online-para-Ganhar-Dinheiro-na-Internet-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container bg-primary my-4 rounded py-5 team4 text-white">
        <div className="container">
          <div className="row justify-content-center mb-4 col-12 text-center">
            <h1 className="mb-3">Profissionais da Equipe</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-2 mb-4">
              <div className="row">
                <div className="col-md-12 text-center">
                  <img
                    src={biaPic}
                    style={{ width: "200px", height: "200px" }}
                    alt="wrapkit"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="pt-2">
                    <h5 className="mt-4 font-weight-medium mb-0">
                      Beatriz Vitoria
                    </h5>
                    <h6 className="subtitle mb-3">Front End, DevOps(Lider)</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 mb-4">
              <div className="row">
                <div className="col-md-12 text-center">
                  <img
                    src={brunoPic}
                    style={{ width: "200px", height: "200px" }}
                    alt="wrapkit"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="pt-2">
                    <h5 className="mt-4 font-weight-medium mb-0">
                      Bruno Ribeiro
                    </h5>
                    <h6 className="subtitle mb-3">
                      Analytics (Lider), Front-End(Lider)
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 mb-4">
              <div className="row">
                <div className="col-md-12 text-center">
                  <img
                    src={henriquePic}
                    style={{ width: "200px", height: "200px" }}
                    alt="wrapkit"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="pt-2">
                    <h5 className="mt-4 font-weight-medium mb-0">
                      Henrique Piassi
                    </h5>
                    <h6 className="subtitle mb-3">
                      Analytics, Back-End (Lider)
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 mb-4">
              <div className="row">
                <div className="col-md-12 text-center">
                  <img
                    src={joaoPic}
                    style={{ width: "200px", height: "200px" }}
                    alt="wrapkit"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="pt-2">
                    <h5 className="mt-4 font-weight-medium mb-0">João Pedro</h5>
                    <h6 className="subtitle mb-3">
                      Analytics, Negócios(Lider)
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 mb-4">
              <div className="row">
                <div className="col-md-12 text-center">
                  <img
                    src={luizPic}
                    style={{ width: "200px", height: "200px" }}
                    alt="wrapkit"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="pt-2">
                    <h5 className="mt-4 font-weight-medium mb-0">
                      Luiz Henrique
                    </h5>
                    <h6 className="subtitle mb-3">Back-End e o Front-End</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuemSomos;
