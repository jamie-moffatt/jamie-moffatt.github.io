
# Digit Span Task

The digit span task is a memory task. You will see a series of numbers, and will then be asked to enter the numbers again in reverse order. Try to test your memory by not writing down the numbers as you go!

The task will get a bit harder with each correct answer, but will also get easier if you are struggling.

Download code available [here](https://github.com/jamie-moffatt/jspsych-tasks).

<html>
<head>
  <title>Digit Span</title>
  <script src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script src = "assets/jsPsych-master-6.1/jspsych.js"></script>
  <script src = "assets/jsPsych-master-6.1/plugins/jspsych-instructions.js"></script>
  <script src = "assets/jsPsych-master-6.1/plugins/jspsych-html-keyboard-response.js"></script>
  <script src = "assets/jsPsych-master-6.1/plugins/jspsych-html-button-response.js"></script>
  <script src = "assets/jsPsych-master-6.1/plugins/jspsych-call-function.js"></script>
  <script src = "assets/jsPsych-master-6.1/plugins/jspsych-external-html.js"></script>
  <script src = "assets/jsPsych-master-6.1/plugins/edited/jspsych-multi-html-no-response.js"></script>
  <script src = "assets/jsPsych-master-6.1/plugins/edited/jspsych-html-button-multi-response.js"></script>
  <link href="assets/jsPsych-master-6.1/css/jspsych.css" rel="stylesheet" type="text/css">

  <script src = "assets/tasks/digit_span.js"></script>
</head>

<body>
<div id="jspsych-display">
</div>
</body>

<script>

/************* Timeline *************/
var timeline = [];
var browser_interactions = [];

//Define the experiment timeline
// Digit Span
timeline = timeline.concat(
  DS_timeline,
);

/************ Extra information for Data **************/

/* Unique ID for each participant */
// returns random number between 0 and 99999999
var unique_number = Math.floor(Math.random() * 100000000);

/* Time and Date */
// Returns the date and time task was started
var date_completed = new Date();
var dd = date_completed.getDate();
var mm = date_completed.getMonth()+1; //January is 0!
var yyyy = date_completed.getFullYear();
var hour = date_completed.getHours();
var min = date_completed.getMinutes();
var secs = date_completed.getSeconds();

if(dd<10) { dd='0'+dd }
if(mm<10) { mm='0'+mm }
if(hour<10) {hour = '0'+hour}
if(min<10) { min='0'+min}
if(secs<10) {secs='0'+secs}

date_completed = dd+'/'+mm+'/'+yyyy;
var time_completed = hour + ":" + min + ":" + secs;

// Adds this info to the data
jsPsych.data.addProperties({
  date_completed: date_completed,
  time_completed: time_completed,
  unique_ID: unique_number
});

// Interaction data
// Things like clicks away from the window etc.
// Can be useful to track attention to the task
var log_interactions = {
  type: "call-function",
  func: function() {
    var interaction_data = jsPsych.data.getInteractionData();
    jsPsych.data.addProperties({browser_interactions: interaction_data.json()})
  }
}
// Push these at the end of the experiment
timeline.push(log_interactions);
jsPsych.init({
  timeline: timeline,
  display_element: "jspsych-display"
})

</script>

</html>
