import React from 'react';
import CriarPlaylist from './Components/CriarPlaylist';
import VerPlaylists from './Components/VerPlaylists';

class App extends React.Component {

  state = {
    paginaAtual : 'criarPlaylists'
  }

  trocarPagina = () => {
    if (this.state.paginaAtual === 'playlists') {
      this.setState({paginaAtual : 'criarPlaylists'})
    }

    else if (this.state.paginaAtual === 'criarPlaylists') {
      this.setState({paginaAtual : 'playlists'})
    }
  }

  botaoVerPlaylists = () => {
    if(this.state.paginaAtual === 'criarPlaylists') {
        return <div>
                  <button onClick={this.trocarPagina}>Playlists Adicionadas</button>
               </div>
    }else{
      return <div>
        <button onClick={this.trocarPagina}>Voltar pra página inicial</button>
      </div>
    }
  }

  render() {

    return (
      <div>
        <h1>Labefy</h1>
        {this.state.paginaAtual === 'playlists' ?  <VerPlaylists/> : <CriarPlaylist/>}
        {this.botaoVerPlaylists()}
      </div>
    )
  }
}

export default App;