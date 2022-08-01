import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";

function CardProduto() {
  const header = (
    <img
      alt="Card"
      src="images/usercard.png"
      style={{ height: "19vh" }}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const footer = (
    <span>
      <div className="col-12 d-flex flex-wrap">
        <div className="col-3">
          <p className="fw-bold m-0">Qtdade</p>
          <span>2</span>
        </div>
        <div className="col-3">
          <p className="fw-bold m-0">Preço</p>
          <p>R$ 10,00</p>
        </div>
        <div className="col-6">
          <Button
            label="Comprar"
            icon="pi pi-shopping-cart"
            iconPos="right"
          />
        </div>
      </div>
    </span>
  );
  return (
    <>
      <Card
        title="Advanced Card"
        subTitle="Subtitle"
        style={{ width: "25em", height: "42vh" }}
        className="border border-2 border-secondary rounded"
        footer={footer}
        header={header}
      >
        {" "}
        <Rating value={3} readOnly stars={5} cancel={false} />
      </Card>
    </>
  );
}

export default CardProduto;
