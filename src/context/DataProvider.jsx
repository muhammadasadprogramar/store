import { useContext, useState } from "react";
import { ContextData } from "./ContextData";

export const Data = () => {
  return useContext(ContextData)
}


export const DataProvider = ({ children }) => {
    
  const products = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: 29.99,
      description: "Premium cotton crew neck t-shirt perfect for everyday wear. Comfortable fit with reinforced stitching.",
      image: "product-1.jpg"
    },
    {
      id: 2, 
      name: "Denim Jeans",
      price: 79.99,
      description: "Classic blue denim jeans with a modern slim fit. Made from high-quality stretch denim for maximum comfort.",
      image: "product-2.jpg"
    },
    {
      id: 3,
      name: "Leather Jacket",
      price: 199.99,
      description: "Genuine leather motorcycle jacket with quilted lining. Features multiple pockets and adjustable waist.",
      image: "product-3.jpg"
    },
    {
      id: 4,
      name: "Running Shoes",
      price: 89.99,
      description: "Lightweight performance running shoes with responsive cushioning. Breathable mesh upper and durable outsole.",
      image: "product-4.jpg"
    },
    {
      id: 5,
      name: "Backpack",
      price: 49.99,
      description: "Spacious water-resistant backpack with laptop compartment. Perfect for daily commute or weekend adventures.",
      image: "product-5.jpg"
    },
    {
      id: 6,
      name: "Sunglasses",
      price: 129.99,
      description: "UV400 protection sunglasses with polarized lenses. Stylish acetate frame with spring hinges.",
      image: "product-6.jpg"
    },
    {
      id: 7,
      name: "Smart Watch",
      price: 299.99,
      description: "Advanced fitness tracking with heart rate monitoring. Water-resistant up to 50m with 5-day battery life.",
      image: "product-7.jpg"
    },
    {
      id: 8,
      name: "Wireless Earbuds",
      price: 159.99,
      description: "True wireless earbuds with active noise cancellation. Premium sound quality with touch controls.",
      image: "product-8.jpg"
    },
    {
      id: 9,
      name: "Yoga Mat",
      price: 39.99,
      description: "Eco-friendly non-slip yoga mat with alignment lines. Extra thick for joint protection.",
      image: "product-9.jpg"
    },
    {
      id: 10,
      name: "Coffee Maker",
      price: 199.99,
      description: "Programmable coffee maker with built-in grinder. Makes up to 12 cups with keep-warm function.",
     image: "product-10.jpg"
    },
    {
      id: 11,
      name: "Digital Camera",
      price: 699.99,
      description: "Professional DSLR camera with 24MP sensor. 4K video recording and advanced autofocus system.",
      image: "product-11.jpg"
    },
    {
      id: 12,
      name: "Gaming Console",
      price: 499.99,
      description: "Next-gen gaming console with 4K graphics. Includes wireless controller and built-in storage.",
      image: "product-12.jpg"
    },
    {
      id: 13,
      name: "Desk Chair",
      price: 249.99,
      description: "Ergonomic office chair with lumbar support. Adjustable height and armrests for maximum comfort.",
      image: "product-13.jpg"
    },
    {
      id: 14,
      name: "Bluetooth Speaker",
      price: 79.99,
      description: "Portable wireless speaker with 360° sound. Waterproof design with 12-hour battery life.",
      image: "product-14.jpg"
    },
    {
      id: 15,
      name: "Fitness Tracker",
      price: 89.99,
      description: "Slim fitness band with heart rate and sleep tracking. Smartphone notifications and 7-day battery.",
      image: "product-15.jpg"
    },
    {
      id: 16,
      name: "Electric Kettle",
      price: 45.99,
      description: "Fast-boiling electric kettle with temperature control. Auto shut-off and boil-dry protection.",
      image: "product-16.jpg"
    },
    {
      id: 17,
      name: "Mechanical Keyboard",
      price: 129.99,
      description: "RGB mechanical gaming keyboard with customizable keys. Anti-ghosting and multimedia controls.",
      image: "product-17.jpg"
    },
    {
      id: 18,
      name: "Air Purifier",
      price: 179.99,
      description: "HEPA air purifier for large rooms. Removes allergens and features quiet operation.", 
     image: "product-18.webp"
    },
    {
      id: 19,
      name: "External Hard Drive",
      price: 89.99,
      description: "2TB portable hard drive with USB 3.0. Fast data transfer and automatic backup software.",
      image: "product-19.jpg"
    },
    {
      id: 20,
      name: "Robot Vacuum",
      price: 299.99,
      description: "Smart robot vacuum with mapping technology. WiFi-connected with smartphone control.",
      image: "product-20.jpg"
    }
  ]

  // ===Blog===

  const blogPosts = [
    {
      id: 1,
      title: "Latest Fashion Trends for 2024",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      image: "blog-1.jpg",
      excerpt: "Discover the hottest fashion trends that are taking the world by storm this season...",
      comments: 24
    },
    {
      id: 2,
      title: "Tech Gadgets That Will Transform Your Life",
      author: "Mike Chen",
      date: "March 12, 2024",
      image: "blog-2.jpg",
      excerpt: "Explore the latest technological innovations that are making everyday life easier and more efficient...",
      comments: 18
    },
    {
      id: 3,
      title: "Essential Home Decor Tips",
      author: "Emma Davis",
      date: "March 10, 2024",
      image: "blog-3.jpg",
      excerpt: "Learn how to transform your living space with these simple yet effective decoration ideas...",
      comments: 32
    }
  ]
  

  const [searchIcon, setSearchIcon] = useState(false);
  const [cards, setCards] = useState([])
  

  const handleProductBooking = (id) => {
    products.map(products => {
      if (products.id === id) {
        let newProduct = {id: products.id, name: products.name, price: products.price, description: products.description, image: products.image}
        
        setCards([...cards, newProduct])
      }
    })

  }

  return (
    <ContextData.Provider value={{ searchIcon, setSearchIcon, handleProductBooking, products, cards, setCards, blogPosts}}>
      {children}
    </ContextData.Provider>
  );
};
