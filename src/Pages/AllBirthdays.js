import Birthdays from "../components/Birthdays/Birthdays";
import Spinner from '../components/UI/Spinner/Spinner';
import {useState, useEffect} from 'react';
function AllBirthdays (props) {

    
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBirthdays, setLoadedBirthdays] = useState([]);

  useEffect(() => {
      fetch("https://reactprojects-74b70-default-rtdb.firebaseio.com/birthdays.json")
      .then(response => {
          return response.json();
      }).then(data => {
          transformAndUpdate(data);
      });
  }, []);

  function seprateToday(birthdays) {
    return birthdays.filter(birthday => (new Date(birthday.dob).getDate() === new Date().getDate() && 
            new Date(birthday.dob).getMonth() === new Date().getMonth()));
  }

  function transformAndUpdate(data) {
    const birthdays = [];
    for(let key in data) {
        const birthday = {
            id: key,
            ...data[key]
        }
        birthdays.push(birthday);
    }
    setIsLoading(false);
    setLoadedBirthdays(birthdays);
    let todays = seprateToday(birthdays);
    if(todays !== undefined && todays.length>0) {
        props.setWishHandler(seprateToday(birthdays));
    }
  }

  if(isLoading) {
    return (
        <section>
            <Spinner />
        </section>
    );
}

    return (
        <section className="container">
            <h1 style={{textAlign:'center'}}>Birthdays List</h1>
            <div>
                {loadedBirthdays.length>0?<Birthdays birthdays={loadedBirthdays}/>: <h2 style={{textAlign:'center'}}>No Birthdays were Added</h2>}
            </div>
        </section>
    );
}

export default AllBirthdays;