import PropTypes from 'prop-types';

export const CountryType = PropTypes.shape({
  name: PropTypes.shape({
    common: PropTypes.string.isRequired,
    official: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    nativeName: PropTypes.object,
  }).isRequired,
  area: PropTypes.number.isRequired,
  capital: PropTypes.string,
  region: PropTypes.string.isRequired,
  subregion: PropTypes.string.isRequired,
  continents: PropTypes.arrayOf(PropTypes.string).isRequired,
  flag: PropTypes.shape({
    png: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  population: PropTypes.number.isRequired,
  altSpellings: PropTypes.arrayOf(PropTypes.string).isRequired,
  timezones: PropTypes.arrayOf(PropTypes.string).isRequired,
  latlng: PropTypes.arrayOf(PropTypes.number).isRequired,
  currencies: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
    }),
  ).isRequired,
  coatOfArms: PropTypes.shape({
    png: PropTypes.string.isRequired,
  }).isRequired,
  maps: PropTypes.shape({
    googleMaps: PropTypes.string.isRequired,
    openStreetMaps: PropTypes.string.isRequired,
  }).isRequired,
});

export const CountryListType = PropTypes.arrayOf(CountryType);

// Sample Response
// [
//   {
//     "name": {
//       "common": "Japan",
//       "official": "Japan",
//       "nativeName": {
//         "jpn": {
//           "official": "日本",
//           "common": "日本"
//         }
//       }
//     },
//     "tld": [
//       ".jp",
//       ".みんな"
//     ],
//     "cca2": "JP",
//     "ccn3": "392",
//     "cca3": "JPN",
//     "cioc": "JPN",
//     "independent": true,
//     "status": "officially-assigned",
//     "unMember": true,
//     "currencies": {
//       "JPY": {
//         "name": "Japanese yen",
//         "symbol": "¥"
//       }
//     },
//     "idd": {
//       "root": "+8",
//       "suffixes": [
//         "1"
//       ]
//     },
//     "capital": [
//       "Tokyo"
//     ],
//     "altSpellings": [
//       "JP",
//       "Nippon",
//       "Nihon"
//     ],
//     "region": "Asia",
//     "subregion": "Eastern Asia",
//     "languages": {
//       "jpn": "Japanese"
//     },
//     "latlng": [
//       36.0,
//       138.0
//     ],
//     "landlocked": false,
//     "area": 377930.0,
//     "demonyms": {
//       "eng": {
//         "f": "Japanese",
//         "m": "Japanese"
//       },
//       "fra": {
//         "f": "Japonaise",
//         "m": "Japonais"
//       }
//     },
//     "flag": "🇯🇵",
//     "maps": {
//       "googleMaps": "https://goo.gl/maps/NGTLSCSrA8bMrvnX9",
//       "openStreetMaps": "https://www.openstreetmap.org/relation/382313"
//     },
//     "population": 125836021,
//     "gini": {
//       "2013": 32.9
//     },
//     "fifa": "JPN",
//     "car": {
//       "signs": [
//         "J"
//       ],
//       "side": "left"
//     },
//     "timezones": [
//       "UTC+09:00"
//     ],
//     "continents": [
//       "Asia"
//     ],
//     "flags": {
//       "png": "https://flagcdn.com/w320/jp.png",
//       "svg": "https://flagcdn.com/jp.svg",
//       "alt": "The flag of Japan features a crimson-red circle at the center of a white field."
//     },
//     "coatOfArms": {
//       "png": "https://mainfacts.com/media/images/coats_of_arms/jp.png",
//       "svg": "https://mainfacts.com/media/images/coats_of_arms/jp.svg"
//     },
//     "startOfWeek": "monday",
//     "capitalInfo": {
//       "latlng": [
//         35.68,
//         139.75
//       ]
//     },
//     "postalCode": {
//       "format": "###-####",
//       "regex": "^(\\d{7})$"
//     }
//   }
// ]
