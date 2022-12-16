---
layout: default
title: "jsPsych and Pavlovia"
date: 2020-10-04 15:47:00 +0100
---

This tutorial will guide you through how to setup your study on [Pavlovia](https://pavlovia.org). Pavlovia is a website for hosting behavioural experiments online. It was orginally created by the people who made PsychoPy, an experimental software. Originally it was designed for hosting online experiments made in PsychoPy, but it also has functionality to support jsPsych experiments.

<!--more-->

Pavlovia is free to use, up until you start recruiting participants. It uses a credit system, where one credit = one participant, and each credit costs 20p. Alternatively, if you are part of an institution that has purchased a license with Pavlovia you should be able to recruit participant's for free.

# 1. Create an account on Pavlovia

The first step is easy - head to the [Pavlovia](https:/pavlovia.org) website and create an account! For now you can have a look around at the website and the available documentation to get used to the website.

# 2. Edit your jsPsych code to work with Pavlovia

Assuming you have your jsPsych code all [written and in working order](/2018/04/15/jsPsych-set-up), editing the code to work with Pavlovia takes two simple steps.

Firstly use `<script>` tags to add the Pavlovia plugin to your list of plugins in the html header. This will load in the plugin at the start of the experiment. Note that this plugin also requires jQuery - a popular library for Javascript - you can load this in using a similar method.

```html
<head>
  <title>My title</title>
  <script src="jspsych.js"></script>
  <link href="css/jspsych.css" rel="stylesheet" type="text/css"></link>

  <!-- the Pavlovia plugin -->
  <script type="text/javascript" src="lib/vendors/jspsych-6.1.0/jspsych.js"></script>

  <!-- link to jQuery -->
  <script type="text/javascript" src="lib/vendors/jquery-2.2.0.min.js"></script>

</head>
```

Secondly, use the Pavlovia plugin to open and close a connection with Pavlovia. This requires a trial for initiating the connection, which should go at the beginning of your experiment timeline, and a trial for finishing the connection, which should go at the end of your experiment timeline.

```javascript
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
timeline.push(pavlovia_init);

// The rest of your experiment should be added to the timeline here


// You should add this to the end of your timeline
timeline.push(pavlovia_finish);

// Initiate the jsPsych experiment here
jsPsych.init({
  timeline: timeline
})

```

# 3. Create a new project on Pavlovia
Signing up for Pavlovia will also have given you an account on [Pavlovia's Gitlab Repository](https://gitlab.pavlovia.org/). You can think of this section as a place to store and manage the code for your experiment.

Login to your account, and click the "New Project" button. You'll have a lot of options for your project, including giving it a name, description and setting the privacy level for the project.

Once you have created the project, you will be taken automatically to t the new repository for your project. This is the space where the code for your experiment will be stored.

# 4. Upload the experiment to your project

At this point, you will have the experiment files on your local computer, with the project repository on Gitlab. Now, we need to get the local files uploaded into the project repository. Unfortunately, it's not quite so simple as clicking a button to upload the files.

Luckily, your project repository will have some instructions for how to upload your files.

First, you will need to download the git version control program, which can be downloaded for free [here](https://git-scm.com/).

Second, navigate to your experiment files on your computer. Right click on the folder and select "Git Bash Here". Enter in the commands below:

```
git init
git remote add origin https://gitlab.pavlovia.org/username/project-name.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

If you return to your project repository, the files should now be there!

# 5. Piloting and running your experiment on Pavlovia

Once you have uploaded your project to Pavlovia, you can pilot the task on your [Pavlovia dashboard](https://pavlovia.org/dashboard). Click on the "Experiments" tab, and you will see a list of your experiments. If the preceding steps have worked, your project will appear here. Click on your project and you will see a host of options for managing your experiment.

Change the project status to "Piloting" and click the "Pilot" button to test out the experiment.

When you are ready to recruit participants, you can change the status to "Running", and you will be provided with a participation link. Provided you have Pavlovia credits, or a license, you will then be able to recruit participants for your study by sending them this link.
