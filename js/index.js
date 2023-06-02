let get_name = document.getElementById("get_name");
let get_email = document.getElementById("get_email");
let get_phone_number = document.getElementById("get_number");
let get_text = document.getElementById("get_message");
let btn = document.getElementById("btn_click");

let sendmain = function SendEmail() {
  Email.send({
    SecureToken: "e3ba24d3-1392-4608-b7b3-cf7337ac5dc6",
    To: "khajaelectric21@gmai.comm",
    From: "khajaelectric21@gmai.com",
    Subject: `Email from ${get_email.value}`,
    Body: `Name: ${get_name.value}, Phone Number: ${get_phone_number.value}, text: ${get_message.value}`,
  }).then((message) => alert(message));
};
function hey() {
  console.log(get_name.value);
  console.log(get_phone_number.value);
  console.log(get_message.value);
  console.log(get_email.value);
}
console.log("hello world");

btn.addEventListener("click", sendmain);
