import {useNavigate} from 'react-router-dom'

function Error() {
  const navigate = useNavigate()
  return (
    <>
      <div>Página não encontrada</div>
      <button onClick={()=> navigate("/")}>Voltar para a Home</button>
      <hr />
    </>
  );
}

export default Error;
