import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section>
      <div className="conatiner">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-ol lg:flex-row">
          {/* About Img */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt=""/>
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt=""/>
            </div>
          </div>

          {/* About content */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
              <h2 className="heading">Proud to be one of the nations best</h2>
              <p className="text__para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis et totam necessitatibus amet magnam. A?
              </p>
              <p className="text__para mt-[30px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus architecto, facilis iure illo nemo eveniet dolor laudantium laboriosam repellendus est debitis quibusdam enim? Quisquam, quod. Quisquam, quod. Quisquam, quod
              </p>
              <Link to='/'><button className="btn">Learn More</button></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About