async function getCountriesDatata(){
    const response=await fetch("https://restcountries.com/v2/all")
    const data=await response.json();
    return data
}
async function DisplayData(){
const countries=await getCountriesDatata()
console.log(countries);
const tableData=document.querySelector(".countries")
for(let country of countries){
const row=document.createElement('tr');
const namecell=  document.createElement('td')
namecell.textContent=country.name;
row.appendChild(namecell);

const flagcell=  document.createElement('td');
const flagimg=document.createElement('img');
flagimg.src=country.flag;
flagcell.appendChild(flagimg );
row.appendChild(flagcell);
tableData.appendChild(row);
}
}
getCountriesDatata();