import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = ({ content }) => {
  // const ref = useRef([]);
  // ref.current = [];

  // useEffect(() => {
  //   ref.current.forEach((el) => {
  //     gsap.to(el, {
  //       scrollTrigger: {
  //         trigger: el,
  //         markers: true,
  //         start: "top 25%",
  //         end: "top top",
  //         pin:true,
        
  //         pinSpacer:false,
  //         // scrub: true,
  //         // pinSpacing:false,
  //         pinSpacer:false,
  //         toggleActions: "play none none reverse"
  //       }
  //     })
  //   })
  // }, [])

  // const addtoRefs = (el) => {
  //   if (el && !ref.current.includes(el)) {
  //     ref.current.push(el);
  //   }
  // }
  return (
    <section className="section mt-24 w-full flex">
      <div className="w-1/4  mr-auto">
        <div  className={`number number${content.id} font-bold xl:text-[180px] leading-[0.6] lg:text-[140px] md:text-[100px] sm:text-[80px] text-[40px]`}><span>{content.id}</span></div>
        <div></div>
      </div>
      <div className="w-4/6 border-t-4 border-black pt-6 flex space-x-4 ">
        <div className="w-2/5 space-y-4">
          <div className="font-bold text-4xl">{content.title}</div>
          <div className=" font-bold">{content.subTitle}</div>
        </div>
        <div className="w-3/5">
          {content.paragraphs.map((paragraph, index) =>
            <pre key={index} className="leading-5 indent-8 text-wrap text-stone-500">
              {paragraph}
              <br />
              <br />
            </pre>
          )}
        </div>
      </div>
    </section>
    // <div className='h-[200px]'><span ref={addToRef} >a</span></div>
  );
}

export default Section;
