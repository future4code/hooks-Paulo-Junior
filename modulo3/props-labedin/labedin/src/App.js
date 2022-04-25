import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
// import CardPequeno from './components/CardPequeno/CardPequeno'; se eu colocar esse import o site não funciona
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/D4E03AQFt_tdoR8X8hg/profile-displayphoto-shrink_200_200/0/1643719092222?e=1656547200&v=beta&t=nn1VozfGh1Hi5z7nnlAwTMHb6TvklYmSs__Dt-bpKcQ" 
          nome="Paulo Luiz Silva dos Santos Junior" 
          descricao="Oi, eu sou o PJ. Sou um estudante de programação com sede de mudar o mundo ao meu redor através da tecnologia."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

     

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.ecowd.inf.br/cms/img/dropzone_upload/resized_115f5f7fb08d140_1600094128_310x.jpeg" 
          nome="Industrial Porto Rico" 
          descricao="Trabalhando como apontador de guia na área de transporte de caminhão de cana de ácucar!" 
        />
        
        <CardGrande 
          imagem="https://www.paranacooperativo.coop.br/ppc/images/Comunicacao/2021/noticias/10/29/ibge/ibge_29_10_2021.JPG" 
          nome="IBGE" 
          descricao="Agente Censitário Municipal, supervisando a equipe de trabalho dos supervisores e responsável pela parte administrativa do posto de coleta." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook--3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
