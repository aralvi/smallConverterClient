import styles from "../card/Card.module.css";
function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.img} class="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h6 className={`card-heading ${styles.CHeading}`}>{props.heading}</h6>
          <h5 className={`card-title ${styles.CTitle}`}>{props.title}</h5>
          <p className={`card-text ${styles.CText}`}>{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
