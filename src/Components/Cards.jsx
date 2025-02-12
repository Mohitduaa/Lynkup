import React from "react";

const Cards = () => {
  return (
    <div className="px-6 lg:px-20 py-10 space-y-10">
      {/* Card 1 */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
        <div className="w-full lg:w-1/2">
          <img
            src="images/card1.png"
            alt="Card 1"
            className="w-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="font-poppins text-lg lg:text-xl font-bold">Experiences</h1>
          <p className="text-sm lg:text-lg font-Lexend">
            New experiences and offers drop each week for you to share with your
            audience
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-start gap-6">
        <div className="w-full lg:w-1/2">
          <img
            src="images/card1.png"
            alt="Card 2"
            className="w-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="font-poppins text-lg lg:text-xl font-bold">Experiences</h1>
          <p className="text-sm lg:text-lg font-Lexend">
            Simplifies finding and booking collaborations so you can focus on
            creating content
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
        <div className="w-full lg:w-1/2">
          <img
            src="images/card1.png"
            alt="Card 3"
            className="w-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="font-poppins text-lg lg:text-xl font-bold">Experiences</h1>
          <p className="text-sm lg:text-lg font-Lexend">
            Get collaborations based on engagement, not just follower count
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-start gap-6">
        <div className="w-full lg:w-1/2">
          <img
            src="images/card1.png"
            alt="Card 4"
            className="w-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="font-poppins text-lg lg:text-xl font-bold">Experiences</h1>
          <p className="text-sm lg:text-lg font-Lexend">
            Join our community of creators. Share ideas, tips, and attend
            meetups, events & workshops
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
