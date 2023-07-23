import Tcard from "../tcard/Tcard";
import Timg1 from '../../assets/img/trick-treat1-img.png';
import Timg2 from '../../assets/img/trick-treat2-img.png';
import Timg3 from '../../assets/img/trick-treat3-img.png';
import Timg4 from '../../assets/img/trick-treat4-img.png';
import Timg5 from '../../assets/img/trick-treat5-img.png';
import Timg6 from '../../assets/img/trick-treat6-img.png';

function Treat() {
    return(
        <section className="section trick" id="trick">
                <h2 className="section__title">Trick Or Treat</h2>
                <div class="trick__container container grid">

<Tcard src={Timg1} price="$11.99" title="Toffee" subTitle="Candy"/>
<Tcard src={Timg2} price="$8.99" title="Bone" subTitle="Accessory"/>
<Tcard src={Timg3} price="$15.99" title="Scarecrow" subTitle="Accessory"/>
<Tcard src={Timg4} price="$7.99" title="Candy Cane" subTitle="Candy"/>
<Tcard src={Timg5} price="$19.99" title="Pumpkin" subTitle="Candy"/>
<Tcard src={Timg6} price="$11.99" title="Ghost" subTitle="Accessory"/>


                </div>
                </section>
    )
}

export default Treat;