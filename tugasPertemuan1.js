function checkGrade(nilai){

  if ( nilai > 79 && nilai <= 100) {
    console.log("A");
  } else if(nilai > 65 && nilai <= 79) {
    console.log("B");
  } else if(nilai > 50 && nilai <=65 ){
    console.log("C");
  } else if(nilai <= 50 ){
    console.log("D");
  }else{
    console.log("Anda Terlalu Cerdas!");
  }

}

checkGrade((80))
checkGrade((79))
checkGrade((65))
checkGrade((50))
checkGrade((200))
