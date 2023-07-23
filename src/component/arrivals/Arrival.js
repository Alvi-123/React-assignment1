import Arcard from "./arcard";
import Arimg from '../../assets/img/new1-img.png';
import Arimg2 from '../../assets/img/new2-img.png';
import Arimg3 from '../../assets/img/new3-img.png';
import Arimg4 from '../../assets/img/new4-img.png';
import Arimg5 from '../../assets/img/new5-img.png';
import Arimg6 from '../../assets/img/new6-img.png';

function Arrivals(params) {
    return(
<section className="section new" id="new">
                <h2 className="section__title">New Arrivals</h2>
                <div className="new__container container">
                    <div className="swiper new-swiper">
                        <div className="swiper-wrapper">

<Arcard src={Arimg} title="Haunted House" subTitle="Accessory" price="$14.99" Dprice="$29.99" />
<Arcard src={Arimg2} title="Halloween Candle" subTitle="Accessory" price="$11.99" Dprice="$21.99" />
<Arcard src={Arimg3} title="Witch Hat" subTitle="Accessory" price="$4.99" Dprice="$9.99"/>
<Arcard src={Arimg4} title="Rip" subTitle="Accessory" price="$24.99" Dprice="$44.99"/>
<Arcard src={Arimg5} title="Terrifying Crystal Ball" subTitle="Accessory" price="$5.99" Dprice="$12.99"/>
<Arcard src={Arimg6} title="Witch Broom" subTitle="Accessory" price="$7.99" Dprice="$14.99"/>




                        </div>
                    </div>
                </div>
            </section>

    )
}

export default Arrivals;