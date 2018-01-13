var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  let newObject = Object.assign({}, object)
  console.log('Before')
  console.log(object)
  console.log(newObject)
  delete newObject[key]
  console.log('After')
  console.log(object)
  console.log(newObject)
  return newObject
}

deleteFromObjectByKey({telecaster: 'strat', cheese: 'cake'}, 'cheese')
