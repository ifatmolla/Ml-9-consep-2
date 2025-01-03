import bannerimg from "../assets/images.jpg"
const Banner = () => {
    return (
        <div className="hero bg-base-200  rounded-xl mt-8 min-h-64">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20">
          <img 
            src={bannerimg}
            className="w-[700px] ml-11 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;