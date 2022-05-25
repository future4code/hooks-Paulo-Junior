import React from 'react';
import axios from 'axios';


const urlPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const headers = {
    headers : {
        Authorization : "paulo-junior-hooks"
    }
}
// Os inputs são passados antes da classe

class CriarPlaylist extends React.Component {

    state = {
        nomePlaylist : ''
    }

    handleChangePlaylist = (event) => {
        this.setState({nomePlaylist : event.target.value})
    }

    criarPlaylist = () => {
        const body = {
            name : this.state.nomePlaylist
        }
        
        axios 
            .post(urlPlaylist, body, headers)
            .then((response) => {
                alert(`A playlist ${body.name} foi criada`)
                this.setState({nomePlaylist : ''})
            }
        )
            .catch((error) => {
                alert("Ocorreu um erro, a playlist não foi criada")
            }
        )
    } 

  render() {

    return (
      <div>
          <input 
          placeholder='Nome da Playlist' 
          type="name" 
          value={this.state.nomePlaylist} 
          onChange={this.handleChangePlaylist}/>
          <button onClick={this.criarPlaylist} >Criar Playlist</button>
      </div>
    )
  }
}

export default CriarPlaylist;