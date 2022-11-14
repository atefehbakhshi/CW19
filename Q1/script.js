"use strict";
const breakfast = "7:00";
const lunch = "12:00";
const dinner = "19:00";

function nextMeal(time) {
    let [hour, minut] = time.split(":");
    let result;
    let numHour = +hour * 60;
    let numMin = +minut;
    let converter = numHour + numMin;
    let breakfastMin = 7 * 60;
    let lunchMin = 12 * 60;
    let dinnerMin = 19 * 60;
    let midNight = 24 * 60;

    switch (true) {
        case hour === 7:
            result = "breakfast time";
            break;
        case hour === 12:
            result = "lunch time";
            break;
        case hour === 19:
            result = "dinner time";
            break;
        case converter < breakfastMin:
            result = `${Math.trunc((breakfastMin - converter) / 60)} hours and ${(breakfastMin - converter) % 60} minuts untill breakfast`;
            break;
        case converter > breakfastMin && converter < lunchMin:
            result = `${Math.trunc((lunchMin - converter) / 60)} hours and ${(lunchMin - converter) % 60} minuts untill lunch`;
            break;
        case converter > lunchMin && converter < dinnerMin:
            result = `${Math.trunc((dinnerMin - converter) / 60)} hours and ${(dinnerMin - converter) % 60} minuts untill dinner`;
            break;
        case converter > dinnerMin:
            result = `${Math.trunc((midNight - converter) / 60) + 7} hours and ${(midNight - converter) % 60} minuts untill breakfast`;
            break;
        default:
            result = "input is not true";
    }
    return result;
}

console.log(nextMeal("23:11"));