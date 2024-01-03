import { useSelector } from "react-redux";
import ListItem from "./ListItem";

export default function WatchesList(){
let arr=useSelector(state=>state.arr);
return<>
ÛÜ ÔéâÕàÙİ<ul>
    {arr.map(item => <li key={item.id}>
        <ListItem one={item}/>
    </li>)}
</ul>
</>


}