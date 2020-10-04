---
layout: default
title:  "html-button-response"
---


<!--more-->

See below for the code:

```html
<!doctype HTML>
<html>
<head>
  <!-- Page title, will appear on the tab of the webpage -->
  <title>Image Button Test</title>

  <!-- links to the master jsPsych file -->
  <script src="jsPsych-master-6.1/jspsych.js"></script>

  <!-- Link to the html-button-response plugin -->
  <script src="jsPsych-master-6.1/plugins/jspsych-image-button-response.js"></script>

  <!-- Link to the default jsPsych css file - for making it look pretty! -->
  <link href="jsPsych-master-6.1/css/jspsych.css" rel="stylesheet" type="text/css"></link>

  <!-- Link to jQuery -->
  <script src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

</head>

<body>
</body>

<script>

// Variable holding the trial information
var trial = {
  // Type of jsPsych plugin to use
  type: "image-button-response",
  // Path to the image that you want to use
  stimulus: 'img/dog.png',
  // List of choices that the participant will have in responding
  choices: ["Yes", "No"],
  // Text that will appear above the Image - can put in a question here
  prompt: "Is this a dog?",
  // Length of the trial
  trial_duration: 5000
}

var timeline = [trial]


// Function for initiating the experiment
jsPsych.init({
  timeline: timeline
})


</script>

```
