import Singleton01_A from "./Singleton01";
import Singleton01_B from "./Singleton01";

export default function main() {
  console.log(
    "Are Singleton01_A and Singleton01_B the same instance? " +
      (Singleton01_A === Singleton01_B)
  );
}
