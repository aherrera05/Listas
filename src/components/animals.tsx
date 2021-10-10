import React from 'react';



interface AnimalProps {
    key: number;
	sciencename:string;
    name:string;
	race: string;
	geozone: string;
   
}


export const Animal:React.FC<AnimalProps> = ({key, sciencename,name, race,  geozone}) => {

	return <div>
		<ul>
        <li> Numero: {key}</li>
		<li>Science Name: {sciencename}</li>
		<li>Name: {name}</li>
		<li>Race: {race}</li>
		<li>Geographic Zone: {geozone}</li>
        <img src= "'/images/ {sciencename}'_td.jpg'"/>
		</ul>
	</div>
}