import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdBusiness } from "react-icons/md";



function Work({ position, company, location, type, duration }) {
  return (
    <article className="pt-8 border-b-2 border-dark-content pb-5 dark:border-light-content border-opacity-20 dark:border-opacity-20">
      <div className="flex justify-between items-center">
        <h1 className="text-content md:text-lg lg:text-xl">{position}</h1>
        {
          type ? <div className="btn bg-greenbg text-green-text text-base font-semibold inline-block rounded-3xl px-3 py-1 min-w-fit">
          {type}
        </div> : null
        }
      </div>
      <div className="flex justify-between items-center pt-2">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center md:pr-5">
            <MdBusiness className="text-dark-heading dark:text-light-heading text-sm md:text-base" />
            <p className="text-content text-xs md:text-sm font-light pl-1">{company}</p>
          </div>
          <div className="flex items-center">
          <IoLocationOutline className="text-dark-heading dark:text-light-heading text-sm md:text-base" />

            <p className="text-content text-xs md:text-sm font-light pl-1">{location}</p>
          </div>
        </div>
        <p className="text-content text-xs md:text-sm font-light pl-1 min-w-fit">{duration}</p>
      </div>
    </article>
  );
}

export default Work;
