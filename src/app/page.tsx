import { CheckCircle, Shield, Clock, Users, Star, ArrowRight } from 'lucide-react'

export default function ProtocoloRinsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-green-700">Protocolo Natural dos Rins</h1>
            <div className="text-sm text-gray-600">
              Método científico-natural
            </div>
          </div>
        </div>
      </header>

      {/* VSL Section - NOVA SEÇÃO NO TOPO */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Descubra o Método Natural que Dissolve e Previne Pedras nos Rins
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Assista ao vídeo exclusivo e veja como milhares de pessoas estão se livrando das pedras nos rins 
            de forma natural, sem cirurgias ou medicamentos caros
          </p>

          {/* Espaço para VSL */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-8 border-2 border-dashed border-white/30">
            <div className="aspect-video bg-gray-800/50 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">▶️</div>
                <p className="text-lg text-gray-300">Espaço reservado para sua VSL</p>
                <p className="text-sm text-gray-400 mt-2">Substitua este conteúdo pelo seu vídeo</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-xl p-6">
            <p className="text-lg font-semibold text-yellow-100">
              ⚠️ ATENÇÃO: Este vídeo pode sair do ar a qualquer momento. Assista agora!
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Protocolo Natural que Dissolve Pedras nos Rins
          </h2>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Um protocolo natural, criado por urologista especialista, que combina alimentos, minerais e substâncias 
            comprovadas pela ciência para ajudar o corpo a dissolver e eliminar pedras nos rins de forma natural — 
            e, mais importante, impedir que elas voltem.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-red-500 mb-3">❌</div>
              <p className="text-gray-700">Não é um remédio.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-red-500 mb-3">❌</div>
              <p className="text-gray-700">Não é um chá milagroso.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-green-500 mb-3">✅</div>
              <p className="text-gray-700">É um método baseado em evidências científicas e anos de prática médica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pesquisas Científicas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
            </div>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Para quem já viveu (ou vive) o terror de uma crise renal</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-4">💊</div>
              <p>E não quer mais depender de remédios que só mascaram a dor</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-4">💰</div>
              <p>Gastar com consultas e exames caros</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-4">⏰</div>
              <p>Ou esperar meses em filas intermináveis</p>
            </div>
          </div>
          
          <p className="text-xl mt-8 opacity-90">
            É para quem busca um caminho inteligente, acessível e natural — sem depender da sorte, e sim do conhecimento.
          </p>
        </div>
      </section>

      {/* Problema que resolve */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Pedras nos rins são o resultado de um desequilíbrio químico silencioso no corpo
          </h3>
          
          <p className="text-xl text-gray-700 mb-8">
            O protocolo age diretamente nesse ponto — restaurando o equilíbrio interno e promovendo a eliminação 
            natural das pedras, além de prevenir novas formações.
          </p>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
            <p className="text-lg font-semibold text-green-800">
              Em outras palavras: Resolve o problema na origem, e não apenas o sintoma.
            </p>
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">
            Acesso Imediato ao Protocolo Natural dos Rins
          </h3>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <p className="text-xl mb-6">
              Você terá acesso imediato ao Protocolo Natural dos Rins, em formato digital (PDF), que inclui:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <p>Guia completo do método científico-natural</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <p>Lista dos alimentos e combinações certas para dissolução das pedras</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <p>Plano simples de 20 dias para restauração do equilíbrio renal</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-lg opacity-75 line-through mb-2">De R$ 97,00</div>
              <div className="text-4xl font-bold mb-4">R$ 27,00</div>
              <div className="text-sm opacity-90">(acesso vitalício)</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">Garantia total de 7 dias:</span>
          </div>
          <p className="mb-8">Se não fizer sentido, basta pedir reembolso. Sem perguntas, sem risco.</p>
          
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl text-xl transition-all duration-300 hover:scale-105 shadow-2xl">
            QUERO ACESSAR O PROTOCOLO AGORA
          </button>
        </div>
      </section>

      {/* Como comprar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">1️⃣</div>
              <h4 className="font-semibold mb-2">Clique no botão</h4>
              <p className="text-gray-600">Clique no botão de acesso ao protocolo</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">2️⃣</div>
              <h4 className="font-semibold mb-2">Preencha os dados</h4>
              <p className="text-gray-600">Preencha seus dados com segurança</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">3️⃣</div>
              <h4 className="font-semibold mb-2">Receba o acesso</h4>
              <p className="text-gray-600">Receba o acesso imediato ao Protocolo no seu e-mail</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900">O que nossos usuários dizem</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Tinha uma pedra de 7mm desde 2012. Depois de 20 dias com o protocolo, ela saiu — e eu nem percebi."
              </p>
              <p className="font-semibold text-gray-900">— Marcos R., 47 anos</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Não queria acreditar que algo natural funcionaria. Mas o especialista me provou com lógica e resultado."
              </p>
              <p className="font-semibold text-gray-900">— Lúcia F., 39 anos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Por que funciona */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Porque o corpo é químico — e quando você restabelece o equilíbrio, ele faz o resto
          </h3>
          
          <p className="text-xl text-gray-700 mb-8">
            O protocolo combina citrato + potássio natural + diuréticos leves, baseando-se em estudos 
            do Hospital das Clínicas da USP.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-red-500 text-2xl mb-3">❌</div>
              <p className="font-semibold text-gray-900">Sem promessas milagrosas</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-green-500 text-2xl mb-3">✅</div>
              <p className="font-semibold text-gray-900">Apenas lógica, ciência e resultado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Imagens das notícias - NOVA SEÇÃO ACIMA DAS 3 OPÇÕES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/af04b6ad-0290-4db3-8ee0-7b3cdc8de95d.png" 
                alt="Notícia sobre filas no SUS" 
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/b0b2430d-c899-412a-983a-d19fdb188eef.png" 
                alt="Notícia sobre problemas no sistema de saúde" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Opções */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              ⚖️ Você tem 3 opções agora
            </span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-600/20 border border-red-500/30 p-6 rounded-xl">
              <div className="text-3xl mb-4">😰</div>
              <p>Continuar gastando com consultas e remédios que não tratam a causa</p>
            </div>
            <div className="bg-yellow-600/20 border border-yellow-500/30 p-6 rounded-xl">
              <div className="text-3xl mb-4">⏳</div>
              <p>Esperar meses por uma consulta e continuar refém da dor</p>
            </div>
            <div className="bg-green-600/20 border border-green-500/30 p-6 rounded-xl">
              <div className="text-3xl mb-4">🎯</div>
              <p>Dar um passo lógico: aplicar o conhecimento certo e retomar o controle da sua saúde</p>
            </div>
          </div>
          
          <p className="text-xl mb-8">A decisão é sua — e o seu corpo vai sentir a diferença.</p>
          
          <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all duration-300 hover:scale-105 shadow-2xl flex items-center space-x-2 mx-auto">
            <span>ACESSAR O PROTOCOLO NATURAL DOS RINS</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="mb-2">Todos os direitos reservados.</p>
          <p className="text-sm">
            Este produto não substitui acompanhamento médico. Conteúdo educativo e de apoio científico-natural.
          </p>
        </div>
      </footer>
    </div>
  )
}