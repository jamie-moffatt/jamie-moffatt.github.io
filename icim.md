
# Inhibition of Current Irrelevant Memories

This task is a memory task, designed to assess ability to forget irrelevant information. It might sound strange that a memory task involves being able to forget information, but forgetting non-important information is crucial to being able to accurately recall key information.

<html>
<head>
  <title>ICIM</title>

  <!-- links to the master file, do not change! -->
  <script src="assets/jsPsych-master-6.1/jspsych.js"></script>

  <!-- Specify which plugins are required for your tasks -->
  <!-- If you are not sure, they will be specified in the .js files for the tasks -->
  <script src="assets/jsPsych-master-6.1/plugins/jspsych-instructions.js"></script>
  <script src="assets/jsPsych-master-6.1/plugins/jspsych-html-button-response.js"></script>
  <script src="assets/jsPsych-master-6.1/plugins/jspsych-html-keyboard-response.js"></script>
  <script src="assets/jsPsych-master-6.1/plugins/jspsych-image-keyboard-response.js"></script>
  <script src = "assets/jsPsych-master-6.1/plugins/jspsych-fullscreen.js"></script>
  <script src = "assets/jsPsych-master-6.1/plugins/jspsych-survey-text.js"></script>

  <!-- Plugins that I have created (not in the original jspsych) are in the "edited" folder -->
  <script src="assets/jsPsych-master-6.1/plugins/edited/jspsych-multiple-audio-keyboard-response.js"></script>
  <script src="assets/jsPsych-master-6.1/plugins/edited/jspsych-audio-button-response-wait.js"></script>

  <!-- Specify your tasks here -->
  <script src="assets/tasks/ICIM.js"></script>


  <!-- Loads some functions that are required -->

  <script src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <!-- Link provides basic styling for the study -->
  <link href="assets/jsPsych-master-6.1/css/jspsych.css" rel="stylesheet" type="text/css">


</head>

<body>
<div id="jspsych-display"></div>
</body>

<script>

/******************** STUDY TIMELINE **************************/

// Here is where the timeline of the study is defined

/*************************************************************/

var study_timeline = [];

study_timeline = study_timeline.concat(ICIM);


/******************** INITIATE STUDY **************************/

// Play the timeline, and preload any audio or images required

/*************************************************************/

    jsPsych.init({
      timeline: study_timeline,
      preload_images: study_images,
      display_element: "jspsych-display"
    })

</script>

</html>
