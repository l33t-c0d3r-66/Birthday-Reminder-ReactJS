import Birthday from './Birthday/Birthday';
import cssClasses from './Birthdays.module.css';
function Birthdays(props) {
    function transformDate(date) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let dateInString = date.getDate()+" "+months[date.getMonth()];
        return dateInString;
    }

    return (
        <div className={cssClasses.Birthdays}>
            {props.birthdays.map(birthday=> (
                <Birthday key={birthday.id} image={birthday.image} name={birthday.name} dob={transformDate(new Date(birthday.dob))}/>
            ))}
        </div>
    );
}

export default Birthdays;