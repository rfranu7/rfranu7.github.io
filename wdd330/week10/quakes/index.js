// import { getJSON, getLocation } from './utilities.js';
import QuakesController from './quakesController.js';

const controller = new QuakesController("#quakeList");
controller.init();

const form = document.forms[0];
form.addEventListener("submit", e => {
    e.preventDefault();

    const startDate = document.getElementById("startDate");
    const endDate = document.getElementById("endDate");
    const radius = document.getElementById("radius");

    const controller = new QuakesController("#quakeList", startDate.value, endDate.value, radius.value);
    controller.init();
});