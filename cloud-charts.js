

var collaborate = document.getElementById("chart1").getContext('2d');
 var myChart = new Chart(collaborate, {
     type: 'doughnut',
     options: {
     title: {
         display: false,
         text: 'In which ways do you use cloud applications to collaborate?',
         fontFamily: 'Lato'

     }

     },
     data: {
         labels: ["Share photos/videos", "Share spreadsheets/documents", "Share content", "Share work",],
         datasets: [{
             label: 'Percentage of users surveyed',
             data: [56.5, 17.5, 17.4, 8.6],

             backgroundColor: [
                 'rgba(237, 121, 64, 1)',
                 'rgba(12, 125, 197, 1)',
                 'rgba(108, 164, 85, 1)',
                 'rgba(79, 124, 58, 1)',
                 'rgba(147, 202, 121, 1)'

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
         text: 'Which app(s) have you used? (Select all that apply)',
         fontFamily: 'Lato'

     }
     },
     data: {
         labels: ["iCloud", "Dropbox", "Box", "Google Drive", "Amazon Drive", "Pinterest", "Evernote", "MediaFire", "Microsoft OneDrive"],
         datasets: [{
             label: 'Percentage of users surveyed',
             data: [79.3, 75.9, 6.9, 100, 3.4, 37.9, 24.1, 3.4, 34.5],

             backgroundColor: [
               'rgba(147, 202, 121, 1)',
               'rgba(147, 202, 121, 1',
               'rgba(147, 202, 121, 1)',
               'rgba(147, 202, 121, 1)',
               'rgba(147, 202, 121, 1)',
               'rgba(147, 202, 121, 1)',
               'rgba(147, 202, 121, 1)',
               'rgba(147, 202, 121, 1)',
               'rgba(147, 202, 121, 1)',

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
         text: 'What is least important to you in a storage app?',
         fontFamily: 'Lato'

     }
     },
     data: {
         labels: ["Sharing content", "Uploading files", "Saving content", "Organizing content", "Creating original content"],
         datasets: [{
             label: 'Percentage of users surveyed',
             data: [19, 12, 30, 23, 16],

             backgroundColor: [
               'rgba(237, 121, 64, 1)',
               'rgba(12, 125, 197, 1)',
               'rgba(108, 164, 85, 1)',
               'rgba(79, 124, 58, 1)',
               'rgba(147, 202, 121, 1)'

             ],
             borderColor: [
                 'rgba(255,255, 255, 1)',

             ],
             borderWidth: .5,


         }]
     }

 });
