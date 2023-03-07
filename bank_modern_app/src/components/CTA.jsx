import styles from '../style';
import Button from './Button';

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>This one is for the boys with the boomin system <br/> Top down, AC with the cooler system <br/> When he come up in the club, he be blazin up <br/> Got stacks on deck like he savin up <br/> And he ill, he real, he might gotta deal <br/>He pop bottles and he got the right kind of build</p>
      </div>
      
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
          <Button />
      </div>
    </section>
)

export default CTA