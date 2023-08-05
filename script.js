let regions="<option>filter region....</option>";
async function getCountriesDatata(){
    const response=await fetch("https://restcountries.com/v3.1/all")
    const data=await response.json();
    console.log(data);
    return data
}
async function DisplayData(){    
const countries=await getCountriesDatata()
const tableData=document.querySelector(".countries")
hideregion();
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
callingCodescell.textContent=country.idd.root+country.idd.suffixes;
row.appendChild(callingCodescell);
tableData.appendChild(row);
}
}
// Single country script

function getUrl() {
    const val = document.querySelector('.searchInput').value;
    return `https://restcountries.com/v3.1/name/${val}?fullText=true`;
  }


async function geSingleCountriesDatata(){
    const response=await fetch(getUrl())
    const data=await response.json();
    return data
}

   async function displaysingle() {        
            const countries=await geSingleCountriesDatata();
            for(let country of countries){
                document.getElementById("name").textContent=country.name.common;
                document.getElementById("Capital").textContent=country.capital;
                const languageset=Object.values(country.languages)
                document.getElementById("languages").innerHTML=languageset;
                flagimg=document.getElementById("flag");
                flagimg.src=country.flags.png;        
                document.getElementById("Population").innerHTML=country.population;
                document.getElementById("Region").innerHTML=country.subregion+" / "+country.region;                                         
                document.getElementById("CallingCode").innerHTML=country.idd.root+country.idd.suffixes;
                document.getElementById("TLD").textContent=country.tld;
                let currency=JSON.stringify(country.currencies)                
                document.getElementById("currency").textContent=currency;
                document.getElementById("Neighbour").textContent=country.borders;

      }
    }
  //function for filtering regions  
function getUrlRegion() {
    const val = document.querySelector('#selectRegion').value;
    return `https://restcountries.com/v3.1/region/${val}?fullText=true`;
  }

async function region(){
    const response=await fetch(getUrlRegion())
    const data=await response.json();
    return data
}
   async function displayRegion() {        
            const countries=await region();           
            const tableData=document.querySelector(".regions") ;
            tableData.innerHTML="";
            showregion();
            hideall();               
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
callingCodescell.textContent=country.idd.root+country.idd.suffixes;
row.appendChild(callingCodescell);
tableData.appendChild(row);
} 

}
       
    
async function setregion(){
    const countries=await getCountriesDatata();  
    
for(let country of countries){
    regions=regions+ `
    <option value='${country.region}'> ${country.region} <option>      
    `;
}
document.getElementById("selectRegion").innerHTML=regions
}
function hideall(){
    document.getElementById("all").style.display="none";
}
function hideregion(){
    document.getElementById("RegionTable").style.display="none";
}
function showregion(){
    document.getElementById("RegionTable").style.display="inline";
}