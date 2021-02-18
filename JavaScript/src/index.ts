import menu from "console-menu";

import runSingleton from "./Creational/Singleton";

enum MENU_ID {
  SINGLETON = "SINGLETON",
}
function main() {
  menu(
    [
      { hotkey: "1", title: "Singleton Example", id: MENU_ID.SINGLETON },
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
    switch (item.id) {
      case MENU_ID.SINGLETON:
        runSingleton();
    }
    main();
  });
}

main();
