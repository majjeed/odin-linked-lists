import { LinkedList } from "./linked-list.js";
import { Node } from "./node.js";

let Data = new LinkedList();
// let A = new Node("a");
// let B = new Node("b");
// let C = new Node("c");
// let D = new Node("d");
// let Z = new Node("z");

Data.append("A");
Data.append("B");
Data.append("C");
Data.append("D");
Data.prepend("ZB");

//console.log(Data.size());
console.log(Data);

//console.log(Data.pop());
//console.log(Data);

//console.log(Data.at(4));

//console.log(Data.contains("D"));

//console.log(Data.find("D"));

console.log(Data.toString());
