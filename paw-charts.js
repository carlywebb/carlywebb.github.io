

var collaborate = document.getElementById("chart1").getContext('2d');
 var myChart = new Chart(collaborate, {
     type: 'doughnut',
     options: {
     title: {
         display: false,
         text: 'Where do you go for pet behavior advice?',
         fontFamily: 'Lato'

     }

     },
     data: {
         labels: ["Google", "Books", "Trainer", "Vet",],
         datasets: [{
             label: 'Percentage of users surveyed',
             data: [66.7, 11.1, 5.6, 16.6],

             backgroundColor: [
                 'rgb(144, 19, 254, 100)',
                 'rgb(51, 126, 199, 100)',
                 'rgb(95, 206, 213, 100)',
                 'rgba(30, 63, 106, 100)'

             ],
             borderColor:
                 'rgba(255,255, 255, 1)'


             ,
             borderWidth: 2,


         }]
     }

 });

 var appsUsed = document.getElementById("chart2").getContext('2d');
 var myChart = new Chart(appsUsed, {
     type: 'horizontalBar',
     options: {
     title: {
         display: false,
         text: 'How important owners view their pets health',
         fontFamily: 'Lato'

     }
     },
     data: {
         labels: ["1-2", "3-4", "5-6", "7-8", "9-10"],
         datasets: [{
             label: 'Percentage of users surveyed',
             data: [0, 0, 0, 5.6, 94.4],

             backgroundColor: [
               'rgba(91, 187, 228, 100)',
               'rgba(91, 187, 228, 100)',
               'rgba(91, 187, 228, 100)',
               'rgba(91, 187, 228, 100)',
               'rgba(91, 187, 228, 100)'


             ],
             borderColor:
                 'rgba(255,255, 255, 1)'


             ,
             borderWidth: .5,


         }]
     }

 });


 var leastImportant = document.getElementById("chart3").getContext('2d');
 var myChart = new Chart(leastImportant, {
     type: 'doughnut',
     options: {
     title: {
         display: false,
         text: 'Reasons owners do not seek professional help for their pets',
         fontFamily: 'Lato'

     }
     },
     data: {
         labels: ["Cost", "Time", "Lack of resources"],
         datasets: [{
             label: 'Percentage of users surveyed',
             data: [83.3, 11.1, 5.6],

             backgroundColor: [
               'rgb(51, 126, 199, 100)',
               'rgb(144, 19, 254, 100)',
               'rgb(95, 206, 213, 100)',
               'rgba(30, 63, 106, 100)'

             ],
             borderColor: [
                 'rgba(255,255, 255, 1)',

             ],
             borderWidth: 2,


         }]
     }

 });
