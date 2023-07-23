import crdimg from '../../assets/img/category1-img.png';
function Card(props) {
    return(
<div className="category__data">
                        <img src={props.src} alt="" className="category__img" />
                        <h3 className="category__title">{props.title}</h3>
                        <p className="category__description">{props.Des}</p>
                    </div>


    )
}
export default Card;