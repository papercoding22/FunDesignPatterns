var menu = require("console-menu");
menu(
  [
    { hotkey: "1", title: "One" },
    { hotkey: "2", title: "Two", selected: true },
    { hotkey: "3", title: "Three" },
    { separator: true },
    { hotkey: "?", title: "Help" },
  ],
  {
    header: "Example menu",
    border: true,
  }
).then((item) => {
  if (item) {
    console.log("You chose: " + JSON.stringify(item));
  } else {
    console.log("You cancelled the menu.");
  }
});
