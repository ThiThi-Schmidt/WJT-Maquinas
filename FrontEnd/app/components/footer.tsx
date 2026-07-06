"use client";

import { useState } from "react";

export default function Footer() {
  const [modalAtivo, setModalAtivo] = useState<string | null>(null);

  return (
    <section id="contato" className="py-16 scroll-mt-24 bg-black relative">
      <footer className="bg-black text-white pt-44 pb-12 relative">
        <div className="container mx-auto px-4 relative">
          
          <div className="absolute -top-35 right-0 w-64 md:w-80 lg:w-400S hidden sm:block">
            <img src="/images/couch.png" alt="Sofa" className="w-full h-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-8">
              <h3 className="text-2xl font-bold flex items-center mb-6 text-[#ff7b00]">
                <span className="mr-3">
                  <img src="/images/envelope-outline.svg" alt="Mail" className="w-6 h-6" />
                </span>
                Contate-nos:
              </h3>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="text" 
                  className="border border-gray-300 rounded-lg px-4 py-3 flex-1 focus:outline-none focus:border-[#ea580c] bg-white text-gray-900" 
                  placeholder="Escreva seu nome" 
                />
                <input 
                  type="email" 
                  className="border border-gray-300 rounded-lg px-4 py-3 flex-1 focus:outline-none focus:border-[#ea580c] bg-white text-gray-900" 
                  placeholder="Escreva seu email" 
                />
                <button 
                  type="button" 
                  className="bg-[#ff7b00] text-white px-6 py-3 rounded-lg hover:bg-[#c2410c] transition"
                > 
                  Enviar
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-4">
              <div className="mb-4">
                <a href="#" className="text-3xl font-bold text-white">WJT</a>
              </div>
              <p className="text-white/85 text-sm leading-relaxed mb-6">
                Atuamos no comércio e manutenção de máquinas para jardinagem e construção civil, com assistência técnica especializada e mais de 15 anos de experiência. Oferecemos qualidade, eficiência e confiança em cada serviço, porque mais do que máquinas, entregamos resultados que fazem a diferença.
              </p>
              <ul className="flex space-x-4 text-[#2f2f2f]">
                <li>
                  <a href="https://www.instagram.com/smbmaquinas/" className="w-10 h-10 bg-[#eff2f1] rounded-full flex items-center justify-center hover:bg-[#ea580c] hover:text-white transition">
                    <img src="/images/instagram-svgrepo-com.svg" alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=corporativo@smbmaquinas.com.br" className="w-10 h-10 bg-[#eff2f1] rounded-full flex items-center justify-center hover:bg-[#ea580c] hover:text-white transition">
                    <img src="/images/email-1-svgrepo-com.svg" alt="Email" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-white/85">
              <ul>
                <li className="mb-2"><a href="#sobre-nos" className="hover:text-[#ff7b00] transition">Sobre nós</a></li>
                <li className="mb-2"><a href="#maquinas-tutoriais" className="hover:text-[#ff7b00] transition">Ajuda</a></li>
                <li className="mb-2"><a href="#loja" className="hover:text-[#ff7b00] transition">Produtos</a></li>
                <li className="mb-2"><a href="#" className="hover:text-[#ff7b00] transition">Trabalhos</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/85">
            <p className="mb-4 md:mb-0 text-center md:text-left">
              Copyright &copy; {new Date().getFullYear()}. Todos os direitos reservados.
            </p>
            <ul className="flex space-x-6 items-center">
              <li>
                <button 
                  type="button"
                  onClick={() => setModalAtivo("termos")} 
                  className="hover:text-[#ff7b00] transition bg-transparent border-none cursor-pointer p-0 m-0 text-white/85 font-normal"
                >
                  Termos &amp; Condições
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => setModalAtivo("privacidade")} 
                  className="hover:text-[#ff7b00] transition bg-transparent border-none cursor-pointer p-0 m-0 text-white/85 font-normal"
                >
                  Política de privacidade
                </button>
              </li>
            </ul>
          </div>
      
        </div>
      </footer>

      {/* MODAL 1: TERMOS E CONDIÇÕES */}
      {modalAtivo === "termos" && (
        <div
          onClick={(e) => {
            if ((e.target as HTMLElement).id === "fundo-termos") setModalAtivo(null);
          }}
          id="fundo-termos"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md px-4"
        >
          <div className="bg-neutral-900 text-gray-300 p-6 md:p-10 rounded-2xl w-full max-w-5xl max-h-[85vh] overflow-y-auto relative shadow-2xl border border-neutral-800 text-left">
            <button type="button" onClick={() => setModalAtivo(null)} className="absolute top-5 right-6 text-gray-500 hover:text-white text-3xl font-bold">&times;</button>
            
            <h2 className="text-2xl font-bold text-white mb-6 border-b pb-3 border-neutral-800 flex items-center gap-2">
              <span className="text-[#ff7b00]">■</span> Termos e Condições Gerais de Venda, Locação e Serviços
            </h2>

            <div className="space-y-6 text-sm leading-relaxed text-gray-400">
              <div>
                <strong className="text-white text-base block mb-2">1. Cláusulas Iniciais e Aceite de Termos</strong>
                <p>Estes termos regem o acesso, navegação e transações comerciais efetuadas na plataforma digital e balcão físico da WJT. Ao adquirir equipamentos ou contratar nossos serviços de manutenção especializada, o cliente concorda integralmente com as disposições contratuais aqui descritas.</p>
              </div>

              <div>
                <strong className="text-white text-base block mb-2">2. Comercialização de Maquinários e Equipamentos</strong>
                <p>A venda de equipamentos (combustão, elétricos ou eletrônicos) novos está sujeita à variação de estoque dos fabricantes homologados. Imagens do catálogo digital são ilustrativas. Eventuais erros de digitação cometidos em tabelas de preços ou descrições técnicas reservam à empresa o direito de cancelamento da transação com estorno integral dos valores ao comprador.</p>
              </div>

              <div>
                <strong className="text-white text-base block mb-2">3. Logística de Entrega e Conferência de Frete</strong>
                <p>Equipamentos pesados de construção civil (betoneiras, compactadores, geradores) e jardinagem (tratores cortadores, roçadeiras) exigem conferência técnica obrigatória no ato da entrega. O comprador deve inspecionar a integridade física do produto antes de assinar o conhecimento de transporte. Reclamações posteriores referentes a danos estéticos ou avarias de transporte não serão aceitas.</p>
              </div>

              <div>
                <strong className="text-white text-base block mb-2">4. Políticas de Assistência Técnica e Prazos de Oficina</strong>
                <p>Maquinários deixados para fins de diagnóstico laboratorial na nossa assistência especializada passarão por triagem técnica. Os orçamentos emitidos têm validade de 10 (dez) dias. O não posicionamento ou abandono do equipamento na oficina por prazo superior a 60 (sessenta) dias, a contar da data de notificação, autoriza a WJT a realizar a venda do bem para cobrir custos de armazenamento, mão de obra de diagnóstico e insumos técnicos.</p>
              </div>

              <div>
                <strong className="text-white text-base block mb-2">5. Limitação de Garantia Especializada</strong>
                <p>A garantia de manutenção cobre estritamente os vícios de montagem ou falhas estruturais nas peças substituídas pelo prazo de 90 dias. A garantia perde eficácia caso seja constatada: utilização de combustível adulterado ou armazenado incorretamente, mistura inadequada de óleo 2 tempos, operação contínua sem lubrificação primária, sobrecarga mecânica além do limite nominal do fabricante ou intervenções feitas por terceiros.</p>
              </div>
            </div>

            <div className="mt-10 flex justify-end pt-5 border-t border-neutral-800">
              <button type="button" onClick={() => setModalAtivo(null)} className="bg-[#ff7b00] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#ea580c] transition-colors shadow-lg">Fechar Termos</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: POLÍTICA DE PRIVACIDADE */}
      {modalAtivo === "privacidade" && (
        <div
          onClick={(e) => {
            if ((e.target as HTMLElement).id === "fundo-privacidade") setModalAtivo(null);
          }}
          id="fundo-privacidade"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md px-4"
        >
          <div className="bg-neutral-900 text-gray-300 p-6 md:p-10 rounded-2xl w-full max-w-5xl max-h-[85vh] overflow-y-auto relative shadow-2xl border border-neutral-800 text-left">
            <button type="button" onClick={() => setModalAtivo(null)} className="absolute top-5 right-6 text-gray-500 hover:text-white text-3xl font-bold">&times;</button>
            
            <h2 className="text-2xl font-bold text-white mb-6 border-b pb-3 border-neutral-800 flex items-center gap-2">
              <span className="text-[#ff7b00]">■</span> Política de Privacidade e Proteção Geral de Dados (LGPD)
            </h2>

            <div className="space-y-6 text-sm leading-relaxed text-gray-400">
              <div>
                <strong className="text-white text-base block mb-2">1. Governança e Transparência de Dados</strong>
                <p>A WJT valoriza a integridade das informações de seus clientes. Esta política define como coletamos, processamos e guardamos seus registros cadastrais em total conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).</p>
              </div>

              <div>
                <strong className="text-white text-base block mb-2">2. Dados Coletados e Finalidade Comercial</strong>
                <p>Coletamos informações pessoais como Razão Social/Nome completo, CNPJ/CPF, inscrições estaduais, endereços de entrega e números de contato corporativo. A finalidade exclusiva é a emissão de Notas Fiscais Eletrônicas (NF-e), preenchimento obrigatório de Livros de Registro de Assistência Técnica, faturamento bancário e gerenciamento logístico de envio de cargas rodoviárias.</p>
              </div>

              <div>
                <strong className="text-white text-base block mb-2">3. Segurança no Armazenamento de Arquivos</strong>
                <p>Todos os dados coletados digitalmente através do formulário de newsletter ou fechamento de ordens de serviço online são criptografados em servidores seguros. Implementamos firewalls corporativos para impedir o acesso cibernético não autorizado.</p>
              </div>

              <div>
                <strong className="text-white text-base block mb-2">4. Compartilhamento Restrito com Terceiros</strong>
                <p>O compartilhamento de dados de clientes ocorre exclusivamente com: operadoras financeiras homologadas para análise de crédito de compras faturadas, transportadoras parceiras encarregadas do transporte do maquinário e órgãos fazendários (Secretaria da Fazenda e Receita Federal) para obrigações tributárias contratuais.</p>
              </div>

              <div>
                <strong className="text-white text-base block mb-2">5. Direitos do Titular dos Dados</strong>
                <p>A qualquer momento, o cliente ou parceiro comercial poderá requisitar formalmente a nossa equipe de TI a exclusão definitiva, retificação ou a portabilidade dos seus dados não fiscais de nossas bases digitais, enviando uma solicitação ao nosso canal de e-mail corporativo.</p>
              </div>
            </div>

            <div className="mt-10 flex justify-end pt-5 border-t border-neutral-800">
              <button type="button" onClick={() => setModalAtivo(null)} className="bg-[#ff7b00] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#ea580c] transition-colors shadow-lg">Fechar Política</button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}