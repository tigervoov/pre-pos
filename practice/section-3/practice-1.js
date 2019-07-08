'use strict';

function createUpdatedCollection(collectionA, objectB) {

  for(let obj of collectionA){
    for(let item of objectB.value){
      if(obj.key==item){
        obj.count-=1;
      }
    }
  }
  return collectionA;
}
