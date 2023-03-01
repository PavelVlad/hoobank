import {card} from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br classname="sm:block hidden"/> classin few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>Hey, Queen! Girl, you have done it again, constantly raising the bar for us all and doing it flawlessly. I'd say I'm surprised but I know who you are. I've seen it up close and personal. Girl, you make me so proud, and I love you</p>
      <Button styles='mt-10'/>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]"/>
    </div>
    
  </section>
)

export default CardDeal