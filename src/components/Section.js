const Section = ({ content }) => {
  return (
    <section className={`section section${content.id} mb-24 w-full flex`}>
      <div className="w-1/4  mr-auto">
        <div className={`number number${content.id} font-bold xl:text-[180px] leading-[0.6] lg:text-[140px] md:text-[100px] sm:text-[80px] text-[40px]`}><span>{content.id}</span></div>
      </div>
      <div className="w-3/4 border-t-4 border-black pt-6 flex space-x-4 ">
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
