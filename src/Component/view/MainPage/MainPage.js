import React from 'react';
import Case from './Case/Case';
import './MainPage.css'
const MainPage = () => {
    const cases = ['Git', 'React', 'Html5', 'C++']
    return (
        <>
        <div style={{
            marginTop:"20px", fontSize:"100px", color:"gray", heigth:"100px", lineHeight:"100px", textAlign:"center"
        }}>
            <div><img src="/image/mainPageSadIcon.svg" width="200px" height="200px"></img></div>
            404
            <div style={{
                fontSize:"50px"
            }}>Page not Found</div>
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