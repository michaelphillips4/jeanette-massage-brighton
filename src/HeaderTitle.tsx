
interface Props  {
   children: string
}

const HeaderTitle = (props:Props): JSX.Element => {
    return (
        <h1 className="text-center display-5 pb-2">{props.children}</h1>
    );
  }
  
  export default HeaderTitle;