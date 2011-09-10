run = (fn, args...) -> fn.apply this, args

test = (arr...) ->
  console.log arr

run test, 1, 2, 3
