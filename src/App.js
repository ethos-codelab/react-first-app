import React from 'react';
import './App.css';

const App = () => {
  return(
    <PersonList />
  )
}

const PersonList = () => {
  const people = [
    {
      img:22,name:'John',job:'Developer',
    },
    {
      img:33,name:'Bob',job:'Designer',
    },
    {
      img:44,name:'Peter',job:'Artist',
    }
  ]
  return (
    <section>
      <Person person={people[0]}/>
      <Person person={people[1]}>
        Voluptate est et id in amet voluptate amet commodo fugiat nulla ipsum eu sit.
      </Person>
      <Person person={people[2]}/>
    </section>
  )
}

const Person = (props) => {
  const {img, name, job} = props.person;
  const {children} = props;
  const _url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return(
    <div className="person">
      <img src={_url} alt=""/>
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        <p>{children}</p>
      </div>
    </div>
  )
}

export default App;
