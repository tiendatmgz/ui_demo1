import { useEffect } from "react";
import Nav from "./components/Nav";
import Section from "./components/Section";
import { getContents } from "./config/ConfigObject";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
    gsap.registerPlugin(ScrollTrigger)

    var contents = getContents();
    useGSAP(() => {
        // const parentsDiv = document.querySelectorAll('.section');
        // const childsDiv = document.querySelectorAll('.number');
        // const checkIfChildBottomMatchesParent = () => {
        //     // Lấy tất cả các thẻ con
        //     parentsDiv.forEach((parent, index) => {
        //         const child = childsDiv[index];
        //         // Lấy vị trí và kích thước của thẻ cha và thẻ con
        //         const parentRect = parent.getBoundingClientRect();
        //         const childRect = child.getBoundingClientRect();
        //         // Kiểm tra nếu đáy thẻ con trùng với đáy thẻ cha
        //         if (Math.abs(parentRect.bottom - childRect.bottom) <= 1) {
        //             gsap.to(child, {
        //                 duration: 0.5,
        //                 ease: "slow(0.7,0.7,false)",
        //                 y: -500
        //             })
        //             console.log(`Đáy thẻ con ${index + 1} trùng với đáy thẻ cha ${index + 1}.`);
        //         } else {
        //             console.log(`Đáy thẻ con ${index + 1} không trùng với đáy thẻ cha ${index + 1}.`);
        //         }
        //     })

        // }

        // window.addEventListener('scroll', checkIfChildBottomMatchesParent)
        gsap.utils.toArray('.number').forEach((el, index) => {

            gsap.timeline().to(el, {
                // x: 200,
                scrollTrigger: {
                    trigger: el,
                    endTrigger: `.section0${index + 1}`,
                    // scrub: true,
                    markers: true,
                    start: '0 20%',
                    end: 'bottom 20%',
                    // end: (() => {
                    //     return '+=' + document.getElementsByClassName('section')[1].offsetHeight - document.getElementsByClassName('number02')[0].offsetHeight
                    // }),
                    pin: true,
                    pinSpacer: false,
                    onLeave: ({ progress, direction, isActive }) => gsap.to(el, {
                        duration: 0.5,
                        ease: "back.in(2)",
                        y: -250
                    })

                }
            })
        })
    }, []);
    return (
        <div className="layout text-black bg-stone-100 relative ">
            <div className="w-full pt-44 pl-44 pr-5">
                <p className="font-bold uppercase text-stone-400 mb-24">from start to end</p>
                {contents.map((content, index) =>
                    <Section key={index} content={content} />
                )}
            </div>
            <div className="h-screen text-stone-100 bg-neutral-950 w-full grid grid-cols-10 grid-rows-2  pt-44">
                <div className="col-span-4 h-full w-full items-center flex text-4xl col-start-3 font-bold">Hãy luôn theo đuổi phong cách riêng của bạn, vì thời trang không chỉ là những bộ trang phục mà là cách bạn thể hiện bản thân</div>
                <div className="col-span-4 h-full w-full items-center flex text-4xl col-start-6 font-bold">"Thời trang là một hành trình không ngừng thay đổi – đón nhận sự sáng tạo và bền vững trong mỗi lựa chọn."</div>
            </div>
            <Nav />
        </div >
    );
};
export default App;
