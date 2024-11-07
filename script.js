const downloadXLSX = () => {
  const wb = XLSX.utils.book_new();
  let numero = document.getElementById('numero')
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
['alcatra', Math.ceil((numero.value/25))],
['picanha', Math.ceil((numero.value/25))],
['porco' , Math.ceil((numero.value/16))],
['drumet', Math.ceil((numero.value/8))],
['coração', Math.ceil((numero.value/6))],
['linguiça 5kg', Math.round((numero.value/25))],
['queijo coalho', queijo(numero.value)],
['',''],
['água (pack)', Math.floor((numero.value/10))],
['água c/ gás ',  Math.floor((numero.value/10))],
['coca',  Math.ceil((numero.value/9))],
['coca zero',  Math.ceil((numero.value/9))],
['guaraná', Math.floor((numero.value/10))],
['guaraná zero', Math.floor((numero.value/10))],
['mate', Math.ceil((numero.value/6))]
  ]; 
  
  const ws = XLSX.utils.aoa_to_sheet(dados);
  
  wb.Sheets['Compras'] = ws;
   
  XLSX.writeFile(wb, `Compras ${dataPt}.xlsx`, { bookType: 'xlsx', type: 'bynary'});
};

document.getElementById('download').addEventListener('click', () => {
  downloadXLSX();
  
})
