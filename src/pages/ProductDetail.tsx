import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Product {
  name: string;
  series: string;
  description: string;
  image: string;
  features: string[];
  specs: { [key: string]: string };
}

// M Series (already done)
const mSeriesProducts: Product[] = [
  {
    name: "M9 Hot Tub",
    series: "Elite Class M Series™",
    description: "The M9 is the largest, most luxurious M Series spa, offering maximum seating and premium features.",
    image: "/M9.webp",
    features: [
      "Largest seating capacity in the M Series",
      "Advanced JetPak Therapy System",
      "Premium lighting and water features",
      "Energy-efficient insulation",
    ],
    specs: {
      dimensions: "7'10\" x 9'2\" x 38\"",
      capacity: "10 adults",
      waterCapacity: "550 gallons",
      weight: "950 lbs (dry)",
    },
  },
  {
    name: "M8 Hot Tub",
    series: "Elite Class M Series™",
    description: "The M8 offers unparalleled luxury with advanced JetPak Therapy Systems, premium insulation, and seating for up to 8 people.",
    image: "/M8.webp",
    features: [
      "Customizable JetPak Therapy System for personalized hydrotherapy",
      "Premium Full Foam Insulation for energy efficiency",
      "Spacious seating for up to 8 adults",
      "Multi-color LED lighting and waterfall features",
    ],
    specs: {
      dimensions: "7'10\" x 7'10\" x 38\"",
      capacity: "8 adults",
      waterCapacity: "425 gallons",
      weight: "800 lbs (dry)",
    },
  },
  {
    name: "M7 Hot Tub",
    series: "Elite Class M Series™",
    description: "The M7 is the perfect balance of size and features, ideal for families and entertaining.",
    image: "/M7.webp",
    features: [
      "Spacious seating for up to 7 adults",
      "JetPak Therapy System",
      "Modern design with premium finishes",
      "LED lighting package",
    ],
    specs: {
      dimensions: "7'7\" x 7'7\" x 37\"",
      capacity: "7 adults",
      waterCapacity: "400 gallons",
      weight: "750 lbs (dry)",
    },
  },
];

// A Series
const aSeriesProducts: Product[] = [
  {
    name: "A9L Hot Tub",
    series: "Luxury Class A Series™",
    description: "The A9L offers spacious luxury with advanced hydrotherapy and premium features.",
    image: "/A9L_Top-Down.webp",
    features: [
      "Spacious seating for up to 8 adults",
      "JetPak Therapy System",
      "Premium lighting and water features",
      "Energy-efficient insulation",
    ],
    specs: {
      dimensions: "7'10\" x 7'10\" x 38\"",
      capacity: "8 adults",
      waterCapacity: "450 gallons",
      weight: "850 lbs (dry)",
    },
  },
  {
    name: "A8 Hot Tub",
    series: "Luxury Class A Series™",
    description: "The A8 combines elegance and performance with customizable jets and a sleek design for ultimate relaxation.",
    image: "/A8_Top-Down.webp",
    features: [
      "Advanced JetPak Therapy System",
      "Energy-efficient design with eco-friendly materials",
      "Comfortable seating for up to 7 adults",
      "Integrated audio system with Bluetooth connectivity",
    ],
    specs: {
      dimensions: "7'4\" x 7'4\" x 36\"",
      capacity: "7 adults",
      waterCapacity: "400 gallons",
      weight: "750 lbs (dry)",
    },
  },
  {
    name: "A7 Hot Tub",
    series: "Luxury Class A Series™",
    description: "The A7 from our Luxury Class A Series™ combines elegance and performance with customizable jets and a sleek design for ultimate relaxation.",
    image: "/A7_Top-Down.png",
    features: [
      "Advanced JetPak Therapy System",
      "Energy-efficient design with eco-friendly materials",
      "Comfortable seating for up to 6 adults",
      "Integrated audio system with Bluetooth connectivity",
    ],
    specs: {
      dimensions: "7'4\" x 7'4\" x 36\"",
      capacity: "6 adults",
      waterCapacity: "375 gallons",
      weight: "700 lbs (dry)",
    },
  },
];

// X Series
const xSeriesProducts: Product[] = [
  {
    name: "X8 Hot Tub",
    series: "Comfort Class X Series™",
    description: "The X8 is designed for comfort and value, with plenty of space and reliable performance.",
    image: "/images/xseries/x8.jpg",
    features: [
      "Spacious seating for up to 8 adults",
      "Powerful hydrotherapy jets",
      "LED lighting",
      "Durable construction",
    ],
    specs: {
      dimensions: "7'9\" x 7'9\" x 36\"",
      capacity: "8 adults",
      waterCapacity: "420 gallons",
      weight: "800 lbs (dry)",
    },
  },
  {
    name: "X7 Hot Tub",
    series: "Comfort Class X Series™",
    description: "The X7 offers a balance of space and features, perfect for families and entertaining.",
    image: "/images/xseries/x7.jpg",
    features: [
      "Comfortable seating for up to 7 adults",
      "Effective hydrotherapy jets",
      "Colorful LED lighting",
      "Robust and durable design",
    ],
    specs: {
      dimensions: "7'7\" x 7'7\" x 36\"",
      capacity: "7 adults",
      waterCapacity: "400 gallons",
      weight: "750 lbs (dry)",
    },
  },
  {
    name: "X6 Hot Tub",
    series: "Comfort Class X Series™",
    description: "The X6 from our Comfort Class X Series™ offers affordable comfort with durable construction and powerful hydrotherapy jets.",
    image: "/compressed_Swim-Series_Timber-Snow_Lifestyle_AC5I8872.jpg",
    features: [
      "High-performance jets for effective hydrotherapy",
      "Durable construction for long-lasting use",
      "Seating for up to 5 adults",
      "Easy-to-use control panel",
    ],
    specs: {
      dimensions: "7'0\" x 7'0\" x 36\"",
      capacity: "5 adults",
      waterCapacity: "350 gallons",
      weight: "650 lbs (dry)",
    },
  },
];

// Swim Series
const swimSeriesProducts: Product[] = [
  {
    name: "S200 Swim Spa",
    series: "Performance Class Swim Series™",
    description: "The S200 is a spacious swim spa for fitness and relaxation.",
    image: "/images/swimseries/s200.jpg",
    features: [
      "Powerful swim jets",
      "Spacious swim area",
      "Energy-efficient heating",
      "LED lighting",
    ],
    specs: {
      dimensions: "15'0\" x 7'10\" x 52\"",
      capacity: "10 adults",
      waterCapacity: "1500 gallons",
      weight: "2000 lbs (dry)",
    },
  },
  {
    name: "S150 Swim Spa",
    series: "Performance Class Swim Series™",
    description:
      "The S150 from our Performance Class Swim Series™ is designed for fitness and relaxation, offering a spacious swim area and powerful swim jets.",
    image: "/compressed_S2006728.jpg",
    features: [
      "Powerful swim jets for resistance training",
      "Spacious swim area for family fun",
      "Energy-efficient heating system",
      "LED lighting for nighttime use",
    ],
    specs: {
      dimensions: "15'0\" x 7'10\" x 52\"",
      capacity: "8-10 adults",
      waterCapacity: "1500 gallons",
      weight: "2000 lbs (dry)",
    },
  },
  {
    name: "S100 Swim Spa",
    series: "Performance Class Swim Series™",
    description: "The S100 is an entry-level swim spa that doesn't compromise on quality or features.",
    image: "/images/swimseries/s100.jpg",
    features: [
      "Reliable swim jets for steady water current",
      "Compact design for smaller spaces",
      "Efficient heating and filtration system",
      "Underwater LED lighting",
    ],
    specs: {
      dimensions: "14'0\" x 7'0\" x 51\"",
      capacity: "4-6 adults",
      waterCapacity: "1200 gallons",
      weight: "1800 lbs (dry)",
    },
  },
];

const ProductDetail: React.FC = () => {
  const { seriesId } = useParams<{ seriesId: string }>();

  let products: Product[] = [];
  let seriesTitle = "";

  if (seriesId === "m-series") {
    products = mSeriesProducts;
    seriesTitle = "Elite Class M Series™";
  } else if (seriesId === "a-series") {
    products = aSeriesProducts;
    seriesTitle = "Luxury Class A Series™";
  } else if (seriesId === "x-series") {
    products = xSeriesProducts;
    seriesTitle = "Comfort Class X Series™";
  } else if (seriesId === "swim-series") {
    products = swimSeriesProducts;
    seriesTitle = "Performance Class Swim Series™";
  }

  if (products.length > 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-poppins font-bold text-foreground mb-6">{seriesTitle}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.name} className="bg-card border rounded-lg p-4 flex flex-col">
              <img src={product.image} alt={product.name} className="w-full h-auto rounded mb-4" />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-muted-foreground mb-2">{product.description}</p>
              <h3 className="font-semibold mt-2">Features</h3>
              <ul className="list-disc list-inside text-muted-foreground mb-2">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <h3 className="font-semibold">Specifications</h3>
              <ul className="text-muted-foreground mb-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <li key={key} className="capitalize">
                    {key.replace(/([A-Z])/g, " $1").toLowerCase()}: {value}
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link to="/stores">Find a Store</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const fallbackContent = (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-poppins font-bold text-foreground">Series Not Found</h1>
      <p className="text-muted-foreground mt-4">
        Sorry, the requested hot tub series could not be found.
      </p>
      <Link to="/series" className="text-primary hover:text-primary/80">
        Back to Series
      </Link>
    </div>
  );

  return fallbackContent;
};

export default ProductDetail;
