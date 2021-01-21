import Case from './Case/Case';
import './MainPage.css'
import {useMemo} from 'react';



const MainPage = () => {
    const cases = ['Git', 'React', 'Html5', 'C++']
    const style= useMemo(()=> ({ marginTop:"20px", fontSize:"100px", color:"gray", heigth:"100px", lineHeight:"100px", textAlign:"center"}),[])
    return (
        <>
        <div style={style}>
            <div><img src="/image/mainPageSadIcon" width="200px" height="200px" alt=""></img></div>
            404
            <div style={{fontSize:'50px'}}>Page not Found</div>
        </div>
        <div className="MainPage">
            {cases.map( (i)=> {
               return (<Case key={i} name={i}/>)
             })
            }
        </div>
        </>
    );
};

export default MainPage;