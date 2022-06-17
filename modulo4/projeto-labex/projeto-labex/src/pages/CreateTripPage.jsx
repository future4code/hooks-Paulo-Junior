import { useNavigate } from "react-router-dom";

function CreateTripPage() {
  const navigate = useNavigate();


  const goBack = () => {
    navigate(-1); // volta para a página anterior
  };

  return (
    <>
      <header>Título da página</header>
      <hr />
      <div>Essa é a CreateTripPage !</div>
      <button onClick={goBack}>Voltar</button>
      <hr />
      <footer>Rodapé da página</footer>
    </>
  );
}

export default CreateTripPage;
