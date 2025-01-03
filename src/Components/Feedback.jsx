
const Feedback = ({ feedbackdata }) => {
    console.log(feedbackdata)

    return (
        <div className="grid grid-cols-3 gap-4 w[80%] mx-auto max-w-[1200px] mt-6">

            {
                feedbackdata.map(feed =>
                    <div key={feed.name} className="card bg-primary text-primary-content w-96">
                        <div className=" p-6">
                            <div className="flex gap-4 justify-between items-center">
                                <img className="w-14 h-14 rounded-full" src={feed.userImg} alt="" />
                                <h2 className="card-title">{feed.name}</h2>
                               <p>{new Date ().toLocaleDateString()}</p>

                            </div>
                            <p>{feed.review}</p>
                            <div className="card-actions justify-end items-center">
                                <div className="rating">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                </div>
                                <button className="btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Feedback;