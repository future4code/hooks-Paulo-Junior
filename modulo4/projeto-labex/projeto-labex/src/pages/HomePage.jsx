import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <>
      <header>Título da página</header>
      <hr />
      <div>Essa é a Home !</div>
    
      <button onClick={() => navigate(-1)}>Voltar</button>
      <button onClick={() => navigate("/login")}>Login</button>   
      <hr />
      <footer>Rodapé da página</footer>
    </>
  );
}

export default Home;
