import React from "react";

const Body = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <img
          src="./assets/Blue-Shape.svg"
          alt="1st"
          className="-rotate-45 h-64"
        />
        <img
          src="./assets/Pink-Shape.svg"
          alt="1st"
          className="absolute -rotate-45 h-64"
        />
        <img
          src="./assets/Purple-Shape.svg"
          alt="1st"
          className="absolute -rotate-[15deg] h-64"
        />
        <img
          src="./assets/Hero-Model.png"
          alt="1st"
          className="absolute h-64"
        />
      </div>
      <div className="space-y-4">
        <h1 className="leading-relaxed font-extrabold text-3xl mb-7 mt-5">
          Host your website in less than 5 minutes
        </h1>
        <p className="font-serif text-lg">
          To host a website, begin by selecting and registering a domain name
          through a domain registrar. Choose a suitable web hosting provider and
          select an appropriate hosting plan based on your website's needs.
          Configure the Domain Name System (DNS) settings to point your domain
          to the hosting provider's servers. Upload your website files using
          File Transfer Protocol (FTP) or the hosting provider's file manager.
          Optionally, configure email settings associated with your domain.
          Enhance website security by obtaining and installing an SSL
          certificate. Test the website thoroughly before making it public, and
          perform regular maintenance, including software updates and backups.
          Utilize analytics tools to monitor website traffic and performance,
          ensuring a secure and efficient online presence.
        </p>
        <form action="" className="flex flex-col space-y-4">
          <input
            className="rounded-md px-4 py-3 placeholder:text-gray-400"
            type="email"
            placeholder="Enter email here"
          ></input>
          <button className="rounder-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">
            Join waitlist
          </button>
        </form>
        <div className="flex gap-2">
          <img src="./assets/Checkmark.svg" alt="check" />
          <p className="font-lato text-gray-400">
            No spam, ever, Unscribe anytime
          </p>
        </div>
      </div>
    </>
  );
};

export default Body;
