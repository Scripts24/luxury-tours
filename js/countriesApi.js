let config = {
    cUrl: 'https://api.countrystatecity.in/v1/countries',
    ckey: 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=='
}

let countrySelect = document.querySelector('.country')
let stateSelect = document.querySelector('.state')

function loadCountries() {

    let apiEndPoint = config.cUrl

    fetch(apiEndPoint, { headers: { "X-CSCAPI-KEY": config.ckey } })
        .then(Response => Response.json())
        .then(data => {
            console.log(data);

            data.forEach(country => {
                const option = document.createElement('option')
                option.value = country.iso2
                option.textContent = country.name
                countrySelect.appendChild(option)
            })
        })
        .catch(error => console.error('Error al cargar países:', error))

    stateSelect.disabled = true

    stateSelect.style.pointerEvents = 'none'

}

function loadStates() {
    stateSelect.disabled = false

    stateSelect.style.pointerEvents = 'auto'

    const selectedCountryCode = countrySelect.value
    // console.log(selectedCountryCode);
    stateSelect.innerHTML = '<option value="">Ciudad</option>' // limpiar estados existentes

    fetch(`${config.cUrl}/${selectedCountryCode}/states`, { headers: { "X-CSCAPI-KEY": config.ckey } })
        .then(response => response.json())
        .then(data => {
            // console.log(data);

            data.forEach(state => {
                const option = document.createElement('option')
                option.value = state.iso2
                option.textContent = state.name
                stateSelect.appendChild(option)
            })
        })
        .catch(error => console.error('Error al cargar ciudades:', error))
}


window.onload = loadCountries