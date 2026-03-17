import React from "react";
import { Star, Zap, Shield, Leaf } from "lucide-react";

interface Product {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const products: Product[] = [
  {
    id: 1,
    icon: <Zap className="w-8 h-8" />,
    title: "Shampoo Revitalizante",
    description: "Limpeza profunda com ingredientes naturais que restauram o brilho natural do seu cabelo.",
    benefits: ["Limpeza profunda", "Restaura brilho", "Sem resíduos"],
  },
  {
    id: 2,
    icon: <Shield className="w-8 h-8" />,
    title: "Condicionador Protetor",
    description: "Proteção e hidratação intensiva que deixa o cabelo macio e sedoso por até 48 horas.",
    benefits: ["Proteção UV", "Hidratação intensiva", "Longa duração"],
  },
  {
    id: 3,
    icon: <Leaf className="w-8 h-8" />,
    title: "Máscara Capilar Premium",
    description: "Tratamento profissional que nutre e regenera o cabelo danificado em apenas 15 minutos.",
    benefits: ["Regeneração", "Nutrição profunda", "Rápido resultado"],
  },
  {
    id: 4,
    icon: <Star className="w-8 h-8" />,
    title: "Óleo Capilar Luxo",
    description: "Óleo premium que finaliza o look com brilho intenso e proteção térmica avançada.",
    benefits: ["Brilho intenso", "Proteção térmica", "Anti-frizz"],
  },
];

export default function Products() {
  return (
    <section id="products" className="shine-section bg-gradient-to-b from-white to-[#f9f9f9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="shine-section-title">Nossos Produtos</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="shine-card group"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Icon */}
              <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-[rgb(31,180,151)] from-30% to-[rgb(30,233,155)] text-white group-hover:scale-110 transition-transform duration-300">
                {product.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#111] mb-3">{product.title}</h3>

              {/* Description */}
              <p className="text-[#666] text-sm mb-4 leading-relaxed">
                {product.description}
              </p>

              {/* Benefits */}
              <div className="space-y-2 mb-6">
                {product.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <span className="text-[rgb(30,233,155)] font-bold">✓</span>
                    <span className="text-[#666]">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="w-full py-2 px-4 rounded-lg font-semibold text-white bg-[rgb(31,180,151)] hover:bg-[rgb(25,145,120)] transition-all duration-300 group-hover:shadow-lg">
                Saiba Mais
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-md text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#111] mb-4">
            Por que escolher Shine Express?
          </h3>
          <p className="text-lg text-[#666] mb-8 max-w-2xl mx-auto">
            Combinamos a melhor ciência com ingredientes naturais para criar produtos que realmente funcionam. Cada fórmula é testada dermatologicamente e aprovada para todos os tipos de cabelo.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-4xl font-bold text-[rgb(31,180,151)] mb-2">2.500+</p>
              <p className="text-[#666]">Clientes Satisfeitos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[rgb(30,233,155)] mb-2">98%</p>
              <p className="text-[#666]">Taxa de Satisfação</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[rgb(31,180,151)] mb-2">10+</p>
              <p className="text-[#666]">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
