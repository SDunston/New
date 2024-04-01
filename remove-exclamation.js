/*
Remove Excalamtion Marks

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

*/

//This challenge requires that I use either a method that can remove the exclamation or use a for loop that will
//remove any exclamations in an array

//I chose to use the method 'replace' because it is more readable than using the for loop 

function removeExclamationMarks(s){
    return s.replace(/!/g,'');
}