import { useEffect } from "react";
import Nav from "./components/Nav";
import Section from "./components/Section";
import { getContents } from "./config/ConfigObject";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
function App() {
    useEffect(() => {
        // gsap.utils.toArray('.number').map(el => {
        //     gsap.to('.number', {
        //         scrollTrigger: {
        //             trigger: el,
        //             start: 'top 20%',
        //             markers: true,
        //             pin: true,
        //             // pinSpacing: false,
        //             pinSpacer: false,
        //             toggleActions: "play none none reverse"
        //             // start:'',
        //         }
        //     })
        // })
        gsap.fromTo(
            '.number1',
            { position: 'absolute' }, // Vị trí bắt đầu
            {
                position: 'fixed', // Chuyển thành fixed khi cuộn
                scrollTrigger: {
                    trigger: '.number1', // Phần tử theo dõi
                    start: 'top 20%', // Bắt đầu khi phần tử ở 80% chiều cao màn hình
                    end: 'bottom 10%', // Kết thúc khi phần tử thoát khỏi viewport
                    scrub: true, // Cuộn mượt mà
                    pin: true, // Ghim phần tử tại chỗ
                    pinSpacer: false,
                    markers: true, // Hiển thị các marker để debug
                },
            }
        );
    }, []);
    var contents = getContents();
    return (
        <div className="layout text-black bg-stone-100 relative ">
            <Nav />
            <div className="w-full pt-44 pl-44 pr-5">
                <p className="font-bold uppercase text-stone-400">from start to end</p>
                {contents.map((content, index) =>
                    <Section key={index} content={content} />
                )}
            </div>
            <div className="h-screen text-stone-100 bg-neutral-950 w-full grid grid-cols-10 grid-rows-2  pt-44">
                <div className="col-span-4 h-full w-full items-center flex text-4xl col-start-3 font-bold">Hãy luôn theo đuổi phong cách riêng của bạn, vì thời trang không chỉ là những bộ trang phục mà là cách bạn thể hiện bản thân</div>
                <div className="col-span-4 h-full w-full items-center flex text-4xl col-start-6 font-bold">"Thời trang là một hành trình không ngừng thay đổi – đón nhận sự sáng tạo và bền vững trong mỗi lựa chọn."</div>
            </div>
        </div >
    );
};
export default App;
