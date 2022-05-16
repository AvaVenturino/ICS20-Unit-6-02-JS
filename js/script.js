// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-5-08-JS/sw.js", {
    scope: "/ICS20-Unit-5-08-JS/",
  });
}

/**
 * Input
 */
function myButtonClicked() {
  if (localStorage.cookieClicker) {
    localStorage.cookieClicker = Number(localStorage.cookieClicker) + 1;
  } else {
    localStorage.cookieClicker = +1;
  }
  document.getElementById("answer").innerHTML =
    "Total hits : " + localStorage.cookieClicker;
}
