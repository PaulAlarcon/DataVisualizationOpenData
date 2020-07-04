import * as APIdata from "./nyc_opendata.js";
const ctx = document.getElementById('myChart').getContext('2d');

const drawPieChart = response => {
  let data = [];
  let dataLabel = [];

  Object.values(response).forEach(obj => {
    dataLabel.push(obj.perp_race);
    data.push(obj.count_perp_race)
  });

  // console.log(data)

  let myPieChart = new Chart(ctx, {
    type: 'pie',
    // responsive : true,
    title: {
      display: true,
      text: 'Pie chart arrest by race'
    },
    data: {
      datasets: [{
        data: data,
        backgroundColor: [
            'yellow',
            'blue',
            'red',
            'purple',
            'black',
            'green',
            'gray',
            'orange',  
        ]
      }]
      , labels: dataLabel,
    },
    color : [
      'blue'],
    options: {

    }
  });


}

APIdata.queryData(APIdata.totalNumberPerRace)
  .then(drawPieChart)


