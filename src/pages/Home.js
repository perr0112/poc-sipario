import { Module } from "@perr0112/modular-load";

export class Home extends Module {
  init() {
    super.init();
    console.log("🔥 Home initialized with scoping!");
  }
}
