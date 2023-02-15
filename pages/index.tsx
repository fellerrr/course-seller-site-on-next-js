import  Htag  from '../components/Htag/Htag';
import Button from "../components/Button/Button";
import P from "../components/P/P"
import Tag from "../components/Tag/Tag";

export default function Home() {
  return (
    <div className='container'>
        <Htag tag="h3">Текст</Htag>
        <Button appearance={"primary"} arrow={"right"}>Кнопка</Button>
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
    </div>
  );
}
