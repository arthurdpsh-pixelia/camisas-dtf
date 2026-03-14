/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Check, DollarSign, Gift, Home, Shirt, 
  ChevronDown, ChevronUp, ShieldCheck, 
  Clock, ThumbsUp, Award, Download, BookOpen, 
  Smartphone, Calculator, FileText, ArrowRight,
  Star, Heart, Palette, Zap, HelpCircle
} from 'lucide-react';

// --- Reusable Components ---

const CTAButton = ({ text, className = "" }: { text: string, className?: string }) => (
  <button className={`w-full bg-[#25d366] hover:bg-[#20bd5a] text-white font-extrabold text-xl py-5 px-8 rounded-2xl shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] transform transition hover:-translate-y-1 ${className}`}>
    {text}
  </button>
);

const CheckItem = ({ text, iconBg = "bg-[#f39c12]", textColor = "text-white" }: { text: string, iconBg?: string, textColor?: string }) => (
  <div className="flex items-center gap-4">
    <div className={`${iconBg} rounded-full p-1 flex-shrink-0`}>
      <Check size={18} strokeWidth={4} className="text-white" />
    </div>
    <span className={`${textColor} font-medium`}>{text}</span>
  </div>
);

const FeatureCard = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="bg-[#fbcfe8] p-8 rounded-3xl shadow-sm">
    <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border border-[#f472b6] scale-[1.35] opacity-50"></div>
      <div className="absolute inset-0 rounded-full border border-[#f472b6] scale-[1.15] opacity-70"></div>
      <div className="relative w-16 h-16 bg-[#3e2723] rounded-full flex items-center justify-center z-10">
        <Icon className="text-white" size={28} />
      </div>
    </div>
    <h3 className="text-xl font-extrabold text-[#3e2723] leading-tight">
      {text}
    </h3>
  </div>
);

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-pink-200 rounded-xl mb-3 overflow-hidden bg-pink-50">
      <button 
        className="w-full flex justify-between items-center p-4 text-left font-bold text-[#e01a59]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="p-4 pt-0 text-gray-700">
          {answer}
        </div>
      )}
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-gray-50 flex flex-col items-center">
      <div className="w-full max-w-md bg-white shadow-2xl overflow-hidden">
        
        {/* 1. Hero Section */}
        <section className="bg-[#e01a59] px-6 py-12 flex flex-col items-center text-center">
          <div className="relative p-3 bg-[#f06292] rounded-[2rem] mb-8 shadow-inner w-full">
            <img 
              src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop" 
              alt="Estampando camiseta" 
              className="w-full h-auto rounded-2xl object-cover aspect-square shadow-md"
              referrerPolicy="no-referrer"
            />
          </div>

          <h1 className="text-3xl font-extrabold text-white leading-tight mb-6">
            Como criar <span className="text-[#ffeb3b]">produtos personalizados</span> que vendem em até 48 horas usando apenas uma impressora comum e um ferro de passar roupa
          </h1>

          <p className="text-lg text-white mb-10 font-medium">
            Apenas um método simples, validado, que já colocou renda no bolso de mais de 800 mulheres usando o que elas tinham em casa.
          </p>

          <CTAButton text="QUERO COMEÇAR AGORA!" className="mb-10" />

          <div className="flex flex-col gap-4 text-left w-full">
            <CheckItem text="Sem precisar de impressoras especiais." />
            <CheckItem text="Sem depender de gráfica." />
            <CheckItem text="Sem investir pesado." />
            <CheckItem text="Sem experiência anterior." />
          </div>
        </section>

        {/* 2. Benefits Section */}
        <section className="bg-[#fdf2f8] px-6 py-16 flex flex-col gap-6">
          <FeatureCard icon={Shirt} text="Estampar camisetas, panos de prato e ecobags com SUAS frases e SUAS ideias" />
          <FeatureCard icon={Home} text="Decorar sua casa com peças feitas por você mesma" />
          <FeatureCard icon={DollarSign} text="Vender produtos únicos com lucros de até 312%, direto da mesa da sua cozinha" />
          <FeatureCard icon={Gift} text="Criar presentes personalizados que as pessoas realmente valorizam" />
        </section>

        {/* 3. Requirements Section */}
        <section className="bg-[#3e2723] px-6 py-16">
          <h2 className="text-3xl font-extrabold text-white text-center mb-10">Tudo isso com:</h2>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 border-b border-gray-700 pb-6">
              <div className="bg-[#2ecc71] rounded-full p-2 flex-shrink-0">
                <Check className="text-white" size={24} strokeWidth={3} />
              </div>
              <span className="text-xl text-white font-bold">Sua impressora de casa</span>
            </div>
            <div className="flex items-center gap-4 border-b border-gray-700 pb-6">
              <div className="bg-[#2ecc71] rounded-full p-2 flex-shrink-0">
                <Check className="text-white" size={24} strokeWidth={3} />
              </div>
              <span className="text-xl text-white font-bold">Um ferro de passar comum</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#2ecc71] rounded-full p-2 flex-shrink-0">
                <Check className="text-white" size={24} strokeWidth={3} />
              </div>
              <span className="text-xl text-white font-bold">Um papel que custa menos de R$2 a folha</span>
            </div>
          </div>
        </section>

        {/* 4. Why it works Section */}
        <section className="bg-[#e01a59] px-6 py-16 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-8">Por que funciona tão bem?</h2>
          
          <p className="text-white font-bold text-lg mb-6">O que o E-Book te ENSINARÁ é que:</p>
          
          <div className="flex flex-col gap-3 mb-10">
            {['É muito simples de fazer', 'Materiais que você já tem ou encontra fácil', 'Lucro alto em cada peça', 'O passo a passo é fácil de acompanhar'].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-md">
                <div className="bg-pink-100 p-2 rounded-lg text-[#e01a59]">
                  <Star size={20} fill="currentColor" />
                </div>
                <span className="font-bold text-[#e01a59] text-left">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-white font-bold text-lg mb-6">Veja se você se encaixa em alguma dessas opções:</p>
          
          <div className="flex flex-col gap-3 text-left w-full pl-4">
            <CheckItem text="Iniciante" iconBg="bg-[#2ecc71]" />
            <CheckItem text="Sem experiência" iconBg="bg-[#2ecc71]" />
            <CheckItem text="Criativa" iconBg="bg-[#2ecc71]" />
            <CheckItem text="Em transição" iconBg="bg-[#2ecc71]" />
          </div>
        </section>

        {/* 5. Imagine Section */}
        <section className="bg-[#fdf2f8] px-6 py-16">
          <h2 className="text-3xl font-extrabold text-[#3e2723] text-center mb-10">Imagina isso...</h2>
          <div className="flex flex-col gap-4">
            <div className="bg-[#fbcfe8] rounded-2xl p-6 flex items-center gap-4 shadow-sm">
              <div className="bg-[#3e2723] p-3 rounded-full text-white flex-shrink-0">
                <Gift size={24} />
              </div>
              <span className="font-bold text-[#3e2723] text-lg">Criar presentes personalizados para sua família</span>
            </div>
            <div className="bg-[#fbcfe8] rounded-2xl p-6 flex items-center gap-4 shadow-sm">
              <div className="bg-[#3e2723] p-3 rounded-full text-white flex-shrink-0">
                <Heart size={24} />
              </div>
              <span className="font-bold text-[#3e2723] text-lg">Fazer a festa da garotada com peças exclusivas!</span>
            </div>
          </div>
        </section>

        {/* 6. Who is it for Section */}
        <section className="bg-[#fdf2f8] px-6 py-10 pt-0">
          <h2 className="text-3xl font-extrabold text-[#3e2723] text-center mb-8">Esse método é para você que...</h2>
          
          <div className="flex flex-col gap-3 mb-8">
            {['Quer uma renda extra', 'Gosta de artesanato e criar coisas', 'Tem pouco tempo', 'Quer trabalhar de casa e ter mais tempo com a família'].map((item, i) => (
              <div key={i} className="bg-pink-100 border border-pink-200 rounded-xl p-4 flex items-center gap-3">
                <div className="bg-[#e01a59] rounded-full p-1 flex-shrink-0">
                  <Check size={16} strokeWidth={4} className="text-white" />
                </div>
                <span className="font-bold text-[#3e2723]">{item}</span>
              </div>
            ))}
          </div>

          <div className="border-2 border-red-500 bg-red-50 rounded-xl p-6 text-center">
            <p className="text-red-600 font-bold text-lg">
              "Se você acha que vai ficar rica rápido 'apertando botões', pule fora!"
            </p>
          </div>
        </section>

        {/* 7. What you get Section */}
        <section className="bg-white px-6 py-16">
          <h2 className="text-2xl font-extrabold text-[#3e2723] text-center mb-8 leading-tight">
            O que você leva com o E-Book "Do Zero ao Lucro com Ferro de Passar":
          </h2>
          
          <img 
            src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop" 
            alt="Estampando" 
            className="w-full h-48 object-cover rounded-2xl mb-8 shadow-md"
            referrerPolicy="no-referrer"
          />

          <div className="flex flex-col gap-4 mb-8">
            {[
              'Onde comprar o papel transfer CERTO para não ter surpresas negativas.',
              'Passo a passo e o jeito CERTO para estampar com ferro de passar.',
              'A configuração certa da sua impressora para as cores ficarem perfeitas.',
              'Como criar as estampas do absoluto zero (mesmo sem dom de design).',
              'Dicas de acabamento para aumentar a durabilidade.',
              'Dicas de precificação para colocar um preço justo e ter lucro.'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="bg-[#e01a59] rounded-full p-1 mt-1 flex-shrink-0">
                  <Check size={14} strokeWidth={4} className="text-white" />
                </div>
                <span className="text-gray-700 font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-center font-bold text-gray-800 mb-8 italic">
            Tudo em um formato simples e direto ao ponto, para você começar a aplicar no mesmo dia que ler.
          </p>

          <div className="flex flex-col gap-3 mb-10 pl-4">
            <CheckItem text="Sem precisar de impressoras especiais." iconBg="bg-[#2ecc71]" textColor="text-gray-800" />
            <CheckItem text="Sem depender de gráfica." iconBg="bg-[#2ecc71]" textColor="text-gray-800" />
            <CheckItem text="Sem investir pesado." iconBg="bg-[#2ecc71]" textColor="text-gray-800" />
            <CheckItem text="Sem experiência anterior." iconBg="bg-[#2ecc71]" textColor="text-gray-800" />
          </div>

          <CTAButton text="QUERO COMEÇAR AGORA!" />
        </section>

        {/* 8. Products Carousel Placeholder */}
        <section className="bg-gray-50 px-6 py-12 text-center border-y border-gray-200">
          <h2 className="text-xl font-extrabold text-[#3e2723] mb-6">Produtos que você pode começar a fazer hoje</h2>
          <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <button className="bg-[#e01a59] text-white rounded-full p-1"><ChevronDown className="rotate-90" size={20}/></button>
            <span className="font-bold text-gray-700">Camisetas Personalizadas</span>
            <button className="bg-[#e01a59] text-white rounded-full p-1"><ChevronDown className="-rotate-90" size={20}/></button>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-[#e01a59]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </section>

        {/* 9. Testimonials */}
        <section className="bg-[#fdf2f8] px-6 py-16">
          <h2 className="text-3xl font-extrabold text-[#3e2723] text-center mb-10">Depoimentos reais:</h2>
          
          <div className="flex flex-col gap-6">
            <div className="bg-[#3e2723] p-6 rounded-2xl relative">
              <div className="absolute -top-4 left-6 bg-white p-2 rounded-full shadow-md">
                <Star className="text-yellow-400" size={20} fill="currentColor" />
              </div>
              <div className="flex items-center gap-3 mb-3 mt-2">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold text-gray-600">M</div>
                <span className="text-white font-bold">Maria Silva</span>
              </div>
              <p className="text-gray-200 italic">"Fiz 3 camisetas no fim de semana. Vendi todas na 2ª feira. Tô chocada!"</p>
            </div>

            <div className="bg-[#3e2723] p-6 rounded-2xl relative">
              <div className="absolute -top-4 left-6 bg-white p-2 rounded-full shadow-md">
                <Star className="text-yellow-400" size={20} fill="currentColor" />
              </div>
              <div className="flex items-center gap-3 mb-3 mt-2">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold text-gray-600">A</div>
                <span className="text-white font-bold">Ana Souza</span>
              </div>
              <p className="text-gray-200 italic">"Nunca pensei que aquele ferro velho ia me dar tanto dinheiro."</p>
            </div>
          </div>
        </section>

        {/* 10. Bonuses */}
        <section className="bg-white px-6 py-16 text-center">
          <h2 className="text-3xl font-extrabold text-[#3e2723] mb-2">BÔNUS EXCLUSIVOS</h2>
          <p className="text-[#e01a59] font-bold mb-10">(Somente se agir hoje)</p>

          <div className="flex flex-col gap-4 mb-10">
            {[
              { icon: Palette, text: 'Pack com mais de 100 estampas prontas para usar agora.' },
              { icon: BookOpen, text: 'Guia de Fornecedores.' },
              { icon: Smartphone, text: 'Mini Curso de Vendas pelo Instagram.' },
              { icon: Calculator, text: 'Planilha de Precificação Automática.' },
              { icon: Award, text: 'Certificado de Conclusão (após 7 dias).' }
            ].map((bonus, i) => (
              <div key={i} className="border border-pink-200 bg-pink-50 rounded-xl p-4 flex items-center gap-4 text-left">
                <div className="bg-[#e01a59] p-2 rounded-lg text-white flex-shrink-0">
                  <bonus.icon size={20} />
                </div>
                <span className="font-bold text-gray-800 text-sm">{bonus.text}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-500 line-through mb-2">Valor total: R$ 197,00</p>
          <p className="text-2xl font-extrabold text-[#2ecc71]">HOJE POR: GRÁTIS</p>
        </section>

        {/* 11. Guarantee */}
        <section className="bg-[#e01a59] px-6 py-16 text-center text-white">
          <h2 className="text-3xl font-extrabold mb-6">7 Dias de Garantia</h2>
          <p className="font-medium mb-10 leading-relaxed">
            Se você aplicar o método e achar que não é para você, devolvemos 100% do seu dinheiro. Sem letras miúdas, sem stress.
          </p>
          <div className="grid grid-cols-2 gap-6 max-w-xs mx-auto">
            <div className="flex flex-col items-center gap-2"><ShieldCheck size={32} /><span className="text-xs font-bold uppercase">Seguro</span></div>
            <div className="flex flex-col items-center gap-2"><Clock size={32} /><span className="text-xs font-bold uppercase">Rápido</span></div>
            <div className="flex flex-col items-center gap-2"><ThumbsUp size={32} /><span className="text-xs font-bold uppercase">Fácil</span></div>
            <div className="flex flex-col items-center gap-2"><Award size={32} /><span className="text-xs font-bold uppercase">Qualidade</span></div>
          </div>
        </section>

        {/* 12. Price */}
        <section className="bg-white px-6 py-16 text-center">
          <h2 className="text-xl font-bold text-gray-700 mb-2">Esse E-Book poderia facilmente custar</h2>
          <p className="text-3xl font-extrabold text-gray-400 line-through mb-6">R$ 97</p>
          <p className="text-lg font-bold text-gray-700 mb-8">Mas se você agir agora...</p>

          <div className="bg-[#e01a59] rounded-3xl p-8 shadow-xl mb-8 transform scale-105">
            <p className="text-white font-bold text-lg mb-4">Mas hoje, você leva tudo por:</p>
            <p className="text-6xl font-black text-white mb-2 tracking-tighter">R$19,90</p>
            <p className="text-pink-200 font-medium mb-8">ou 2x de R$ 10,31 no cartão</p>
            <CTAButton text="QUERO COMEÇAR AGORA!" className="shadow-none border-2 border-white/20" />
          </div>
        </section>

        {/* 13. Final CTA */}
        <section className="bg-[#3e2723] px-6 py-16 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4 leading-tight">Chega de deixar o ferro de passar encostado.</h2>
          <p className="text-xl text-gray-300 font-medium mb-10">Faça ele te render dinheiro extra.</p>
          <CTAButton text="QUERO COMEÇAR AGORA E TER ACESSO IMEDIATO!" className="text-lg px-4" />
        </section>

        {/* 14. FAQ */}
        <section className="bg-[#fdf2f8] px-6 py-16">
          <h2 className="text-3xl font-extrabold text-[#3e2723] text-center mb-10">FAQ - Perguntas Frequentes</h2>
          <div className="flex flex-col">
            <AccordionItem question="O que é o E-Book 'Do Zero ao Lucro com Ferro de Passar'?" answer="É um guia passo a passo que te ensina a estampar produtos em casa usando apenas uma impressora comum e um ferro de passar roupa, permitindo criar uma renda extra rapidamente." />
            <AccordionItem question="Preciso de impressora especial?" answer="Não! Você pode usar a impressora jato de tinta que já tem em casa." />
            <AccordionItem question="Funciona em qualquer tecido?" answer="Ensinamos as melhores práticas para diferentes tipos de tecidos, focando naqueles que dão o melhor resultado com o papel transfer." />
            <AccordionItem question="Por quanto tempo tenho acesso?" answer="O acesso ao E-Book e aos bônus é vitalício. Você pode ler e consultar quando quiser." />
            <AccordionItem question="Tem garantia?" answer="Sim! Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos seu dinheiro." />
            <AccordionItem question="Como recebo o material?" answer="O acesso é enviado imediatamente para o seu e-mail logo após a confirmação do pagamento." />
          </div>
        </section>

        {/* 15. Footer */}
        <section className="bg-[#2d1b18] px-6 py-10 text-center text-gray-400 text-xs">
          <p className="mb-4">Copyright © 2024. Todos os direitos reservados.</p>
          <p className="max-w-xs mx-auto opacity-60">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
          </p>
        </section>

      </div>
    </div>
  );
}
