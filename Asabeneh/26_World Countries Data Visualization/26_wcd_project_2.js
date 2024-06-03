import { returnCountries } from "./26_countries_data.js";

async function fetchCountries() {
    let countries = await returnCountries()
    return countries
}

// (async function() {
//     let result = fetchCountries()
//     console.log(result)
// })()
