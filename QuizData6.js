const dataLeiDf = [

//tecnologia da informação

{
  subtexto: ["para i de 0 até 4 faça {",
 "v[ i ] = i;",
 "}",
 "para i de 0 até 3 faça {",
 "v[i+1] = v[i+1] + 2*v[i]:",
 "}",
],
  textu: "Considere o trecho de código a baixo. Assuma que o operador [ ] (abre e fecha colchetes) é usado para acessar elementos de vetores (arrays) e que o primeiro elemento do vetor é armazenado no índice 0.",
  question: "Qual o valor de v[4] após a execução do trecho de código acima?",
  options: ["A) 0",
 "B) 6",
 "C) 10",
 "D) 11",
 "E) 26",
  ],
  correct_option: "E) 26",
}, 



{
  subtexto: ["Os números abaixo são inseridos na seguinte ordem:",
 " 10, 15, 8, 3, 4, 12, 20, 9.",],
  referencia: "",
  textu: "Considere uma árvore B de ordem 2 inicialmente vazia",
  question: "Que número(s) compõe(m) o nó raiz?",
  options: ["A) 8",
 "B) 10",
 "C) 4 e 15",
 "D) 8 e 12",
 "E) 9 e 10",
  ],
  correct_option: "D) 8 e 12",
}, 



{
  subtexto: ["Muitos algoritmos de ordenação de números armazenados em array necessitam fazer comparações (verificar se um número é menor, igual ou maior que outro número) e trocas (mudar a posição dos números dentro do array).",
],
  textu: "Assinale a alternativa CORRETA.",
  question: "Considere o problema de ordenar um array contendo N números inteiros. Se for utilizado o Método da Bolha, qual é o menor número possível de trocas para ordenar completamente o array? ",
  options: ["A) N",
 "B) 0 (zero)",
 "C) N / 2 (metade de N)",
 "D) 2 x N (duas vezes N)",
 "E) N! (fatorial de N)",
  ],
  correct_option: "B) 0 (zero)",
}, 



{
  question: "Um Analista precisa desenvolver um aplicativo móvel para celulares com sistemas operacionais Android e iOS. Para isso, poderá utilizar o framework desenvolvido pela equipe do Facebook, que possibilita o desenvolvimento de aplicações mobile utilizando bibliotecas JavaScript para criar interfaces de usuário. Esse framework é conhecido como",
  options: ["A) Ionic Builder.",
 "B) Flutter Script.",
 "C) Cordova.",
 "D) Xamarin Core.",
 "E) React Native.",
  ],
  correct_option: "E) React Native.",
}, 



{
  textu: "A altura de um nó em uma árvore binária é a distância entre o nó e o seu descendente mais afastado. A altura de uma árvore binária é a altura da raiz da árvore.",
  question: "Se a árvore possui somente o nó raiz, então sua altura é 0 (zero). Dentre as árvores binárias que possuem sete nós, a maior altura de árvore possível é:",
  options: ["A) 5",
 "B) 6",
 "C) 7",
 "D) 8",
 "E) 10",
  ],
  correct_option: "B) 6",
}, 



{
  question: "Uma declaração de variável de tipo união, válida em Typescript, é",
  options: ["A) let v:(number|string) = 924;",
 "B) let v:[number, string] => [123,''Tribunal''];",
 "C) et v: string <=> null = 123; ",
 "D) var v:[x=1, y=''Tribunal''];",
 "E) var v:(x:number, y:string) => 145;",
  ],
  correct_option: "A) let v:(number|string) = 924;",
}, 



{
  question: "Para o desenvolvimento de aplicações Web, qual item abaixo contém apenas frameworks/bibliotecas/plataformas que foram desenvolvidas ou que dependem de JavaScript ou TypeScript:",
  options: ["A) Node.js, CSS, Java.",
 "B) React, Node.js, Scala.",
 "C) Angular, React, Vue.js.",
 "D) Angular, Node.js, Java.",
 "E) Java AWT, Angular, Scala.",
  ],
  correct_option: "C) Angular, React, Vue.js.",
}, 



{
  question: "Considere uma estrutura de dados T como sendo uma árvore binária do tipo AVL. Como característica, essa estrutura de dados é uma árvore binária",
  options: ["A) balanceada, em que, para qualquer nó de T, as alturas de suas duas subárvores (esquerda e direita) diferem de até uma unidade.",
 "B) balanceada, em que, para qualquer nó de T, as alturas de suas duas subárvores (esquerda e direita) são sempre idênticas.",
 "C) não balanceada, em que, para qualquer nó de T, as alturas de suas duas subárvores (esquerda e direita) diferem de até uma unidade.",
 "D) não balanceada, em que, para qualquer nó de T, as alturas de suas duas subárvores (esquerda e direita) são sempre idênticas.",
 "E) não balanceada, em que, para qualquer nó de T, as alturas de suas duas subárvores (esquerda e direita) diferem exatamente de uma unidade.",
  ],
  correct_option: "A) balanceada, em que, para qualquer nó de T, as alturas de suas duas subárvores (esquerda e direita) diferem de até uma unidade.",
}, 



{
  question: "É uma propriedade das árvores balanceadas (árvores B)",
  options: ["A) ter como 2 (dois) o limite inferior para o número de chaves que um nó pode conter.",
 "B) somente armazenar informação satélite nas folhas.",
 "C) as folhas poderem ter profundidades diferentes.",
 "D) cada nó interno dever estar pelo menos ¾ completo.",
 "E) não possuir limite superior para o número de chaves que um nó pode conter.",
  ],
  correct_option: "A) ter como 2 (dois) o limite inferior para o número de chaves que um nó pode conter.",
}, 



{
  subtexto: ["PORQUE",
 "Para transformar uma lista simplesmente encadeada em duplamente encadeada basta fazer uma cópia invertida de cada ponteiro (o destino do novo ponteiro passa a ser a origem do ponteiro original e vice-versa) e existe um número constante e limitado de cópias a fazer.",
],
  textu: "Uma lista simplesmente encadeada pode ser transformada em uma lista duplamente encadeada em tempo O(1)  ",
  question: "Analisando as afirmações acima, conclui-se que",
  options: ["A) as duas afirmações são verdadeiras e a segunda justifica a primeira.",
 "B) as duas afirmações são verdadeiras e a segunda não justifica a primeira.",
 "C) a primeira afirmação é verdadeira e a segunda é falsa.",
 "D) a primeira afirmação é falsa e a segunda é verdadeira.",
 "E) as duas afirmações são falsas.",
  ],
  correct_option: "E) as duas afirmações são falsas.",
}, 





{
  textoS: ["Considere a sub-rotina abaixo para responder às questões 20 e 21.",
"algoritimo",
"   declare A, B, C, numérico",
"   leia A",
"   leia B",
"   C <- (A + B) x B",
"   escreva C",
"fim algoritmo",],
  question: "Com base no algoritmo acima, e supondo que o valor fornecido para 'A' na linha 'leia A' seja 3 e o valor fornecido para 'B' na linha 'leia B' seja 4, pode-se afirmar que o valor da variável 'C' na linha 'escreva C' é:",
  options: ["A) 24",
 "B) 28",
 "C) 32",
 "D) 34",
 "E) 43",
  ],
  correct_option: "B) 28",
}, 


{

  question: "Framework para desenvolvimento de aplicações Java EE, que integra tecnologias JSF e EJB 3, entre outras, resultando num framework unificado, completo e sofisticado. Trata-se de",
  options: ["A) EJB 3.",
 "B) Hibernate 3.",
 "C) Jboss Portlets.",
 "D) Jboss Seam 2.",
 "E) JSF.",
  ],
  correct_option: "D) Jboss Seam 2.",
}, 




{

  question: "A respeito das tecnologias Java/J2EE, assinale a alternativa correta.",
  options: ["A) JSF é uma especificação feita pela Sun que visa padronizar o uso de transações distribuídas feitas por aplicativos Java.",
 "B) JTA é uma API da linguagem Java que permite a componentes baseados em Java/J2EE criar, enviar, receber e ler mensagens.",
 "C) JPA é uma tecnologia utilizada no desenvolvimento de aplicações para Web, similar às tecnologias Active Server Pages (ASP) da Microsoft ou PHP",
 "D) JMS é um framework para desenvolver aplicações web de forma ágil, permite que o desenvolvedor crie UIs através de um conjunto de componentes UIs pré-definidos.",
 "E) EJB é uma arquitetura de componentes multi-plataforma para o desenvolvimento de aplicações Java Enterprise Edition (Java EE), multicamadas, distribuídas, escaláveis e orientadas a objetos.",
  ],
  correct_option: "E) EJB é uma arquitetura de componentes multi-plataforma para o desenvolvimento de aplicações Java Enterprise Edition (Java EE), multicamadas, distribuídas, escaláveis e orientadas a objetos.",
}, 

{

  question: "Seja T um texto e C, uma cadeia de caracteres, onde n e m correspondem ao tamanho de T e C, respectivamente. Sobre a busca de C em T, é correto afirmar que o algoritmo de:",
  options: ["A) força bruta (ingênuo) tem o melhor desempenho, por utilizar funções hash.",
 "B) Knuth-Pratt-Morris, no pior caso, tem complexidade de tempo O(log n).",
 "C) Knuth-Pratt-Morris realiza comparações da direita para a esquerda.",
 "D) Rabin-Karp, no melhor caso, tem complexidade de tempo (mn2).",
 "E) Boyer-Moore utiliza as heurísticas do mau caractere e do bom sufixo.",
  ],
  correct_option: "E) Boyer-Moore utiliza as heurísticas do mau caractere e do bom sufixo.",
}, 



{

  question: "Dentre os diversos conceitos observados no cenário da Informática, vimos o que se refere a dados e à informação. Aponte a alternativa que adequadamente exemplifica o significado de “informação”, no contexto computacional.",
  options: ["A) Soma de preço unitário X Qtd.",
 "B) Valor total da fatura: R$-250,00.",
 "C) Medição X Métrica de temperatura",
 "D) Data nascimento: 16/07/61.",
 "E) Métrica distância X Medição: 100km.",
  ],
  correct_option: "B) Valor total da fatura: R$-250,00.",
}, 


{
  question: "Existem alguns termos na língua inglesa na área de TI que não possuem tradução para a língua portuguesa. Na área de TI, qual é o significado do termo patches?",
  options: ["A) Personalização de software.",
 "B) Correção temporária efetuada em um programa.",
 "C) Sistema de comunicação que não requer fios para transportar sinais.",
 "D) Forma de um governo realizar uma transação comercial.",
 "E) Forma de uma organização realizar uma transação comercial.",
  ],
  correct_option: "B) Correção temporária efetuada em um programa.",
}, 



{
  question: "Existem quatro domínios inter-relacionais do COBIT 4.1. Assinale a alternativa que indica o domínio que trata geralmente da questão de gerenciamento “A performance de TI é mensurada para detectar problemas antes que seja muito tarde?”.",
  options: ["A) Planejar e organizar.",
 "B) Adquirir e implementar.",
 "C) Entregar e suportar.",
 "D) Monitorar e avaliar.",
 "E) Implementar e manter",
  ],
  correct_option: "D) Monitorar e avaliar.",
}, 




{
  question: "O modelo de referência CRISP-DM tem seu ciclo de vida estruturado nas seguintes 6 fases:",
  options: ["A) Estruturação do Negócio, Limpeza dos Dados, Indicação das Métricas, Modelagem, Estimativa e Exportação dos Dados",
 "B) Otimização do Negócio, Redução dos Dados, Replicação dos Dados, Modelagem, Importação dos Dados e Backup",
 "C) Entendimento do Negócio, Entendimento dos Dados, Preparação dos Dados, Modelagem, Avaliação e Implantação.",
 "D) Preparação do Negócio, Replicação dos Dados, Indexação dos Dados, Diagramação do Negócio, Estimativa e Organização.",
 "E) Otimização do Negócio, Entendimento dos Dados, Indexação dos Dados, Exportação dos Dados, Organização e Importação dos Dados.",
  ],
  correct_option: "C) Entendimento do Negócio, Entendimento dos Dados, Preparação dos Dados, Modelagem, Avaliação e Implantação.",
}, 




{
  question: "Uma profissional de TI precisa carregar uma grande quantidade de registros de pessoas. O uso mais constante desta estrutura será relacionado ao filtro das entradas pelo prefixo do nome das pessoas. Sabendo deste caso de uso, qual é a melhor escolha de estrutura de dados para facilitar essa filtragem?",
  options: ["A) Fila.",
 "B) Lista ligada.",
 "C) Árvore",
 "D) Tabela hash.",
  ],
  correct_option: "C) Árvore",
}, 



{
  question: "Considere que o presidente de uma empresa tenha feito uma reclamação a respeito de lentidão nos serviços de TI oferecidos por uma prestadora. Nesse caso, o objeto dessa queixa deverá ser classificado como",
  options: ["A) urgência.",
 "B) evento.",
 "C) prioridade.",
 "D) problema.",
 "E) incidente.",
  ],
  correct_option: "E) incidente.",
}, 


{
  question: "Se, na definição das metas de um serviço de TI, tiver sido acordada, entre o provedor e o cliente, a meta de que tal serviço não poderá ficar indisponível por períodos mais longos que um dia, a responsabilidade de garantir o cumprimento dessa meta caberá ao gerenciamento de",
  options: ["A) continuidade de serviço.",
 "B) disponibilidade.",
 "C) capacidade.",
 "D) fornecedor.",
 "E) segurança da informação",
  ],
  correct_option: "A) continuidade de serviço.",
}, 



{
  subtexto: ["    ( ) O modelo de dados implementado em um banco de dados, no formato de tabelas, não armazena dados que representem a temporalidade dos dados de uma organização. ",
 "     ( ) Um dicionário de dados deve prover detalhes dos dados em todos os níveis, conceitual, lógico e físico, de forma que possibilite ao desenvolvedor implementar corretamente o modelo de dados.",
 "     ( ) A implementação do modelo de dados em um SGBD é garantia de que nunca ocorrerá redundância nem inconsistência de dados armazenados nas tabelas.",
 "     ( ) O modelo de dados é parte do projeto de um sistema computacional que armazena dados de uma organização em banco de dados, atendendo às necessidades dos usuários em um conjunto de aplicações.",],
  textu: "A modelagem do banco de dados começa com o projeto de dados que cria um modelo de alto nível de abstração, modelo conceitual, permitindo a comunicação com os usuários na visão que eles têm dos dados de sua organização. Nesse nível, trata-se de objetos e suas associações ou de entidades e seus relacionamentos, mas o modelo para o banco de dados trata de registros, chaves primárias e outros conceitos. Sobre a modelagem do banco de dados, marque V para as afirmativas verdadeiras e F para as falsas.",
  question: "Assinale a sequência correta.",
  options: ["A) V, F, V, F",
 "B) V, F, F, V",
 "C) F, V, V, F",
 "D) F, V, F, V",
  ],
  correct_option: "D) F, V, F, V",
}, 




{
  subtexto: ["    ( ) A manutenção corretiva caracteriza-se por manter o software operacional, mas exige que as causas da falha sejam rastreadas e sanadas, por vezes, até em nível de requisitos.",
 "     ( ) A manutenção adaptativa ocorre para prevenir defeitos que possam existir e consiste em criar um conjunto de testes a serem executados com o sistema em operação.",
 "     ( ) Sistemas legados não apresentam dificuldade de manutenção devido à tecnologia adotada e à documentação, pois a aplicação da engenharia reversa supre essas falhas.",
 "     ( ) Mudanças para melhorar aspectos do sistema e, na documentação, para maior compreensão são classificadas como manutenção perfectiva.",],
  textu: "O sistema baseado em software está operacional quando está sendo utilizado pelos usuários em um ambiente real de produção. Mesmo nesse estágio, o sistema estará sujeito a mudanças ou atualizações que podem ocorrer por diferentes motivos. Sobre essa fase do ciclo de vida de um software, marque V para as afirmativas verdadeiras e F para as falsas.",
  question: "Assinale a sequência correta.",
  options: ["A) V, F, F, F",
 "B) F, V, V, F",
 "C) V, F, F, V",
 "D) F, V, F, V",
  ],
  correct_option: "C) V, F, F, V",
}, 




{
  question: "Um socket TCP possui diversas primitivas (operações) disponíveis para realizar o transporte de dados. Assinale a alternativa que NÃO apresenta uma primitiva válida em um socket TCP.",
  options: ["A) ACCEPT",
 "B) BIND",
 "C) LISTEN",
 "D) SENDMSG",
  ],
  correct_option: "D) SENDMSG",
}, 










{
  question: "O método capitalize da classe String do Python é utilizado para:",
  options: ["A) remover todos os espaços de uma string.",
 "B) verificar se todos os caracteres da string são numéricos.",
 "C) procurar uma substring em uma string retornando seu índice caso seja encontrada.",
 "D) retornar uma cópia de uma string somente com o primeiro caractere em maiúsculo.",
 "E) retornar uma cópia de uma string com todos os caracteres em minúsculo.",
  ],
  correct_option: "D) retornar uma cópia de uma string somente com o primeiro caractere em maiúsculo.",
}, 




{
  question: "Sobre a linguagem de programação PYTHON, marque a alternativa INCORRETA.",
  options: ["A) Python suporta a maioria das técnicas da programação orientada a objetos.",
 "B) Python suporta e faz uso constante de tratamento de exceções como uma forma de testar condições de erro e outros eventos inesperados no programa.",
 "C) As funções são definidas em Phyton utilizando a palavra chave def.",
 "D) A separação de blocos de código em Phyton é feita utilizando a indentação de código.",
 "E) O operador lógico de conjunção (''e'', como em a e b) é &&.",
  ],
  correct_option: "E) O operador lógico de conjunção (''e'', como em a e b) é &&.",
}, 









{
  question: "As máscaras de sub-rede são utilizadas, principalmente, para realizar a divisão do endereço IPv4 da rede e dos hosts. Com base nessa informação, quantos endereços IPv4 válidos podem ser atribuídos a diferentes hosts em uma rede com a máscara de sub-rede 255.255.255.224?",
  options: ["A) 29",
 "B) 31",
 "C) 30",
 "D) 32",
  ],
  correct_option: "C) 30",
}, 


{
  question: "Quando um equipamento recebe um quadro com o endereço MAC de destino com o valor FF:FF:FF:FF:FF:FF, enviará o quadro para",
  options: ["A) todas as portas, sem exceção.",
 "B) todas as demais portas, com exceção da porta de origem do quadro.",
 "C) a porta de origem do quadro.",
 "D) a porta de controle do equipamento.",
  ],
  correct_option: "B) todas as demais portas, com exceção da porta de origem do quadro.",
}, 



{
  subtexto: ["    ",
 "class A:     ",
 "     a = 1",
 "class B(A):     ",
 "     b = 2",
 "class C1(B):     ",
 "     c = 3",
 "class C2(A):     ",
 "     c = 3",
 "class D1(C2)     ",
 "     d = 4",
 "class D2(C1)     ",
 "     d = 4",
 "class D3(B)     ",
 "     d = 4",
 "print isinstence(D3(), B), isinstence(D2(), C2), isinstence(D2(), A), isinstence(D1(), C1)",
],
  referencia: "",
  textu: "Analise o trecho de código em Python a seguir.",
  question: "Considerando o código Python, assinale a alternativa que apresenta a saída do trecho destacado.",
  options: ["A) True False True False",
 "B) False True False True",
 "C) True True False False",
 "D) False False True True",
  ],
  correct_option: "A) True False True False",
}, 




{
  question: "O coletor de lixo em Java, ao determinar que não há mais referências apontadas a um objeto, invoca um método da classe java.lang.Object desse objeto. Assinale a alternativa que apresenta esse método.",
  options: ["A) delete()",
 "B) wait()",
 "C) finalize()",
 "D) notify()",
  ],
  correct_option: "C) finalize()",
}, 




{
  question: "A sobrecarga de operadores é uma técnica muito utilizada em C++. Assinale a alternativa que NÃO apresenta um operador que possa ser sobrecarregado em C++.",
  options: ["A) new",
 "B) new",
 "C) +",
 "D) ?",
  ],
  correct_option: "D) ?",
}, 




{
  question: "Assinale a alternativa que representa, na linguagem de programação C, a estrutura de repetição for que, por meio da variável de controle i, percorre o intervalo do índice 0 até o índice 32 inclusive, na ordem não decrescente.",
  options: ["A) for(i = 32; i > 0; i--)",
 "B) for(i = 32; i > -1; i--)",
 "C) for(i = 32; i > -1; i--)",
 "D) for(i = 0; i < 32; i++)",
  ],
  correct_option: "C) for(i = 32; i > -1; i--)",
}, 


{
  question: "Os comandos de repetição são utilizados em algoritmos para realizar, principalmente, repetição de instruções. Assinale a alternativa que NÃO apresenta comando de repetição.",
  options: ["A) for",
 "B) while",
 "C) switch-case",
 "D) do-while",
  ],
  correct_option: "C) switch-case",
}, 



{
  question: "Um técnico de Tecnologia da Informação do IFCE precisa fazer a instalação do Active Directory (AD) do Windows. Para isso, um pré-requisito dessa configuração é que",
  options: ["A) o servidor do AD possua dual boot Windows e Linux, para permitir a conversação entre os sistemas operacionais.",
 "B) a rede possua, pelo menos, um servidor WINS operacional.",
 "C) a rede esteja ligada à Internet.",
 "D) a rede não possua servidores Linux na mesma rede.",
 "E) a rede possua, pelo menos, um servidor DNS operacional.",
  ],
  correct_option: "E) a rede possua, pelo menos, um servidor DNS operacional.",
}, 




{
  question: "Ao se utilizar a tecnologia RAID 1, em um servidor de rede,",
  options: ["A) existe uma segurança contra perda de dados em hds via espelhamento de dados.",
 "B) o servidor possui segurança complementar contra ataques externos",
 "C) o servidor pode ter seus HDs substituídos, mesmo com o equipamento ligado e sem parar de funcionar.",
 "D) o servidor poderá alternar o uso dos HDs, verificando a temperatura e evitando superaquecimento e perda de dados. ",
 "E) o servidor poderá se reerguer automaticamente, caso aconteça uma indisponibilidade na rede elétrica momentaneamente",
  ],
  correct_option: "E) o servidor poderá se reerguer automaticamente, caso aconteça uma indisponibilidade na rede elétrica momentaneamente",
}, 




{
  subtexto: ["    I. ( ) Banco de dados pode ter tamanho infinito, limitado pelo ambiente onde está instalado.",
 "     II. ( ) Uma entidade forte é aquela que não precisa de outra, para ter sentido completo.",
 "     III. ( ) Entidade fraca é aquela que não precisa de um campo advindo de outra entidade, para que seu sentido fique completo",
 "     IV. ( ) O sistema gerenciador de banco de dados é o responsável por executar as instruções DML no banco de dados.",
],
  textu: "Analise as afirmações em V (verdadeiras) ou F (falsas).",
  question: "A sequência correta é",
  options: ["A) F, V, V, F.",
 "B) V, F, V, V.",
 "C) F, F, V, V",
 "D) V, F, F, V.",
 "E) V, F, F, V.",
  ],
  correct_option: "E) V, F, F, V.",
}, 












{
  question: "A área de TI (Tecnologia da Informação) necessita de um software para o controle de versões para obter a certificação CMMI (Capability Maturity Model Integration). Uma solução livre seria:",
  options: ["A) Mozilla KnockDown",
 "B) Apache OverThrow",
 "C) Oracle Subversion",
 "D) Oracle KnockDown",
 "E) Apache Subversion",
  ],
  correct_option: "E) Apache Subversion",
}, 


{
  subtexto: ["    I. Comutação.",
 "     II. Flutuação.",
 "     III. Confiabilidade",
 "     IV. Largura de Banda.",
 "     V. Retardo.",],
  textu: "Lendo o clássico livro de redes do Tanenbaum encontramos que são especificamente requisitos, ou parâmetros, básicos de Qualidade de Serviço (QoS):",
  question: "Estão corretos os itens:",
  options: ["A) I, II e III, apenas",
 "B) I, II, III e IV, apenas",
 "C) I, III, IV e V, apenas",
 "D) I, II, IV e V, apenas",
 "E) II, III, IV e V, apenas",
  ],
  correct_option: "E) II, III, IV e V, apenas",
}, 



{
  question: "O conhecimento de gerenciamento de projetos, descrito no Guia PMBOK, em sua 5ª edição, consiste em dez áreas de conhecimento. Assinale a alternativa que NÃO apresenta uma dessas áreas do conhecimento:",
  options: ["A) Gerenciamento/Gestão de riscos do projeto",
 "B) Gerenciamento/Gestão de implementação do projeto",
 "C) Gerenciamento/Gestão de custos do projeto",
 "D) Gerenciamento/Gestão de integração do projeto",
 "E) Gerenciamento/Gestão de tempo do projeto",
  ],
  correct_option: "B) Gerenciamento/Gestão de implementação do projeto",
}, 




{
  question: "A organização está implementando BPM (Business Process Management) na empresa. Para tanto, é correto, tecnicamente, que no mapeamento de processos:",
  options: ["A) inicialmente deve-se mapear os processos existentes (AS-IS) e depois como ele será no futuro, após as melhorias (TO-BE)",
 "B) seja implementado simultaneamente tanto os processos TO-BE como também os processos AS-IS",
 "C) se possa mapear de forma indiferente inicialmente pelo TO-BE e depois pelo AS-IS, ou vice-versa",
 "D) inicialmente deve-se mapear os processos existentes (TO-BE) e depois como ele será no futuro, após as melhorias (AS-IS)",
 "E) seja mapeado simultaneamente tanto os processos que estejam na condição de TO-BE como também os que estejam na condição de AS-IS",
  ],
  correct_option: "A) inicialmente deve-se mapear os processos existentes (AS-IS) e depois como ele será no futuro, após as melhorias (TO-BE)",
}, 




{
  question: "Um sistema de comunicação alternativa é um grupo integrado de componentes que inclui os símbolos, os recursos, as estratégias e as técnicas utilizadas pelo indivíduo para auxiliar o desenvolvimento do processo comunicativo. Considerando o componente recursos, assinale a alternativa correta.",
  options: ["A) São representações visuais, auditivas ou táteis de um conceito e podem ou não necessitar de recursos externos para serem utilizados.",
 "B) Devem envolver atividades bem-estruturadas e prazerosas como jogos, brincadeiras de faz-de-conta e experiências na comunidade, como passeios.",
 "C) As miniaturas compreendem aqueles recursos similares ao que representam em tamanho menor.",
 "D) As pessoas que não conseguem apontar não podem usar pranchas de comunicação alternativa e devem ser treinadas para usar Libras.",
 "E) São os objetos ou equipamentos utilizados para transmitir as mensagens, como, por exemplo, o eye-gaze.",
  ],
  correct_option: "E) São os objetos ou equipamentos utilizados para transmitir as mensagens, como, por exemplo, o eye-gaze.",
}, 



{
  question: "Ao editar um texto com o Edivox é possível agregar marcas de formatação com o objetivo de:",
  options: ["A) garantir que, quando o texto for impresso pelo Listavox, apresente uma impressão de maior qualidade.",
 "B) possibilitar que, quando o texto for convertido em wav, apresente qualidade de som superior.",
 "C) garantir que, quando o texto for convertido em mp3, apresente qualidade de som superior.",
 "D) garantir que, quando o texto for convertido em jpg, não apresente superposição de linhas na imagem.",
 "E) possibilitar que, quando este texto for impresso a partir do Word, apresente impressão de maior qualidade.",
  ],
  correct_option: "E) possibilitar que, quando este texto for impresso a partir do Word, apresente impressão de maior qualidade.",
}, 


{
  question: "Para um estudante cego acessar e navegar em um livro digital disponível no formato MECdaisy, o procedimento mais simples é:",
  options: ["A) com a ajuda de um leitor de telas, acessar, pelo teclado, o diretório que contém o livro e em seguida abri-lo através de um navegador de Internet.",
 "B) transformá-lo para TXT através do utilitário Daisyvox do sistema Dosvox e fazer a leitura com o Edivox ou Levox.",
 "C) com a ajuda de um leitor de telas, descompactá- lo para ter acesso ao livro, lendo-o em seguida com qualquer editor de textos.",
 "D) usar a função control-w do Edivox para movê- -lo para o diretório de trabalho do Dosvox e acessá-lo pela opção de arquivos do Dosvox.",
 "E) localizar e abrir o livro através das opções convenientes dos tocadores MECdaisy ou Dorina Daisy Reader.",
  ],
  correct_option: "E) localizar e abrir o livro através das opções convenientes dos tocadores MECdaisy ou Dorina Daisy Reader.",
}, 



{
  question: "Um famoso site de vendas sempre envia ao cliente que acabou de comprar um item X, ou o está analisando, a seguinte frase: Pessoas que compraram o item X também compraram o Y. Para isso, o site deve estar aplicando a técnica de Data Mining denominada",
  options: ["A) profiling.",
 "B) coocorrência.",
 "C) regressão múltipla.",
 "D) regressão logística.",
 "E) classificação.",
  ],
  correct_option: "B) coocorrência.",
}, 




{
  question: "As ferramentas OLAP − Online Analytical Processing",
  options: ["A) utilizam operações drill para navegar nas dimensões.",
 "B) são as aplicações às quais os usuários finais têm acesso para fazerem consultas e análise a partir dos dados armazenados em bancos de dados transacionais (OLTP).",
 "C) utilizam operações slice and dice para modificar o nível de granularidade da consulta.",
 "D) possibilitam a análise multidimensional para a descoberta de tendências e cenários, de forma a transformar dados de um Data Warehouse em informação estratégica.",
 "E) representam os dados como tabelas ao invés de dimensões.",
  ],
  correct_option: "D) possibilitam a análise multidimensional para a descoberta de tendências e cenários, de forma a transformar dados de um Data Warehouse em informação estratégica.",
}, 




{
  textu: "Um Técnico em Informática participou de uma reunião na qual estavam presentes o Product Owner, o Scrum Master e todo o Scrum Team, do qual ele fazia parte. Durante esta reunião, o Product Owner descreveu as funcionalidades de maior prioridade para a equipe. Muitos membros da equipe fizeram perguntas com o objetivo de facilitar o trabalho de desmembrar as funcionalidades em tarefas técnicas, após a reunião, pois elas fariam parte do Sprint Backlog.",
  question: "Pelas características da reunião, o Técnico participou de uma",
  options: ["A) Daily Scrum.",
 "B) Sprint Retrospective Meeting.",
 "C) Sprint Review Meeting.",
 "D) Sprint Planning Meeting",
 "E) Sprint Backlog Meeting.",
  ],
  correct_option: "D) Sprint Planning Meeting",
}, 







































{
  question: "Considere que um Técnico de Informática esteja participando de um projeto que prevê a necessidade do parecer e da autorização de uma agência de regulação ambiental e que envolve pelo menos 10 profissionais qualificados. De acordo com o Gerenciamento de Riscos do PMBOK 5a edição,",
  options: ["A) o risco de um projeto é uma condição incerta que, se ocorrer, sempre provocará um efeito negativo em um ou mais dos quatro objetivos do projeto: cronograma, custo, licença e qualidade.",
 "B) os riscos a serem considerados não incluem a possibilidade da autorização ambiental ser desnecessária ou que haja mais de 10 profissionais disponíveis para atuar no projeto.",
 "C) as condições de risco podem incluir aspectos como práticas imaturas e falta de sistemas integrados de gerenciamento de projeto, vários projetos simultâneos ou dependência de participantes externos fora do controle direto do projeto.",
 "D) o fato de a agência de regulação demorar mais do que o planejado para conceder a autorização ambiental é classificado como apetite do impacto do risco.",
 "E) como os riscos do projeto não podem existir no momento em que o projeto é iniciado, deve-se avançar em outros aspectos do projeto.",
  ],
  correct_option: "C) as condições de risco podem incluir aspectos como práticas imaturas e falta de sistemas integrados de gerenciamento de projeto, vários projetos simultâneos ou dependência de participantes externos fora do controle direto do projeto.",
}, 


{
  question: "Embora as empresas possuam responsáveis de TI que participam do seu planejamento estratégico, é comum existir uma lacuna entre o entendimento técnico voltado para a prestação de serviços e a visão de negócio. A ITIL v3 atualizada em 2011, fornece um processo que procura descrever a visão genérica de gestão e da estratégia voltadas para a perspectiva, posicionamento e planos da TI, para melhor definir e manter os serviços de TI. Este processo cuida da avaliação estratégica e analisa a situação atual em que o provedor de serviços de TI se encontra, utilizando uma técnica de análise que funciona como um instrumento que ajuda a equipe de TI a identificar restrições que possam impactar a qualidade dos serviços e a satisfação dos clientes com sua entrega, além de identificar oportunidades de melhorias nos serviços. O processo e a técnica de análise são, respectivamente, Gerenciamento",
  options: ["A) do Relacionamento com o Negócio  Análise SWOT.",
 "B) Estratégico para os Serviços de TI  Análise SWOT.",
 "C) de Continuidade de Serviços de TI  Análise BSC.",
 "D) do Nível de Serviços de TI  Análise BSC.",
 "E) Técnico da Operação de TI  Análise BSC",
  ],
  correct_option: "B) Estratégico para os Serviços de TI  Análise SWOT.",
}, 



{
  question: "Cada organização opera em um contexto diferente, determinado por fatores externos e internos, exigindo um sistema de governança e gestão customizado. O COBIT 5 oferece um mecanismo de tradução das necessidades dos stakeholders em metas corporativas específicas, personalizadas e exequíveis, apoiando o alinhamento entre as necessidades corporativas e os serviços, objetivos e soluções de TI, denominado",
  options: ["A) cascata de objetivos.",
 "B) habilitadores da governança.",
 "C) integrador de modelos ou modelo único integrado",
 "D) abordagem holística.",
 "E) EDM − Evaluate, Direct and Monitor",
  ],
  correct_option: "A) cascata de objetivos.",
}, 




{
  subtexto: ["$s = ''CESGRANRIO'';",
 "echo($s);",
 "$c=mysql_connect(''servidor'', ''user'', ''senha'');",
 "     or die (''Erro.'');",
 "$db = mysql_select_db(''funcionarios'')",
 "     or die (''Erro.'');",],
  textu: "Considere o fragmento de código abaixo.",
  question: "Que linguagem de programação é utilizada nesse código?",
  options: ["A) JAVA",
 "B) C",
 "C) VBScript",
 "D) PHP",
 "E) Delphi",
  ],
  correct_option: "E) Delphi",
}, 




{
  question: "A função fopen ( ), utilizada em um script PHP, que recebe o argumento de modo igual a 'a+', abre um arquivo existente para",
  options: ["A) leitura e gravação e coloca o ponteiro no final do arquivo, depois de todos os dados.",
 "B) leitura e gravação, deleta todo o conteúdo e coloca o ponteiro no início do arquivo.",
 "C) leitura e gravação e coloca o ponteiro no início do arquivo, antes de qualquer dado.",
 "D) somente gravação e coloca o ponteiro no final do arquivo, depois de todos os dados.",
 "E) somente gravação, deleta todo o conteúdo e coloca o ponteiro no início do arquivo.",
  ],
  correct_option: "A) leitura e gravação e coloca o ponteiro no final do arquivo, depois de todos os dados.",
}, 


{
  question: "Um conteúdo será considerado como um código PHP pelo interpretador se estiver dentro do par de tags",
  options: ["A) <php>   </php>",
 "B) <?php   ?>",
 "C) <?php   php?>",
 "D) <?>   </?>",
 "E) <script language = PHP>   ?>",
  ],
  correct_option: "B) <?php   ?>",
}, 


{
  subtexto: ["“Atualmente, no contexto do Big Data e Data Analytics, faz-se referência às características enunciadas por pesquisadores e produtores de soluções como sendo um conjunto de cinco Vs. Originalmente, a definição clássica de Big Data fez referência a três Vs fundamentais: _____, _____ e _____ de dados que demandam formas inovadoras e rentáveis de processamento da informação, para melhor percepção e tomada de decisão.”    ",
],
  textu: "Leia o fragmento a seguir",
  question: "Assinale a opção cujos itens completam corretamente as lacunas do fragmento acima, na ordem apresentada.",
  options: ["A) valor – volatilidade – volume.",
 "B) valor – variança – veracidade.",
 "C) validade – velocidade – vocabulário.",
 "D) valor – variabilidade – viscosidade.",
 "E) variedade – velocidade – volume. ",
  ],
  correct_option: "E) variedade – velocidade – volume. ",
}, 



{
  question: "Acerca de big data, assinale a opção correta.",
  options: ["A) A utilização de big data nas organizações não é capaz de transformar os seus processos de gestão e cultura.",
 "B) Sistemas de recomendação são métodos baseados em computação distribuída, que proveem uma interface para programação de clusters, a fim de recomendar os tipos certos de dados e processar grandes volumes de dados.",
 "C) Pode-se recorrer a software conhecidos como scrapers para coletar automaticamente e visualizar dados que se encontram disponíveis em sítios de navegabilidade ruim ou em bancos de dados difíceis de manipular.",
 "D) As ações inerentes ao processo de preparação de dados incluem detecção de anomalias, deduplicação, desambiguação de entradas e mineração de dados",
 "E) O termo big data se baseia em cinco Vs: velocidade, virtuosidade, volume, vantagem e valor.",
  ],
  correct_option: "C) Pode-se recorrer a software conhecidos como scrapers para coletar automaticamente e visualizar dados que se encontram disponíveis em sítios de navegabilidade ruim ou em bancos de dados difíceis de manipular.",
}, 




{
  question: "A versão do Android feita, a princípio, apenas para tablets, que apresenta melhorias nos recursos multitarefa e nos widgets, é conhecida como",
  options: ["A) Cupcake.",
 "B) Frozen Yogourt",
 "C) Gingerbread.",
 "D) Honeycomb.",
 "E) Ice Cream.",
  ],
  correct_option: "D) Honeycomb.",
}, 




{
  subtexto: ["( ) Uma “atividade” do Android é tanto uma unidade de interação do usuário quanto uma unidade de execução.    ",
 "( ) Um programa Android interativo é iniciado pela criação de subclasses da classe Activity.     ",
 "( ) A classe ContentProvider do Android é utilizada em tarefas de segundo plano, que podem estar ativas, mas não visíveis na tela.     ",
 "( ) A classe Service do Android possui o quarteto de atividades básicas para inserção, consulta, atualização e exclusão.     ",],
  referencia: "",
  textu: "Em relação aos principais componentes de um aplicativo Android, analise os itens a seguir, marcando com (V) a assertiva verdadeira e com (F) a assertiva falsa.",
  question: "A sequência CORRETA, de cima para baixo, é:",
  options: ["A) V, F, F, V.",
 "B) F, V, F, V.",
 "C) F, V, V, F.",
 "D) V, V, F, F.",
 "E) V, V, V, V.",
  ],
  correct_option: "D) V, V, F, F.",
}, 















































{
  subtexto: ["    for ($x = 0; $x <= “5“; $x++)",
],
  textu: "Dado o loop PHP:",
  question: "A variável $x assumirá os valores  ",
  options: ["A) 1, 3 e 5.",
 "B) 0, 1, 2, 3 e 4.",
 "C) 1, 2, 3, 4 e 5.",
 "D) 0, 2 e 4.",
 "E) 0, 1, 2, 3, 4 e 5.",
  ],
  correct_option: "E) 0, 1, 2, 3, 4 e 5.",
}, 



{
  question: "Assinale a alternativa que apresenta o conceito de Big Data.",
  options: ["A) Conjuntos de dados de grande volume que se utilizam de ferramentas especiais de processamento, pesquisa e análise, e que podem ser aproveitados no tempo necessário, com precisão e grande velocidade.",
 "B) São bancos de dados de fácil acesso e rápida velocidade, operados como computadores pessoais.",
 "C) Manuseio de informações necessárias às empresas e aos negócios do mundo moderno, que podem ser armazenadas em computadores pessoais, utilizando-se a técnica de nuvem de dados.",
 "D) São apenas grandes volumes de dados que precisam ainda ser mais bem aproveitados pelo mundo corporativo.",
 "E) Refere-se a um grande número de computadores pessoais (PC) interligados entre si em uma grande rede de informação.",
  ],
  correct_option: "A) Conjuntos de dados de grande volume que se utilizam de ferramentas especiais de processamento, pesquisa e análise, e que podem ser aproveitados no tempo necessário, com precisão e grande velocidade.",
}, 




{
  subtexto: ["I. Xcode é o ambiente nativo da Apple para desenvolvimento de aplicativos para iOS.    ",
 "II. Objective-C é a linguagem de desenvolvimento de aplicativos para iOS.     ",
 "III. A classe NSObject é a classe raiz das principais hierarquias de classes em Objective-C.     ",],
  textu: "Analise as seguintes afirmativas sobre fundamentos para desenvolvimento de aplicações móveis para iOS.  ",
  question: "Estão CORRETAS as afirmativas:",
  options: ["A) I, II e III.",
 "B) I e II, apenas.",
 "C) I e III, apenas.",
 "D) II e III, apenas.",
 "E) Nenhuma das alternativas",
  ],
  correct_option: "A) I, II e III.",
}, 




{
  question: "Uma organização que lida com um grande volume de dados estruturados e não estruturados objetiva organizar esses dados para encontrar insights necessários para o negócio usando técnicas de aprendizagem de máquina. Terá maiores chances de sucesso para atingir seus objetivos investindo na área de",
  options: ["A) Data Science.",
 "B) Business Intelligence.",
 "C) Big Data.",
 "D) Governança de Dados.",
 "E) Qualidade de Dados.",
  ],
  correct_option: "C) Big Data.",
}, 




{
  question: "Seja T um texto e C, uma cadeia de caracteres, onde n e m correspondem ao tamanho de T e C, respectivamente. Sobre a busca de C em T, é correto afirmar que o algoritmo de:",
  options: ["A) força bruta (ingênuo) tem o melhor desempenho, por utilizar funções hash.",
 "B) Knuth-Pratt-Morris, no pior caso, tem complexidade de tempo O(log n).",
 "C) Knuth-Pratt-Morris realiza comparações da direita para a esquerda.",
 "D) Rabin-Karp, no melhor caso, tem complexidade de tempo (mn2).",
 "E) Boyer-Moore utiliza as heurísticas do mau caractere e do bom sufixo.",
  ],
  correct_option: "E) Boyer-Moore utiliza as heurísticas do mau caractere e do bom sufixo.",
}, 


{
  question: "Considerando-se a análise assintótica (Notação Big O), qual é a complexidade do caso médio do algoritmo de ordenação chamado de Ordenação por Inserção?",
  options: ["A) O(n²)",
 "B) O(1)",
 "C) O(n)",
 "D) O(n log n)",
 "E) O(log n)",
  ],
  correct_option: "A) O(n²)",
}, 



{
  question: "Sobre os conceitos de domínio, atributo e relação, é correto afirmar que:",
  options: ["A) um domínio é definido por um conjunto de atributos pertencentes a uma relação;",
 "B) domínio e atributo representam um único conceito semântico em uma dada relação;",
 "C) um atributo é considerado chave se pertencer ao domínio que define uma relação;",
 "D) um atributo representa o uso de um domínio em uma relação;",
 "E) uma relação mapeia um domínio através de seus atributos.",
  ],
  correct_option: "D) um atributo representa o uso de um domínio em uma relação;",
}, 




{
  question: "Abaixo estão elencadas características inerentes à 1a, 2a e 3a formas normais, utilizando-se os conceitos de tabelas, linhas e colunas. A característica que define exclusivamente a 2a FN, diferenciando-a da 1a FN, e não caracterizando-a como 3a FN, é:",
  options: ["A) nenhuma coluna não-chave depende parcialmente da chave primária;",
 "B) todas as colunas contêm somente valores atômicos;",
 "C) nenhuma coluna não-chave é determinada transitivamente pela chave primária;",
 "D) todas as linhas da tabela são unívocas;",
 "E) nenhuma coluna não-chave é funcionalmente independente da chave primária.",
  ],
  correct_option: "A) nenhuma coluna não-chave depende parcialmente da chave primária;",
}, 




{
  subtexto: ["I. MongoDB é um banco de dados baseado em documentos, e esses documentos são codificados como BSON – um formato binário do JSON.    ",
 "II. No MongoDB, não existem tabelas, chaves primárias e nem chaves estrangeiras.     ",
 "III. No MongoDB, o equivalente a cada linha de uma tabela do modelo relacional chama-se Collections.     ",],
  textu: "Sobre o Banco de Dados MongoDB, analise as afirmações abaixo:",
  question: "Está(ão) correta(s) a(s) afirmativa(s)",
  options: ["A) I, apenas.",
 "B) I e II, apenas.",
 "C) II e III, apenas.",
 "D) I, II e III.",
 "E) Nenhuma das alternativas",
  ],
  correct_option: "B) I e II, apenas.",
}, 












































































{
  question: "A respeito dos arquivos que compõem um projeto android, assinale a opção correta.",
  options: ["A) O arquivo mainActivity.java contém os métodos básicos de acesso ao android e às bibliotecas necessárias para que os aplicativos sejam executados.",
 "B) O arquivo persistent.xml, criado por padrão no diretório raiz da aplicação, é utilizado para o armazenamento de constantes utilizadas no aplicativo",
 "C) Cada atividade criada em um aplicativo deve ser declarada no arquivo activity.xml.",
 "D) As permissões necessárias, bem como o intent-filters, os receptores e as referências a outros arquivos ficam armazenadas no arquivo R.java",
 "E) O arquivo main.xml define a interface de usuário para sua atividade",
  ],
  correct_option: "E) O arquivo main.xml define a interface de usuário para sua atividade",
}, 


{
  question: "Para desenvolver aplicações para iOS é necessário ter instalado o XCode e o SDK para iOS. Para escrever o software, utiliza-se a linguagem Objective-C. Nesta linguagem, as declarações de variáveis são feitas de forma semelhante a outras linguagens orientadas a objetos, mas as chamadas de métodos são colocadas entre",
  options: ["A) aspas",
 "B) colchetes.",
 "C) parênteses.",
 "D) chaves.",
 "E) sinais de menor e maior.",
  ],
  correct_option: "B) colchetes.",
}, 



{
  subtexto: ["    I. Dados estruturados.",
 "     II. Dados semiestruturados",
 "     III. Dados não estruturados.",
 "     IV. Dados brutos, não processados.",
 "     V. Esquemas de dados gerados no momento da gravação.",],
  referencia: "",
  textu: "As soluções em Big Data Analytics, usadas, por exemplo, pela Fazenda Pública principalmente para evitar sonegações de tributos, trabalham com algoritmos complexos, agregando dados de origens diversas, relacionando-os e gerando conclusões fundamentais para a tomada de decisões. Na execução dessas análises pelos auditores, considere:",
  question: "Sobre um repositório de armazenamento, que contenha uma grande quantidade de dados a ser examinada, deverão ser utilizados APENAS os que constam de",
  options: ["A) I, III e IV.",
 "B) I, II, III e V.",
 "C) III, IV e V.",
 "D) I, II, III e IV.",
 "E) I, II, IV e V.",
  ],
  correct_option: "D) I, II, III e IV.",
}, 




{
  question: "São algoritmos de ordenação, cuja complexidade é O(n log n), EXCETO:",
  options: ["A) Shellsort.",
 "B) Quicksort.",
 "C) Heapsort.",
 "D) Radixsort.",
  ],
  correct_option: "D) Radixsort.",
}, 




{
  subtexto: [" I. Em modelos de aprendizado de máquina do tipo classificação a ideia é prever variáveis categóricas, e numéricas.   ",
 " II. Um exemplo básico de aprendizado de máquina supervisionado por classificação é o uso da regressão logística.    ",
 " III. Os modelos de regressão não buscam encontrar como uma variável se comporta na medida em que outra variável sofre oscilações.    ",
],
  textu: "Sobre os modelos de aprendizagem de máquina supervisionada, analise as assertivas abaixo e assinale a alternativa correta.",
  question: " IV. Nos modelos de aprendizagem de máquina supervisionado, não temos uma variável específica a ser respondida, pois estamos apenas buscando encontrar os indivíduos, itens ou elementos semelhantes. ",
  options: ["A) Todas estão corretas.",
 "B) Todas estão incorretas.",
 "C) Apenas II está correta. ",
 "D) Apenas I e II estão corretas. ",
 "E) Apenas III e IV estão corretas.",
  ],
  correct_option: "C) Apenas II está correta. ",
}, 



{
  question: "Um dos desdobramentos de big data é o big data analytics, que se refere aos softwares capazes de tratar dados para transformá-los em informações úteis às organizações. O big data analytics difere do business intelligence por",
  options: ["A) priorizar o ambiente de negócios em detrimento de outras áreas.",
 "B) analisar dúvidas já conhecidas para as quais se deseje obter resposta.",
 "C) analisar o que já existe e o que está por vir, apontando novos caminhos.",
 "D) dar enfoque à coleta, à transformação e à disponibilização dos dados.",
 "E) analisar o que já existe, definindo as melhores hipóteses.",
  ],
  correct_option: "C) analisar o que já existe e o que está por vir, apontando novos caminhos.",
}, 


{
  question: "Sobre a análise de algoritmos, é CORRETO afirmar que",
  options: ["A) o algoritmo MERGE-SORT é um algoritmo que recebe como entrada duas listas ordenadas e retorna a junção ordenada delas",
 "B) o BUBBLE-SORT e o algoritmo de ordenação por inserção fazem, em média, o mesmo número de comparações.",
 "C) o algoritmo BUBBLE-SORT é um exemplo de algoritmo de ordenação que utiliza a técnica dividir para conquistar.",
 "D) tanto o algoritmo QUICKSORT quanto o de ordenação por inserção tem complexidade O(n x log n).",
 "E) o desempenho na execução do algoritmo QUICK-SORT independe da escolha do pivô.",
  ],
  correct_option: "B) o BUBBLE-SORT e o algoritmo de ordenação por inserção fazem, em média, o mesmo número de comparações.",
}, 



{
  subtexto: ["I - Dicionários de dados auxiliam a manter a integridade de sistemas;",
 "II - Dicionários de dados facilitam a integração entre diferentes sistemas;",
 "III - Dicionários de dados determinam os requisitos do sistema;",
 "IV - Dicionários de dados auxiliam a tarefa de manutenção de sistemas.",],
  textu: "Observe as seguintes afirmativas:",
  question: "As afirmativas corretas são:",
  options: ["A) I, II e III",
 "B) I, II e IV",
 "C) I, III e IV",
 "D) II, III e IV",
 "E) todas",
  ],
  correct_option: "B) I, II e IV",
}, 




{
  question: "De acordo com a arquitetura ANSI/SPARC um Sistema de Banco de Dados divide-se em três níveis gerais: interno, conceitual e externo. É correto afirmar que:",
  options: ["A) o nível interno é responsável pelo mapeamento entre os níveis externo e conceitual;",
 "B) o nível externo é o mais próximo ao armazenamento físico;",
 "C) o nível conceitual é o mais próximo ao usuário;",
 "D) o nível conceitual esconde os detalhes sobre o armazenamento físico dos dados;",
 "E) existe uma única visão externa no nível externo.",
  ],
  correct_option: "D) o nível conceitual esconde os detalhes sobre o armazenamento físico dos dados;",
}, 




{
  question: "s componentes gerenciadores de layout no Android, também chamados de ViewGroups, são classes que orientam o posicionamento dos componentes visuais na tela do dispositivo móvel. O gerenciador de layout",
  options: ["A) FullLayout é usado quando um componente deve preencher toda a área da tela. Ele reserva um espaço que será utilizado por um único componente. Se mais de um componente for adicionado, haverá sobreposição ao anterior.",
 "B) FlowLayout é utilizado quando os componentes devem ser apresentados na tela no formato linear (um componente após o outro), de forma horizontal ou vertical",
 "C) AbsoluteLayout permite adicionar componentes na tela, sendo que a posição destes leva em consideração a posição de outro componente adicionado ou do gerenciador de layout no qual ele se encontra.",
 "D) GridLayout permite dividir a área do container como se fosse uma grade formada por linhas e colunas, cujo cruzamento constitui uma célula. Não é permitido definir células vazias ou que uma célula ocupe mais de uma linha ou coluna.",
 "E) TableLayout é utilizado para organizar os componentes no formato linha/coluna, sendo um dos mais utilizados para apresentar formulários de cadastros em aplicativos móveis.",
  ],
  correct_option: "E) TableLayout é utilizado para organizar os componentes no formato linha/coluna, sendo um dos mais utilizados para apresentar formulários de cadastros em aplicativos móveis.",
}, 






































{
  question: "Em uma aplicação Android que utiliza um banco de dados SQLite se deseja acessar os métodos delete, update, insert, query e execSQL para executar operações no banco de dados. Para acessar estes métodos será necessária uma variável da classe",
  options: ["A) SQLiteDatabase",
 "B) SQLiteStatement.",
 "C) PreparedSQLiteStatement.",
 "D) SQLiteDatabaseManager",
 "E) SQLiteDatabaseTransaction",
  ],
  correct_option: "A) SQLiteDatabase",
}, 


{
  textu: "Um método de busca bastante utilizado, conhecido como hash, baseia-se na utilização que mapeia chaves em endereços de memória, de modo que os dados associados a cada chave possam ser rapidamente localizados e lidos. Quando há conflitos de localização, algum algoritmo de separação é adotado.",
  question: "Considere uma tabela hash armazenada em um arquivo no disco rígido. Supondo-se que a mesma possua uma função de hash razoavelmente protegida de conflitos, o número médio de acessos ao disco, necessários para localizar uma chave em um universo de N chaves, é mais próximo de",
  options: ["A) N log2 (N)",
 "B) log2 (N)",
 "C) N ÷ 2",
 "D) N ÷ log2(N)",
 "E) 2",
  ],
  correct_option: "E) 2",
}, 



{

  question: "As linguagens usadas para definir e manipular bancos de dados, respectivamente, são:",
  options: ["A) CDL e CML",
 "B) DDL e DML",
 "C) CDL e DML",
 "D) CML e SGML",
 "E) DDL e SGML",
  ],
  correct_option: "B) DDL e DML",
}, 




{
  question: "Em geral, as técnicas usadas pelos SGBD.s para melhorar o desempenho no acesso a um banco de dados baseiam-se nas consultas mais freqüentes. Entre as técnicas usadas, pode-se citar:",
  options: ["A) agrupamento, mapeamento físico e pivoteamento;",
 "B) agrupamento, compressão e mapeamento físico;",
 "C) compressão, indexação e pivoteamento;",
 "D) agrupamento, compressão e indexação;",
 "E) indexação, mapeamento físico e pivoteamento.",
  ],
  correct_option: "D) agrupamento, compressão e indexação;",
}, 




{

  question: "Apesar dos incrementos das capacidades de memória e de processamento dos dispositivos móveis, limites são sempre atingidos em razão da demanda crescente dos usuários por aplicativos com as mais variadas funções, muitas vezes envolvendo o uso de múltiplos sensores e recursos gráficos de alta qualidade.  Caso o conjunto de aplicativos utilizados exceda o total de memória disponível, o sistema operacional Android irá",
  options: ["A) solicitar ao usuário que termine um dos aplicativos em uso.",
 "B) terminar automaticamente o aplicativo de menor prioridade.",
 "C) terminar automaticamente o aplicativo de menor prioridade.",
 "D) terminar todos os aplicativos.",
 "E) terminar apenas o aplicativo em uso.",
  ],
  correct_option: "B) terminar automaticamente o aplicativo de menor prioridade.",
}, 





{
  question: "Sobre o banco de dados MongoDB, é INCORRETO afirmar:",
  options: ["A) MongoDB é um banco de dados orientado a documentos com estrutura semelhante a objetos do tipo JSON.",
 "B) As operações no MongoDB são feitas através da execução de funções.",
 "C) No MongoDB, os schemas são dinâmicos, sendo possível em um mesmo documento ter dados com diferentes campos.",
 "D) No MongoDB, pode ser utilizada a linguagem SQL para fazer consultas de dados.",
  ],
  correct_option: "D) No MongoDB, pode ser utilizada a linguagem SQL para fazer consultas de dados.",
}, 


{
  question: "Uma _________ B+ é uma estrutura de dados muito utilizada em banco de dados e sistemas de arquivos. Que palavra completa a frase corretamente?",
  options: ["A) Pilha.",
 "B) Árvore.",
 "C) Lista.",
 "D) Matriz.",
 "E) Fila.",
  ],
  correct_option: "B) Árvore.",
}, 



{
  textoS: ["Considere agora, a execução dos seguintes percursos sobre a estrutura após a inserção das chaves.    ",
 "    I - Um percurso em pré-ordem seria: { Ada, Bia, Cris, Lia, Ana, Mel, Rosa, Rita, Val, Sol, Lua, Lina} ",
 "    II - Um percurso em ordem simétrica seria: {Val, Sol, Rosa, Rita, Mel, Lua, Lina, Lia, Cris, Bia, Ana, Ada} ",
 "    III - Um percurso em nível seria: {Lina, Ana, Lua, Ada, Lia, Sol, Cris, Rita, Val, Bia, Mel, Rosa} ",
 "     IV - Um percurso em pós-ordem seria: {Lina, Ana, Ada, Lia, Cris, Bia, Lua, Sol, Rita, Mel, Rosa, Val}",
],
  textu: "Insira as chaves {Lina, Ana, Lia, Ada, Lua, Sol, Cris, Bia, Rita, Mel, Rosa, Val} em uma árvore binária de busca (considere que a árvore está inicialmente vazia).",
  question: "Estão corretos apenas os percursos indicados em:",
  options: ["A) I e II.",
 "B) II e III.",
 "C) I, II e III.",
 "D) I, II e IV.",
 "E) II, III e IV.",
  ],
  correct_option: "B) II e III.",
}, 




{
  textoS: ["    ",
 "     ",
 "     ",],
  referencia: "",
  textu: "",
  question: "Dadas as variáveis numéricas A e B, contendo os valores 2 e 6, respectivamente; a variável L, contendo o literal FALSO; e a variável lógica V, contendo o valor lógico verdadeiro, assinale a expressão lógica cujo resultado possui valor lógico falso",
  options: ["A) A2 > B ou V",
 "B) A > B ou L = 'FALSO'",
 "C) A < B e L = 'LITERAL'",
 "D) A > B e V ou L = 'FALSO'",
 "E) A - B < 2 e L ? 'VERDADEIRO' e V",
  ],
  correct_option: "C) A < B e L = 'LITERAL'",
}, 




{
  question: "O ambiente de desenvolvimento da Apple para iOS e a linguagem de programação nativa utilizada são, respectivamente,",
  options: ["A) Xcode e Java ME.",
 "B) iOS Development Kit (iDK) e Object-C.",
 "C) iOS CodeLite e Apple-Script.",
 "D) Xcode e Objective-C.",
 "E) iOS Development Kit (iDK) e Smalltalk.",
  ],
  correct_option: "D) Xcode e Objective-C.",
}, 


{
  subtexto: [">>> a, b = 0, 2",
">>> while b < 20:",
"... a, b = b, a+b+1",
"... print b",
"...",],
  question: "Assinale a opção que apresenta a sequência correta de números impressos no console de um interpretador Python durante a execução dos comandos acima.",
  options: ["A) 1, 1, 2, 3, 5, 8",
 "B) 2, 2, 4, 6",
 "C) 2, 3, 6",
 "D) 3, 3, 6, 10, 17, 28",
 "E) 3, 6, 10, 17, 28",
  ],
  correct_option: "E) 3, 6, 10, 17, 28",
},



{
  subtexto: ["import numpy as np",
"series = [[23,45,12,679], [14,48,69,38]]",
"new_series = np.array(series)",
"print(new_series.ndim)",
"print(new_series.shape)",],
  textu: "Analise o código Python a seguir:",
  question: "Qual é a saída correta?",
  options: ["A) 2 (2, 4)",
 "B) 2 (4, 2)",
 "C) 4 (2)",
 "D) 2 (4)",
 "E) 4 (2,4)",
  ],
  correct_option: "A) 2 (2, 4)",
},




{
  textu: "Considere o código Python a seguir.",
  subtexto: ["import numpy as np valorAplicado = np.array ( [ 5000, 6000, 7000, 8000 ] ) taxaJuros = np.array ( [1, 2, 3, 4 ] ) resultado = valorAplicado * taxaJuros"],
  question: "Ao executar o código acima, o valor final da variável resultado será",
  options: ["A) 70000  ",
 "B) 260000",
 "C) [ 5000 12000 21000 32000] ",
 "D) [[ 5000 10000 15000 20000] [ 6000 12000 18000 24000] [ 7000 14000 21000 28000] [ 8000 16000 24000 32000]]",
 "E) [[ 5000 6000 7000 8000] [10000 12000 14000 16000] [15000 18000 21000 24000] [20000 24000 28000 32000]] ",
  ],
  correct_option: "C) [ 5000 12000 21000 32000] ",
},



  
];

export default dataLeiDf;