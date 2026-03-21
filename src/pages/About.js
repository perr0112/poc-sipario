import { Module } from "@perr0112/modular-load";

export class About extends Module {
  init() {
    super.init();
    console.log("✨ About initialized!");
  }
}
