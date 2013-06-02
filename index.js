
// NOTE: global
sqrt = Math.sqrt

// NOTE: global
sum = function(a){
  return a.reduce(function(total, xi){ return total + xi })
}

// NOTE: global
avg = mean = function(a){
  return sum(a) / a.length
}

// NOTE: global
deviations = function(a){
  var x = avg(a)
  return a.map(function(d){ return d - x })
}

// NOTE: global
squared_deviations = function(a) {
  return deviations(a).map(function(d) { return d * d } )
}

// NOTE: global
variance = function(a) {
  return sum( squared_deviations(a) ) / a.length
}

sample_variance = function(a) {
  return sum( squared_deviations(a) ) / ( a.length - 1 )
}

// NOTE: global
std_deviation = function(a) {
  return Math.sqrt( variance(a) )
}

// NOTE: global
sample_std_deviation = function(a) {
  return Math.sqrt( sample_variance(a) )
}

cohens_d = function(x1, x2, S) {
  return ( x1 - x2 ) / S
}

pooled_variance = function(ss1, ss2, df1, df2) {
  return ( ss1 + ss2 ) / ( df1 + df2 )
}

// answers the question: `what proportion of the difference in pairs of shoes
// owned can be attributed to gender?`
r_squared = function(t, df){
  return ( t * t ) / ( t * t + df )
}

