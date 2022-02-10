import React from "react";
import ImageGallery from "react-image-gallery";

const Misc = () => {
  const images = [
    {
      original: "https://i.imgur.com/5SvBSPR.jpg",
      description: "3D Printed RGB Nightlight - 2018",
      thumbnail: "https://i.imgur.com/5SvBSPR.jpg",
    },
    {
      original: "https://i.imgur.com/HRoC3Na.jpg",
      description:
        "Custom designed and uses and 18650 Li-Ion Battery and charger board with an arduino mini pro to cycle colors and RGB patterns.",
      thumbnail: "https://i.imgur.com/HRoC3Na.jpg",
    },
    {
      original: "https://i.imgur.com/kPbOccI.gif",
      description: "RGB LEDs glowing",
      thumbnail: "https://i.imgur.com/kPbOccI.gif",
    },
    {
      original: "https://i.imgur.com/2NjXxio.jpg",
      description: "3D printed Ukulele - 2017",
      thumbnail: "https://i.imgur.com/2NjXxio.jpg",
    },
    {
      original: "https://i.imgur.com/mRaYeKm.jpg",
      description: "Epoxied together and then secured with machine screws",
      thumbnail: "https://i.imgur.com/mRaYeKm.jpg",
    },
    {
      original: "https://i.imgur.com/Ot7gEeu.jpg",
      description: "After sanding and painting - finally stringing",
      thumbnail: "https://i.imgur.com/Ot7gEeu.jpg",
    },
    {
      original: "https://i.imgur.com/Oqu51wq.jpg",
      description: "Rear of Ukulele",
      thumbnail: "https://i.imgur.com/Oqu51wq.jpg",
    },
    {
      original: "https://i.imgur.com/KfEJJz3.jpg",
      description: "3D Printed Mini Arcade - 2017",
      thumbnail: "https://i.imgur.com/KfEJJz3.jpg",
    },
    {
      original: "https://i.imgur.com/tNsyhMm.jpg",
      description:
        "Side View with paddles for L/R buttons, everything designed from scratch",
      thumbnail: "https://i.imgur.com/tNsyhMm.jpg",
    },
    {
      original: "https://i.imgur.com/nPcKlJ1.jpg",
      description: "Custom button board",
      thumbnail: "https://i.imgur.com/nPcKlJ1.jpg",
    },
    {
      original: "https://i.imgur.com/DtxLxjD.jpg",
      description: "Button testing",
      thumbnail: "https://i.imgur.com/DtxLxjD.jpg",
    },
    {
      original: "https://i.imgur.com/awr9EWd.jpg",
      description:
        "Wiring up the scree, speakers and buttons - connected to a Raspberry Pi 3B",
      thumbnail: "https://i.imgur.com/awr9EWd.jpg",
    },
    {
      original: "https://i.imgur.com/thzEaNq.jpg",
      description: "Three Carrot Engagement ring with prototypes - 2019",
      thumbnail: "https://i.imgur.com/thzEaNq.jpg",
    },
    {
      original: "https://i.imgur.com/wNQeVlF.jpg",
      description: "Final revision in custom pokeball ring holder",
      thumbnail: "https://i.imgur.com/wNQeVlF.jpg",
    },
  ];

  return (
    <div>
      <ImageGallery items={images} />
    </div>
  );
};

export default Misc;
