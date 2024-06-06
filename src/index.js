import { LinkedList } from "./linked-list.js";
import { Node } from "./node.js";

//creating linked list
let Data = new LinkedList();

//appending to linked list
Data.append("A");
Data.append("B");
Data.append("C");
Data.append("D");
Data.prepend("ZB");

console.log(Data);

//returning size
//console.log(Data.size());

//removing last element
//console.log(Data.pop());
//console.log(Data);

//getting node at
//console.log(Data.at(0));

//console.log(Data.contains("D"));

//return index of node containg value
//console.log(Data.find("ZB"));

//toString()
//console.log(Data.toString());

//insertAt(value, index)
//console.log(Data.insertAt("test", 3));
//console.log(Data.at(3));

//removeAt(index)
//console.log(Data.removeAt(0));
//console.log(Data);
