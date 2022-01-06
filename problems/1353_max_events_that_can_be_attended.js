// Given an array of events where events[i] = [startDayi, endDayi]. Every event i starts at startDayi and ends at endDayi.
// You can attend an event i at any day d where startTimei <= d <= endTimei. Notice that you can only attend one event at any time d.
// Return the maximum number of events you can attend.

// Input: events = [[1,2],[2,3],[3,4]]
// Output: 3
// Explanation: You can attend all the three events.
// One way to attend them all is as shown.
// Attend the first event on day 1.
// Attend the second event on day 2.
// Attend the third event on day 3.

const maxEvents = function (events) {
  if(!(events && events.length)) return 0;
  if(events.length == 1) return 1;
  let eventsAttended = 0;
  const sortedEvents = events.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);
  for(let i =0; i< sortedEvents.length; i++){
    if(sortedEvents[i][0] <= i+1 && i+1 <= sortedEvents[i][1]) eventsAttended++;
  }
  return eventsAttended;
}

// console.log(maxEvents([[1,2],[2,3],[3,4]])) // 3
// console.log(maxEvents([[1,2],[2,3],[3,4],[1,2]]))  // 4
// console.log(maxEvents([[1,4],[4,4],[2,2],[3,4],[1,1]]))  // 4
// console.log(maxEvents([[1,100000]]))  // 1
// console.log(maxEvents([[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7]]))  // 7
console.log(maxEvents([[1,5],[1,5],[1,5],[2,3],[2,3]]))  // 5

// FAILING FOR THIS CASE