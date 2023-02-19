//color //
function getRandomColor() {
    var letters = 'BCDEFGHIJKLM';
    var color = '#';
    for (var i = 0; i < 8; i++) {
      color += letters[Math.floor(Math.random() * 3)];
    }
    return color;
  }
  //id call function
  function idCall(id){
    const callId = document.getElementById(id).value;
    const callValue = parseFloat(callId)
    return callValue;
  }
  //calculate value(3)
  function calculateValue(input1 ,input2){
    const calculateInput = 0.5*input1*input2;
    const calculate = calculateInput.toFixed(2);
    return calculate;
   }
   //calculate value(2)
   function calculateValue2(input1 ,input2){
    const calculateInput2 = input1*input2;
    const calculate2 = calculateInput2.toFixed(2);
    return calculate2;
   }
   function calculateValue3(input1 ,input2){
    const calculateInput3 = 3.14*input1*input2;
    const calculate3 = calculateInput3.toFixed(2);
    return calculate3;
   }
   function areaCalculation(Id)
   {
     document.getElementById(Id).style.display ='block';
   }

   //triangle btn 
   document.getElementById('triangle-btn').addEventListener('click',function(){
    const triangleInput1 = idCall('triangle-input-1');
    const triangleInput2  =idCall ('triangle-input-2');
   if(!triangleInput1 || triangleInput1<0 && !triangleInput2 || triangleInput2<0)
   {
    alert('Please try again')
   }
    else{
              document.getElementById('tri-1').innerText=triangleInput1;
              document.getElementById('tri-2').innerText = triangleInput2;
      const triangleCalculateId =  document.getElementById('triangle-calculated-value');
      const triangleCalculate = calculateValue(triangleInput1,triangleInput2)
      triangleCalculateId.innerText = triangleCalculate;
      areaCalculation('triangle');
    document.getElementById('triangle-calculate').innerText = triangleCalculate
    }
})
//rectangle btn
document.getElementById('rectangle-btn').addEventListener('click',function(){
    const triangleInput1 = idCall('rectangle-input-1');
    const triangleInput2  =idCall ('rectangle-input-2');
   if(!triangleInput1 || triangleInput1<0 && !triangleInput2 || triangleInput2<0)
   {
    alert('Please try again')
   }
    else{
              document.getElementById('rec-1').innerText=triangleInput1;
              document.getElementById('rec-2').innerText = triangleInput2;
      const triangleCalculateId =  document.getElementById('rectangle-calculated-value');
      const triangleCalculate = calculateValue(triangleInput1,triangleInput2)
      triangleCalculateId.innerText = triangleCalculate;
      areaCalculation('triangle');
    document.getElementById('rectangle-calculate').innerText = triangleCalculate
    }
})






 