// Imports
import { useState } from 'react'
import React from "react";

import './App.css'
import logo from "./assets/logo.png"
import muzan from "./assets/muzan.png"

function RpgDemonSlayer() {

  const [habilidade, setHabilidade] = useState([
    {
      forma: "1° Forma",
      nome: "Dança da Borboleta (Capricho)",
      respiracao: "Respiração do Inseto",
      descricao: "Depois de um salto no ar, o usuário avança na direção do alvo em alta velocidade. O que se vê primeiro são várias borboletas passando, dando a impressão de que elas te atacaram, porém foi o usuário finalizando o inimigo com vários cortes por todo o corpo."
    },
    {
      forma: "10° Forma",
      nome: "Dragão da Mudança (ou Fluxo Constante)",
      respiracao: "Respiração da Água",
      descricao: "A décima forma é uma das mais poderosas entre todas as formas da Água, pois o usuário avança no oni realizando inúmeros ataques rotativos e os intensifica na medida em que os cortes vão sendo feitos."
    },
    {
      forma: "2° Forma",
      nome: "Garras de Vento Purificante",
      respiracao: "Respiração do Vento",
      descricao: "Levantando a espada para a direita acima da sua cabeça, o usuário desfere quatro golpes verticais de cima para baixo que atingem o alvo como se fossem garras."
    }
  ]);

  function showModal() {
    document.getElementById("modal").style.display = 'block';
  }

  function HideandCleanModal() {
    document.getElementById("modal").style.display = 'none';
    document.getElementById("forma").value = ""
    document.getElementById("nome").value = ""
    document.getElementById("respiracao").value = ""
    document.getElementById("descricao").value = ""
  }

  function showError() {
    document.getElementById("error").style.display = 'block';
  }
  function hideError() {
    document.getElementById("error").style.display = 'none';
  }

  function showSucsess() {
    document.getElementById("sucesso").style.display = 'block';
  }

  function handleAdd() {
    const forma = document.getElementById("forma").value;
    const nome = document.getElementById("nome").value;
    const respiracao = document.getElementById("respiracao").value;
    const descricao = document.getElementById("descricao").value;

    if (forma != "" && nome != "" && respiracao != "" && descricao != "") {
      setHabilidade([...habilidade, {
        forma: forma,
        nome: nome,
        respiracao: respiracao,
        descricao: descricao,
      }]);
      showSucsess()
      HideandCleanModal()
      hideError()
    } else {
      showError()
    }

  }


  return (
    <div className="App">
      <header>
        <p className='title'> RESPIRAÇÕES DE KIMETSU NO YAIBA</p>
        <img src={logo} className='logo' />
      </header>
      <div className="forms">
        <div className="linhas">
          <p className='addRespira' onClick={showModal} > Adicionar Respiração </p>
          <p id="sucesso"> Respiração cadastrada com sucesso!</p>
        </div>

        <div className="box-infos-add" id='modal'>
          <div className="input-group">
            <input type="text" id="forma" required className="input" placeholder='Forma' />
            <input type="text" id="nome" required className="input" placeholder='Nome' />
            <input type="text" id="respiracao" required className="input" placeholder='Classe' />
            <input type="text" id="descricao" required className="input" placeholder='Descrição' />


            <div className="linha">
              <p className="button" onClick={handleAdd}>Adicionar</p>
              <p id="error"> Preencha todos os Campos!</p>
            </div>



          </div>
        </div>
      </div>

      <div className='main'>
        {habilidade.map((habilidade) => {
          return (
            <div className='box-hability'>
              <ul className="ulRpg" id={habilidade.nome}>
                <li className='subtitle'> {habilidade.forma} - <b>{habilidade.nome}</b></li>
                <li className='classe'>{habilidade.respiracao}</li>
                <li className='description'>{habilidade.descricao}</li>
              </ul>
            </div>
          );
        })}
      </div>

      <footer>
        <img src={muzan} className='muzan' />
      </footer>


    </div>
  )
}

export default RpgDemonSlayer
