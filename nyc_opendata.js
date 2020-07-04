const API_URL = "https://data.cityofnewyork.us/resource/8h9b-rp9u.json?";


const _queryTotaLNumberPerRace = "$select=perp_race,count(perp_race)&$group=perp_race"
const _TotalNumber = "$select=count(*)"

const _where = '$where='
const _AND = ' AND ';
const _queryMale = 'perp_sex=\'M\'';
const _queryFemale = 'perp_sex=\'F\'';
const _query2018 = 'arrest_data=\'\'';

//using search query 
const _querySearchASSAULT = '$q=\'ASSAULT\'';

//PERP_RACE
const _queryWhiteHispanic = 'perp_race=\'WHITE HISPANIC\''
const _queryBlack = 'perp_race=\'BLACK\''


//AGE_GROUP
const _queryAge25_44 = 'age_group=\'25-44\'';
const _queryAgeL18 = 'age_group=\'<18\'';


const fetchURL = async url => {
  const response = await fetch(url);
  return response.json();
}

const queryData = async clauses => {
  let url = API_URL;
  Object.values(clauses).forEach(function(key){ url += key });
  const response = await fetchURL(url);
  return response;
}

function displayData(d){
  console.log(d)
}

let clauseMaleWHispanic = {
  _where, _queryWhiteHispanic, _AND, _queryMale,
 }

let totalNumberPerRace = {
  _queryTotaLNumberPerRace
}




queryData(totalNumberPerRace);

export {queryData,totalNumberPerRace}