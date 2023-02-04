module.exports = function check(str, bracketsConfig) {

  const OPEN_BRACKETS = []; //положить откр элементы
  const BRACKETS_PAIR = {}
  for (e = 0; e < bracketsConfig.length; e++) {
    let pair = bracketsConfig[e]
    BRACKETS_PAIR[pair[1]] = pair[0];
    OPEN_BRACKETS.push(pair[0]);
  }

let stack = [];
let topElement = stack[stack.length - 1];
for (i = 0; i < str.length; i++) {
      let currentSymbol = str[i];
   let topElement = stack[stack.length - 1];
    if (OPEN_BRACKETS.includes(currentSymbol) && BRACKETS_PAIR[currentSymbol] !== currentSymbol) {
        stack.push(currentSymbol);
      } else if (BRACKETS_PAIR[currentSymbol] === currentSymbol) {
        
        if (currentSymbol !== topElement || topElement === undefined) {
          stack.push(currentSymbol);

        } else if (currentSymbol === topElement) {
          stack.pop();

        }
        
      } else {
            if (stack.length === 0) {
              return false;
            }
      stackPop(currentSymbol)
              //let topElement = stack[stack.length - 1];
            function stackPop(currentSymbol) {
                    if (BRACKETS_PAIR[currentSymbol] === topElement) {
              stack.pop();
            } else {
              return false;
            }
            }

      }
    }
    return stack.length === 0;
  }
