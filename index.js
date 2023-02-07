const isEqualArr = (a, b) =>
  a.length === b.length &&
  a.every((element, index) => element === b[index]);

function runBots (str) {
  let time = 0;
  let logs = [];
  const orders = [];
  const arr = str.split(' ');
  const numPush = arr.shift();
  for (let i = 0; i < arr.length; i += 2) {
    orders.push([arr[i], Number(arr[i+1])])
  }
  const ordersOf = {
    A: orders.filter((item) => item[0] === 'A'),
    B: orders.filter((item) => item[0] === 'B'),
  }
  const position = { A: 1, B: 1 }
  while (orders.length) {
    const log = logs[time] || [];
    time += 1
    const nextOrder = orders[0];
    const botAction = (botName) => {
      if (ordersOf[botName][0]) {
        const nextBtn = ordersOf[botName][0];
        const nextBtnIndex = nextBtn[1];
        if (position[botName] < nextBtnIndex) {
          // MOVE FORWARD
          position[botName] += 1;
          log.push(`MOVE TO ${botName}${position[botName]}`);
        } else if (position[botName] > nextBtnIndex) {
          // MOVE BACK
          position[botName] -= 1;
          log.push(`BACK TO ${botName}${position[botName]}`);
        } else if (position[botName] === nextBtnIndex && !isEqualArr(nextBtn, nextOrder)) {
          // STAY
          log.push(`STAY AT ${botName}${position[botName]}`);
        } else if (position[botName] === nextBtnIndex && isEqualArr(nextBtn, nextOrder)) {
          // PRESS
          ordersOf[botName].shift();
          orders.shift();
          log.push(`PRESS BUTTON ${botName}${position[botName]}`);
        }
      } else { log.push(`STAY AT ${botName}${position[botName]}`); }
    }

    botAction('A');
    botAction('B');
    logs.push(log);
  }

  return { time, logs };
}

function startApp () {
  const outputDiv = document.getElementById("output");
  outputDiv?.replaceChildren();
  try {
    const inputLines = document?.getElementById("input")?.value?.trim()?.split("\n") || [];
    if (!inputLines || inputLines.length <= 1) {
      // TODO: validate input...
      alert('invalid input');
      return false;
    }
    const cases = Number(inputLines[0]);
    if (cases && cases > 0) {
      for (let i = 1; i <= cases; i += 1) {
        const { time, logs } = runBots(inputLines[i]);
        const newOutputDiv = document.createElement("div");
        const newContent = document.createTextNode(`Case #${i}: ${time}`);
        newOutputDiv.appendChild(newContent);
        outputDiv?.appendChild(newOutputDiv);
        
        // render logs
        console.table(logs.map((l, i) => ({ time: i + 1, RobotA: l[0], RobotB: l[1]})));
      }
    }
    
  } catch (err) {
    alert('Error, please check your input');
  }
}