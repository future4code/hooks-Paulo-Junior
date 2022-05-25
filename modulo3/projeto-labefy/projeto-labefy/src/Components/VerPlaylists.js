import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CriarPlaylist from './CriarPlaylist';
import ReactAudioPlayer from 'react-audio-player';

const DivInputs = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    gap: 5px;
`

const urlPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const headers = {
    headers : {
        Authorization : "paulo-junior-hooks"
    }
}

// Os inputs são passados antes da classe

class VerPlaylists extends React.Component {

    state = {
        playlists : [],
        tracklist : [],
        nomeMusica : '',
        nomeArtista : '',
        urlMusica : ''
    };
    
    componentDidMount() {
        this.mostrarTodasPlaylists()
    }

    mostrarTodasPlaylists = () => {
        axios
            .get(urlPlaylist, headers)
            .then((response) => {
                this.setState({playlists : response.data.result.list})
            }
        )
            .catch((error) => {
                alert("Algo deu errado ! ")
            }
        )
    }

    deletarPlaylist = (playlistId) => {
        if (window.confirm("Deseja mesmo apagar a playlist?")) {
            axios
                .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, headers)
                .then((response) => {
                    alert("Playlist apagada com sucesso!")
                    this.mostrarTodasPlaylists()
                }
            )
                .catch((error) => {
                    alert("Algo deu errado :( ")
                }
            )
        }
    }

    mostrarTracklist = (playlistId) => {
        axios 
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, headers)
            .then((response) => {
                this.setState({tracklist : response.data.result.tracks})

            }
        )
            .catch((error) => {
                alert(error.response)
            }
        )
    }

    addTrack = (playlistId) => {
        const body = {
            name : this.state.nomeMusica,
            artist : this.state.nomeArtista,
            url : this.state.urlMusica
        }

        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, body, headers)
            .then((response) => {
                alert("Música adicionada com sucesso!")
                this.setState({nomeMusica : ''})
                this.setState({nomeArtista : ''})
                this.setState({urlMusica : ''})
            }
        )
            .catch((error) => {
                alert("Algo deu errado :( ")
            }
        )
    }
    
    onChangeNomeMusica = (event) => {
        this.setState({nomeMusica : event.target.value})
    }

    onChangeNomeArtista = (event) => {
        this.setState({nomeArtista : event.target.value})       
    }

    onChangeUrlMusica = (event) => {
        this.setState({urlMusica : event.target.value})
    }
   
  render() {

    const playlistExistente = this.state.playlists.map((playlist) => {
        return <div key={playlist.id}>
                    <ul><b>{playlist.name}</b>
                    <button onClick={() => this.mostrarTracklist(playlist.id)}>Ver Playlist</button>
                    <button onClick={() => this.addTrack(playlist.id)}>Adicionar música</button>
                    <button onClick={() => this.deletarPlaylist(playlist.id)}>X</button>
                    </ul>
                </div>
    }
)

    const tracklistExistente = this.state.tracklist.map((track) => {
        return <div key={track.id}>
                    <ul>
                        <b><b>Música:</b>{track.name}</b>
                    </ul>
                    <ul>
                        <b>Cantor:</b>{track.artist}
                    </ul>
                    <ul>
                        <ReactAudioPlayer src={track.url} controls/>
                    </ul>
               </div>
    }
)

    return (
      <div>
        <CriarPlaylist/>
         <h3>Playlists</h3>
        {playlistExistente }
        {tracklistExistente}
        
        <DivInputs>
            <h2>Adicionar música a playlist</h2>
            <input placeholder='Nome da música' value={this.state.nomeMusica} onChange={this.onChangeNomeMusica}/>
            <input placeholder='Artista' value={this.state.nomeArtista} onChange={this.onChangeNomeArtista}/>
            <input placeholder='Url da música' value={this.state.urlMusica} onChange={this.onChangeUrlMusica}/>
        </DivInputs>
      </div>
    )
  }
}

export default VerPlaylists;