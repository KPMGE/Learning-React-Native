export default function getFact(number) {
  let fact;

  fetch(`https://numbersapi.p.rapidapi.com/${number}/math?fragment=true&json=true`, {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "50a6ef8643msh531ca5ca3434591p17b1fcjsn56f86d5f0c88",
    "x-rapidapi-host": "numbersapi.p.rapidapi.com"
  }
  })
  .then(response => response.json())
  .then(response => fact = response)
  .catch(err => {
    console.error(err);
  });

  return fact;
}