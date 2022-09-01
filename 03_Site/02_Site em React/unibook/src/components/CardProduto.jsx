import { Card } from "primereact/card";
import { Button } from "primereact/button";

function CardProduto() {
  const header = (
    <img
      alt="Card"
      src="images/usercard.png"
      style={{ height: "13rem" }}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const footer = (
    <span>
      <div className="col-12 d-flex flex-wrap">
        <div className="col-6">
          <p className="fw-bold m-0">Preço</p>
          <p>R$ 10,00</p>
        </div>
        <div className="col-6 d-flex justify-content-end align-items-start">
          <Button label="Comprar" icon="pi pi-shopping-cart" iconPos="right" />
        </div>
      </div>
    </span>
  );
  return (
    <>
        <Card
          title="Advanced Card"
          subTitle="Subtitle"
          style={{ width: "20rem", height: "25rem" }}
          className="border border-2 border-secondary rounded col-3 m-1"
          footer={footer}
          header={header}
        />
    </>
  );
}

export default CardProduto;
