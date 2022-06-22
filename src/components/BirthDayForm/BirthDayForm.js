import Card from '../UI/Card/Card';
import cssClasses from './BirthDayForm.module.css';
import {useRef} from 'react';
function BirthDayForm (props) {

    const nameInputRef = useRef();
    const imageInputRef = useRef();
    const dateOfBirthInputRef = useRef();

    function submitHandler (event) {
        event.preventDefault();

        const name = nameInputRef.current.value;
        const image = imageInputRef.current.value;
        const dob = dateOfBirthInputRef.current.value;

        const data = {
            name: name,
            image: image,
            dob: dob
        };

        props.onAddBirthday(data); 
    }


    return (
        <Card>
            <form className={cssClasses.form} onSubmit={submitHandler}>
                <h2 className={cssClasses.heading}>Add Birthday</h2>
                <hr />
                <div className={cssClasses.control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" required id="name" ref={nameInputRef}/>
                </div>
                <div className={cssClasses.control}>
                    <label htmlFor="image">Image url</label>
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>
                <div className={cssClasses.control}>
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" required id="dob" ref={dateOfBirthInputRef} />
                </div>
                <div className={cssClasses.actions}>
                    <button>Add To List</button>
                </div>
            </form>
        </Card>

    );
}

export default BirthDayForm;