const downloadXLSX = () => {
  const wb = XLSX.utils.book_new();
  let numero = document.getElementById('numero');
  let bebida = document.getElementById('bebida');
  let data = new Date();
 let dataPt = data.toLocaleDateString()
  wb.Props = {
    Title: `Compras dia ${numero.value}`,
    Subject: 'Compras',
    Author: 'Lucas',
    CreatedDate: new Date(),
  };
  
  wb.SheetNames.push('Compras');
    function queijo(pessoas) {if (pessoas < 30){return 2} else {return Math.ceil((pessoas/20))}}

  const dados = [
   [`${numero.value} pessoas`,''],
    [`${bebida.value} c/ bebida`,''],
['alcatra', Math.round((numero.value/19))],
['picanha', Math.floor((numero.value/25))],
['porco' , Math.ceil((numero.value/16))],
['drumet', Math.ceil((numero.value/8))],
['coração', Math.ceil((numero.value/6))],
['linguiça 5kg', Math.round((numero.value/25))],
['queijo coalho', queijo(numero.value)],
['',''],
['água (pack)', Math.floor((bebida.value/10))],
['água c/ gás ',  Math.floor((bebida.value/10))],
['coca',  Math.ceil((bebida.value/9))],
['coca zero',  Math.ceil((bebida.value/9))],
['guaraná', Math.floor((bebida.value/10))],
['guaraná zero', Math.floor((bebida.value/10))],
['mate', Math.ceil((bebida.value/6))]
  ]; 
  
  const ws = XLSX.utils.aoa_to_sheet(dados);
  
  wb.Sheets['Compras'] = ws;
   
  XLSX.writeFile(wb, `Compras ${dataPt}.xlsx`, { bookType: 'xlsx', type: 'bynary'});
};

document.getElementById('download').addEventListener('click', () => {
  downloadXLSX();
  
})
