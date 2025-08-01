import { Link } from "react-router-dom";

interface SeriesItem {
  id: string;
  name: string;
  description: string;
  image: string;
}

const Series: React.FC = () => {
  const seriesData: SeriesItem[] = [
    {
      id: "m-series",
      name: "Elite Class M Series™",
      description: "Premium hot tubs with advanced JetPak Therapy Systems and luxurious design for ultimate relaxation.",
      image: "/compressed_20241008_BF_KWP_DAY01_SHOT06_2743.jpg",
    },
    {
      id: "a-series",
      name: "Luxury Class A Series™",
      description: "High-end hot tubs offering customizable hydrotherapy and energy-efficient performance.",
      image: "/A_Series_HGTV_2024_2.jpg",
    },
    {
      id: "x-series",
      name: "Comfort Class X Series™",
      description: "Affordable yet durable hot tubs with powerful jets and comfortable seating.",
      image: "/1I7A2999.jpg",
    },
    {
      id: "swim-series",
      name: "Performance Class Swim Series™",
      description: "Spacious swim spas designed for fitness, relaxation, and family fun.",
      image: "/compressed_AC5I2997.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-poppins font-bold text-foreground mb-6">Hot Tub Series</h1>
      <p className="text-muted-foreground mb-8">
        Explore our range of premium hot tubs, designed for relaxation, durability, and energy efficiency.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {seriesData.map((series) => (
          <div
            key={series.id}
            className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <img src={series.image} alt={series.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-figtree font-semibold text-foreground">{series.name}</h2>
              <p className="text-muted-foreground mt-2">{series.description}</p>
              <Link
                to={`/series/${series.id}`}
                className="mt-4 inline-block text-primary hover:text-primary/80 font-figtree"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Series;
