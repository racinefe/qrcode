import './App.css';
import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import {BsQrCodeScan} from 'react-icons/bs'


function App() {

/* 
  Aqui, são definidos dois estados usando a função useState.
  O estado link é inicializado como uma string vazia e é usado para armazenar o
  link fornecido pelo usuário.
  O estado qrcodeLInk é inicializado como uma string vazia e é
  usado para armazenar o URL do código QR gerado.
*/
  const [link,setLink] = useState('');
  const [qrcodeLInk, setQrcodeLink] = useState('');
//----------------------------------------------------------------------------------------------------------------------
/*
  Essa função é chamada quando o valor do input é alterado pelo usuário.
  Ela atualiza o estado link com o valor do input e chama a função handleGenerate para gerar
  o código QR com base no link fornecido.
*/
  function handleQrcode(e) {
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }
  //----------------------------------------------------------------------------------------------------------------------
  /*
  Essa função utiliza o módulo qrcode para gerar o código QR com base no link fornecido.
  O método toDataURL converte o código QR em um formato de URL de imagem.
  O código QR é gerado com uma largura de 600 pixels e uma margem de 3 pixels.
  Quando o URL do código QR é retornado, ele é armazenado no estado qrcodeLInk.
*/
  function handleGenerate(link_url){
    QRCodeLink.toDataURL(link_url,{
      width: 600,
      margin: 3,
    }, function(err, url){
      setQrcodeLink(url);
    })
  }
//----------------------------------------------------------------------------------------------------------------------
/*
  Nessa parte, o componente é renderizado na tela.
  Ele exibe o código QR gerado usando o componente QRCode e o valor do estado link.
  Um input é exibido para que o usuário possa digitar o link.
  Quando o valor do input muda, a função handleQrcode é chamada
*/
  return (
    
    <div className="container">
      <h1 className='titulo'>
        Gerador de QrCode  
        <BsQrCodeScan size={30} color='#000' />
      </h1>
      <QRCode
        className='qrcode'
        value = {link}
      />

      <input 
        className='input'
        placeholder="Digite seu Link..."
        value = {link}
        onChange={(e) => handleQrcode(e)}

      />
      <button className='bntBaixar'>
        <a href={qrcodeLInk} download={`qrcode.png`} className='link'>
        <BsQrCodeScan size={20} color='#000' />
           Baixar QrCode
          </a>

      </button>
      
      

    </div>

  );
//----------------------------------------------------------------------------------------------------------------------
}

export default App;
