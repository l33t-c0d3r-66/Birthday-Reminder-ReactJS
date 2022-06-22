import BirthDayForm from '../components/BirthDayForm/BirthDayForm';
import {useHistory} from 'react-router-dom';
function NewBirthday() {
    const history = useHistory();

    function addBirthdayHandler(meetupData) {
        fetch("https://reactprojects-74b70-default-rtdb.firebaseio.com/birthdays.json",
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(()=> {
            history.replace('/');
        });

    }
    return (
        <div>
            <BirthDayForm onAddBirthday = {addBirthdayHandler} />
        </div>
    );
}

export default NewBirthday;