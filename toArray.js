/* 
[
  {
    "corporateTotalAmount": 0,
    "corporateJobcardMinorAmount": 0
    "corporateJobcardMajorAmount": 0
    "corporateJobcardAccidentalAmount": 0
    "corporateOTCAmount": 0
    "reatilTotalAmount": 0
    "retailJobcardMinorAmount": 0
    "retailJobcardMajorAmount": 0
    "retailJobcardAccidentalAmount": 0
    "retailOTCAmount": 0
  }
]
*/

const data = {"key":"1511946194527663","doc_count":140,"corporate":{"doc_count":1,"total":{"doc_count":1,"amount":{"value":329.7200012207031}},"jobcard":{"doc_count":1,"minor":{"doc_count":1,"amount":{"value":329.7200012207031},"honda":{"doc_count":0,"amount":{"value":0}},"tata":{"doc_count":0,"amount":{"value":0}}},"major":{"doc_count":1,"amount":{"value":329.7200012207031},"honda":{"doc_count":0,"amount":{"value":0}},"tata":{"doc_count":0,"amount":{"value":0}}},"periodic":{"doc_count":1,"amount":{"value":329.7200012207031},"honda":{"doc_count":0,"amount":{"value":0}},"tata":{"doc_count":0,"amount":{"value":0}}},"accidental":{"doc_count":1,"amount":{"value":329.7200012207031},"honda":{"doc_count":0,"amount":{"value":0}},"tata":{"doc_count":0,"amount":{"value":0}}}},"otc":{"doc_count":0,"total":{"doc_count":0,"amount":{"value":0}}}},"retail":{"doc_count":139,"total":{"doc_count":139,"amount":{"value":227923.44946289062}},"jobcard":{"doc_count":123,"minor":{"doc_count":68,"amount":{"value":130831.11930084229},"honda":{"doc_count":3,"amount":{"value":2183}},"tata":{"doc_count":15,"amount":{"value":24401.819946289062}}},"major":{"doc_count":68,"amount":{"value":130831.11930084229},"honda":{"doc_count":3,"amount":{"value":2183}},"tata":{"doc_count":15,"amount":{"value":24401.819946289062}}},"periodic":{"doc_count":68,"amount":{"value":130831.11930084229},"honda":{"doc_count":3,"amount":{"value":2183}},"tata":{"doc_count":15,"amount":{"value":24401.819946289062}}},"accidental":{"doc_count":68,"amount":{"value":130831.11930084229},"honda":{"doc_count":3,"amount":{"value":2183}},"tata":{"doc_count":15,"amount":{"value":24401.819946289062}}}},"otc":{"doc_count":16,"total":{"doc_count":16,"amount":{"value":10377.140022277832}}}}}

function getArray(obj) {
  const result = [];
  function traverseObject(obj, current, appendedKeys='') {
    for (const key in obj) {
      let value = obj[key];
      if(value != undefined) {
        if (value && typeof value === 'object') {
          if(key === 'amount'){
            const data = {};
            data[appendedKeys] = value.value;
            result.push(data);
          } else {
            traverseObject(value, key, appendedKeys.concat(key));
          }
        }
      }
    }
  }
  traverseObject(obj);
  return result;
}

console.log(getArray(data));