let zina = document.getElementById('zina');
let zinas = document.querySelector('.logs');

async function IELADET_CATA_ZINAS(){
  let datiNoServera = await fetch('messages.json');
  let dati = await datiNoServera.json();
  let teksts="";
  for(let i=0;i<dati.length;i++){
      teksts=teksts+"<b>"+dati[i].vards+":</b> "+dati[i].zina+"<br />";
  }
  zinas.innerHTML = teksts;
}
setInterval(IELADET_CATA_ZINAS, 1000);



function NOSUTIT(){
  let vards = document.getElementById('vards').value;
  if(vards!=""){
    if(zina.value!=""){
      zinas.innerHTML = zinas.innerHTML+"<br /><b>"+
                        vards+":</b> "+zina.value;
      zina.value="";
    }else{
      alert("Ieraksti ziņu!");
    }
  }else{
    alert("Čats nepieļauj anonīmu ziņu iesniegšanu!");
  }
}

// nolasa datus no teksta faila
// async function IELADET_CATA_ZINAS(){
//   let datiNoServera = await fetch('messages.txt');
//   let dati = await datiNoServera.text();
//   zinas.innerHTML = dati;
// }
// IELADET_CATA_ZINAS();