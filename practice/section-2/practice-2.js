'use strict';

function countSameElements(collection) {
  var obj={}
  for(let item of collection){
    if(item.length>1){
      let itemArray=item.split('-')
      obj[itemArray[0]]= parseInt(itemArray[1]);
    }else{
      obj[item] = (obj[item] +1 ) || 1; 
    }
  }
  var result=[]
  for(let objItem of Object.keys(obj))
  {
    let object={}
    object.key=objItem
    object.count=obj[objItem]
    result.push(object)
  }
  return result;
}
