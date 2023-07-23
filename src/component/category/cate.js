import Card from "./catCard";
import cimg1 from '../../assets/img/category1-img.png';
import cimg2 from '../../assets/img/category2-img.png';
import cimg3 from '../../assets/img/category3-img.png';

function Categ() {
    return(
<section className="section category">
                <h2 className="section__title">Favorite Scare <br /> Category</h2>
                <div className="category__container container grid">

<Card src={cimg1} title="Ghosts" Des="Choose the ghosts, the scariest there are."/>
<Card src={cimg2} title="Pumpkins" Des="You look at the scariest pumpkins there is." />
<Card src={cimg3} title="GhostsWitch Hat" Des="Pick the most stylish witch hats out there." />

                </div>
                </section>
    )
}

export default Categ;