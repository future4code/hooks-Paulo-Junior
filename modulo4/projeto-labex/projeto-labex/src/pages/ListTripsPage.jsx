import { useNavigate } from "react-router-dom";




function ListTripPage() {
  const navigate = useNavigate();


  return (
    <>
      <header>Título da página</header>
      <hr />
      <div>Essa é a ListTripPage !</div>
      <button onClick={()=> navigate("/")}>Home</button>
      <button onClick={() => navigate(-1)}>Voltar</button>
      <button onClick={() => navigate("/login")}>Login</button>   
      <hr />
      <footer>Rodapé da página</footer>
    </>
  );
}

export default ListTripPage;
