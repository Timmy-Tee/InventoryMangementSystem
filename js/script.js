var options = {
    series: [75],
    chart: {
    height: 350,
    type: 'radialBar',
  },
  fill: {
    colors: ['#0c3396']
  },  
  plotOptions: {
    radialBar: {
    track:{
        borderColor: 'red',
    },
    
      hollow: {
        size: '80%',
      },
      dataLabels: {
        name:{
            color: '#263238',
            fontSize: 30,
            fontFamily: 'rubik'
        },
        value:{
            fontSize: 18,
            color: '#FBAE3C',
        },
      }
    },
    
  },
  

  labels: ['Total'],
  };

  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();


   
  var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();




//   Open the side nav
function navOpen(){
    document.getElementById("side_nav").style.display = "flex";
    // document.getElementById("side_nav").style.width = "100%";

}
 function navClose(){
    document.getElementById("side_nav").style.display = "none";
 }