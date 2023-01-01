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
    const text = genRndText();
    sendMssg(text);
  }
}

function startSlowSending(timeout) {
  if (interval) return;

  interval = setInterval(() => {
    const text = genRndText();
    sendMssg(text);
  }, timeout);
}

function stopSlowSending() {
  clearInterval(interval);
  interval = null;
}

document
  .querySelector("#start-sending")
  .addEventListener("click", () => startSlowSending(1000 * 10));

document
  .querySelector("#stop-sending")
  .addEventListener("click", stopSlowSending);

document
  .querySelector("#send-messages")
  .addEventListener("click", () => sendMessages(10));

function genRndText() {
  const candidateMessages = [
    "وحدة قالت لزوجها مالك يا زلمة الك ساعتين بتقرا بعقد الزواج ليش ع ايش بتدور قلها بفتش ع تاريخ الانتهاء",
    "سأل المعلم التلميذ: اذا باع أبوك عشرون كلغ موز ب 10 دنانير.. و عشرون كلغ برتقال ب 20 دينار فما هو المبلغ الذي سيحصل عليه ؟ التلميذ: لا شيء.. لأن أمي ستستولي على الفلوس كلها",
    "الجمل العربية التي عقدت العلماء نفس القياس بس أصغر شوي انا ما بدي احلف بس اقسم بالله العظيم نعسان ؟ لا والله بس بدي اناملي ساعة زمن إمشي خلينا نقعد، تعبت وأنا قاعد بمشي",
    "البقرة وقعت فوقه في واحد من جماعتنا شرب حليب ومات .. لماذا ؟ لأن البقرة وقعت فوقه",
    "فلسطينية بتروي قصة لبست الفستان وراحت جري عالكصر وشافها الامير وحبها وركصوا سوا وفجأة دكت الساعة طنعش وخد يا جري وصارت ترمح ترمح ووكع ببوجها عالدرج انخمد هالكيت وبكره بكملك باكي الكصة",
    "طبخة دوالي فلسطيني مسافر بالطيارة جابتله المضيفة 5 حبات دوآلي في صحن .. أكلهن وبس خلص … قالها : مستوي مستوي .. هاتي الطنجرة !!",
    "شو وجه الشبه بين الخليلي و السريلانكية؟، الاثنين بكيفوا لما بجيهم رسالة",
    "خليلية قالها أبوها إجاكي اخو صغير ، قالت بالله عليك ما تقول لأمي خليها مفاجئة",
    "خليلية قالها زوجها بدي رومانسية ، سألت أمها قالت بعرفش احتياطي طلعي لحمة",
    "خليلي بتمدحو صاحبته ،انت بطل أنت قوي قالها أصلا أنا كنت شهيد في معركة الكرامة",
    "خليلي بغازل خطيبته حكالها اقدر على سنة جوع واركض حافي ورا جربوع بس ما أنحرم من رسايلك أسبوع",
    "ولد خليلي إجه لعند أبوه بيبكي وبيقلو: باااابااااا هئيت صحيح إنه إحنااااا أغبى شعب بالبلد؟؟؟؟ قام أبوه عصب وصار يخبط راسه بالحيط وقاله: ياااااا إبني لاااااااا. إحناااااااا أذكى شعب بالعالم ومع خبط راسه بالحيط صار يطلع صوت خبيط.. قام قال لإبنه: أوووووم شووووف مييين عم بيدء الباااااااب",
    "خليلي ماشي بالطريق.. وهو ماشي داس على ضفدع.. قام طلعوا عيون الضفدع من راسه ، قام الخليلي قاله: شوووو شااااايفك تفاجئت",
    "مرة كان في خليلي ونابلسي وقدسي صحاب قام إجه النابلسي للخليلي وقاله: بدي أحزرك حزيرة، إذا حزرتها بتاخذ 5 ليرات.. وإذا ما حزرتها بتعطيني 5 نيرات.. وافق الخليلي قاله النابلسي: في شغله مدورة وحمرة وفي شغلة مطاولة وخضرة إذا فرمناهم بيصيرو سلطة.. شوه هني؟؟ قال الخليلي: بسيطة.. بندورة وخيارة.. قاله النابلسي: صح وهي 5 ليرات.. طيب في شغلتين مدورين وحمر وشغلتين مطاولين وخضر إذا فرمناهم بيصيرو سلطة.. شو هني؟؟ قال الخليلي: شو لا هي صعبة.. ما بعرف قاله النابلسي: طيب هات 5 ليرات.. وظل النابلسي يسأله: ثلاث شغلات.. أربع شغلات.. ويسلت منه ليرات بعد شوي إجه القدسي حكى للنابلسي: أي حل عن الزلمة أديش بدك و تحل عنه؟؟ قاله النابلسي: 100 ليرة.. قام القدسي عطاه إياهن.. قام النابلسي أخذهم وراح بعد أكم من يوم إجه النابلسي ليشوف أصحابه قام لقى القدسي عم بيقول للخليلي: عشر آلاف شغلة مدورة وحمرة وعشر آلاف شغلة مطاولة وخضرا إذا فرمناهم بيصيرو سلطة شو هني؟؟",
    "حكمة الخليلي المفضلة (من السهل أن تطرد جيش استعمر وطنك لكن من الصعب أن تطرد جحش يعرف رقمك)",
    "خليلي اخدو من راتبه 50 دينار للفلسطينية من القهر تبرع بالباقي لليهود",
    "خليلي أبوه مات قالو له أعطي الشيخ اللي غسله 10 ليرات قال ليش هو غاسل",
    "خليلية بتغازل خطيبها والله اليوم خطرت على بالي تطلع على قبري بكعب عالي تتفركش وتنزل بدالي",
    "خليلي راح يخطب قالو المهر 10 الآلف دينار قال لقيت بألف وحامل",
    "خليلي بسأل أخوه متي يوم القيامة؟ قال يمكن الأربعاء قاله بالك بنعطل",
    "خليلي بغازل مرته حكالها والله انك وردة على صندل بلاستيك",
    "خليلي قالوله التدخين يؤدي إلى الموت البطيء، قال: أنا أساسا مش مستعجل",
    "الشاب الفلسطيني 7 سنوات بتدرب حديد !! واخر شي حبيبتو بتسجلو ع التلفون روان",
    "وحدة قالت لزوجها مالك يا زلمة الك ساعتين بتقرا بعقد الزواج ليش ع ايش بتدور قلها بفتش ع تاريخ الانتهاء",
    "اذا سأل المعلم التلميذ: اذا باع أبوك عشرون كلغ موز ب 10 دنانير.. و عشرون كلغ برتقال ب 20 دينار فما هو المبلغ الذي سيحصل عليه ؟ التلميذ: لا شيء.. لأن أمي ستستولي على الفلوس كلها",
    "الجمل العربية التي عقدت العلماء الجمل العربية التي عقدت العلماء : * نفس القياس بس أصغر شوي * انا ما بدي احلف بس اقسم بالله العظيم .. *نعسان ؟ .. لا والله بس بدي اناملي ساعة زمن .. *إمشي خلينا نقعد، تعبت وأنا قاعد بمشي",
    "خليلية قالها أبوها إجاكي اخو صغير قالت بالله عليك ما تقول لأمي خليها مفاجئة",
  ];

  const rndIndex = Math.floor(Math.random() * candidateMessages.length);
  const rndMssg = candidateMessages[rndIndex];
  console.log(rndMssg);
  return rndMssg;
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
