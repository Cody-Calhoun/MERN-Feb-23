// ForEach definition in words:
// For each item in the array, call the action function
// with the item as the argument
// Under the hood, the forEach method is implemented using a for loop
// Array.prototype.forEach = function(action) {
//     for (var i = 0; i < this.length; i++)
//         action(this[i]);
//     }

// forEach Example  
// var numbers = [1, 2, 3, 4, 5, 6, 7];
// var sum = 0;
// numbers.forEach(function(number) {
//     sum += number;
//     });
// console.log(sum); // 28


// Map definition in words:
// For each item in the array, call the projection function
// with the item as the argument
// Under the hood, the map method is implemented using a for loop
// Array.prototype.map = function(projectionFunction) {
//     var results = [];
//     this.forEach(function(itemInArray) {
//         results.push(projectionFunction(itemInArray));
//     });
//     return results;
// }

//Map Example
// var numbers = [1, 2, 3, 4, 5, 6, 7];
// var sum = 0;
// numbers.map(function(number) {
//     return number * 2;
//     });
// console.log(numbers); // [2, 4, 6, 8, 10, 12, 14]



// Filter definition in words:
// For each item in the array, call the predicate function
// with the item as the argument
// If the result is true, add the item to the results array
// Under the hood, the filter method is implemented using a for loop
// Array.prototype.filter = function(predicateFunction) {
//     var results = [];
//     this.forEach(function(itemInArray) {
//         if (predicateFunction(itemInArray))
//             results.push(itemInArray);
//     });
//     return results;
// }


// const players = [
//     {name: 'Tom Brady', position: 'QB', team: 'TB'},
//     {name: 'Rob Gronkowski', position: 'TE', team: 'NE'},
//     {name: 'Aaron Rodgers', position: 'QB', team: 'GB'},
//     {name: 'Julio Jones', position: 'WR', team: 'TB'},
//     {name: 'Matt Ryan', position: 'QB', team: 'IND'},
//     {name: 'Julian Edelman', position: 'WR', team: 'NE'},

//     ];

// Filter the players array to only include QBs
// let qbs = players.filter(function(player) {
//     if(player.position === 'QB'){
//         return true;
//     }
//     return false;
//     });

//
// let qbs = players.filter(player => player.position === 'QB'); {
//     });

// Map the players array to only include the names of the players
// var names = players.map(function(player) {
//     return player.name;
//     });

// Filter the players array to only include players on the NE team
// var nePlayers = players.filter(function(player) {
//     return player.team === 'NE';
//     });


// tom_brady = {name: 'Tom Brady', position: 'QB', team: 'TB'}
// console.log(tom_brady['name'])