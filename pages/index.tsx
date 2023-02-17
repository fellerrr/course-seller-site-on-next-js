import  Htag  from '../components/Htag/Htag';
import Button from "../components/Button/Button";
import P from "../components/P/P";
import Tag from "../components/Tag/Tag";
import {useState} from "react";
import Rating from "../components/Rating/Rating";

export default function Home() {
    const [count, setCount] = useState<number>(0);

    const [rating,setRaring]=useState<number>(1);
  return (
    <div className='container test'>
        <Htag tag="h3">На счетчике уже {count} ДолларОв</Htag>
        <Button appearance={"primary"} arrow={"right"} onClick={()=>setCount(count+1)}>Кнопка</Button>
        <Button appearance={"ghost"} arrow={"down"}>Кнопка2</Button>
        <P size={"l"}>Большой</P>
        <P>Средний</P>
        <P size={"s"}>Маленький</P>
        <Tag size={'m'} color={'ghost'}>ghost</Tag>
        <Tag color={'red'}>red</Tag>
        <Tag color={'grey'}>grey</Tag>
        <Tag size={'m'} color={'green'}>green</Tag>
        <Tag size={'m'} color={'primary'}>primary</Tag>
        <Tag color={'primary'}>primary</Tag>
        <Rating rating={rating} isEditable setRating={setRaring}/>
    </div>
  );
}
