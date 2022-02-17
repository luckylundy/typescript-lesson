import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Data from "./data.json";
import TestComponent from "./TestComponent";

type USERS = typeof Data;

const name = "hello";

let username = "hello";

interface NAME {
  first: string;
  last: string;
}

let nameobj: NAME = { first: "Yamada", last: "Taro" };

// Union Types
let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "hello"];

let company: "Facebook" | "Google" | "Amazon";
company = "Google";

// typeof
let msg: string = "hello";
let msg2: typeof msg;
msg2 = "Hi";

let animal = { cat: "small cat" };
let newAnimal: typeof animal = { cat: "big cat" };

// keyof
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";

// typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};
let keySports: keyof typeof SPORTS;
keySports = "baseball";

//enum
enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  OSType: OS;
}
const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};
const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
};

// Genirics
interface GEN<T> {
  item: T;
}
const gen0: GEN<string> = { item: "hello" };
function funcGen1<T extends string | null>(props: T) {
  return { value: props };
}
const gen1 = funcGen1("hello");

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hello from App" />
      </header>
    </div>
  );
};

export default App;
