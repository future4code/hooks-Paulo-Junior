import { useNavigate } from "react-router-dom";



function ApplicationFormPages() {
  const navigate = useNavigate();


  return (
    <>
      <header>Título da página</header>
      <hr />
      <div>Essa é a ApplicationFormPages !</div>
      <button onClick={()=> navigate("/")}>Home</button>
      <button onClick={() => navigate(-1)}>Voltar</button>
      <button onClick={() => navigate("/login")}>Login</button>   
       <hr />
      <footer>Rodapé da página</footer>
    </>
  );
}

export default ApplicationFormPages;
