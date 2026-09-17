# Eventator & Shortcut — Usage Guide

## 1. Import the Modules

First, import `Eventator` and `Shortcut` into your JavaScript file:

```javascript
import Eventator from "./Eventator.js";
import Shortcut from "./shortcut.js";
```

---

## 2. Create an Eventator Instance

Create an `Eventator` instance and pass the element you want to listen for events.

```javascript
const event = new Eventator(document);
```

---

## 3. Create a Shortcut Instance

Create a `Shortcut` instance to define keyboard shortcuts.

```javascript
const shortcut = new Shortcut();
```

---

## 4. Define Your Shortcut

Use `setshortcut()` to create the desired keyboard shortcut.

For example, the following shortcut listens for:

**Ctrl + Enter**

```javascript
const loginShortcut = shortcut.setshortcut([
    "enter",
    "ctrlKey"
]);
```

---

## 5. Register the Event

Use `AddNewEvent()` to connect the shortcut to a function.

```javascript
event.AddNewEvent(
    loginShortcut,
    function () {
        btnlogin.click();
    }
);
```

---

## Complete Example

```javascript
import Eventator from "./Eventator.js";
import Shortcut from "./shortcut.js";

const event = new Eventator(document);
const shortcut = new Shortcut();

const loginShortcut = shortcut.setshortcut([
    "enter",
    "ctrlKey"
]);

event.AddNewEvent(
    loginShortcut,
    function () {
        btnlogin.click();
    }
);
```

## How It Works

The process is simple:

1. **Import** `Eventator` and `Shortcut`.
2. **Create** an `Eventator` instance.
3. **Create** a `Shortcut` instance.
4. **Define** the keyboard shortcut using `setshortcut()`.
5. **Register** the shortcut using `AddNewEvent()`.
6. **Execute** your desired function when the shortcut is triggered.

### Example

When the user presses:

**Ctrl + Enter**

the registered function is executed:

```javascript
btnlogin.click();
```

This allows you to create clean and reusable keyboard shortcuts without manually handling `keydown` events.
