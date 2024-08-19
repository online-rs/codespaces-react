import './App.css';
import HeaderNav from './HeaderNav';
import Proposta from './components/Proposta';
import ImageUploader from './ImageUploader';
import ImageCarousel from './ImageCarousel';

function App() {
  const comoFunciona = [
    "Participação Cidadã: Os órgãos gestores do SUS em Canoas irão publicar, de forma clara e acessível, listas de espera para consultas, cirurgias e exames no site da prefeitura. Os cidadãos poderão acompanhar seu progresso e o de seus vizinhos, usando apenas o número do cartão do SUS, garantindo privacidade.",
    "Atualizações Semanais: As listas serão atualizadas semanalmente, mantendo a comunidade informada e engajada no processo.",
    "Fiscalização Popular: Com essa ferramenta, todos os cidadãos de Canoas terão o poder de fiscalizar e garantir que não haja privilégios ou favorecimentos. Se algo estiver errado, o povo terá a força de exigir mudanças."
];
  return (
    <div className="App">
      <HeaderNav />
      <header className="App-header">
        <h1>Site em Constução</h1>
        <Proposta 
                numero="01"
                area="Saúde"
                titulo="Saúde Transparente, Povo Presente"
                proposta="Publicação de Listas de Espera para Consultas Especializadas, Cirurgias e Exames Complementares."
                comoFunciona={comoFunciona}
                objetivo="Trazer transparência total ao sistema de saúde, assegurando que cada cidadão tenha um atendimento justo e em conformidade com as prioridades legais."
            />

<Proposta 
    numero="02"
    area="Educação"
    titulo="Educação de Qualidade para Todos"
    proposta="Implementação do programa 'Ciência e Gestão pela Educação' nas 44 escolas municipais de ensino fundamental de Canoas para melhorar a qualidade da educação e reduzir a evasão escolar."
    comoFunciona={[
        '1. Parceria Institucional:',
        '   - Início do Projeto: Parceria entre a Secretaria Municipal de Educação de Canoas e especialistas em gestão educacional, com base no modelo aplicado no Rio de Janeiro.',
        '   - Apoio Acadêmico: Colaboração com a Universidade de Cambridge para adaptar as práticas de gestão ao contexto local.',
        '2. Capacitação dos Gestores e Professores:',
        '   - Objetivo: Treinar gestores e professores das 44 escolas para aplicar práticas de gestão baseadas em evidências.',
        '   - Atividades: Workshops, sessões de coaching, e suporte contínuo, focando na análise de dados, estabelecimento de metas, e liderança educacional.',
        '   - Duração: 6 meses iniciais, com acompanhamento contínuo.',
        '3. Implementação de Práticas de Gestão:',
        '   - Objetivo: Otimizar a gestão escolar para melhorar o ambiente de aprendizado e o desempenho dos alunos.',
        '   - Atividades: Uso de plataformas digitais para monitoramento de desempenho, estabelecimento de metas claras para professores e alunos, e aprimoramento da comunicação e gestão dos recursos escolares.',
        '   - Duração: 2 anos, com ajustes contínuos baseados em dados coletados.',
        '4. Monitoramento e Avaliação de Resultados:',
        '   - Objetivo: Avaliar o impacto das práticas de gestão na aprendizagem e na retenção escolar.',
        '   - Atividades: Avaliações regulares dos alunos em português e matemática, comparando resultados com escolas que não participaram do programa.',
        '   - Duração: Avaliação contínua durante os 2 anos de implementação.',
        '   - Custo Médio por Aluno: R$ 45,00 por ano.'
    ]}
    objetivo="Melhorar a qualidade da educação nas 44 escolas municipais de ensino fundamental de Canoas por meio da implementação do programa 'Ciência e Gestão pela Educação', visando aumentar o aprendizado dos alunos e reduzir a evasão escolar a um custo acessível, replicando os resultados obtidos no Rio de Janeiro."
/>
      </header>
      <ImageCarousel />
    </div>
  );
}

export default App;
