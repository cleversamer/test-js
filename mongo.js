function genRndString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let result = "";
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const rooms = [];
for (let i = 1; i <= 100; i++) {
  const roomName = `room-${i}`;
  rooms.push(roomName);
}

for (let i = 0; i < 100000; i++) {
  const rndIndex = Math.floor(Math.random() * rooms.length);
  const rndRoom = rooms[rndIndex];
  const textLength = Math.floor(Math.random() * 10) + 10;
  db.messages.insertOne({ text: genRndString(textLength), room: rndRoom });
}
