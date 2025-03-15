import { Truck, ShieldCheck, Shirt } from "lucide-react";
import { Card } from "../Elements/Card/Card";

const services = [
  {
    icon: <Truck size={40} />, 
    title: "Free shipping", 
    description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us."
  },
  {
    icon: <ShieldCheck size={40} />, 
    title: "7-days warranty", 
    description: "If it breaks in the first 7 days we'll replace it. After that you're on your own though."
  },
  {
    icon: <Shirt size={40} />, 
    title: "Exchanges", 
    description: "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though."
  }
];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 text-center">
      <h2 className="text-2xl font-bold mb-10">We built our business on customer service</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="p-6 flex flex-col items-center text-center">
            {service.icon}
            <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{service.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
