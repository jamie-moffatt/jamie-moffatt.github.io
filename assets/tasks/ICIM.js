////////////////////////////

// Inhibition of Current Irrelevant Memories

////////////////////////////


// Required jspsych plugins:
// -- "instructions"
// -- "html-button-response"
// -- "image-keyboard-response"


/************** Required ***************/
// variables that are required for the task to work

// length of the inter-run breaks (run1-run2, run2-run3)
var ICIM_interval_length = 30000 //ms
// length that each image is displayed for
var ICIM_display_length = 2000; //ms
// length that each fixation cross is displayed for
var ICIM_fixation_length = 700 //ms
// Set the number of runs in the task
var ICIM_number_runs = 3;

// Path to point to the ICIM stimuli
var ICIM_prefix = 'assets/img/ICIM/';
var ICIM_suffix = '.PNG'; // must be capitalised for pavlovia


/******************* Define Instructions ******************/
// Define various instructions used throughout the digit span task

var ICIM_instructions = {
  type: "instructions",
  pages: ["<p>In a moment, you will see a series of pictures. For each picture, if it is the first time you have seen it, press 1. If it has been presented before (i.e. a repeat), press 2.</p><p>1 = First Time, 2 = Repeat.</p><p>In the practice, the task will go at your pace, and always wait for your response. In the main task, it won't wait for you, and the images will come up quite quickly (one every 2-3 seconds). In the practice, you will be told if your response was correct or incorrect, but you will not receive feedback in the main task.<p><p>Please respond as fast as you can during the main task. We recommend keeping your fingers on buttons 1 and 2 for quick responses.</p>" +
  "<p>Press space to continue.</p>"],
  key_forward: "space"
}

var ICIM_practice_instructions = {
  type: 'instructions',
  pages: ["<h2>Practice</h2><p>Have you seen it before?</p><p>1 = First Time, 2 = Repeat</p><p>Press space to start a short practice task.</p>"],
  key_forward: "space"
}

var ICIM_run1_instructions = {
  type: 'instructions',
  pages: ["<h2>Run 1</h2><p>Have you seen it before?</p><p>1 = First Time, 2 = Repeat</p><p>Press space to start</p>"],
  key_forward: "space"
}

var ICIM_run2_instructions = {
  type: 'instructions',
  pages: ["<h2>Run 2</h2><p>For the next series of pictures, press 1 if it is the first time you have seen it *as part of the current run*, and press 2 if it is a repeat *within the current run*. That is, you can forget the images you have just seen, and focus only on the images within the next series.</p><p>Press space to continue.</p>", "<h2>Run 2</h2><p>Have you seen it before?</p><p>1 = First Time, 2 = Repeat</p><p>Press space to start</p>"],
  key_forward: "space"
}

var ICIM_run3_instructions = {
  type: 'instructions',
  pages: ["<h2>Run 3</h2><p>For the next series of pictures, press 1 if it is the first time you have seen it *as part of the current run*, and press 2 if it is a repeat *within the current run*. That is, you can forget the images you have just seen, and focus only on the images within the next series.</p><p>Press space to continue.</p>", "<h2>Run 2</h2><p>Have you seen it before?</p><p>1 = First Time, 2 = Repeat</p><p>Press space to start</p>"],
  key_forward: "space"
}

var ICIM_break_instructions = {
  type: "instructions",
  pages: ["<p>End of run.</p><p>Please take a 30 second break - the task will let you know when you can continue. Please stay at your computer and start the task again as soon as you are prompted.</p>"]
}

var ICIM_end_instructions = {
  type: "instructions",
  pages: ["<p>Thank you! You have now finished the task.</p><p>Press space to continue when you are ready.</p>"],
  key_forward: "space"
}


/********************* Defining stimuli ************************/
// Define stimuli for the practice and the main task


// Stimuli are in associative arrays, with the first item being the image, and the second item being the amount of times it has been presented in that run
var ICIM_practice_stim = [
  ['bird', 1],
  ['pen', 1],
  ['bird', 2],
  ['train', 1],
  ['watch', 1],
  ['pen', 2]
]

var ICIM_run1_stim = [
  ['lightswitch',	1],
  ['pram', 1],
  ['flower',	1],
  ['hammer',	1],
  ['bear',	1],
  ['house',	1],
  ['suitcase', 1],
  ['trumpet',	1],
  ['apple',	1],
  ['grasshopper',	1],
  ['beetle',	1],
  ['truck', 1],
  ['brush',	1],
  ['accordian',	1],
  ['trafficlight',	1],
  ['tortoise',	1],
  ['barn', 1],
  ['fish',	1],
  ['cup',	1],
  ['beetle',	2],
  ['car',	1],
  ['chisel', 1],
  ['cup',	2],
  ['iron',	1],
  ['fork',	1],
  ['clothespeg',	1],
  ['caterpillar', 1],
  ['caterpillar',	2],
  ['bowl',	1],
  ['basket',	1],
  ['beetle',	3],
  ['hat', 1],
  ['cherry',	1],
  ['house',	2],
  ['pipe',	1],
  ['lips',	1],
  ['toaster', 1],
  ['motorbike',	1],
  ['trafficlight',	2],
  ['swan',	1],
  ['trumpet',	2],
  ['swan', 2],
  ['bear',	2],
  ['suitcase',	2],
  ['doorknob',	1],
  ['chisel',	2],
  ['glasses', 1],
  ['swan',	3],
  ['bell',	1],
  ['button',	1],
  ['penguin',	1],
  ['foot', 1],
  ['fork',	2],
  ['lightswitch',	2],
  ['clock',	1],
  ['chain',	1],
  ['bread', 1],
  ['lemon',	1],
  ['doorknob',	2],
  ['jumper',	1],
  ['cup',	3],
  ['butterfly', 1],
  ['nut',	1],
  ['butterfly',	2],
  ['carrot',	1],
  ['eye',	1],
  ['trumpet', 3],
  ['grasshopper',	2],
  ['accordian',	2],
  ['chain',	2],
  ['trafficlight',	3],
  ['bottle', 1],
  ['drum',	1],
  ['grasshopper',	3],
  ['tomato',	1],
  ['glass',	1],
  ['chisel', 3],
  ['butterfly',	3],
  ['trousers',	1],
  ['doorknob',	3],
  ['axe',	1],
  ['chicken', 1],
  ['melon',	1],
  ['house',	3],
  ['dog',	1],
  ['hanger',	1],
  ['pipe', 2],
  ['suitcase',	3],
  ['lightswitch',	3],
  ['brush',	2],
  ['cigar',	1],
  ['accordian', 3],
  ['car',	2],
  ['chain',	3],
  ['bear',	3]
];
var ICIM_run2_stim = [
  ['truck',	1],
  ['chicken', 1],
  ['cigar',	1],
  ['melon',	1],
  ['penguin',	1],
  ['nut',	1],
  ['hat', 1],
  ['cherry',	1],
  ['jumper',	1],
  ['caterpillar',	1],
  ['bell',	1],
  ['fish', 1],
  ['suitcase',	1],
  ['nut',	2],
  ['tortoise',	1],
  ['eye',	1],
  ['lightswitch', 1],
  ['truck',	2],
  ['lips',	1],
  ['dog',	1],
  ['lips',	2],
  ['bottle', 1],
  ['hammer',	1],
  ['car',	1],
  ['swan',	1],
  ['bread',	1],
  ['clothespeg', 1],
  ['tomato',	1],
  ['trousers',	1],
  ['flower',	1],
  ['hanger',	1],
  ['glasses', 1],
  ['foot',	1],
  ['trafficlight',	1],
  ['basket',	1],
  ['grasshopper',	1],
  ['chain', 1],
  ['carrot',	1],
  ['beetle',	1],
  ['glass',	1],
  ['accordian',	1],
  ['iron', 1],
  ['bread',	2],
  ['flower',	2],
  ['lemon',	1],
  ['bread',	3],
  ['chisel', 1],
  ['iron',	2],
  ['brush',	1],
  ['bear',	1],
  ['dog',	2],
  ['glass', 2],
  ['bell',	2],
  ['trumpet',	1],
  ['lips',	3],
  ['bowl',	1],
  ['cigar', 2],
  ['apple',	1],
  ['apple',	2],
  ['doorknob',	1],
  ['barn',	1],
  ['hat', 2],
  ['basket',	2],
  ['hanger',	2],
  ['drum',	1],
  ['flower',	3],
  ['basket', 3],
  ['fork',	1],
  ['clothespeg',	2],
  ['button',	1],
  ['motorbike',	1],
  ['bottle', 2],
  ['clock',	1],
  ['nut',	3],
  ['toaster',	1],
  ['hanger',	3],
  ['jumper', 2],
  ['hammer',	2],
  ['axe',	1],
  ['bowl',	2],
  ['dog',	3],
  ['cigar', 3],
  ['hat',	3],
  ['glass',	3],
  ['house',	1],
  ['clothespeg',	3],
  ['lemon', 2],
  ['iron',	3],
  ['hammer',	3],
  ['pram',	1],
  ['apple',	3],
  ['cup', 1],
  ['lemon', 3],
  ['pipe',	1],
  ['butterfly',	1]
];

var ICIM_run3_stim = [
  ['nut',	1],
  ['hanger', 1],
  ['melon',	1],
  ['fish',	1],
  ['fish',	2],
  ['dog',	1],
  ['toaster', 1],
  ['axe',	1],
  ['fork',	1],
  ['tortoise',	1],
  ['pram',	1],
  ['iron', 1],
  ['penguin',	1],
  ['cup',	1],
  ['glasses',	1],
  ['truck',	1],
  ['house', 1],
  ['cherry',	1],
  ['butterfly',	1],
  ['drum',	1],
  ['barn',	1],
  ['chicken', 1],
  ['cherry',	2],
  ['pipe',	1],
  ['penguin',	2],
  ['brush',	1],
  ['eye', 1],
  ['toaster',	2],
  ['caterpillar',	1],
  ['carrot',	1],
  ['beetle',	1],
  ['foot', 1],
  ['foot',	2],
  ['pram',	2],
  ['barn',	2],
  ['axe',	2],
  ['jumper', 1],
  ['bottle',	1],
  ['axe',	3],
  ['carrot',	2],
  ['fish',	3],
  ['button', 1],
  ['melon',	2],
  ['foot',	3],
  ['bowl',	1],
  ['glass',	1],
  ['carrot', 3],
  ['trousers',	1],
  ['basket',	1],
  ['motorbike',	1],
  ['clothespeg',	1],
  ['hammer', 1],
  ['pram',	3],
  ['car',	1],
  ['barn',	3],
  ['doorknob',	1],
  ['glasses', 2],
  ['eye',	2],
  ['motorbike',	2],
  ['button',	2],
  ['eye',	3],
  ['swan', 1],
  ['trafficlight',	1],
  ['apple',	1],
  ['tortoise',	2],
  ['bell',	1],
  ['accordian', 1],
  ['trousers',	2],
  ['drum',	2],
  ['trumpet',	1],
  ['lemon',	1],
  ['tomato', 1],
  ['clock',	1],
  ['glasses',	3],
  ['cherry',	3],
  ['bread',	1],
  ['cigar', 1],
  ['suitcase',	1],
  ['flower',	1],
  ['chain',	1],
  ['chisel',	1],
  ['drum', 3],
  ['trousers',	3],
  ['lightswitch',	1],
  ['grasshopper',	1],
  ['tortoise',	3],
  ['lips', 1],
  ['motorbike',	3],
  ['tomato',	2],
  ['clock',	2],
  ['chicken',	2],
  ['hat', 1],
  ['chicken', 3],
  ['tomato',	3],
  ['bear',	1]
];


// Series of for loops to create timeline variables for each run of the ICIM
var ICIM_practice_variables = [];
var ICIM_run1_variables = [];
var ICIM_run2_variables = [];
var ICIM_run3_variables = [];


for (i = 0; i < ICIM_practice_stim.length; i++) {
  ICIM_practice_variables[i] = {stimulus: ICIM_practice_stim[i][0], presentation: ICIM_practice_stim[i][1], practice: true}
}

for (i = 0; i < ICIM_run1_stim.length; i++) {
  ICIM_run1_variables[i] = {stimulus: ICIM_run1_stim[i][0], presentation: ICIM_run1_stim[i][1], practice: false}
}

for (i = 0; i < ICIM_run2_stim.length; i++) {
  ICIM_run2_variables[i] = {stimulus: ICIM_run2_stim[i][0], presentation: ICIM_run2_stim[i][1], practice: false}
}

for (i = 0; i < ICIM_run3_stim.length; i++) {
  ICIM_run3_variables[i] = {stimulus: ICIM_run3_stim[i][0], presentation: ICIM_run3_stim[i][1], practice: false}
}

// The way the feedback is coded, need to specify a starter text here
var ICIM_feedback_text = "<p>Practice</p>"

/****************** Defining Trials *****************/
// Define the individual trials for the task - what you want to repeat

var ICIM_fixation_trial = {
  type: "html-button-response",
  choices: "",
  stimulus: '+',
  trial_duration: ICIM_fixation_length,
  response_ends_trial: false
}

var ICIM_practice_display_trial = {
  type: "image-keyboard-response",
  choices: ["1", "2"],
  stimulus: function() {
    var stim = ICIM_practice_stim[loop_count][0]
    return ICIM_prefix + stim + ICIM_suffix
  },
  trial_duration: null,
  prompt: "<p>1 = First Time, 2 = Repeat</p>",
  data: {task: "ICIM", practice: true},
  on_finish: function(data) {
    // Retrieves key press, converts to integer 1 or 2
    var participant_response = parseInt(String.fromCharCode(data.key_press));
    var presentation = ICIM_practice_stim[loop_count][1];
    var correct_response = 1;
    if (presentation > 1) {
      correct_response = 2
    }
    // determines whether response was accurate
    var accuracy = participant_response == correct_response;
    // changes feedback according to whether participant correct
    ICIM_feedback_text = "Incorrect."
    if (accuracy) {
      ICIM_feedback_text = "Correct!"
    }
    jsPsych.data.addDataToLastTrial({participant_response: participant_response, correct_response: correct_response, accuracy: accuracy})
  }
}

// Feedback trial for practice
var ICIM_feedback_trial = {
  type: "html-button-response",
  stimulus: function() {
    return [ICIM_feedback_text]  // place the feedback text
  },
  choices: '',
  trial_duration: 1000,
  response_ends_trial: false
}


// Displays a choice to redo practice
var ICIM_practice_choice = {
  type: "html-button-response",
  stimulus: "Would you like to retry the practice?",
  choices: ["Start Main Task", "Redo Practice"],
  data: {task: "ICIM", practice: true},
  trial_duration: null
}


var ICIM_display_trial = {
  type: "image-keyboard-response",
  stimulus: function() { return ICIM_prefix + jsPsych.timelineVariable('stimulus', true) + ICIM_suffix },
  choices: ["1", "2"],
  trial_duration: ICIM_display_length,
  prompt: "<p>1 = First Time, 2 = Repeat</p>",
  data: {
    task: "ICIM",
    presentation: jsPsych.timelineVariable('presentation'),
    practice: jsPsych.timelineVariable('practice')
  },
  on_finish: function(data) {
    // Retrieves key press, converts to integer 1 or 2
    var participant_response = parseInt(String.fromCharCode(data.key_press));
    var presentation = data.presentation;
    var correct_response = 1;
    if (presentation > 1) {
      correct_response = 2
    }
    // determines whether response was accurate
    var accuracy = participant_response == correct_response;
    // changes feedback according to whether participant correct
    ICIM_feedback_text = "Incorrect."
    if (accuracy) {
      ICIM_feedback_text = "Correct!"
    }
    jsPsych.data.addDataToLastTrial({participant_response: participant_response, correct_response: correct_response, accuracy: accuracy});
  }
}


// An interval trial - to have a gap between runs
var ICIM_interval = {
  type: 'html-button-response',
  stimulus: "<p>End of Run.</p><p>Please take a 30 second break - the task will let you know when you can continue. Please stay at your computer and start the task again as soon as you are prompted.</p>",
  choices: '',
  trial_duration: ICIM_interval_length,
  response_ends_trial: false
}

/************************* Defining Blocks ******************/
// Defines the blocks for practice and main tasks - how to repeat the trials

var ICIM_practice = {
  timeline: [ICIM_fixation_trial, ICIM_display_trial, ICIM_feedback_trial],
  timeline_variables: ICIM_practice_variables
}

var ICIM_run1 = {
  timeline: [ICIM_fixation_trial, ICIM_display_trial],
  timeline_variables: ICIM_run1_variables
}

var ICIM_run2 = {
  timeline: [ICIM_fixation_trial, ICIM_display_trial],
  timeline_variables: ICIM_run2_variables
}

var ICIM_run3 = {
  timeline: [ICIM_fixation_trial, ICIM_display_trial],
  timeline_variables: ICIM_run3_variables
}

// Practice is contained in a loop to allow people to retry
var ICIM_practice_loop = {
  timeline: [ICIM_practice_instructions, ICIM_practice, ICIM_practice_choice],
  loop_function: function () {
    // Checks the practice choice data
    var choice_data = jsPsych.data.get().filter({trial_type: "html-button-response"}).last(1).values()[0];
    // 0 = Main task, 1 = Practice
    var choice = parseInt(choice_data.button_pressed);
    if (choice) {
      return true
    } else {
      return false
    }

  }
}

/******************* Pushing to timeline ******************/
// Adds task variables to the timeline
var ICIM = [];
ICIM.push(ICIM_instructions);

ICIM.push(ICIM_practice_loop);

ICIM.push(ICIM_run1_instructions)
ICIM.push(ICIM_run1)

ICIM.push(ICIM_interval);

ICIM.push(ICIM_run2_instructions);
ICIM.push(ICIM_run2);

// If 3 runs, add this 3rd run on
if (ICIM_number_runs == 3) {
  ICIM.push(ICIM_interval);
  ICIM.push(ICIM_run3_instructions);
  ICIM.push(ICIM_run3);
}

ICIM.push(ICIM_end_instructions)

/******** Specifies the images for preload *********/

var ICIM_preload_images = [];
// This'll work so long as practice stim and run1 stim contains all the images used in the study
ICIM_stim = ICIM_practice_stim.concat(ICIM_run1_stim);

for (i = 0; i < ICIM_stim.length; i++) {
  ICIM_preload_images[i] = ICIM_prefix + ICIM_stim[i][0] + ICIM_suffix;
}

if (typeof study_images === "undefined") {
  var study_images = ICIM_preload_images;
} else {
  study_images = study_images.concat(ICIM_preload_images)

}
