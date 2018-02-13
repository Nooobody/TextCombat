
export function addRng(scale) {
  return Math.floor(Math.random() * scale * 2) - scale;
}

export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let logArray = [];
export function log(data, type="") {
  logArray.push({data, type});
}

export function logOut() {
  if (logArray.length > 0) {
    return logArray.shift();
  }
}
