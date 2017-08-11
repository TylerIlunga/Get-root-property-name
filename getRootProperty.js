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

// const object = {
//     "one": {
//         "nest1": {
//             "val1": [9, 34, 92, 100]
//          }
//     },
//     "2f7": {
//         "n1": [10, 92, 53, 71],
//         "n2": [82, 34, 6, 19]
//     }
// };

const object = {
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

var output = getRootProperty(object, 29)
console.log(output)