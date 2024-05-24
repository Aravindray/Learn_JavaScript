const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]

console.log('Level 2')

console.log('---Question 3---')

function categorizeCountriesBy(pattern) {
    let result = countries.filter(country => country.includes(pattern))
    return result
}

console.log(categorizeCountriesBy("land"))
console.log(categorizeCountriesBy('ia'))
console.log(categorizeCountriesBy('Island'))
console.log(categorizeCountriesBy('stan'))

console.log('---Question 4---')

function findLetterCount(arr) {
    let alphaCount = []
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
    for (let i = 0; i < 26; i++) {
        let result = arr.filter(country => country.startsWith(alphabets[i]))
        let obj = {
            letter: alphabets[i],
            count: result.length
        }
        alphaCount.push(obj)
    }
    return alphaCount
}
console.log(findLetterCount(countries))

console.log('---Question 5.a---')

function getFirstTenCountries1(arr) {
    console.log('using forEach() method')
    let counter = 10
    arr.forEach(element => {
        if (counter > 0) {
            console.log(element)
        }
        counter--
    })
}
getFirstTenCountries1(countries)

console.log('---Question 5.b---')

function getFirstTenCountries2(arr){
    console.log(`${arr.slice(0,10)}`)
}
getFirstTenCountries2(countries)

console.log('---Question 6---')

function getLastTenCountries(arr) {
    let startIndex = arr.length - 10
    let endIndex = arr.length
    console.log(arr.slice(startIndex, endIndex))
}
getLastTenCountries(countries)

console.log('---Question 7---')

let alphaCount = findLetterCount(countries)
alphaCount.sort((a, b) => {
    if (a.count < b.count) return -1
    if (a.count > b.count) return 1
    else return 0
})
alphaCount.reverse()
console.log(`Letter used as initial for countries name is "${alphaCount[0].letter}" it been used for "${alphaCount[0].count}" countries.`)
