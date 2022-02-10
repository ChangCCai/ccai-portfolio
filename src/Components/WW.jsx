import React from "react";
import ImageGallery from "react-image-gallery";

const WW = () => {
  const images = [
    {
      original: "https://i.imgur.com/PobvVVx.jpg",
      description: "Coffee Table - 2018",
      thumbnail: "https://i.imgur.com/PobvVVx.jpg",
    },
    {
      original: "https://i.imgur.com/Gf9fmq5.jpg",
      description:
        "Built using clearance ikea table tops and scrapped wood furniture for the base.",
      thumbnail: "https://i.imgur.com/Gf9fmq5.jpg",
    },
    {
      original: "https://i.imgur.com/mDq81gB.jpg",
      description: "Rear view",
      thumbnail: "https://i.imgur.com/mDq81gB.jpg",
    },
    {
      original: "https://i.imgur.com/6VfH8RX.jpg",
      description: "At home in the living room!",
      thumbnail: "https://i.imgur.com/6VfH8RX.jpg",
    },
    {
      original: "https://i.imgur.com/kEq9aqV.jpg",
      description: "Toddler Tower - 2020",
      thumbnail: "https://i.imgur.com/kEq9aqV.jpg",
    },
    {
      original: "https://i.imgur.com/z2qhx4J.jpg",
      description: "Made of salvaged scrap plywood pieces using old hardware.",
      thumbnail: "https://i.imgur.com/z2qhx4J.jpg",
    },
    {
      original: "https://i.imgur.com/Tg2scHq.jpg",
      description: "Collapsible for easier storage.",
      thumbnail: "https://i.imgur.com/Tg2scHq.jpg",
    },
    {
      original: "https://i.imgur.com/qYcLjoX.jpg",
      description: "Fully folded.",
      thumbnail: "https://i.imgur.com/qYcLjoX.jpg",
    },
    {
      original: "https://i.imgur.com/qU8YwNc.jpg",
      description: "Complete!",
      thumbnail: "https://i.imgur.com/qU8YwNc.jpg",
    },
    {
      original: "https://i.imgur.com/YRzibHH.jpg",
      description: "Cast iron bench restoration - 2021",
      thumbnail: "https://i.imgur.com/YRzibHH.jpg",
    },
    {
      original: "https://i.imgur.com/2Oz7y5d.jpg",
      description:
        "Used composite decking boards with aluminum C-channel for support.",
      thumbnail: "https://i.imgur.com/2Oz7y5d.jpg",
    },
    {
      original: "https://i.imgur.com/bYslpCb.jpg",
      description: "New hardware and touch up paint.",
      thumbnail: "https://i.imgur.com/bYslpCb.jpg",
    },
    {
      original: "https://i.imgur.com/9wHZE5O.jpg",
      description: "In it's new home!",
      thumbnail: "https://i.imgur.com/9wHZE5O.jpg",
    },
    {
      original: "https://i.imgur.com/91suODo.jpg",
      description: "Simple shoe bench - 2019 (Made of 2x4s)",
      thumbnail: "https://i.imgur.com/91suODo.jpg",
    },
    {
      original: "https://i.imgur.com/3KImA3a.jpg",
      description: "Toddler slide/climbing ramp - 2020",
      thumbnail: "https://i.imgur.com/3KImA3a.jpg",
    },
    {
      original: "https://i.imgur.com/3MQUvvI.jpg",
      description: "Made from a salvaged Ikea table top",
      thumbnail: "https://i.imgur.com/3MQUvvI.jpg",
    },
    {
      original: "https://i.imgur.com/aghD4af.jpg",
      description: "Completed to fit the little play nook.",
      thumbnail: "https://i.imgur.com/aghD4af.jpg",
    },
    {
      original: "https://i.imgur.com/edlpVp0.jpg",
      description: "Pine and Red Oak Napkin Holder - 2021",
      thumbnail: "https://i.imgur.com/edlpVp0.jpg",
    },
    {
      original: "https://i.imgur.com/Plp1JDV.jpg",
      description: "Simple.",
      thumbnail: "https://i.imgur.com/Plp1JDV.jpg",
    },
    {
      original: "https://i.imgur.com/Do69q4L.jpg",
      description: "Bed end storage unit - 2019",
      thumbnail: "https://i.imgur.com/Do69q4L.jpg",
    },
    {
      original: "https://i.imgur.com/h55pjzj.jpg",
      description:
        'Build using 1 sheet of 3/4" plywood and half sheet of 1/2" plywood with used foam mattress for cushioning',
      thumbnail: "https://i.imgur.com/h55pjzj.jpg",
    },
  ];

  return (
    <div>
      <ImageGallery items={images} />
    </div>
  );
};

export default WW;
