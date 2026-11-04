// Shared country search for the homepage, directory, and country profiles.
const countries = [
  {
    "name": "Afghanistan",
    "search": "afghanistan afg ",
    "aliases": [],
    "link": "afghanistan.html"
  },
  {
    "name": "Albania",
    "search": "albania alb ",
    "aliases": [],
    "link": "albania.html"
  },
  {
    "name": "Algeria",
    "search": "algeria dza ",
    "aliases": [],
    "link": "algeria.html"
  },
  {
    "name": "Andorra",
    "search": "andorra and ",
    "aliases": [],
    "link": "andorra.html"
  },
  {
    "name": "Angola",
    "search": "angola ago ",
    "aliases": [],
    "link": "angola.html"
  },
  {
    "name": "Antigua and Barbuda",
    "search": "antigua and barbuda atg ",
    "aliases": [],
    "link": "antiguaandbarbuda.html"
  },
  {
    "name": "Argentina",
    "search": "argentina arg ",
    "aliases": [],
    "link": "argentina.html"
  },
  {
    "name": "Armenia",
    "search": "armenia arm ",
    "aliases": [],
    "link": "armenia.html"
  },
  {
    "name": "Australia",
    "search": "australia aus ",
    "aliases": [],
    "link": "australia.html"
  },
  {
    "name": "Austria",
    "search": "austria aut ",
    "aliases": [],
    "link": "austria.html"
  },
  {
    "name": "Azerbaijan",
    "search": "azerbaijan aze ",
    "aliases": [],
    "link": "azerbaijan.html"
  },
  {
    "name": "Bahamas",
    "search": "bahamas bhs ",
    "aliases": [],
    "link": "bahamas.html"
  },
  {
    "name": "Bahrain",
    "search": "bahrain bhr ",
    "aliases": [],
    "link": "bahrain.html"
  },
  {
    "name": "Bangladesh",
    "search": "bangladesh bgd ",
    "aliases": [],
    "link": "bangladesh.html"
  },
  {
    "name": "Barbados",
    "search": "barbados brb ",
    "aliases": [],
    "link": "barbados.html"
  },
  {
    "name": "Belarus",
    "search": "belarus blr ",
    "aliases": [],
    "link": "belarus.html"
  },
  {
    "name": "Belgium",
    "search": "belgium bel ",
    "aliases": [],
    "link": "belgium.html"
  },
  {
    "name": "Belize",
    "search": "belize blz ",
    "aliases": [],
    "link": "belize.html"
  },
  {
    "name": "Benin",
    "search": "benin ben ",
    "aliases": [],
    "link": "benin.html"
  },
  {
    "name": "Bhutan",
    "search": "bhutan btn ",
    "aliases": [],
    "link": "bhutan.html"
  },
  {
    "name": "Bolivia",
    "search": "bolivia bol ",
    "aliases": [],
    "link": "bolivia.html"
  },
  {
    "name": "Bosnia and Herzegovina",
    "search": "bosnia and herzegovina bih ",
    "aliases": [],
    "link": "bosniaandherzegovina.html"
  },
  {
    "name": "Botswana",
    "search": "botswana bwa ",
    "aliases": [],
    "link": "botswana.html"
  },
  {
    "name": "Brazil",
    "search": "brazil bra ",
    "aliases": [],
    "link": "brazil.html"
  },
  {
    "name": "Brunei",
    "search": "brunei brn ",
    "aliases": [],
    "link": "brunei.html"
  },
  {
    "name": "Bulgaria",
    "search": "bulgaria bgr ",
    "aliases": [],
    "link": "bulgaria.html"
  },
  {
    "name": "Burkina Faso",
    "search": "burkina faso bfa ",
    "aliases": [],
    "link": "burkinafaso.html"
  },
  {
    "name": "Burundi",
    "search": "burundi bdi ",
    "aliases": [],
    "link": "burundi.html"
  },
  {
    "name": "Cabo Verde",
    "search": "cabo verde cpv ",
    "aliases": [],
    "link": "caboverde.html"
  },
  {
    "name": "Cambodia",
    "search": "cambodia khm ",
    "aliases": [],
    "link": "cambodia.html"
  },
  {
    "name": "Cameroon",
    "search": "cameroon cmr ",
    "aliases": [],
    "link": "cameroon.html"
  },
  {
    "name": "Canada",
    "search": "canada can ",
    "aliases": [],
    "link": "canada.html"
  },
  {
    "name": "Central African Republic",
    "search": "central african republic caf ",
    "aliases": [],
    "link": "centralafricanrepublic.html"
  },
  {
    "name": "Chad",
    "search": "chad tcd ",
    "aliases": [],
    "link": "chad.html"
  },
  {
    "name": "Chile",
    "search": "chile chl ",
    "aliases": [],
    "link": "chile.html"
  },
  {
    "name": "China",
    "search": "china chn ",
    "aliases": [],
    "link": "china.html"
  },
  {
    "name": "Colombia",
    "search": "colombia col ",
    "aliases": [],
    "link": "colombia.html"
  },
  {
    "name": "Comoros",
    "search": "comoros com ",
    "aliases": [],
    "link": "comoros.html"
  },
  {
    "name": "Costa Rica",
    "search": "costa rica cri ",
    "aliases": [],
    "link": "costarica.html"
  },
  {
    "name": "Croatia",
    "search": "croatia hrv ",
    "aliases": [],
    "link": "croatia.html"
  },
  {
    "name": "Cuba",
    "search": "cuba cub ",
    "aliases": [],
    "link": "cuba.html"
  },
  {
    "name": "Cyprus",
    "search": "cyprus cyp ",
    "aliases": [],
    "link": "cyprus.html"
  },
  {
    "name": "Czech Republic",
    "search": "czech republic cze ",
    "aliases": [],
    "link": "czechrepublic.html"
  },
  {
    "name": "Democratic Republic of the Congo",
    "search": "democratic republic of the congo cod Congo, Democratic Republic of the DR Congo Congo-Kinshasa",
    "aliases": [
      "Congo, Democratic Republic of the",
      "DR Congo",
      "Congo-Kinshasa"
    ],
    "link": "democraticrepublicofthecongo.html"
  },
  {
    "name": "Denmark",
    "search": "denmark dnk ",
    "aliases": [],
    "link": "denmark.html"
  },
  {
    "name": "Djibouti",
    "search": "djibouti dji ",
    "aliases": [],
    "link": "djibouti.html"
  },
  {
    "name": "Dominica",
    "search": "dominica dma ",
    "aliases": [],
    "link": "dominica.html"
  },
  {
    "name": "Dominican Republic",
    "search": "dominican republic dom ",
    "aliases": [],
    "link": "dominicanrepublic.html"
  },
  {
    "name": "Ecuador",
    "search": "ecuador ecu ",
    "aliases": [],
    "link": "ecuador.html"
  },
  {
    "name": "Egypt",
    "search": "egypt egy ",
    "aliases": [],
    "link": "egypt.html"
  },
  {
    "name": "El Salvador",
    "search": "el salvador slv ",
    "aliases": [],
    "link": "elsalvador.html"
  },
  {
    "name": "Equatorial Guinea",
    "search": "equatorial guinea gnq ",
    "aliases": [],
    "link": "equatorialguinea.html"
  },
  {
    "name": "Eritrea",
    "search": "eritrea eri ",
    "aliases": [],
    "link": "eritrea.html"
  },
  {
    "name": "Estonia",
    "search": "estonia est ",
    "aliases": [],
    "link": "estonia.html"
  },
  {
    "name": "Eswatini",
    "search": "eswatini swz ",
    "aliases": [],
    "link": "eswatini.html"
  },
  {
    "name": "Ethiopia",
    "search": "ethiopia eth ",
    "aliases": [],
    "link": "ethiopia.html"
  },
  {
    "name": "Fiji",
    "search": "fiji fji ",
    "aliases": [],
    "link": "fiji.html"
  },
  {
    "name": "Finland",
    "search": "finland fin ",
    "aliases": [],
    "link": "finland.html"
  },
  {
    "name": "France",
    "search": "france fra ",
    "aliases": [],
    "link": "france.html"
  },
  {
    "name": "Gabon",
    "search": "gabon gab ",
    "aliases": [],
    "link": "gabon.html"
  },
  {
    "name": "Gambia",
    "search": "gambia gmb ",
    "aliases": [],
    "link": "gambia.html"
  },
  {
    "name": "Georgia",
    "search": "georgia geo ",
    "aliases": [],
    "link": "georgia.html"
  },
  {
    "name": "Germany",
    "search": "germany deu ",
    "aliases": [],
    "link": "germany.html"
  },
  {
    "name": "Ghana",
    "search": "ghana gha ",
    "aliases": [],
    "link": "ghana.html"
  },
  {
    "name": "Greece",
    "search": "greece grc ",
    "aliases": [],
    "link": "greece.html"
  },
  {
    "name": "Grenada",
    "search": "grenada grd ",
    "aliases": [],
    "link": "grenada.html"
  },
  {
    "name": "Guatemala",
    "search": "guatemala gtm ",
    "aliases": [],
    "link": "guatemala.html"
  },
  {
    "name": "Guinea",
    "search": "guinea gin ",
    "aliases": [],
    "link": "guinea.html"
  },
  {
    "name": "Guinea-Bissau",
    "search": "guinea-bissau gnb ",
    "aliases": [],
    "link": "guineabissau.html"
  },
  {
    "name": "Guyana",
    "search": "guyana guy ",
    "aliases": [],
    "link": "guyana.html"
  },
  {
    "name": "Haiti",
    "search": "haiti hti ",
    "aliases": [],
    "link": "haiti.html"
  },
  {
    "name": "Honduras",
    "search": "honduras hnd ",
    "aliases": [],
    "link": "honduras.html"
  },
  {
    "name": "Hungary",
    "search": "hungary hun ",
    "aliases": [],
    "link": "hungary.html"
  },
  {
    "name": "Iceland",
    "search": "iceland isl ",
    "aliases": [],
    "link": "iceland.html"
  },
  {
    "name": "India",
    "search": "india ind ",
    "aliases": [],
    "link": "india.html"
  },
  {
    "name": "Indonesia",
    "search": "indonesia idn ",
    "aliases": [],
    "link": "indonesia.html"
  },
  {
    "name": "Iran",
    "search": "iran irn ",
    "aliases": [],
    "link": "iran.html"
  },
  {
    "name": "Iraq",
    "search": "iraq irq ",
    "aliases": [],
    "link": "iraq.html"
  },
  {
    "name": "Ireland",
    "search": "ireland irl ",
    "aliases": [],
    "link": "ireland.html"
  },
  {
    "name": "Israel",
    "search": "israel isr ",
    "aliases": [],
    "link": "israel.html"
  },
  {
    "name": "Italy",
    "search": "italy ita ",
    "aliases": [],
    "link": "italy.html"
  },
  {
    "name": "Ivory Coast",
    "search": "ivory coast civ Cote d'Ivoire C\u00f4te d'Ivoire",
    "aliases": [
      "Cote d'Ivoire",
      "C\u00f4te d'Ivoire"
    ],
    "link": "ivorycoast.html"
  },
  {
    "name": "Jamaica",
    "search": "jamaica jam ",
    "aliases": [],
    "link": "jamaica.html"
  },
  {
    "name": "Japan",
    "search": "japan jpn ",
    "aliases": [],
    "link": "japan.html"
  },
  {
    "name": "Jordan",
    "search": "jordan jor ",
    "aliases": [],
    "link": "jordan.html"
  },
  {
    "name": "Kazakhstan",
    "search": "kazakhstan kaz ",
    "aliases": [],
    "link": "kazakhstan.html"
  },
  {
    "name": "Kenya",
    "search": "kenya ken ",
    "aliases": [],
    "link": "kenya.html"
  },
  {
    "name": "Kiribati",
    "search": "kiribati kir ",
    "aliases": [],
    "link": "kiribati.html"
  },
  {
    "name": "Kosovo",
    "search": "kosovo uvk ",
    "aliases": [],
    "link": "kosovo.html"
  },
  {
    "name": "Kuwait",
    "search": "kuwait kwt ",
    "aliases": [],
    "link": "kuwait.html"
  },
  {
    "name": "Kyrgyzstan",
    "search": "kyrgyzstan kgz Kyrgyz Republic",
    "aliases": [
      "Kyrgyz Republic"
    ],
    "link": "kyrgyzstan.html"
  },
  {
    "name": "Laos",
    "search": "laos lao ",
    "aliases": [],
    "link": "laos.html"
  },
  {
    "name": "Latvia",
    "search": "latvia lva ",
    "aliases": [],
    "link": "latvia.html"
  },
  {
    "name": "Lebanon",
    "search": "lebanon lbn ",
    "aliases": [],
    "link": "lebanon.html"
  },
  {
    "name": "Lesotho",
    "search": "lesotho lso ",
    "aliases": [],
    "link": "lesotho.html"
  },
  {
    "name": "Liberia",
    "search": "liberia lbr ",
    "aliases": [],
    "link": "liberia.html"
  },
  {
    "name": "Libya",
    "search": "libya lby ",
    "aliases": [],
    "link": "libya.html"
  },
  {
    "name": "Liechtenstein",
    "search": "liechtenstein lie ",
    "aliases": [],
    "link": "liechtenstein.html"
  },
  {
    "name": "Lithuania",
    "search": "lithuania ltu ",
    "aliases": [],
    "link": "lithuania.html"
  },
  {
    "name": "Luxembourg",
    "search": "luxembourg lux ",
    "aliases": [],
    "link": "luxembourg.html"
  },
  {
    "name": "Madagascar",
    "search": "madagascar mdg ",
    "aliases": [],
    "link": "madagascar.html"
  },
  {
    "name": "Malawi",
    "search": "malawi mwi ",
    "aliases": [],
    "link": "malawi.html"
  },
  {
    "name": "Malaysia",
    "search": "malaysia mys ",
    "aliases": [],
    "link": "malaysia.html"
  },
  {
    "name": "Maldives",
    "search": "maldives mdv ",
    "aliases": [],
    "link": "maldives.html"
  },
  {
    "name": "Mali",
    "search": "mali mli ",
    "aliases": [],
    "link": "mali.html"
  },
  {
    "name": "Malta",
    "search": "malta mlt ",
    "aliases": [],
    "link": "malta.html"
  },
  {
    "name": "Marshall Islands",
    "search": "marshall islands mhl ",
    "aliases": [],
    "link": "marshallislands.html"
  },
  {
    "name": "Mauritania",
    "search": "mauritania mrt ",
    "aliases": [],
    "link": "mauritania.html"
  },
  {
    "name": "Mauritius",
    "search": "mauritius mus ",
    "aliases": [],
    "link": "mauritius.html"
  },
  {
    "name": "Mexico",
    "search": "mexico mex ",
    "aliases": [],
    "link": "mexico.html"
  },
  {
    "name": "Micronesia",
    "search": "micronesia fsm ",
    "aliases": [],
    "link": "micronesia.html"
  },
  {
    "name": "Moldova",
    "search": "moldova mda ",
    "aliases": [],
    "link": "moldova.html"
  },
  {
    "name": "Monaco",
    "search": "monaco mco ",
    "aliases": [],
    "link": "monaco.html"
  },
  {
    "name": "Mongolia",
    "search": "mongolia mng ",
    "aliases": [],
    "link": "mongolia.html"
  },
  {
    "name": "Montenegro",
    "search": "montenegro mne ",
    "aliases": [],
    "link": "montenegro.html"
  },
  {
    "name": "Morocco",
    "search": "morocco mar ",
    "aliases": [],
    "link": "morocco.html"
  },
  {
    "name": "Mozambique",
    "search": "mozambique moz ",
    "aliases": [],
    "link": "mozambique.html"
  },
  {
    "name": "Myanmar",
    "search": "myanmar mmr ",
    "aliases": [],
    "link": "myanmar.html"
  },
  {
    "name": "Namibia",
    "search": "namibia nam ",
    "aliases": [],
    "link": "namibia.html"
  },
  {
    "name": "Nauru",
    "search": "nauru nru ",
    "aliases": [],
    "link": "nauru.html"
  },
  {
    "name": "Nepal",
    "search": "nepal npl ",
    "aliases": [],
    "link": "nepal.html"
  },
  {
    "name": "Netherlands",
    "search": "netherlands nld ",
    "aliases": [],
    "link": "netherlands.html"
  },
  {
    "name": "New Zealand",
    "search": "new zealand nzl ",
    "aliases": [],
    "link": "newzealand.html"
  },
  {
    "name": "Nicaragua",
    "search": "nicaragua nic ",
    "aliases": [],
    "link": "nicaragua.html"
  },
  {
    "name": "Niger",
    "search": "niger ner ",
    "aliases": [],
    "link": "niger.html"
  },
  {
    "name": "Nigeria",
    "search": "nigeria nga ",
    "aliases": [],
    "link": "nigeria.html"
  },
  {
    "name": "North Korea",
    "search": "north korea prk ",
    "aliases": [],
    "link": "northkorea.html"
  },
  {
    "name": "North Macedonia",
    "search": "north macedonia mkd ",
    "aliases": [],
    "link": "northmacedonia.html"
  },
  {
    "name": "Norway",
    "search": "norway nor ",
    "aliases": [],
    "link": "norway.html"
  },
  {
    "name": "Oman",
    "search": "oman omn ",
    "aliases": [],
    "link": "oman.html"
  },
  {
    "name": "Pakistan",
    "search": "pakistan pak ",
    "aliases": [],
    "link": "pakistan.html"
  },
  {
    "name": "Palau",
    "search": "palau plw ",
    "aliases": [],
    "link": "palau.html"
  },
  {
    "name": "Palestine",
    "search": "palestine pse ",
    "aliases": [],
    "link": "palestine.html"
  },
  {
    "name": "Panama",
    "search": "panama pan ",
    "aliases": [],
    "link": "panama.html"
  },
  {
    "name": "Papua New Guinea",
    "search": "papua new guinea png ",
    "aliases": [],
    "link": "papuanewguinea.html"
  },
  {
    "name": "Paraguay",
    "search": "paraguay pry ",
    "aliases": [],
    "link": "paraguay.html"
  },
  {
    "name": "Peru",
    "search": "peru per ",
    "aliases": [],
    "link": "peru.html"
  },
  {
    "name": "Philippines",
    "search": "philippines phl ",
    "aliases": [],
    "link": "philippines.html"
  },
  {
    "name": "Poland",
    "search": "poland pol ",
    "aliases": [],
    "link": "poland.html"
  },
  {
    "name": "Portugal",
    "search": "portugal prt ",
    "aliases": [],
    "link": "portugal.html"
  },
  {
    "name": "Qatar",
    "search": "qatar qat ",
    "aliases": [],
    "link": "qatar.html"
  },
  {
    "name": "Republic of the Congo",
    "search": "republic of the congo cog Congo, Republic of the Congo-Brazzaville",
    "aliases": [
      "Congo, Republic of the",
      "Congo-Brazzaville"
    ],
    "link": "republicofthecongo.html"
  },
  {
    "name": "Romania",
    "search": "romania rou ",
    "aliases": [],
    "link": "romania.html"
  },
  {
    "name": "Russia",
    "search": "russia rus ",
    "aliases": [],
    "link": "russia.html"
  },
  {
    "name": "Rwanda",
    "search": "rwanda rwa ",
    "aliases": [],
    "link": "rwanda.html"
  },
  {
    "name": "Saint Kitts and Nevis",
    "search": "saint kitts and nevis kna ",
    "aliases": [],
    "link": "saintkittsandnevis.html"
  },
  {
    "name": "Saint Lucia",
    "search": "saint lucia lca ",
    "aliases": [],
    "link": "saintlucia.html"
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "search": "saint vincent and the grenadines vct ",
    "aliases": [],
    "link": "saintvincentandthegrenadines.html"
  },
  {
    "name": "Samoa",
    "search": "samoa wsm ",
    "aliases": [],
    "link": "samoa.html"
  },
  {
    "name": "San Marino",
    "search": "san marino smr ",
    "aliases": [],
    "link": "sanmarino.html"
  },
  {
    "name": "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
    "search": "s\u00e3o tom\u00e9 and pr\u00edncipe stp ",
    "aliases": [],
    "link": "saotomeandprincipe.html"
  },
  {
    "name": "Saudi Arabia",
    "search": "saudi arabia sau ",
    "aliases": [],
    "link": "saudiarabia.html"
  },
  {
    "name": "Senegal",
    "search": "senegal sen ",
    "aliases": [],
    "link": "senegal.html"
  },
  {
    "name": "Serbia",
    "search": "serbia srb ",
    "aliases": [],
    "link": "serbia.html"
  },
  {
    "name": "Seychelles",
    "search": "seychelles syc ",
    "aliases": [],
    "link": "seychelles.html"
  },
  {
    "name": "Sierra Leone",
    "search": "sierra leone sle ",
    "aliases": [],
    "link": "sierraleone.html"
  },
  {
    "name": "Singapore",
    "search": "singapore sgp ",
    "aliases": [],
    "link": "singapore.html"
  },
  {
    "name": "Slovakia",
    "search": "slovakia svk ",
    "aliases": [],
    "link": "slovakia.html"
  },
  {
    "name": "Slovenia",
    "search": "slovenia svn ",
    "aliases": [],
    "link": "slovenia.html"
  },
  {
    "name": "Solomon Islands",
    "search": "solomon islands slb ",
    "aliases": [],
    "link": "solomonislands.html"
  },
  {
    "name": "Somalia",
    "search": "somalia som ",
    "aliases": [],
    "link": "somalia.html"
  },
  {
    "name": "South Africa",
    "search": "south africa zaf ",
    "aliases": [],
    "link": "southafrica.html"
  },
  {
    "name": "South Korea",
    "search": "south korea kor ",
    "aliases": [],
    "link": "southkorea.html"
  },
  {
    "name": "South Sudan",
    "search": "south sudan ssd ",
    "aliases": [],
    "link": "southsudan.html"
  },
  {
    "name": "Spain",
    "search": "spain esp ",
    "aliases": [],
    "link": "spain.html"
  },
  {
    "name": "Sri Lanka",
    "search": "sri lanka lka ",
    "aliases": [],
    "link": "srilanka.html"
  },
  {
    "name": "Sudan",
    "search": "sudan sdn ",
    "aliases": [],
    "link": "sudan.html"
  },
  {
    "name": "Suriname",
    "search": "suriname sur ",
    "aliases": [],
    "link": "suriname.html"
  },
  {
    "name": "Sweden",
    "search": "sweden swe ",
    "aliases": [],
    "link": "sweden.html"
  },
  {
    "name": "Switzerland",
    "search": "switzerland che ",
    "aliases": [],
    "link": "switzerland.html"
  },
  {
    "name": "Syria",
    "search": "syria syr ",
    "aliases": [],
    "link": "syria.html"
  },
  {
    "name": "Taiwan",
    "search": "taiwan twn ",
    "aliases": [],
    "link": "taiwan.html"
  },
  {
    "name": "Tajikistan",
    "search": "tajikistan tjk ",
    "aliases": [],
    "link": "tajikistan.html"
  },
  {
    "name": "Tanzania",
    "search": "tanzania tza ",
    "aliases": [],
    "link": "tanzania.html"
  },
  {
    "name": "Thailand",
    "search": "thailand tha ",
    "aliases": [],
    "link": "thailand.html"
  },
  {
    "name": "Timor-Leste",
    "search": "timor-leste tls ",
    "aliases": [],
    "link": "timorleste.html"
  },
  {
    "name": "Togo",
    "search": "togo tgo ",
    "aliases": [],
    "link": "togo.html"
  },
  {
    "name": "Tonga",
    "search": "tonga ton ",
    "aliases": [],
    "link": "tonga.html"
  },
  {
    "name": "Trinidad and Tobago",
    "search": "trinidad and tobago tto ",
    "aliases": [],
    "link": "trinidadandtobago.html"
  },
  {
    "name": "Tunisia",
    "search": "tunisia tun ",
    "aliases": [],
    "link": "tunisia.html"
  },
  {
    "name": "Turkey",
    "search": "turkey tur ",
    "aliases": [],
    "link": "turkey.html"
  },
  {
    "name": "Turkmenistan",
    "search": "turkmenistan tkm ",
    "aliases": [],
    "link": "turkmenistan.html"
  },
  {
    "name": "Tuvalu",
    "search": "tuvalu tuv ",
    "aliases": [],
    "link": "tuvalu.html"
  },
  {
    "name": "Uganda",
    "search": "uganda uga ",
    "aliases": [],
    "link": "uganda.html"
  },
  {
    "name": "Ukraine",
    "search": "ukraine ukr ",
    "aliases": [],
    "link": "ukraine.html"
  },
  {
    "name": "United Arab Emirates",
    "search": "united arab emirates are ",
    "aliases": [],
    "link": "unitedarabemirates.html"
  },
  {
    "name": "United Kingdom",
    "search": "united kingdom gbr ",
    "aliases": [],
    "link": "unitedkingdom.html"
  },
  {
    "name": "United States",
    "search": "united states usa ",
    "aliases": [],
    "link": "unitedstates.html"
  },
  {
    "name": "Uruguay",
    "search": "uruguay ury ",
    "aliases": [],
    "link": "uruguay.html"
  },
  {
    "name": "Uzbekistan",
    "search": "uzbekistan uzb ",
    "aliases": [],
    "link": "uzbekistan.html"
  },
  {
    "name": "Vanuatu",
    "search": "vanuatu vut ",
    "aliases": [],
    "link": "vanuatu.html"
  },
  {
    "name": "Vatican City",
    "search": "vatican city vat ",
    "aliases": [],
    "link": "vaticancity.html"
  },
  {
    "name": "Venezuela",
    "search": "venezuela ven ",
    "aliases": [],
    "link": "venezuela.html"
  },
  {
    "name": "Vietnam",
    "search": "vietnam vnm ",
    "aliases": [],
    "link": "vietnam.html"
  },
  {
    "name": "Yemen",
    "search": "yemen yem ",
    "aliases": [],
    "link": "yemen.html"
  },
  {
    "name": "Zambia",
    "search": "zambia zmb ",
    "aliases": [],
    "link": "zambia.html"
  },
  {
    "name": "Zimbabwe",
    "search": "zimbabwe zwe ",
    "aliases": [],
    "link": "zimbabwe.html"
  }
];

const countryBase = document.currentScript?.dataset.countryBase || "";
const searchInput = document.getElementById("inputallworld");
const suggestions = document.getElementById("allWorldSuggestions");
const normalize = value => value.toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, " ")
  .trim();

function allcountries(event) {
  event.preventDefault();
  const query = normalize(searchInput.value);
  const match = countries.find(country =>
    normalize(country.name) === query ||
    country.aliases.some(alias => normalize(alias) === query) ||
    normalize(country.search).split(" ").includes(query)
  );

  if (match) window.location.href = countryBase + match.link;
  else alert("Country not found.");
}

if (searchInput && suggestions) {
  searchInput.addEventListener("input", () => {
    const query = normalize(searchInput.value);
    suggestions.innerHTML = "";
    if (!query) return;

    countries
      .filter(country => normalize(country.search).includes(query))
      .slice(0, 10)
      .forEach(country => {
        const option = document.createElement("a");
        option.href = countryBase + country.link;
        option.className = "list-group-item list-group-item-action";
        option.textContent = country.name;
        suggestions.appendChild(option);
      });
  });

  document.addEventListener("click", event => {
    if (!suggestions.contains(event.target) && event.target !== searchInput) {
      suggestions.innerHTML = "";
    }
  });
}

const directorySearch = document.getElementById("search");
if (directorySearch) {
  directorySearch.addEventListener("input", () => {
    const query = normalize(directorySearch.value);
    document.querySelectorAll(".country").forEach(link => {
      link.hidden = !normalize(link.dataset.search).includes(query);
    });
  });
}
