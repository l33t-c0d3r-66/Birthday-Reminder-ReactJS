import Birthdays from "../components/Birthdays/Birthdays";
function Today (props) {
    if(props.wishes.length === 0) {
        return <h1 style={{textAlign:'center'}}>No Wishes Today</h1>
    }
    return (
        <section className="container">
            <h2 style={{textAlign:'center'}}>Don't Forget to Wish Them Today</h2>
            <div>
                <Birthdays birthdays={props.wishes}/>
            </div>
        </section>
    );
}

export default Today;