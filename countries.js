const countries = [
  { icc: "+376", name: "Andorra" },
  { icc: "+971", name: "United Arab Emirates" },
  { icc: "+93", name: "Afghanistan" },
  { icc: "+1268", name: "Antigua and Barbuda" },
  { icc: "+1264", name: "Anguilla" },
  { icc: "+355", name: "Albania" },
  { icc: "+374", name: "Armenia" },
  { icc: "+244", name: "Angola" },
  { icc: "+672", name: "Antarctica" },
  { icc: "+54", name: "Argentina" },
  { icc: "+1684", name: "American Samoa" },
  { icc: "+43", name: "Austria" },
  { icc: "+61", name: "Australia" },
  { icc: "+297", name: "Aruba" },
  { icc: "+358", name: "Åland" },
  { icc: "+994", name: "Azerbaijan" },
  { icc: "+387", name: "Bosnia and Herzegovina" },
  { icc: "+1246", name: "Barbados" },
  { icc: "+880", name: "Bangladesh" },
  { icc: "+32", name: "Belgium" },
  { icc: "+226", name: "Burkina Faso" },
  { icc: "+359", name: "Bulgaria" },
  { icc: "+973", name: "Bahrain" },
  { icc: "+257", name: "Burundi" },
  { icc: "+229", name: "Benin" },
  { icc: "+590", name: "Saint Barthélemy" },
  { icc: "+1441", name: "Bermuda" },
  { icc: "+673", name: "Brunei" },
  { icc: "+591", name: "Bolivia" },
  { icc: "+5997", name: "Bonaire" },
  { icc: "+55", name: "Brazil" },
  { icc: "+1242", name: "Bahamas" },
  { icc: "+975", name: "Bhutan" },
  { icc: "+47", name: "Bouvet Island" },
  { icc: "+267", name: "Botswana" },
  { icc: "+375", name: "Belarus" },
  { icc: "+501", name: "Belize" },
  { icc: "+1", name: "Canada" },
  { icc: "+61", name: "Cocos [Keeling] Islands" },
  { icc: "+243", name: "Democratic Republic of the Congo" },
  { icc: "+236", name: "Central African Republic" },
  { icc: "+242", name: "Republic of the Congo" },
  { icc: "+41", name: "Switzerland" },
  { icc: "+225", name: "Ivory Coast" },
  { icc: "+682", name: "Cook Islands" },
  { icc: "+56", name: "Chile" },
  { icc: "+237", name: "Cameroon" },
  { icc: "+86", name: "China" },
  { icc: "+57", name: "Colombia" },
  { icc: "+506", name: "Costa Rica" },
  { icc: "+53", name: "Cuba" },
  { icc: "+238", name: "Cape Verde" },
  { icc: "+5999", name: "Curacao" },
  { icc: "+61", name: "Christmas Island" },
  { icc: "+357", name: "Cyprus" },
  { icc: "+420", name: "Czech Republic" },
  { icc: "+49", name: "Germany" },
  { icc: "+253", name: "Djibouti" },
  { icc: "+45", name: "Denmark" },
  { icc: "+1767", name: "Dominica" },
  { icc: "+1809", name: "Dominican Republic 1" },
  { icc: "+1829", name: "Dominican Republic 2" },
  { icc: "+1849", name: "Dominican Republic 3" },
  { icc: "+213", name: "Algeria" },
  { icc: "+593", name: "Ecuador" },
  { icc: "+372", name: "Estonia" },
  { icc: "+20", name: "Egypt" },
  { icc: "+212", name: "Western Sahara" },
  { icc: "+291", name: "Eritrea" },
  { icc: "+34", name: "Spain" },
  { icc: "+251", name: "Ethiopia" },
  { icc: "+358", name: "Finland" },
  { icc: "+679", name: "Fiji" },
  { icc: "+500", name: "Falkland Islands" },
  { icc: "+691", name: "Micronesia" },
  { icc: "+298", name: "Faroe Islands" },
  { icc: "+33", name: "France" },
  { icc: "+241", name: "Gabon" },
  { icc: "+44", name: "United Kingdom" },
  { icc: "+1473", name: "Grenada" },
  { icc: "+995", name: "Georgia" },
  { icc: "+594", name: "French Guiana" },
  { icc: "+44", name: "Guernsey" },
  { icc: "+233", name: "Ghana" },
  { icc: "+350", name: "Gibraltar" },
  { icc: "+299", name: "Greenland" },
  { icc: "+220", name: "Gambia" },
  { icc: "+224", name: "Guinea" },
  { icc: "+590", name: "Guadeloupe" },
  { icc: "+240", name: "Equatorial Guinea" },
  { icc: "+30", name: "Greece" },
  { icc: "+500", name: "South Georgia and the South Sandwich Islands" },
  { icc: "+502", name: "Guatemala" },
  { icc: "+1671", name: "Guam" },
  { icc: "+245", name: "Guinea-Bissau" },
  { icc: "+592", name: "Guyana" },
  { icc: "+852", name: "Hong Kong" },
  { icc: "+61", name: "Heard Island and McDonald Islands" },
  { icc: "+504", name: "Honduras" },
  { icc: "+385", name: "Croatia" },
  { icc: "+509", name: "Haiti" },
  { icc: "+36", name: "Hungary" },
  { icc: "+62", name: "Indonesia" },
  { icc: "+353", name: "Ireland" },
  { icc: "+972", name: "Israel" },
  { icc: "+44", name: "Isle of Man" },
  { icc: "+91", name: "India" },
  { icc: "+246", name: "British Indian Ocean Territory" },
  { icc: "+964", name: "Iraq" },
  { icc: "+98", name: "Iran" },
  { icc: "+354", name: "Iceland" },
  { icc: "+39", name: "Italy" },
  { icc: "+44", name: "Jersey" },
  { icc: "+1876", name: "Jamaica" },
  { icc: "+962", name: "Jordan" },
  { icc: "+81", name: "Japan" },
  { icc: "+254", name: "Kenya" },
  { icc: "+996", name: "Kyrgyzstan" },
  { icc: "+855", name: "Cambodia" },
  { icc: "+686", name: "Kiribati" },
  { icc: "+269", name: "Comoros" },
  { icc: "+1869", name: "Saint Kitts and Nevis" },
  { icc: "+850", name: "North Korea" },
  { icc: "+82", name: "South Korea" },
  { icc: "+965", name: "Kuwait" },
  { icc: "+1345", name: "Cayman Islands" },
  { icc: "+76", name: "Kazakhstan 1" },
  { icc: "+77", name: "Kazakhstan 2" },
  { icc: "+856", name: "Laos" },
  { icc: "+961", name: "Lebanon" },
  { icc: "+1758", name: "Saint Lucia" },
  { icc: "+423", name: "Liechtenstein" },
  { icc: "+94", name: "Sri Lanka" },
  { icc: "+231", name: "Liberia" },
  { icc: "+266", name: "Lesotho" },
  { icc: "+370", name: "Lithuania" },
  { icc: "+352", name: "Luxembourg" },
  { icc: "+371", name: "Latvia" },
  { icc: "+218", name: "Libya" },
  { icc: "+212", name: "Morocco" },
  { icc: "+377", name: "Monaco" },
  { icc: "+373", name: "Moldova" },
  { icc: "+382", name: "Montenegro" },
  { icc: "+590", name: "Saint Martin" },
  { icc: "+261", name: "Madagascar" },
  { icc: "+692", name: "Marshall Islands" },
  { icc: "+389", name: "North Macedonia" },
  { icc: "+223", name: "Mali" },
  { icc: "+95", name: "Myanmar [Burma]" },
  { icc: "+976", name: "Mongolia" },
  { icc: "+853", name: "Macao" },
  { icc: "+1670", name: "Northern Mariana Islands" },
  { icc: "+596", name: "Martinique" },
  { icc: "+222", name: "Mauritania" },
  { icc: "+1664", name: "Montserrat" },
  { icc: "+356", name: "Malta" },
  { icc: "+230", name: "Mauritius" },
  { icc: "+960", name: "Maldives" },
  { icc: "+265", name: "Malawi" },
  { icc: "+52", name: "Mexico" },
  { icc: "+60", name: "Malaysia" },
  { icc: "+258", name: "Mozambique" },
  { icc: "+264", name: "Namibia" },
  { icc: "+687", name: "New Caledonia" },
  { icc: "+227", name: "Niger" },
  { icc: "+672", name: "Norfolk Island" },
  { icc: "+234", name: "Nigeria" },
  { icc: "+505", name: "Nicaragua" },
  { icc: "+31", name: "Netherlands" },
  { icc: "+47", name: "Norway" },
  { icc: "+977", name: "Nepal" },
  { icc: "+674", name: "Nauru" },
  { icc: "+683", name: "Niue" },
  { icc: "+64", name: "New Zealand" },
  { icc: "+968", name: "Oman" },
  { icc: "+507", name: "Panama" },
  { icc: "+51", name: "Peru" },
  { icc: "+689", name: "French Polynesia" },
  { icc: "+675", name: "Papua New Guinea" },
  { icc: "+63", name: "Philippines" },
  { icc: "+92", name: "Pakistan" },
  { icc: "+48", name: "Poland" },
  { icc: "+508", name: "Saint Pierre and Miquelon" },
  { icc: "+64", name: "Pitcairn Islands" },
  { icc: "+1787", name: "Puerto Rico 1" },
  { icc: "+1939", name: "Puerto Rico 2" },
  { icc: "+970", name: "Palestine" },
  { icc: "+351", name: "Portugal" },
  { icc: "+680", name: "Palau" },
  { icc: "+595", name: "Paraguay" },
  { icc: "+974", name: "Qatar" },
  { icc: "+262", name: "Réunion" },
  { icc: "+40", name: "Romania" },
  { icc: "+381", name: "Serbia" },
  { icc: "+7", name: "Russia" },
  { icc: "+250", name: "Rwanda" },
  { icc: "+966", name: "Saudi Arabia" },
  { icc: "+677", name: "Solomon Islands" },
  { icc: "+248", name: "Seychelles" },
  { icc: "+249", name: "Sudan" },
  { icc: "+46", name: "Sweden" },
  { icc: "+65", name: "Singapore" },
  { icc: "+290", name: "Saint Helena" },
  { icc: "+386", name: "Slovenia" },
  { icc: "+4779", name: "Svalbard and Jan Mayen" },
  { icc: "+421", name: "Slovakia" },
  { icc: "+232", name: "Sierra Leone" },
  { icc: "+378", name: "San Marino" },
  { icc: "+221", name: "Senegal" },
  { icc: "+252", name: "Somalia" },
  { icc: "+597", name: "Suriname" },
  { icc: "+211", name: "South Sudan" },
  { icc: "+239", name: "São Tomé and Príncipe" },
  { icc: "+503", name: "El Salvador" },
  { icc: "+1721", name: "Sint Maarten" },
  { icc: "+963", name: "Syria" },
  { icc: "+268", name: "Swaziland" },
  { icc: "+1649", name: "Turks and Caicos Islands" },
  { icc: "+235", name: "Chad" },
  { icc: "+262", name: "French Southern Territories" },
  { icc: "+228", name: "Togo" },
  { icc: "+66", name: "Thailand" },
  { icc: "+992", name: "Tajikistan" },
  { icc: "+690", name: "Tokelau" },
  { icc: "+670", name: "East Timor" },
  { icc: "+993", name: "Turkmenistan" },
  { icc: "+216", name: "Tunisia" },
  { icc: "+676", name: "Tonga" },
  { icc: "+90", name: "Turkey" },
  { icc: "+1868", name: "Trinidad and Tobago" },
  { icc: "+688", name: "Tuvalu" },
  { icc: "+886", name: "Taiwan" },
  { icc: "+255", name: "Tanzania" },
  { icc: "+380", name: "Ukraine" },
  { icc: "+256", name: "Uganda" },
  { icc: "+1", name: "U.S. Minor Outlying Islands" },
  { icc: "+1", name: "United States" },
  { icc: "+598", name: "Uruguay" },
  { icc: "+998", name: "Uzbekistan" },
  { icc: "+379", name: "Vatican City" },
  { icc: "+1784", name: "Saint Vincent and the Grenadines" },
  { icc: "+58", name: "Venezuela" },
  { icc: "+1284", name: "British Virgin Islands" },
  { icc: "+1340", name: "U.S. Virgin Islands" },
  { icc: "+84", name: "Vietnam" },
  { icc: "+678", name: "Vanuatu" },
  { icc: "+681", name: "Wallis and Futuna" },
  { icc: "+685", name: "Samoa" },
  { icc: "+377", name: "Kosovo 1" },
  { icc: "+381", name: "Kosovo 2" },
  { icc: "+383", name: "Kosovo 3" },
  { icc: "+386", name: "Kosovo 4" },
  { icc: "+967", name: "Yemen" },
  { icc: "+262", name: "Mayotte" },
  { icc: "+27", name: "South Africa" },
  { icc: "+260", name: "Zambia" },
  { icc: "+263", name: "Zimbabwe" },
];

let minICC = countries[0].icc.length;
let maxICC = countries[0].icc.length;

countries.forEach((country) => {
  const { length } = country.icc;
  if (length < minICC) {
    minICC = length;
  }

  if (length > maxICC) {
    maxICC = length;
  }
});

console.log("Min ICC length =", minICC);
console.log("Max ICC length =", maxICC);
