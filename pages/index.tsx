import  Htag  from '../components/Htag/Htag';
import Button from "../components/Button/Button";
import P from "../components/P/P";
import Tag from "../components/Tag/Tag";
import {useState} from "react";
import Rating from "../components/Rating/Rating";
import  {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";


function Home({menu }:HomeProps) {
    const [count, setCount] = useState<number>(0);
    const [rating,setRaring]=useState<number>(1);
    return (
        <>
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

        </>
    );
}

export default withLayout(Home);


export const getStaticProps:GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return{
        props: {
            menu,
            firstCategory
        }
    };
};


interface HomeProps extends Record<string, unknown>{
    menu:MenuItem[],
    firstCategory:number
}