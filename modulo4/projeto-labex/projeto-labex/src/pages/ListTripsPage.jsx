import { useNavigate } from "react-router-dom";

function ListTripPage() {
  const navigate = useNavigate();


  const goBack = () => {
    navigate(-1); // volta para a página anterior
  };

  return (
    <>
      <header>Título da página</header>
      <hr />
      <div>Essa é a ListTripPage !</div>
      <button onClick={goBack}>Voltar</button>
      <hr />
      <footer>Rodapé da página</footer>
    </>
  );
}

export default ListTripPage;
