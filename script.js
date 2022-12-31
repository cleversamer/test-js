const socket = io("http://153.92.4.242/");
// const socket = io("http://localhost:4000/");

let roomId = prompt("Enter the room id:").trim();
let viewName = prompt("Enter your name:").trim();

// Join room
socket.emit("join room", roomId);

let interval;

// Typing
setInterval(() => {
  socket.emit("typing", roomId, {
    id: "63af41d36dee12809b0ffbdf",
    name: viewName,
    url: "",
  });
}, 2000);

socket.on("typing", (user) => {
  const name = user.name;
  document.querySelector("#typing").innerHTML = `${name} is typing...`;
});

// Handle send message
document.querySelector("#form").addEventListener("submit", (event) => {
  event.preventDefault();

  const inputElement = document.querySelector("#input");
  const message = inputElement.value;
  sendMssg(message);
  inputElement.value = "";
});

// Handle receive message
socket.on("message received", (message) => {
  viewMessage(message);
});

// sendMessages(400);
// startSlowSending(1000);

function sendMessages(count = 1) {
  for (let i = 0; i < count; i++) {
    const length = Math.floor(Math.random() * 100 + 10);
    const text = genRndText(length);
    sendMssg(text);
  }
}

function startSlowSending(timeout) {
  interval = setInterval(() => {
    const length = Math.floor(Math.random() * 100 + 10);
    const text = genRndText(length);
    sendMssg(text);
  }, timeout);
}

function stopSlowSending() {
  clearInterval(interval);
}

document
  .querySelector("#start-sending")
  .addEventListener("click", () => startSlowSending(2000));

document
  .querySelector("#stop-sending")
  .addEventListener("click", stopSlowSending);

document
  .querySelector("#send-messages")
  .addEventListener("click", () => sendMessages(10));

function genRndText(length) {
  const characters = "أابتثجحخدذرزسشصضطظعغفقكلمنهـوي";
  const charactersLength = characters.length;

  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function sendMssg(title) {
  title = title.trim();

  if (!title || !title.length) {
    return;
  }

  const message = getMssg(title);
  socket.emit("new message", roomId, message);
}

function getMssg(text) {
  return {
    _id: "63972f2ee74e27df09e2216c",
    type: "text",
    repliedMessage: null,
    isReply: false,
    isPinned: false,
    sender: [
      {
        avatarUrl: "",
        email: "crusheryclub@gmail.com",
        firstname: "",
        lastname: "",
        nickname: viewName,
        role: "teacher",
        rooms: [],
        verified: true,
        _id: "63962a7c66a0dd17e0a07b0a",
      },
    ],
    receiver: roomId,
    text,
    file: {},
    date: new Date().toString(),
  };
}

function viewMessage(message = getMssg("test-message")) {
  const { firstname, lastname } = message.sender[0];
  const name = `${firstname} ${lastname}`;
  const element = `<li>${name}: ${message.text}</li>`;
  document.querySelector("#view").innerHTML += element;
}
