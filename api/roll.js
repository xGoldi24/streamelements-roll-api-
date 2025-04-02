export default function handler(req, res) {
  const user = req.query.user || "Someone";
  const roll = Math.floor(Math.random() * 1000) + 1;

  if (roll === 103) {
    res.send(`${user} rolled a 103! 🎉 You win a skin!`);
  } else {
    res.send(`${user} rolled a ${roll}. Better luck next time! The lucky number is 103`);
  }
}
