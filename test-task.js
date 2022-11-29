const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateKey(length, symb) {
  let res = "";
  for (let i = 0; i < length; i++) {
    res += symb.charAt(Math.floor(Math.random() * symb.length));
  }
  return res;
}

const key = generateKey(16, characters);
console.log(key);
