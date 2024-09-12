import './App.css';
import HeaderNav from './HeaderNav';
import Proposta from './components/Proposta';
import ImageUploader from './ImageUploader';
import ImageCarousel from './ImageCarousel';
import AudioPlayer from './components/AudioPlayer';
import FirstBand from './components/FirstBand';

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
        <FirstBand />    
        <Proposta 
    numero="01"
    area="Fiscalização"
    titulo="Fiscalização do Executivo (Prefeitura)"
    proposta="Monitorar e fiscalizar as ações do Executivo, garantindo que cada decisão seja tomada com responsabilidade e em benefício da população."
    comoFunciona={[
        '1. Monitoramento Contínuo:',
        '   - Criação de um sistema de fiscalização que acompanhe as decisões e os gastos da Prefeitura.',
        '   - Transparência: Relatórios periódicos acessíveis à população sobre como o dinheiro público está sendo investido.',
        '2. Proposta de Mecanismos de Acompanhamento:',
        '   - Ferramentas digitais para que os cidadãos possam acompanhar o andamento dos projetos e o uso dos recursos públicos.',
        '3. Participação Popular:',
        '   - Criação de canais diretos para que a população possa enviar dúvidas e sugestões sobre as ações do Executivo.',
    ]}
    objetivo="Assegurar que as ações do Executivo sejam transparentes e estejam sempre voltadas ao benefício da população, permitindo o acompanhamento constante por parte dos cidadãos."
/>

<Proposta 
    numero="02"
    area="Infraestrutura"
    titulo="Acompanhamento das Construções dos Diques do Bairro São Luis e Mato Grande"
    proposta="Fiscalizar de perto as construções dos diques e garantir a dessassoreação dos rios e a dragagem necessária, prevenindo enchentes e melhorando a segurança dos moradores."
    comoFunciona={[
        '1. Fiscalização das Obras:',
        '   - Acompanhamento contínuo do progresso das construções, garantindo que sejam concluídas conforme o cronograma.',
        '   - Verificação da qualidade das obras, assegurando que os materiais e procedimentos sejam adequados para a segurança das famílias.',
        '2. Manutenção dos Rios:',
        '   - Fiscalização periódica da dessassoreação dos rios e da dragagem, com o objetivo de prevenir enchentes nas áreas afetadas.',
        '3. Diálogo com a Comunidade:',
        '   - Manter um canal aberto com os moradores para ouvir suas preocupações e garantir que suas necessidades sejam atendidas durante todo o processo.',
    ]}
    objetivo="Prevenir enchentes, garantir a segurança dos moradores e promover a transparência nas construções dos diques, com a participação ativa da comunidade."
/>

<Proposta 
    numero="03"
    area="Saúde"
    titulo="Saúde Transparente, Povo Presente"
    proposta="Publicação de Listas de Espera para Consultas Especializadas, Cirurgias e Exames Complementares."
    comoFunciona={[
        '1. Publicação das Listas de Espera:',
        '   - Os órgãos gestores do SUS em Canoas irão publicar, de forma clara e acessível, listas de espera no site da prefeitura.',
        '   - As listas serão atualizadas semanalmente para que a população possa acompanhar o andamento.',
        '2. Garantia de Privacidade:',
        '   - Acompanhar o progresso utilizando apenas o número do cartão do SUS, garantindo a privacidade de todos os cidadãos.',
        '3. Fiscalização Popular:',
        '   - Propor a criação da ferramenta Fiscalização Popular, para que a população possa fiscalizar e garantir a transparência no atendimento.',
    ]}
    objetivo="Trazer transparência total ao sistema de saúde e reduzir as desigualdades, assegurando que cada cidadão tenha um atendimento justo e conforme as prioridades legais."
/>

<Proposta 
    numero="04"
    area="Educação"
    titulo="Implantação do Programa Ciência e Gestão pela Educação"
    proposta="Implementar práticas de gestão educacional baseadas em evidências, melhorando o aprendizado e reduzindo a evasão escolar nas escolas de Canoas."
    comoFunciona={[
        '1. Parceria Institucional:',
        '   - Colaboração com universidades renomadas, como a Universidade de Cambridge, para adaptar as práticas de gestão educacional ao contexto local.',
        '2. Capacitação de Gestores e Professores:',
        '   - Treinamento contínuo dos gestores e professores para liderar com excelência, utilizando evidências e dados para melhorar a qualidade do ensino.',
        '3. Monitoramento e Avaliação:',
        '   - Acompanhamento constante dos resultados dos alunos, com avaliações regulares em disciplinas essenciais como português e matemática.',
    ]}
    objetivo="Melhorar a qualidade da educação nas escolas municipais de Canoas, promovendo uma gestão eficiente e capacitada que gere melhores resultados para os alunos."
/>

<Proposta 
    numero="05"
    area="Serviços Públicos"
    titulo="Implantação do Cadatramóvel"
    proposta="Levar os serviços públicos diretamente às áreas de difícil acesso, simplificando a vida da população e melhorando o atendimento ao cidadão."
    comoFunciona={[
        '1. Serviço Móvel:',
        '   - O Cadatramóvel vai se deslocar até as áreas de difícil acesso para oferecer serviços essenciais como emissão de documentos e atendimento social.',
        '2. Desburocratização:',
        '   - Reduzir a burocracia e facilitar o acesso aos serviços, atendendo diretamente a população onde há maior necessidade.',
        '3. Melhoria do Atendimento:',
        '   - Promover um atendimento mais rápido e eficiente, aproximando os serviços públicos da comunidade.',
    ]}
    objetivo="Tornar os serviços públicos mais próximos e acessíveis, atendendo diretamente onde há maior necessidade, melhorando a qualidade de vida dos cidadãos de Canoas."
/>

      </header>
      <AudioPlayer />
    </div>
  );
}

export default App;
