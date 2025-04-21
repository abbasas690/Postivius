import React from "react";
import Card from "../../components/Card";
import Seo from "../../assets/Illustration1.png";
import PayPerClick from "../../assets/Illustration(2).png";
import SocialMedia from "../../assets/Illustration(3).png";
import EmailMarketing from "../../assets/emailMarketing.png";
import ContentMarketing from "../../assets/Illustration(4).png";
import Analytics from "../../assets/Illustration(5).png";
import CtaImg from "../../assets/CtaImg.png";

function Services() {
  return (
    <div className="max-w-9/10 sm:max-w-8/10 mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 text-center md:text-left py-10">
        <h2 className="bg-accent py-2 px-2 text-4xl rounded-md font-bold tracking-tight ">
          Service
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="grid gap-6   md:grid-cols-2 ">
        <Card text="Search engine optimization" image={Seo} cardColor="white" />
        <Card
          text="Pay-per-click advertising"
          image={PayPerClick}
          cardColor="green"
        />
        <Card
          text="Social Media Marketing"
          image={SocialMedia}
          cardColor="black"
        />
        <Card text="Email Marketing" image={EmailMarketing} cardColor="white" />
        <Card
          text="Content Creation"
          image={ContentMarketing}
          cardColor="green"
        />
        <Card
          text="Analytics and Tracking"
          image={Analytics}
          cardColor="black"
        />
      </div>

      <div className="bg-secondary p-12 mt-12 max-w-9/10 md:max-w-9/10 mx-auto md:flex md:p-6 gap-6 justify-around items-center rounded-3xl">
        <div className="flex flex-col w-fit md:w-1/2  gap-6">
          <h3 className="text-2xl font-bold tracking-tight">
            Let's make things happen
          </h3>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="btn py-2 px-4">Get your fee proposal</button>
        </div>
        <img src={CtaImg} width={400} className="hidden md:block w-1/2" alt="cta image" />
      </div>
    </div>
  );
}

export default Services;
