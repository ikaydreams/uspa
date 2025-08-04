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

const mSeriesProducts: Product[] = [
  {
    name: "M9 Hot Tub",
    series: "Elite Class M Series™",
    description: "The M9 is the largest, most luxurious M Series spa, offering maximum seating and premium features.",
    image: "/images/mseries/m9.jpg",
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
    image: "/images/mseries/m8.jpg",
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
    image: "/images/mseries/m7.jpg",
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

const ProductDetail: React.FC = () => {
  const { seriesId } = useParams<{ seriesId: string }>();

  if (seriesId === "m-series") {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-poppins font-bold text-foreground mb-6">Elite Class M Series™</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mSeriesProducts.map((product) => (
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

  const products: { [key: string]: Product } = {
    "a-series": {
      name: "A7 Hot Tub",
      series: "Luxury Class A Series™",
      description:
        "The A7 from our Luxury Class A Series™ combines elegance and performance with customizable jets and a sleek design for ultimate relaxation.",
      image: "/compressed_rooftop_jpexchange.jpg",
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
    "x-series": {
      name: "X6 Hot Tub",
      series: "Comfort Class X Series™",
      description:
        "The X6 from our Comfort Class X Series™ offers affordable comfort with durable construction and powerful hydrotherapy jets.",
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
    "swim-series": {
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
  };

  const product = seriesId ? products[seriesId] : null;

  if (!product) {
    return (
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
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-poppins font-bold text-foreground">{product.name}</h1>
          <p className="text-xl text-muted-foreground mt-2">{product.series}</p>
          <p className="text-muted-foreground mt-4">{product.description}</p>
          <h2 className="text-2xl font-figtree font-semibold text-foreground mt-6">Features</h2>
          <ul className="list-disc list-inside text-muted-foreground mt-2">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-figtree font-semibold text-foreground mt-6">Specifications</h2>
          <ul className="text-muted-foreground mt-2">
            {Object.entries(product.specs).map(([key, value]) => (
              <li key={key} className="capitalize">
                {key.replace(/([A-Z])/g, " $1").toLowerCase()}: {value}
              </li>
            ))}
          </ul>
          <Button className="mt-6" asChild>
            <Link to="/stores">Find a Store</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

