import { Eventator, Shortcut } from "eventator";

const eventator = new Eventator(document);

const shortcut = new Shortcut();

eventator.AddNewEvent(
    shortcut.setshortcut([
        Shortcut.Keys.ENTER,
        Shortcut.Modifiers.CTRL
    ]),
    () => {
        console.log("Ctrl + Enter works!");
        alert("Ctrl + Enter works!");
    }
);