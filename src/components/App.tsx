import React from 'react';
import { Animal } from './animals';
import { animalClass } from './animalsClass';

const App: React.FC = () => {
  const users = [{ key: 1, sciencename: 'Kobus' , name: 'Antilope acuatico', race:'Mamifero' , geozone: 'Sabana africana', image:'No image'}, { key:2, sciencename: 'Syncerus caffer' , name: 'Bufalo rojo', race:'Mamifero' , geozone: 'Bosque ecuatorial', image:'No image' }, {key:3, sciencename: 'Pan' , name: 'Chimpance', race:'Mamifero' , geozone: 'Bosque ecuatorial', image:'No image'}];
  //const filteredUsers = users.filter((user) => user.age<30);
  //const totalAge = users.reduce((prevUser, currentUser) => prevUser + currentUser.age, 0);
  //const ageMessage = totalAge <= 20 ? 'Personas muy jovenes' : totalAge <= 60 ? 'Persona menores a 40 anos': 'Personas';

  return <React.Fragment>
    <h2>Lista de Animales</h2>
    {users.map((user) => <Animal key={user.key} sciencename={user.sciencename} name={user.name} race={user.race} geozone={user.geozone}/>)}
    
    
    {/*filteredUsers.map((user) =><Animal key={user.email} name={user.name} age={user.age} email={user.email} />  )*/}
    {/* <HelloClass name={'Salvador'} age={30} email={'salvador@ucreativa.com'} address={'San Jose'} /> */}
    {/* <Hello name={'Ariel'} age={28} email={'ariel@ucreativa.com'} /> */}    
  </React.Fragment>
}

export default App;