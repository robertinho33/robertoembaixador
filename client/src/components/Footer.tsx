import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const footerLinks = [
    { title: "Empresa", links: ["Sobre Nós", "Carreira", "Blog", "Imprensa"] },
    { title: "Produtos", links: ["Catálogo", "Ofertas", "Novidades", "Reviews"] },
    { title: "Suporte", links: ["Contato", "FAQ", "Rastreamento", "Devoluções"] },
    { title: "Legal", links: ["Privacidade", "Termos", "Cookies", "Acessibilidade"] },
  ];

  return (
    <footer id="contact" className="bg-[#111] text-white pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[rgb(31,180,151)] to-[rgb(30,233,155)] flex items-center justify-center">
                <span className="text-white font-bold">SE</span>
              </div>
              <span className="font-bold text-xl">Shine Express</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Transformando cabelos, mudando vidas. Produtos premium para beleza natural.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-[rgb(31,180,151)] bg-opacity-20 hover:bg-[rgb(31,180,151)] flex items-center justify-center transition-all duration-300 text-[rgb(30,233,155)] hover:text-white"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-bold text-white mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[rgb(30,233,155)] transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-[rgb(31,180,151)] from-20% to-[rgb(30,233,155)] rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Entre em Contato</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Email */}
            <a
              href="mailto:contato@shineexpress.com"
              className="flex items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white text-sm opacity-80">Email</p>
                <p className="text-white font-semibold">contato@shineexpress.com</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+5511999999999"
              className="flex items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white text-sm opacity-80">Telefone</p>
                <p className="text-white font-semibold">(11) 99999-9999</p>
              </div>
            </a>

            {/* Address */}
            <a
              href="#"
              className="flex items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white text-sm opacity-80">Endereço</p>
                <p className="text-white font-semibold">São Paulo, SP</p>
              </div>
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white bg-opacity-5 rounded-2xl p-8 mb-12 border border-white border-opacity-10">
          <h3 className="text-xl font-bold text-white mb-4">Receba Nossas Novidades</h3>
          <p className="text-gray-400 mb-6">
            Inscreva-se para receber ofertas exclusivas, dicas de beleza e lançamentos.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Seu melhor email"
              className="flex-1 px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:border-[rgb(30,233,155)]"
            />
            <button className="px-6 py-3 bg-[rgb(31,180,151)] hover:bg-[rgb(25,145,120)] text-white font-semibold rounded-lg transition-all duration-300 whitespace-nowrap">
              Inscrever
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Shine Express. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Feito com ❤️ para transformar cabelos em todo o Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
