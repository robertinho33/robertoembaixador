import { ArrowRight } from "lucide-react";

interface HeroProps {
  onCtaClick?: (action: string) => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center overflow-hidden bg-gradient-to-br from-[#f9f9f9] via-white to-[#f0fffe]"
    >
      {/* Decorative gradient circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(30,233,155)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(31,180,151)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h1 className="text-5xl md:text-6xl font-bold text-[#111] mb-6 leading-tight">
              Brilho e{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(31,180,151)] to-[rgb(30,233,155)]">
                Confiança
              </span>{" "}
              para seu Cabelo
            </h1>

            <p className="text-lg md:text-xl text-[#333] mb-8 leading-relaxed">
              Descubra a revolução em cuidados capilares com os produtos premium da Shine Express. Transforme seu cabelo com ingredientes naturais e tecnologia avançada.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onCtaClick?.("primary")}
                className="btn-shine-primary inline-flex items-center justify-center gap-2 group"
              >
                Explorar Produtos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onCtaClick?.("secondary")}
                className="btn-shine-secondary inline-flex items-center justify-center gap-2"
              >
                Saiba Mais
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-col sm:flex-row gap-8 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[rgb(31,180,151)] bg-opacity-20 flex items-center justify-center">
                  <span className="text-[rgb(31,180,151)] font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-[#111]">100% Natural</p>
                  <p className="text-[#666]">Ingredientes puros</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[rgb(30,233,155)] bg-opacity-20 flex items-center justify-center">
                  <span className="text-[rgb(30,233,155)] font-bold">★</span>
                </div>
                <div>
                  <p className="font-semibold text-[#111]">Dermatologista</p>
                  <p className="text-[#666]">Testado e aprovado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:flex items-center justify-center animate-fade-in">
            <div className="relative w-full max-w-md">
              {/* Placeholder for hero image */}
              <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-[rgb(31,180,151)] to-[rgb(30,233,155)] shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-xl font-semibold">Imagem do Produto</p>
                  <p className="text-sm opacity-80">Será adicionada em breve</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 animate-bounce">
                <p className="text-sm font-bold text-[rgb(31,180,151)]">⭐ 4.9/5</p>
                <p className="text-xs text-[#666]">2.500+ avaliações</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
