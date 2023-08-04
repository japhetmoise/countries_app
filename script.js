async function getCountriesDatata(){
    const response=await fetch("https://restcountries.com/v3.1/all")
    const data=await response.json();
    console.log(data);
    return data
}
async function DisplayData(){
const countries=await getCountriesDatata()
const tableData=document.querySelector(".countries")
for(let country of countries){
const row=document.createElement('tr');
const namecell=  document.createElement('td');
namecell.textContent=country.name.common;
row.appendChild(namecell);

const flagcell=  document.createElement('td');
const flagimg=document.createElement('img');
flagimg.src=country.flags.png;
flagcell.appendChild(flagimg );
row.appendChild(flagcell);
tableData.appendChild(row);

const populationCodescell=  document.createElement('td');
populationCodescell.textContent=country.population;
row.appendChild(populationCodescell);

const areacell=  document.createElement('td');
areacell.textContent=country.area;
row.appendChild(areacell);

const capitalcell=  document.createElement('td');
capitalcell.textContent=country.capital;
row.appendChild(capitalcell);

const languagescell=  document.createElement('td');
const languageset=Object.values(country.languages)
languagescell.textContent=languageset;
row.appendChild(languagescell);

const tldCodescell=  document.createElement('td');
tldCodescell.textContent=(country.tld);
row.appendChild(tldCodescell);
const currencyCodescell=  document.createElement('td');
let currency=JSON.stringify(country.currencies)
currency=currency.replace("}","");
currency=currency.replace("{","");
currency=currency.replace('"','');
currencyCodescell.textContent=(currency);
row.appendChild(currencyCodescell);
const callingCodescell=  document.createElement('td');
callingCodescell.textContent=(country.idd.root+country.idd.suffixes);
row.appendChild(callingCodescell);

}
}