//color //
function getRandomColor() {
    var letters = 'ABCDE';
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
    const rectangleInput1 = idCall('rectangle-input-1');
    const rectangleInput2  =idCall ('rectangle-input-2');
    if(!rectangleInput1|| rectangleInput1<0 && !rectangleInput2|| rectangleInput2<0 )
    {
      alert('Please try again');
    }
    else{
      document.getElementById('rec-1').innerText = rectangleInput1;
      document.getElementById('rec-2').innerText = rectangleInput2;
      const rectangleCalculateId =  document.getElementById('rectangle-calculated-value');
      const rectangleCalculate = calculateValue2(rectangleInput1,rectangleInput2)
      rectangleCalculateId.innerText = rectangleCalculate;
      areaCalculation('rectangle');
      document.getElementById('rectangle-calculate').innerText = rectangleCalculate;
    }
  
  })

//parallelogram btn
document.getElementById('parallelogram-btn').addEventListener('click',function(){
  console.log('btnclicked')
  const parallelogramInput1 = idCall('parallelogram-input-1');
  const parallelogramInput2  =idCall('parallelogram-input-2');
  document.getElementById('para-1').innerText = parallelogramInput1;
  document.getElementById('para-2').innerText = parallelogramInput2;
  const parallelogramCalculateId =  document.getElementById('parallelogram-calculated-value');
  const parallelogramCalculate = calculateValue2(parallelogramInput1,parallelogramInput2)
  parallelogramCalculateId.innerText = parallelogramCalculate;
  areaCalculation('parallelogram');
  document.getElementById('parallelogram-calculate').innerText = parallelogramCalculate

})

//rhombus btn
document.getElementById('rhombus-btn').addEventListener('click',function(){
    const rhombusInput1 = idCall('rhombus-input-1');
    const rhombusInput2  =idCall ('rhombus-input-2');
    document.getElementById('rhombus-1').innerText = rhombusInput1;
    document.getElementById('rhombus-2').innerText = rhombusInput2;
    const rhombusCalculateId =  document.getElementById('rhombus-calculated-value');
    const rhombusCalculate = calculateValue(rhombusInput1,rhombusInput2)
    rhombusCalculateId.innerText = rhombusCalculate;
    areaCalculation('rhombus');
    document.getElementById('rhombus-calculate').innerText = rhombusCalculate
  
  })

  //pentagon-btn
  
  document.getElementById('pentagon-btn').addEventListener('click',function(){
    const pentagonInput1 = idCall('pentagon-input-1');
    const pentagonInput2  =idCall ('pentagon-input-2');
    document.getElementById('pen-1').innerText = pentagonInput1;
    document.getElementById('pen-2').innerText = pentagonInput2;
    const pentagonCalculateId =  document.getElementById('pentagon-calculated-value');
    const pentagonCalculate = calculateValue(pentagonInput1,pentagonInput2)
    pentagonCalculateId.innerText = pentagonCalculate;
    areaCalculation('pentagon');
    document.getElementById('pentagon-calculate').innerText = pentagonCalculate
  
  })
  //  ellipse btn clicked
    
  document.getElementById('ellipse-btn').addEventListener('click',function(){
    const ellipseInput1 = idCall('ellipse-input-1');
    const ellipseInput2  =idCall ('ellipse-input-2');
    document.getElementById('el-1').innerText = ellipseInput1;
    document.getElementById('el-2').innerText = ellipseInput2;
    const ellipseCalculateId =  document.getElementById('ellipse-calculated-value');
    const ellipseCalculate = calculateValue3(ellipseInput1,ellipseInput2)
    ellipseCalculateId.innerText = ellipseCalculate;
    areaCalculation('ellipse');
    document.getElementById('ellipse-calculate').innerText = ellipseCalculate
  
  })








 