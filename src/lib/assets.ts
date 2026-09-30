// Featured asset showcase data.
//
// IMPORTANT: No public asset endpoint could be confirmed on the existing
// backend (the /assets route requires authentication). The items below are
// ILLUSTRATIVE EXAMPLES that demonstrate the kinds of assets BuyOps works
// with. They are NOT live listings, and no prices or availability figures
// are fabricated. When a public catalogue becomes available, replace this
// array with data fetched from the authorised endpoint.

export type ShowcaseAsset = {
  id: string;
  name: string;
  category: string;
  location: string;
  priceInfo: string;
  availability: string;
  image: string;
  imageAlt: string;
};

const img = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const showcaseAssets: ShowcaseAsset[] = [
  {
    id: "residential-land",
    name: "Residential Land Parcel",
    category: "Land",
    location: "Lagos State",
    priceInfo: "Price on application",
    availability: "Available",
    image: img("photo-1500382017468-9049fed747ef"),
    imageAlt:
      "An open residential land parcel ready for development in Lagos State",
  },
  {
    id: "apartment-block",
    name: "Completed Apartment Block",
    category: "Residential",
    location: "Abuja",
    priceInfo: "Price on application",
    availability: "Available",
    image: img("photo-1545324418-cc1a3fa10c00"),
    imageAlt:
      "A completed modern apartment block available through BuyOps in Abuja",
  },
  {
    id: "commercial-space",
    name: "Commercial Space",
    category: "Commercial",
    location: "Rivers State",
    priceInfo: "Price on application",
    availability: "Limited",
    image: img("photo-1486406146926-c627a92ad1ab"),
    imageAlt:
      "A commercial property suitable for retail or office use in Rivers State",
  },
];
