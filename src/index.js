import { LinkedList } from "./linked-list.js";
import { Node } from "./node.js";

let Data = new LinkedList();
let A = new Node("a");
let B = new Node("b");
let C = new Node("c");
let D = new Node("d");

Data.append(A);
Data.append(B);
Data.append(C);
Data.append(D);

console.log(Data.size());
console.log(Data);
