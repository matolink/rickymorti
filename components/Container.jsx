//import styles from '../assets/css/center.css'

const container = (props) => {
    return <div>
        <div /*className={styles.center}*/>
            <h1>NOMBRE : {props.nombre}</h1>
            <img src={props.imagen} alt="" />
            <br />
        </div>
    </div>;
};

export default container;
