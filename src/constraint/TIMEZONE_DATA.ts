export type GlobalTimeType = {
  continent: string;
  country: string;
  city: string;
  highlighted: boolean;
  specialFormat?: SpecialFormatType;
};

export type SpecialFormatType = "CountryOnly" | "Full" | "Hyphenated";

export type TimezoneDataType = GlobalTimeType[];

export const timezoneData: TimezoneDataType = [
  {
    //Central Africa
    continent: "Africa",
    country: "Angola",
    city: "Luanda",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Cameroon",
    city: "Douala",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Central African Republic",
    city: "Bangui",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Chad",
    city: "Ndjamena",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Congo",
    city: "Brazzaville",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Equatorial Guinea",
    city: "Malabo",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Gabon",
    city: "Libreville",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Sao Tome and Principe",
    city: "Sao Tome",
    highlighted: false,
  },
  {
    //North Africa
    continent: "Africa",
    country: "Algeria",
    city: "Algiers",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Egypt",
    city: "Cairo",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Libya",
    city: "Tripoli",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Morocco",
    city: "Casablanca",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Tunisia",
    city: "Tunis",
    highlighted: false,
  },
  {
    //West Africa
    continent: "Africa",
    country: "Benin",
    city: "Porto Novo",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Burkina Faso",
    city: "Ouagadougou",
    highlighted: false,
  },
  {
    continent: "Atlantic",
    country: "Cape Verde",
    city: "Cape Verde",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Ivory Coast",
    city: "Abidjan",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Gambia",
    city: "Banjul",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Ghana",
    city: "Accra",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Guinea",
    city: "Conakry",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Guinea Bissau",
    city: "Bissau",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Liberia",
    city: "Monrovia",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Mali",
    city: "Bamako",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Mauritania",
    city: "Nouakchott",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Niger",
    city: "Niamey",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Nigeria",
    city: "Lagos",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Senegal",
    city: "Dakar",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Sierra Leone",
    city: "Freetown",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Togo",
    city: "Lome",
    highlighted: false,
  },
  {
    //East Africa
    continent: "Africa",
    country: "Burundi",
    city: "Bujumbura",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Djibouti",
    city: "Djibouti",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Eritrea",
    city: "Asmara",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Ethiopia",
    city: "Addis Ababa",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Kenya",
    city: "Nairobi",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Madagascar",
    city: "Antananarivo",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Malawi",
    city: "Blantyre",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Mauritius",
    city: "Mauritius",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Mozambique",
    city: "Maputo",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Rwanda",
    city: "Kigali",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Seychelles",
    city: "Mahe",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Somalia",
    city: "Mogadishu",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "South Sudan",
    city: "Juba",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Tanzania",
    city: "Dar es Salaam",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Uganda",
    city: "Kampala",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Zambia",
    city: "Lusaka",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Zimbabwe",
    city: "Harare",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Sudan",
    city: "Khartoum",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Comoros",
    city: "Comoro",
    highlighted: false,
  },
  {
    //Southern Africa
    continent: "Africa",
    country: "Botswana",
    city: "Gaborone",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Lesotho",
    city: "Maseru",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Namibia",
    city: "Windhoek",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "South Africa",
    city: "Johannesburg",
    highlighted: false,
  },
  {
    continent: "Africa",
    country: "Eswatini",
    city: "Mbabane",
    highlighted: false,
  },
  {
    //north america
    continent: "America",
    country: "Canada",
    city: "Toronto",
    highlighted: false,
  },
  {
    continent: "America",
    country: "Mexico",
    city: "Mexico City",
    highlighted: false,
  },
  {
    continent: "America",
    country: "Greenland",
    city: "Nuuk",
    highlighted: false,
  },
  {
    continent: "America",
    country: "Belize",
    city: "Belize",
    highlighted: false,
  },
  {
    continent: "America",
    country: "Costa Rica",
    city: "San José",
    highlighted: false,
    specialFormat: "CountryOnly",
  },
  {
    continent: "America",
    country: "El Salvador",
    city: "San Salvador",
    highlighted: false,
    specialFormat: "CountryOnly",
  },
  {
    continent: "America",
    country: "Guatemala",
    city: "Guatemala City",
    highlighted: false,
    specialFormat: "CountryOnly",
  },
  {
    continent: "America",
    country: "Honduras",
    city: "Tegucigalpa",
    highlighted: false,
  },
  {
    continent: "America",
    country: "Nicaragua",
    city: "Managua",
    highlighted: false,
  },
  {
    continent: "America",
    country: "Panama",
    city: "panama city",
    highlighted: false,
    specialFormat: "CountryOnly",
  },
  {
    continent: "America",
    country: "United States",
    city: "New York",
    highlighted: true,
  },
  {
    //caribbean
    continent: "America",
    country: "Bahamas",
    city: "Nassau",
    highlighted: false,
  },
  {
    continent: "America",
    country: "Barbados",
    city: "Barbados",
    highlighted: false,
  },
  {
    continent: "America",
    country: "Cuba",
    city: "Havana",
    highlighted: false,
  },
  {
    continent: "America",
    country: "Dominica",
    city: "Roseau",
    highlighted: false,
    specialFormat: "CountryOnly",
  },
  {
    continent: "America",
    country: "Dominican Republic",
    city: "Santo Domingo",
    highlighted: false,
  },
  {
    continent: "America",
    country: "Haiti",
    city: "Port au Prince",
    highlighted: false,
    specialFormat: "Hyphenated",
  },
  {
    continent: "America",
    country: "Jamaica",
    city: "Kingston",
    highlighted: false,
    specialFormat: "CountryOnly",
  },
  {
    continent: "America",
    country: "Saint Kitts and Nevis",
    city: "St Kitts",
    highlighted: false,
  },
  {
    continent: "America",
    country: "Saint Lucia",
    city: "St Lucia",
    highlighted: false,
  },
  {
    continent: "America",
    country: "Saint Vincent and the Grenadines",
    city: "St Vincent",
    highlighted: false,
  },
  {
    continent: "America",
    country: "Trinidad and Tobago",
    city: "Port of Spain",
    highlighted: false,
  },
  {
    continent: "America",
    country: "Antigua and Barbuda",
    city: "Antigua",
    highlighted: false,
  },
  {
    //south america
    continent: "America",
    country: "Argentina",
    city: "Buenos Aires",
    highlighted: false,
    specialFormat: "Full",
  },
  {
    continent: "America",
    country: "Bolivia",
    city: "La Paz",
    highlighted: false,
  },
  {
    continent: "America",
    country: "Brazil",
    city: "Sao Paulo",
    highlighted: false,
  },
  {
    continent: "America",
    country: "Chile",
    city: "Santiago",
    highlighted: false,
  },
  {
    continent: "America",
    country: "Colombia",
    city: "Bogota",
    highlighted: false,
  },
  {
    continent: "America",
    country: "Ecuador",
    city: "Guayaquil",
    highlighted: false,
  },
  {
    continent: "America",
    country: "Guyana",
    city: "Georgetown",
    highlighted: false,
    specialFormat: "CountryOnly",
  },
  {
    continent: "America",
    country: "Paraguay",
    city: "Asuncion",
    highlighted: false,
  },
  {
    continent: "America",
    country: "Peru",
    city: "Lima",
    highlighted: false,
  },
  {
    continent: "America",
    country: "Suriname",
    city: "Paramaribo",
    highlighted: false,
  },
  {
    continent: "America",
    country: "Uruguay",
    city: "Montevideo",
    highlighted: false,
  },
  {
    continent: "America",
    country: "Venezuela",
    city: "Caracas",
    highlighted: false,
  },
  {
    //Central Asia
    continent: "Asia",
    country: "Kazakhstan",
    city: "Almaty",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Kyrgyzstan",
    city: "Bishkek",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Tajikistan",
    city: "Dushanbe",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Turkmenistan",
    city: "Ashgabat",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Uzbekistan",
    city: "Tashkent",
    highlighted: false,
  },
  {
    //East Asia
    continent: "Asia",
    country: "China",
    city: "Shanghai",
    highlighted: true,
  },
  {
    continent: "Asia",
    country: "Japan",
    city: "Tokyo",
    highlighted: true,
  },
  {
    continent: "Asia",
    country: "Mongolia",
    city: "Ulaanbaatar",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "North Korea",
    city: "Pyongyang",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "South Korea",
    city: "Seoul",
    highlighted: true,
  },
  {
    continent: "Asia",
    country: "Taiwan",
    city: "Taipei",
    highlighted: false,
  },
  {
    //Western Asia
    continent: "Asia",
    country: "Armenia",
    city: "Yerevan",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Azerbaijan",
    city: "Baku",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Bahrain",
    city: "Manama",
    highlighted: false,
    specialFormat: "CountryOnly",
  },
  {
    continent: "Asia",
    country: "Georgia",
    city: "Tbilisi",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Iraq",
    city: "Baghdad",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Israel",
    city: "Jerusalem",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Jordan",
    city: "Amman",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Kuwait",
    city: "Kuwait",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Lebanon",
    city: "Beirut",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Oman",
    city: "Muscat",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Palestine",
    city: "Gaza",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Qatar",
    city: "Qatar",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Saudi Arabia",
    city: "Riyadh",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Syria",
    city: "Damascus",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Saudi Arabia",
    city: "Riyadh",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Syria",
    city: "Damascus",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Turkey",
    city: "Istanbul",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "United Arab Emirates",
    city: "Dubai",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Yemen",
    city: "Aden",
    highlighted: false,
  },
  {
    //South Asia
    continent: "Asia",
    country: "Afghanistan",
    city: "Kabul",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Bangladesh",
    city: "Dhaka",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Bhutan",
    city: "Thimphu",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "India",
    city: "Kolkata",
    highlighted: true,
  },
  {
    continent: "Asia",
    country: "Maldives",
    city: "Maldives",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Nepal",
    city: "Kathmandu",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Pakistan",
    city: "Karachi",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Sri Lanka",
    city: "Colombo",
    highlighted: false,
  },
  {
    //Southeast Asia
    continent: "Asia",
    country: "Brunei",
    city: "Begawan",
    highlighted: false,
    specialFormat: "CountryOnly",
  },
  {
    continent: "Asia",
    country: "Cambodia",
    city: "Phnom Penh",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Indonesia",
    city: "Jakarta",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Laos",
    city: "Vientiane",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Malaysia",
    city: "Kuala Lumpur",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Myanmar",
    city: "Yangon",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Philippines",
    city: "Manila",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Singapore",
    city: "Singapore",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Thailand",
    city: "Bangkok",
    highlighted: true,
  },
  {
    continent: "Asia",
    country: "Timor Leste",
    city: "Dili",
    highlighted: false,
  },
  {
    continent: "Asia",
    country: "Vietnam",
    city: "Ho Chi Minh",
    highlighted: false,
  },
  {
    //Australia
    continent: "Australia",
    country: "Australia",
    city: "Sydney",
    highlighted: true,
  },
  {
    //Pacific
    continent: "Pacific",
    country: "New Zealand",
    city: "Auckland",
    highlighted: false,
  },
  {
    continent: "Pacific",
    country: "Papua New Guinea",
    city: "Port Moresby",
    highlighted: false,
  },
  {
    continent: "Pacific",
    country: "Fiji",
    city: "Fiji",
    highlighted: false,
  },
  {
    continent: "Pacific",
    country: "Vanuatu",
    city: "Efate",
    highlighted: false,
  },
  {
    continent: "Pacific",
    country: "New Caledonia",
    city: "Noumea",
    highlighted: false,
  },
  {
    continent: "Pacific",
    country: "Samoa",
    city: "Apia",
    highlighted: false,
  },
  {
    continent: "Pacific",
    country: "Kiribati",
    city: "Kiritimati",
    highlighted: false,
  },
  {
    continent: "Pacific",
    country: "Tonga",
    city: "Tongatapu",
    highlighted: false,
  },
  {
    continent: "Pacific",
    country: "Micronesia",
    city: "Chuuk",
    highlighted: false,
  },
  {
    continent: "Pacific",
    country: "Palau",
    city: "Palau",
    highlighted: false,
  },
  {
    continent: "Pacific",
    country: "Nauru",
    city: "Nauru",
    highlighted: false,
  },
  {
    continent: "Pacific",
    country: "Tuvalu",
    city: "Funafuti",
    highlighted: false,
  },
  {
    //Central Europe
    continent: "Europe",
    country: "Austria",
    city: "Vienna",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Czech",
    city: "Prague",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Germany",
    city: "Berlin",
    highlighted: true,
  },
  {
    continent: "Europe",
    country: "Hungary",
    city: "Budapest",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Liechtenstein",
    city: "Vaduz",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Poland",
    city: "Warsaw",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Slovakia",
    city: "Bratislava",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Slovenia",
    city: "Ljubljana",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Switzerland",
    city: "Zurich",
    highlighted: false,
  },
  {
    //Northern Europe
    continent: "Europe",
    country: "Denmark",
    city: "Copenhagen",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Estonia",
    city: "Tallinn",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Finland",
    city: "Helsinki",
    highlighted: false,
  },
  {
    continent: "Atlantic",
    country: "Iceland",
    city: "Reykjavik",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Latvia",
    city: "Riga",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Lithuania",
    city: "Vilnius",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Norway",
    city: "Oslo",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Sweden",
    city: "Stockholm",
    highlighted: false,
  },
  {
    //Western Europe
    continent: "Europe",
    country: "Belgium",
    city: "Brussels",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "France",
    city: "Paris",
    highlighted: true,
  },
  {
    continent: "Europe",
    country: "Ireland",
    city: "Dublin",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Luxembourg",
    city: "Luxembourg",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Monaco",
    city: "Monaco",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Netherlands",
    city: "Amsterdam",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "United Kingdom",
    city: "London",
    highlighted: true,
  },
  {
    //Eastern Europe
    continent: "Europe",
    country: "Belarus",
    city: "Minsk",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Moldova",
    city: "Chisinau",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Russia",
    city: "Moscow",
    highlighted: true,
  },
  {
    continent: "Europe",
    country: "Ukraine",
    city: "Kiev",
    highlighted: false,
  },
  {
    //Southern Europe
    continent: "Europe",
    country: "Andorra",
    city: "Andorra",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Italy",
    city: "Rome",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Malta",
    city: "Malta",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Portugal",
    city: "Lisbon",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "San Marino",
    city: "San Marino",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Spain",
    city: "Madrid",
    highlighted: true,
  },
  {
    continent: "Europe",
    country: "Vatican",
    city: "Vatican",
    highlighted: false,
  },
  {
    //Southeastern Europe
    continent: "Europe",
    country: "Albania",
    city: "Tirane",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Bosnia and Herzegovina",
    city: "Sarajevo",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Bulgaria",
    city: "Sofia",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Croatia",
    city: "Zagreb",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Greece",
    city: "Athens",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Kosovo",
    city: "Pristina",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Montenegro",
    city: "Podgorica",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Macedonia",
    city: "Skopje",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Romania",
    city: "Bucharest",
    highlighted: false,
  },
  {
    continent: "Europe",
    country: "Serbia",
    city: "Belgrade",
    highlighted: false,
  },
] as const;
