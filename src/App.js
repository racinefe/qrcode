import './App.css';
import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';


function App() {

  const [link,setLink] = useState('');
  const [qrcodeLInk, setQrcodeLink] = useState('');

  function handleQrcode(e) {
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }
  function handleGenerate(link_url){
    QRCodeLink.toDataURL(link_url,{
      width: 600,
      margin: 3,
    }, function(err, url){
      setQrcodeLink(url);
    })
  }
  return (

    <div className="container">

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
      <a href={qrcodeLInk} download={`qrcode.png`}>Baixar QrCode</a>
      

    </div>

  );
}

export default App;
