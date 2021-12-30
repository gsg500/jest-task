function week(S, K) {
  const weekDay = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const cont = weekDay.indexOf(S) + K;
    if (cont <= 6){
    return weekDay[cont];
  } else if (cont >= 7){
    return weekDay[(cont % 7)];
  } 
}

module.exports = week;