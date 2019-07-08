'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var obj={}
  for(let item of collectionA){
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
  for(let obj of result){
    for(let item of objectB.value){
      if(obj.key==item && obj.count>=3){
        obj.count-=Math.floor(obj.count/3)
      }
    }
  }
  return result;
}
