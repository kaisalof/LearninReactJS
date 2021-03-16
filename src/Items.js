import React from 'react';
import './styleItems.css';

const listUnits = [
    {id:111, title: 'Item 1', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'},
    {id:222, title: 'Item 2', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'},
    {id:333, title: 'Item 3', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'},
];

function ListUnit({title, text, onDelete}){
    return(
        <li>
            <p id='liTitle'>{title}</p>
            <p id='liText'>{text}</p>
            <button onClick={onDelete}>Delete</button>
        </li>
    )
}

export default function UnitsList(){
    const[units, setUnits] = React.useState(listUnits);

    return(
        <div id='content'>
            <ul>
                {units.map((unit) => (                               
                    <ListUnit
                    id='listItem'
                    title={unit.title}
                    key={unit.id}
                    text={unit.text}

                    onDelete={() => {
                        setUnits(units.filter((item) => item.id !== unit.id));
                    }}
                    />
                ))} 
            </ul>            
        </div>
    )
}
