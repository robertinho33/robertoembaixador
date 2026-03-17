export default function About() {
  return (
    <section id="about" className="shine-section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="shine-section-title">Sobre o Embaixador</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="animate-slide-in-left">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              {/* Placeholder for ambassador image */}
              <div className="w-full aspect-square bg-gradient-to-br from-[rgb(31,180,151)] from-30% via-[rgb(30,233,155)] via-60% to-[#1a7f6b] flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-2xl font-semibold">Foto do Embaixador</p>
                  <p className="text-sm opacity-80 mt-2">Será adicionada em breve</p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-[rgb(30,233,155)] rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="animate-slide-up">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#111] mb-4">
                  Sua Jornada Começa Aqui
                </h3>
                <p className="text-lg text-[#333] leading-relaxed">
                  Como embaixador oficial da Shine Express, estou comprometido em compartilhar os melhores produtos de cuidados capilares com você. Com mais de 10 anos de experiência na indústria de beleza, conheço profundamente cada detalhe que faz a diferença.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[rgb(31,180,151)] bg-opacity-20">
                      <span className="text-[rgb(31,180,151)] font-bold text-xl">💎</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#111] mb-2">
                      Qualidade Premium
                    </h4>
                    <p className="text-[#666]">
                      Todos os produtos são selecionados com rigor para garantir a melhor qualidade e resultados visíveis.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[rgb(30,233,155)] bg-opacity-20">
                      <span className="text-[rgb(30,233,155)] font-bold text-xl">🌿</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#111] mb-2">
                      100% Natural
                    </h4>
                    <p className="text-[#666]">
                      Ingredientes naturais e sustentáveis que respeitam o meio ambiente e sua saúde.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[rgb(31,180,151)] bg-opacity-20">
                      <span className="text-[rgb(31,180,151)] font-bold text-xl">🎯</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#111] mb-2">
                      Resultados Garantidos
                    </h4>
                    <p className="text-[#666]">
                      Transformação visível em 30 dias ou seu dinheiro de volta, sem perguntas.
                    </p>
                  </div>
                </div>
              </div>

              <button className="btn-shine-primary mt-8">
                Conheça Minha História
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
