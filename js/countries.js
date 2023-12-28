
const loadCountries=() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then( data => displayCountries(data));
}


const displayCountries= countries =>{
console.log(countries[0]);
const getCountriesHTML= countries.map(counrty=>getCourntryHTML(counrty));
console.log(getCountriesHTML[0]);

const container=document.getElementById('countries');
container.innerHTML=getCountriesHTML.join(' ');
}

const getCourntryHTML=country =>{
    return `
          <div class="country">
          <h2>${country.name.common}</h2>
          <h2>${country.capital}</h2>
          <img src="${country.flags.png}">
          </div>
    `
}

loadCountries();