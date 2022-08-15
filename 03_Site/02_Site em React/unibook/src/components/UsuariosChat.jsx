export default function UsuariosChat() {
  return (
    <div className="col-12 d-flex flex-wrap my-3 rounded border border-3 border-orange py-2 px-1 usuarios-chat">
      <div
        className="col-4 rounded-pill bg-white"
        style={{ width: "5rem", height: "5rem" }}
      ></div>
      <div className="col-8 d-flex align-items-center ps-2 text-white">
        <h2>Nome Usuario</h2>
      </div>
    </div>
  );
}
