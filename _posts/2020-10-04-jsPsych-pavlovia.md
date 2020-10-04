---
layout: default
title: "jsPsych and Pavlovia"
date: 2018-04-15 20:30:00 +0100
---

This tutorial will guide you through how to setup your study on [Pavlovia](https://pavlovia.org). Pavlovia is a website for hosting behavioural experiments online. It was orginally created by the people who made PsychoPy, an experimental software. Originally it was designed for hosting online experiments made in PsychoPy, but it also has functionality to support jsPsych experiments.

<!--more-->

Pavlovia is free to use, up until you start recruiting participants. It uses a credit system, where one credit = one participant, and each credit costs 20p. Alternatively, if you are part of an institution that has purchased a license with Pavlovia you should be able to recruit participant's for free.

# 1. Create an account on Pavlovia

The first step is easy - head to the [Pavlovia](https:/pavlovia.org) website and create an account! For now you can have a look around at the website and the available documentation to get used to the website.

# 2. Edit your jsPsych code to work with Pavlovia

Assuming you have your jsPsych code all [written and in working order](/2018/04/15/jsPsych-set-up), editing the code to work with Pavlovia takes two simple steps.

Firstly add the pavlovia plugin to your list of plugins to load in at the start of the experiment. Note that this plugin also requires jQuery - you can load this in similarly.

```html
<head>
  <title>My title</title>
  <script src="jspsych.js"></script>
  <script src="plugins/jspsych-instructions.js"></script>
  <link href="css/jspsych.css" rel="stylesheet" type="text/css"></link>

  <!-- the Pavlovia plugin -->
  <script type="text/javascript" src="lib/vendors/jspsych-6.1.0/jspsych.js"></script>

  <!-- link to jQuery -->
  <link rel="stylesheet" type="text/css" href="lib/vendors/jspsych-6.1.0/css/jspsych.css"/>

</head>
```

Secondly, use the Pavlovia plugin to open and close a connection with Pavlovia. This requires a trial for initiating the connection, which should go at the beginning of your experiment timeline, and a trial for finishing the connection, which should go at the end of your experiment timeline.

```js
var timeline = [];

// Trial for opening the link with Pavlovia
var pavlovia_init = {
  type: "pavlovia",
  command: "init"
};

// Trial for closing the link with Pavlovia
var pavlovia_finish = {
  type: "pavlovia",
  command: "finish"
};

// You should add this to the beginning of your timeline
var timeline.push(pavlovia_init);

// You should add this to the end of your timeline
var timeline.push(pavlovia_finish);

```

# 3. Create a new project on Pavlovia

Signing up for Pavlovia will also have given you an account on [Gitlab](https://gitlab.pavlovia.org/).

Login to your account, and click the "New Project" button. You'll have a lot of options for your project, including giving it a name, description and setting the privacy level for the project.

Once you have created the project, the project page will automatically open. The page will be blank, and will give you some instructions for how to move your jsPsych project from you computer to your project repository on Pavlovia.

# 4. Testing out your experiment on Pavlovia

Once you have uploaded your project to Pavlovia, you can pilot the task on your [Pavlovia dashboard](https://pavlovia.org/dashboard). Click on the "Experiments" tab, and you will see a list of your experiments. If the preceding steps have worked, your project will appear here. Click on your project and you will see a host of options for managing your experiment.

Change the project status to "Piloting" and click the "Pilot" button to test out the experiment.

When you are ready to recruit participants, you can change the status to "Running", and you will be provided with a participation link. Provided you have Pavlovia credits, or a license, you will then be able to recruit participants for your study by sending them this link. 
