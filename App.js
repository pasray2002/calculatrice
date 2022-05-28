/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { createContext, useState } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity
} from 'react-native';


const App = () => {

const [result,setResult] = useState("");
const [textRes,setTextRes] = useState(0);
function validate(){
  const text = result;
  switch(text.slice(-1)){
    case '+':
    case '-':
    case '*':
    case '/':
      return false
  }
  return true
}
function buttonPressed (text){

  if(text == '='){
    return validate() && calculResult()
  }else if(text == '.')
    {
      const lastchar = result.split('').pop();
          if(co.indexOf(lastchar)>0) return;
      setResult(result+text)
    }
    setResult(result+text)
}

function operation(op){
  switch(op){
    case 'D':
      let text = result.split('');
      text.pop();
      text.join('');
      setResult(text.join(''));
      break;
      case 'C':
        setResult("");
        setTextRes("");
        break;
      case '+':
      case '-':
      case '*':
      case '/':
      case '':
          const lastchar = result.split('').pop();
          if(ops.indexOf(lastchar)>0) return;
        setResult(result+op)
      
  }
}

function calculResult (){
  const text = result;
  console.log(text,eval(text))
  const res = eval(text)
  setTextRes(res)
}
  let rows = [];
  let co = [0,'.']
  let nums = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
  for(let i =0;i<4;i++){
    let row = [];
    for(let j = 0; j < 3 ; j++){
      row.push(
            <TouchableOpacity key={(i+j)} onPress={()=>buttonPressed(nums[i][j])} style={styles.btn}>
              <Text style={styles.btnText}>{nums[i][j]}</Text>
            </TouchableOpacity>);
    }
    rows.push(<View key={i} style={styles.row}>{row}</View>);
  }

  let ops = ['D','C','+','-','*','/']
  let op = []
  for(let i =0;i<5;i++){
      op.push(<TouchableOpacity onPress={()=> operation(ops[i])} key={i} style={styles.btn}>
              <Text style={[styles.btnText,styles.white]}>{ops[i]}</Text>
            </TouchableOpacity>);
  }

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.calcul}>
        <Text style={styles.calculText}>{textRes}</Text>
      </View>
      <View style={styles.button}>
        <View style={styles.number}>
            {rows}
        </View>
        <View style={styles.operation}>
          {op}
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  white:{
    color:'#FFFFFF'
  },
  btnText:{
    fontSize:30,
    color:'white'
  },
  btn :{
    flex:1,
    alignItems:'center',
    alignSelf:'stretch',
    justifyContent:'center'
  },
  result: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'flex-end',
  },
  resultText:{
    fontSize:70,
    color:'black'
  },
  calculText:{
    fontSize:50,
    color:'black'
  },
  calcul: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'flex-end',
  },
  button: {
    flex: 7,
    flexDirection: 'row'
  },
  number: {
    flex: 3,
    backgroundColor: '#434343',
    
  },
  operation: {
    flex: 1,
    backgroundColor: '#000000',
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'stretch'
  },
  row:{
    flexDirection:'row',
    flex:1,
    justifyContent:'space-around',
    alignItems:'center'
  }
});

export default App;
