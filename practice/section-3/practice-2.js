'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for(let obj of collectionA){
    for(let item of objectB.value){
      if(obj.key==item && obj.count>=3){
        obj.count=obj.count-Math.floor(obj.count/3)
      }
    }
  }
  console.log(collectionA)
  return collectionA;
}
