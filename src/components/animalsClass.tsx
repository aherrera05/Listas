import React from "react";

interface animalClassProps {
	key:number;
    sciencename:string;
    name:string;
	race: string;
	geozone: string;
   
}

interface animalClassState{
    count: number;
    error: '';
}
export class animalClass extends React.Component<animalClassProps, animalClassState> {
    state:animalClassState = {
        count: 0,
        error:''
        
        
    }
    increment = (count:number) => {
		this.setState((previosState)=>({count:previosState.count + count}));
	}
	decrement = (num:number) => {
		this.setState((previosState)=>({count:previosState.count - num }));
	}

    componentDidMount(){
        //EJEMPLOS DE USO
        //API CALL ACTUALIXAR EL ESTADO CON EL RESULTADO
       //AGREGAR EVENT LISTENER
        console.log('Se agrego componEnte en el DOM');
    
    }
    componentDidUpdate(){
        if(this.state.count < 0){
       alert('Count no debe ser negativo')
        }
        console.log('Se actualizo componente');
        
    }
    componentWillMount(){
        //ELIMINAR UN EVENT LISTENER
        console.log('componente se va a eliminar');
    }
    
    render(){
    const {key, sciencename, name, race, geozone}= this.props;
    const {count} = this.state;
    return  <div>
    <ul>
    <li>Numero: {key}</li>
    <li>Science Name: {sciencename}</li>
    <li>Name: {name}</li>
    <li>Race: {race}</li>
    <li>Geogrphic Zone: {geozone}</li>
    <img src="'./images/' + sciencename + '_td.jpg'"/>
    </ul>
    <p>Count {count}</p>
   <p>{this.state.error}</p>
    <button onClick={()=>this.increment(1)}>Increment</button>
			<button onClick={() => this.decrement(2)}>Decrement</button>
</div>
}
}