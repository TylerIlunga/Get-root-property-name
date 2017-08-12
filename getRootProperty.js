function getRootProperty(object, val) {
  var valueFound = false;
  let output = '';
  for (var first in object) {
    var seachObject = object[first]
    function query(object, val, rootName) {
        Object.getOwnPropertyNames(object).forEach((value) => {
          if (object[value] == val) {
            valueFound = true;
            output = rootName
            return
          } else if (!valueFound) {
            query(object[value], val, rootName)
          }
        })
    }
    query(seachObject, val, first);
  }

  if (valueFound == false) {
    return null
  } else {
    return output;
  }
}

const firstObj = {
    "one": {
        "nest1": {
            "val1": [9, 34, 92, 100]
         }
    },
    "2f7": {
        "n1": [10, 92, 53, 71],
        "n2": [82, 34, 6, 19]
    }
};

const secondObj = {
    "r1n": {
        "mkg": {
            "zma": [21, 45, 66, 111],
            "mii": {
                "ltf": [2, 5, 3, 9, 21]
             },
             "fv": [1, 3, 6, 9]
         },
         "rmk": {
             "amr": [50, 50, 100, 150, 250]
         }
    },
    "fik": {
        "er": [592, 92, 32, 13],
        "gp": [12, 34, 116, 29]
    }
}

//returns null
var firstOutput = getRootProperty(firstObj, 1000)
//returns  'fik'
var secondOutput = getRootProperty(secondObj, 29)
console.log(`First Output: ${firstOutput}\nSecond Output: ${secondOutput}`)

function findRootProperty(o,x,p = this){
  return Object.keys(o).reduce((r,k) => Array.isArray(o[k]) ? o[k].includes(x)
          ? r.concat(k) : r
          : r.concat(findRootProperty(o[k],x,k)),[]).map(q => p === this ? q : p );
}

const object3 = {
    "r1n": {
        "mkg": {
            "zma": [21, 45, 66, 111],
            "mii": {
                "ltf": [2, 5, 3, 9, 21]
             },
             "fv": [1, 3, 6, 9]
         },
         "rmk": {
             "amr": [50, 50, 100, 116, 150, 250]
         }
    },
    "fik": {
        "er": [592, 92, 32, 13],
        "gp": [12, 34, 116, 29, 250]
    }
};

console.log(findRootProperty(object3,250))
