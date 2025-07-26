import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import coconutProducts from "@/assets/coconut-products.jpg";
import spicesCollection from "@/assets/spices-collection.jpg";

const Products = () => {
  const coconutItems = [
    "Semi-Husked Coconuts",
    "Desiccated Coconut Powder", 
    "Virgin Coconut Oil",
    "Coconut Milk (12%, 17%, 22%)",
    "Coconut Flour & Chips",
    "Coconut Sugar"
  ];

  const spiceItems = [
    { name: "Black Pepper", desc: "Premium quality whole peppercorns" },
    { name: "Green Cardamom", desc: "Aromatic and flavorful pods" },
    { name: "Cloves", desc: "Dried flower buds with intense flavor" },
    { name: "Cumin", desc: "Whole seeds with earthy aroma" },
    { name: "Coriander", desc: "Fresh ground coriander powder" },
    { name: "Turmeric Fingers", desc: "Natural golden turmeric roots" },
    { name: "Red Chillies", desc: "Hot and vibrant dried chillies" },
    { name: "Star Anise", desc: "Star-shaped spice pods" },
    { name: "Mustard Seeds", desc: "Premium quality mustard seeds" },
    { name: "Bay Leaves", desc: "Aromatic dried bay leaves" },
    { name: "Hing (Asafoetida)", desc: "Traditional Indian spice" },
    { name: "Ginger & Curry Leaves", desc: "Fresh and dried varieties" }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/20 text-forest hover:bg-secondary/30">
            Our Premium Range
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
            Export-Grade Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From premium coconut-based products to authentic Indian whole spices, 
            we offer a comprehensive range tailored for international markets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Coconut Products */}
          <Card className="overflow-hidden bg-white shadow-natural">
            <div className="relative">
              <img
                src={coconutProducts}
                alt="Coconut Products"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Coconut Products
                </h3>
                <Badge className="bg-secondary text-forest hover:bg-secondary/90">
                  Premium Quality
                </Badge>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-muted-foreground mb-6">
                Fresh, safe, and tailored coconut products from India's finest coconut farms, 
                processed with modern techniques to maintain natural goodness.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coconutItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-cream rounded-lg">
                <div className="flex items-center space-x-2 text-sm text-forest">
                  <div className="w-3 h-3 bg-forest rounded-full"></div>
                  <span className="font-medium">Available in various packaging sizes for export</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Indian Spices */}
          <Card className="overflow-hidden bg-white shadow-natural">
            <div className="relative">
              <img
                src={spicesCollection}
                alt="Indian Whole Spices"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Indian Whole Spices
                </h3>
                <Badge className="bg-secondary text-forest hover:bg-secondary/90">
                  Authentic Flavors
                </Badge>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-muted-foreground mb-6">
                Authentic Indian whole spices sourced directly from farmers, preserving traditional 
                flavors and aromas that define Indian cuisine worldwide.
              </p>
              
              <div className="space-y-3 max-h-72 overflow-y-auto">
                {spiceItems.map((spice, index) => (
                  <div key={index} className="flex items-start space-x-3 p-2 bg-cream/50 rounded-lg transition-colors">
                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{spice.name}</div>
                      <div className="text-xs text-muted-foreground">{spice.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-cream rounded-lg">
                <div className="flex items-center space-x-2 text-sm text-forest">
                  <div className="w-3 h-3 bg-forest rounded-full"></div>
                  <span className="font-medium">All spices available in whole and ground forms</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Quality Assurance */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-forest to-forest-light text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Quality You Can Trust</h3>
            <p className="text-cream mb-6 max-w-2xl mx-auto">
              Every product undergoes rigorous quality control from farm to port. 
              Our integrated supply chain ensures freshness, safety, and consistency in every shipment.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-secondary/20 text-secondary hover:bg-secondary/30">
                Farm to Port Quality Control
              </Badge>
              <Badge variant="secondary" className="bg-secondary/20 text-secondary hover:bg-secondary/30">
                Strong Logistics Network
              </Badge>
              <Badge variant="secondary" className="bg-secondary/20 text-secondary hover:bg-secondary/30">
                Transparent Business Practices
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;