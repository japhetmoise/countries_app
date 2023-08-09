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
//hideregion();
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
let alllanguagues="";
for(let dt of languageset){
alllanguagues+=dt+" ";
}
languagescell.textContent=alllanguagues;
row.appendChild(languagescell);
const tldCodescell=  document.createElement('td');
tldCodescell.textContent=(country.tld);
row.appendChild(tldCodescell);
const currencyCodescell=  document.createElement('td');
let currency=(country.currencies);
 let data= Object.keys(currency); 
currencyCodescell.innerHTML=data+":"+currency[data].name+"<b> Symbol:</b>"+currency[data].symbol;
row.appendChild(currencyCodescell);
const callingCodescell=  document.createElement('td');   
rt=(country.idd.root);
                let allidd=""; 
                let suffixArray= Object.values(country.idd.suffixes); 
                for(let dt of suffixArray) {
                  dt=rt+dt;
                     allidd+=" "+dt;
                }                   

callingCodescell.textContent=allidd;
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
                let alllanguagues="";
                for(let dt of languageset){
                alllanguagues+=dt+" ";
            }
        
                document.getElementById("languages").innerHTML=alllanguagues;
                flagimg=document.getElementById("flag");
                flagimg.src=country.flags.png;  
                flagimg=document.getElementById("coat");
              flagimg.src=country.coatOfArms.png;      
                document.getElementById("Population").innerHTML=country.population;
                document.getElementById("area").innerHTML=`${country.area} `;
                document.getElementById("Region").innerHTML=country.subregion+" / "+country.region;  
                rt=(country.idd.root);
                let allidd=""; 
                let suffixArray= Object.values(country.idd.suffixes); 
                for(let dt of suffixArray) {
                  dt=rt+dt;
                     allidd+=" "+dt;
                }                                                  
                document.getElementById("CallingCode").innerHTML=allidd;
                document.getElementById("TLD").textContent=country.tld;
                let currency=(country.currencies)     
                let property=Object.keys(currency);                              
                document.getElementById("currency").innerHTML=property+":"
                +currency[property].name+ "<b> symbol:</b> "+currency[property].symbol;                
                neibour=(country.borders);
                let allborder=""; 
                let borderArray= Object.values(neibour); 
                for(let dt of borderArray) {
                  allborder+=`<a href="border.html?/?id=${dt}" >${dt}</a>  `
                }  
                document.getElementById("Neighbour").innerHTML= allborder;

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
let alllanguagues="";
for(let dt of languageset){
alllanguagues+=dt+" ";
}
languagescell.textContent=alllanguagues;
row.appendChild(languagescell);

const tldCodescell=  document.createElement('td');
tldCodescell.textContent=(country.tld);
row.appendChild(tldCodescell);
const currencyCodescell=  document.createElement('td');
let currency=(country.currencies);
let data= Object.keys(currency); 
currencyCodescell.innerHTML=data+":"+currency[data].name+"<b> Symbol:</b>"+currency[data].symbol;
row.appendChild(currencyCodescell);
const callingCodescell=  document.createElement('td');    
rt=(country.idd.root);
                let allidd=""; 
                let suffixArray= Object.values(country.idd.suffixes); 
                for(let dt of suffixArray) {
                  dt=rt+dt;
                     allidd+=" "+dt;
                }                     
callingCodescell.textContent=allidd;
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

function changeMode() {
    var body = document.body;
    
    body.classList.toggle("dark-theme");
    let button = document.getElementById('button');
    
    if (button.innerHTML == "Dark Mode") {
       button.innerHTML = "Dark Mode";
    } else {
       button.innerHTML = "Light Mode"
    }
 }
 function idExtract(){
  const url=window.location.href;
  let id=url.substr(-3);
return id;
 }
 function get_borders_url(){
  const val =idExtract();
  return `https://restcountries.com/v3.1/alpha/${val}`;
 }
 async function getBorderDatata(){
  const response=await fetch(get_borders_url())
  const data=await response.json();
  return data
}

 async function border_country_details() {        
          const countries=await getBorderDatata();
          for(let country of countries){
              document.getElementById("name").textContent=country.name.common;
              document.getElementById("Capital").textContent=country.capital;
              const languageset=Object.values(country.languages)
              let alllanguagues="";
              for(let dt of languageset){
              alllanguagues+=dt+" ";
          }
      
              document.getElementById("languages").innerHTML=alllanguagues;
              flagimg=document.getElementById("flag");
              flagimg.src=country.flags.png;
              flagimg=document.getElementById("coat");
              flagimg.src=country.coatOfArms.png;
                      
              document.getElementById("Population").innerHTML=country.population;
              document.getElementById("area").innerHTML=`${country.area} km<sup>2</sup>`;
              document.getElementById("Region").innerHTML=country.subregion+" / "+country.region;  
              rt=(country.idd.root);
              let allidd=""; 
              let suffixArray= Object.values(country.idd.suffixes); 
              for(let dt of suffixArray) {
                dt=rt+dt;
                   allidd+=" "+dt;
              }                                                  
              document.getElementById("CallingCode").innerHTML=allidd;
              document.getElementById("TLD").textContent=country.tld;
              let currency=(country.currencies)     
              let property=Object.keys(currency);                              
              document.getElementById("currency").innerHTML=property+":"
              +currency[property].name+ "<b> symbol:</b> "+currency[property].symbol;                
              neibour=(country.borders);
              let allborder=""; 
              let borderArray= Object.values(neibour); 
              for(let dt of borderArray) {
                allborder+=`<a href="border.html?/?id=${dt}" >${dt}</a>  `
              }  
              document.getElementById("Neighbour").innerHTML= allborder;

    }
  }
