import menu from "console-menu";

import runSingleton from "./Creational/Singleton";
import runFactory from "./Creational/Factory/PizzaStore";

enum MENU_ID {
  SINGLETON = "SINGLETON",
  FACTORY = "FACTORY",
}
function main() {
  menu(
    [
      { hotkey: "1", title: "Singleton Example", id: MENU_ID.SINGLETON },
      { hotkey: "2", title: "Factory Example", id: MENU_ID.FACTORY },
      { hotkey: "3", title: "Three", id: "" },
      { separator: true, id: "" },
      { hotkey: "?", title: "Help", id: "" },
    ],
    {
      header: "Example menu",
      border: true,
    }
  ).then((item) => {
    if (item.id) {
      switch (item.id) {
        case MENU_ID.SINGLETON:
          runSingleton();
          break;
        case MENU_ID.FACTORY:
          runFactory();
          break;
        default:
          break;
      }
    }
    main();
  });
}

main();
