import { ArrowRight, CheckCircle } from "lucide-react";

interface CTAProps {
  onCtaClick?: () => void;
}

export default function CTA({ onCtaClick }: CTAProps) {
  const benefits = [
    "Frete grátis em compras acima de R$ 100",
    "Garantia de satisfação de 30 dias",
    "Atendimento ao cliente 24/7",
    "Parcelamento em até 12x sem juros",
  ];

  return (
    <section className="shine-section bg-gradient-to-r from-[rgb(31,180,151)] via-[rgb(28,200,160)] to-[rgb(30,233,155)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Comece Sua Transformação Hoje
            </h2>

            <p className="text-lg text-white opacity-95 mb-8 leading-relaxed">
              Junte-se a milhares de clientes satisfeitos que já transformaram seus cabelos. Não é apenas um produto, é um investimento na sua autoconfiança.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[rgb(31,180,151)] font-bold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              Comprar Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Content - Stats */}
          <div className="animate-slide-up">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold text-white mb-8">
                Por que nossos clientes nos amam?
              </h3>

              <div className="space-y-6">
                {/* Stat 1 */}
                <div className="border-b border-white border-opacity-20 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl font-bold text-white">⭐</div>
                    <div>
                      <p className="text-white font-bold text-lg">4.9 de 5 Estrelas</p>
                      <p className="text-white opacity-80">Baseado em 2.500+ avaliações verificadas</p>
                    </div>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="border-b border-white border-opacity-20 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl font-bold text-white">🚀</div>
                    <div>
                      <p className="text-white font-bold text-lg">Resultados em 7 Dias</p>
                      <p className="text-white opacity-80">Você notará a diferença rapidamente</p>
                    </div>
                  </div>
                </div>

                {/* Stat 3 */}
                <div>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl font-bold text-white">💯</div>
                    <div>
                      <p className="text-white font-bold text-lg">100% Satisfação</p>
                      <p className="text-white opacity-80">Ou seu dinheiro de volta, sem perguntas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
