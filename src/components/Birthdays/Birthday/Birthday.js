import cssClasses from './Birthday.module.css';
function Birthday(props) {
    return (
        <article className={cssClasses.Birthday}>
        <img src={props.image} alt={props.name}/>
        <div>
          <h4>{props.name}</h4>
          <p><strong>Birth Date:</strong> {props.dob}</p>
        </div>
      </article>
    );
}

export default Birthday;