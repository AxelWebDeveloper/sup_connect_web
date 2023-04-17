import React from 'react';
import '../Home/home.css'

const Home = () => {

    const tableauScholl = [
        {
            id: "1",
            name: "walid la bite",
        },
        {
            id: "2",
            name: "axel ",
        },
        {
            id: "3",
            name: "alexisdadza majchrzakjzbabfazb ",
        },
        {
            id: "4 ",
            name: "lakpo ",
        },
        {
            id: "5",
            name: "oeuoouee",
        },
        {
            id: "6",
            name: "polka react",
        },
    ]
    const listItems = tableauScholl.map((number) =>
        <div className='tableNote' >
            <p className='listName' key={number.id}>
                {number.name}
            </p>
            <div className='blockInput' >
                <div className='inputNote1' >
                    <input placeholder='Note élève' className='note' ></input>
                    <input placeholder='Coefficient' className='note' ></input>
                </div>
                <div className='inputNote2' >
                    <input placeholder='Note du groupe' className='note' ></input>
                    <input placeholder='Coefficient' className='note' ></input>
                </div>
            </div>
            <div className='inputComment' >
                <input placeholder='Commentaires/Remarques' className='commentaires' ></input>
            </div>
            
        </div>
     );

        return (
            <div className='DashboardNote' >
                <div className='tableList' >
                   <div className='listEleve' > {listItems} </div>
                </div>
                    <div className='buttonValide' >
                        <button className='valide' > Valider </button>
                    </div>
            </div>
        );
}



export default Home;
