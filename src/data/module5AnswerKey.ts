import { QuestionItem, NotebookRef } from './module2AnswerKey';

export const MODULE_5_NOTEBOOK_PAGES: NotebookRef[] = [
  {
    imagePath: '/assets/aistudio/IMG-20261030-WA0004_58f09755.jpg',
    label: 'Page 1: Module-5 Graph Definition G=(V,E,ϕ), Self Loop & Parallel Edges',
    date: '31/8/26',
  },
  {
    imagePath: '/assets/aistudio/IMG-20261030-WA0005_b3b85150.jpg',
    label: 'Page 2: Pseudo Graph (2M), Simple Graph & Adjacent Edges/Vertices',
    date: '31/8/26',
  },
  {
    imagePath: '/assets/aistudio/IMG-20261030-WA0006_8b65a500.jpg',
    label: 'Page 3: Hourglass Graph Adjacency Example, Isolated Vertex & Mixed Graph',
    date: '31/8/26',
  },
  {
    imagePath: '/assets/aistudio/IMG-20261030-WA0007_d0474659.jpg',
    label: 'Page 4: Degree of Vertex (Loops Counted Twice), G₂ Degree Example & 6M Problem 1 (A,B,C,D,E)',
    date: '17/9/26',
  },
  {
    imagePath: '/assets/aistudio/IMG-20261030-WA0008_35fb5fc7.jpg',
    label: 'Page 5: Drawn Graph for A,B,C,D,E & Handshaking Theorem (6M Statement, Example & Proof)',
    date: '17/9/26',
  },
  {
    imagePath: '/assets/aistudio/IMG-20261030-WA0009_6313d86e.jpg',
    label: 'Page 6: Handshaking Problems — 10 Vertices of Degree 6 (e=30) & 51 Students Handshakes (e=1275)',
    date: '17/9/26',
  },
  {
    imagePath: '/assets/aistudio/IMG-20261030-WA0010_403b853e.jpg',
    label: 'Page 7: Regular Graph (k-Regular) & Complete Graph K_n (Every Complete Graph is Regular)',
    date: '18/9/26',
  },
  {
    imagePath: '/assets/aistudio/IMG-20261030-WA0011_58516506.jpg',
    label: 'Page 8: Drawings of K₁, K₂, K₃, K₄, K₅ & Bipartite Graph Definition (V₁, V₂)',
    date: '18/9/26',
  },
  {
    imagePath: '/assets/aistudio/IMG-20261030-WA0012_2ece1732.jpg',
    label: 'Page 9: Complete Bipartite Graph K_{m,n} (K₃,₃) & 6M Problem on Bipartite Graphs G₁, G₂',
    date: '22/9/26',
  },
  {
    imagePath: '/assets/aistudio/IMG-20261030-WA0013_29f51d9e.jpg',
    label: 'Page 10: Bipartite Solution (S₁, S₂) & Graph Representation — Adjacency Matrix A=[a_{ij}]',
    date: '22/9/26',
  },
  {
    imagePath: '/assets/aistudio/IMG-20261030-WA0014_d4c14fd3.jpg',
    label: 'Page 11: Symmetry of Adjacency Matrix (a_{ij}=a_{ji}) & 6M Adjacency Matrix Examples',
    date: '22/9/26',
  },
  {
    imagePath: '/assets/aistudio/IMG-20261030-WA0015_925c4fa9.jpg',
    label: 'Page 12: Incidence Matrix B=[b_{ij}] Definition & 5×4 Matrix Example',
    date: '22/9/26',
  },
  {
    imagePath: '/assets/aistudio/IMG-20261030-WA0016_1b62fc3f.jpg',
    label: 'Page 13: Incidence Matrix Properties (2 ones per edge, row sum = degree) & Graph Isomorphism',
    date: '24/9/26',
  },
  {
    imagePath: '/assets/aistudio/IMG-20261030-WA0017_01c8cbb8.jpg',
    label: 'Page 14: 10M Isomorphism Problem 1 (4-vertex Digraphs) & Problem 2 (5-vertex Graph G)',
    date: '24/9/26',
  },
  {
    imagePath: '/assets/aistudio/IMG-20261030-WA0018_bb65c174.jpg',
    label: 'Page 15: 5-Vertex Isomorphism Problem (u₁..u₅ and v₁..v₅ with 8 Edges)',
    date: '25/9/26',
  },
  {
    imagePath: '/assets/aistudio/IMG-20261030-WA0019_d536fa2e.jpg',
    label: 'Page 16: Vertex Mapping u_i → v_j and |V(G)|=5, |E(G)|=8 Verification',
    date: '25/9/26',
  },
  {
    imagePath: '/assets/aistudio/IMG-20261030-WA0020_7987cac3.jpg',
    label: 'Page 17: Adjacency Matrix A(G) and A(G′) Row-Sum Degree Comparison',
    date: '25/9/26',
  },
  {
    imagePath: '/assets/aistudio/IMG-20261030-WA0021_7079d87a.jpg',
    label: 'Page 18: Part C Q9 — Isomorphism Check of 6-Vertex Trees G and G′ (Adjacency Matrix A(G))',
    date: '25/9/26',
  },
  {
    imagePath: '/assets/aistudio/IMG-20261030-WA0022_30339111.jpg',
    label: 'Page 19: Part C Q9 Continuation — Adjacency Matrix A(G′) with Row Sums 1,2,3,1,2,1',
    date: '25/9/26',
  },
];

export const MODULE_5_QUESTIONS: QuestionItem[] = [
  // ==========================================
  // PART A - SHORT ANSWERS (10 QUESTIONS)
  // ==========================================
  {
    id: 'm5-partA-1',
    part: 'A',
    number: 1,
    questionLatex: 'Define a pseudograph.',
    topic: 'Types of Graphs',
    marks: 2,
    inClassNotes: true,
    professorMethodNote:
      'Exact 2M definition from Professor’s notebook (31/8/26, Page 2): "A graph in which loop and parallel edges are allowed is called a Pseudo graph."',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0005_b3b85150.jpg',
        label: 'Page 2: Pseudo Graph (2M)',
        date: '31/8/26',
      },
    ],
    answerLines: [
      {
        type: 'text',
        content:
          'A graph in which **self-loops** and **parallel (multiple) edges** are allowed is called a **pseudograph**.',
      },
      { type: 'diagram', diagramId: 'partA-1-pseudograph' },
    ],
  },
  {
    id: 'm5-partA-2',
    part: 'A',
    number: 2,
    questionLatex: 'What is complete graph? Draw a complete graph on $4$ vertices.',
    topic: 'Complete Graph',
    marks: 2,
    inClassNotes: true,
    professorMethodNote:
      'Verbatim definition and drawing of K₄ from Professor’s notebook (18/9/26, Pages 7 & 8): mentions that every complete graph on n vertices has degree n-1 and is denoted by K_n.',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0010_403b853e.jpg',
        label: 'Page 7: Complete Graph Definition',
        date: '18/9/26',
      },
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0011_58516506.jpg',
        label: 'Page 8: Drawings of K₁, K₂, K₃, K₄, K₅',
        date: '18/9/26',
      },
    ],
    answerLines: [
      {
        type: 'text',
        content:
          '**Complete Graph:** In a simple graph, if there is an existing edge between every pair of distinct vertices, then such a graph is called a **complete graph**. A complete graph on $n$ vertices is denoted by $K_n$, where every vertex has degree $n - 1$ and the total number of edges is $\\frac{n(n-1)}{2}$.',
      },
      {
        type: 'text',
        content:
          'For $n = 4$ vertices ($K_4$), each vertex has degree $4 - 1 = 3$ and the number of edges is $\\frac{4(3)}{2} = 6$:',
      },
      { type: 'diagram', diagramId: 'partA-2-k4' },
    ],
  },
  {
    id: 'm5-partA-3',
    part: 'A',
    number: 3,
    questionLatex: 'Draw a graph which contains Eulerian path and circuit.',
    topic: 'Eulerian Graph',
    marks: 2,
    inClassNotes: true,
    professorMethodNote:
      'Uses the professor’s 5-vertex hourglass graph (V₁..V₅) where all vertices have even degree (2, 2, 4, 2, 2) so it contains an Eulerian circuit (which is also an Eulerian path), plus a 4-vertex graph with an open Eulerian path.',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0006_8b65a500.jpg',
        label: 'Page 3: Hourglass Graph V₁..V₅',
        date: '31/8/26',
      },
    ],
    answerLines: [
      {
        type: 'text',
        content:
          'An **Eulerian path** is a path that traverses every edge of the graph $G$ exactly once. An **Eulerian circuit** is an Eulerian path that starts and ends at the same vertex (exists when $G$ is connected and every vertex has even degree).',
      },
      { type: 'diagram', diagramId: 'partA-3-eulerian' },
      {
        type: 'list',
        items: [
          '• **Graph 1 (Left — Hourglass graph):** Degrees are $\\deg(v_1)=4$ and $\\deg(v_2)=\\deg(v_3)=\\deg(v_4)=\\deg(v_5)=2$ (all even). It contains the **Eulerian circuit** (and closed Eulerian path): $v_1 \\to v_2 \\to v_3 \\to v_1 \\to v_4 \\to v_5 \\to v_1$.',
          '• **Graph 2 (Right):** Vertices $A$ and $C$ have odd degree $3$, while $B$ and $D$ have even degree $2$. It contains the **Eulerian path**: $A \\to B \\to C \\to A \\to D \\to C$.',
        ],
      },
    ],
  },
  {
    id: 'm5-partA-4',
    part: 'A',
    number: 4,
    questionLatex: 'Define a $3$-regular graphs with an example.',
    topic: 'Regular Graph',
    marks: 2,
    inClassNotes: true,
    professorMethodNote:
      'Follows the professor’s definition of k-regular graph (18/9/26, Page 7): "If every vertex in a regular graph has degree k then the graph is called k-regular graph." Uses K₄ as the canonical 3-regular example.',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0010_403b853e.jpg',
        label: 'Page 7: Regular & k-Regular Graph',
        date: '18/9/26',
      },
    ],
    answerLines: [
      {
        type: 'text',
        content:
          '**Definition:** If every vertex of a simple graph has the same degree $k = 3$ (that is, $\\deg(v_i) = 3$ for all $v_i \\in V$), then the graph is called a **$3$-regular graph** (or cubic graph).',
      },
      {
        type: 'text',
        content:
          '**Example:** The complete graph on $4$ vertices ($K_4$) is a $3$-regular graph because $\\deg(v_1) = \\deg(v_2) = \\deg(v_3) = \\deg(v_4) = 3$.',
      },
      { type: 'diagram', diagramId: 'partA-4-3regular' },
    ],
  },
  {
    id: 'm5-partA-5',
    part: 'A',
    number: 5,
    questionLatex: 'What you mean by bipartite graph and give an example.',
    topic: 'Bipartite Graph',
    marks: 2,
    inClassNotes: true,
    professorMethodNote:
      'Exact definition from Professor’s notebook (18/9/26, Page 8): partitions V(G) into two disjoint non-empty sets V₁, V₂ such that V₁ ∪ V₂ = V(G) and every edge in E(G) has one end vertex in V₁ and the other end vertex in V₂.',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0011_58516506.jpg',
        label: 'Page 8: Bipartite Graph Definition',
        date: '18/9/26',
      },
    ],
    answerLines: [
      {
        type: 'text',
        content:
          '**Definition:** A graph $G = (V, E)$ is said to be **bipartite** if its vertex set $V(G)$ can be partitioned into two disjoint non-empty subsets $V_1$ and $V_2$ ($V_1 \\cap V_2 = \\emptyset$ and $V_1 \\cup V_2 = V(G)$) such that every edge in $E(G)$ has one end vertex in $V_1$ and the other end vertex in $V_2$ (no edge connects two vertices within the same set).',
      },
      {
        type: 'text',
        content:
          '**Example:** The complete bipartite graph $K_{2,3}$ with vertex partition $V_1 = \\{u_1, u_2\\}$ and $V_2 = \\{v_1, v_2, v_3\\}$.',
      },
      { type: 'diagram', diagramId: 'partA-9-k23' },
    ],
  },
  {
    id: 'm5-partA-6',
    part: 'A',
    number: 6,
    questionLatex: 'Check Hamilton circuit is existing or not for the following graph.',
    questionDiagramId: 'partA-6-hamilton-q',
    topic: 'Hamiltonian Graph',
    marks: 2,
    inClassNotes: false,
    professorMethodNote:
      'Clearly states the definition of a Hamiltonian circuit (visits every vertex exactly once and returns to the starting vertex) and writes out the explicit cycle A -> B -> C -> D -> A.',
    notebookRefs: [],
    answerLines: [
      {
        type: 'text',
        content:
          '**Yes, a Hamiltonian circuit exists** for the given graph $G$ with vertex set $V = \\{A, B, C, D\\}$.',
      },
      {
        type: 'text',
        content:
          'A Hamiltonian circuit is a closed cycle that visits every vertex of the graph exactly once and returns to the starting vertex. Since the outer boundary edges $(A, B), (B, C), (C, D), (D, A)$ are all present in $G$, the required Hamiltonian circuit is:',
      },
      {
        type: 'math',
        tex: '\\boxed{A \\to B \\to C \\to D \\to A} \\quad (\\text{or } A \\to D \\to C \\to B \\to A)',
      },
    ],
  },
  {
    id: 'm5-partA-7',
    part: 'A',
    number: 7,
    questionLatex: 'State Handshaking theorem.',
    topic: 'Handshaking Theorem',
    marks: 2,
    inClassNotes: true,
    professorMethodNote:
      'Exact verbatim statement from Professor’s notebook (17/9/26, Page 5): includes both the symbolic equation ∑ deg(v_i) = 2e and the verbal statement ("and hence even").',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0008_35fb5fc7.jpg',
        label: 'Page 5: Handshaking Theorem Statement',
        date: '17/9/26',
      },
    ],
    answerLines: [
      {
        type: 'text',
        content:
          '**Statement:** If $G = (V, E)$ is an undirected graph with $e$ edges, then:',
      },
      {
        type: 'math',
        tex: '\\boxed{\\sum_{v_i \\in V} \\deg(v_i) = 2e}',
      },
      {
        type: 'text',
        content:
          '**Or:** The sum of the degrees of all the vertices of an undirected graph is twice the number of edges of the graph, and hence is always **even**.',
      },
    ],
  },
  {
    id: 'm5-partA-8',
    part: 'A',
    number: 8,
    questionLatex: 'Define a multigraph.',
    topic: 'Types of Graphs',
    marks: 2,
    inClassNotes: true,
    professorMethodNote:
      'Follows the professor’s definition of Parallel Edges (31/8/26, Page 1): "If two edges have same end point or vertices, they are called Parallel Edges." A multigraph is a graph containing parallel edges.',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0004_58f09755.jpg',
        label: 'Page 1: Parallel Edges & Graph Definition',
        date: '31/8/26',
      },
    ],
    answerLines: [
      {
        type: 'text',
        content:
          'A graph $G = (V, E)$ in which **parallel edges (multiple edges)** connecting the same pair of end vertices are allowed (without self-loops) is called a **multigraph**.',
      },
    ],
  },
  {
    id: 'm5-partA-9',
    part: 'A',
    number: 9,
    questionLatex: 'Draw a complete bipartite graph $K_{2,3}$.',
    topic: 'Complete Bipartite Graph',
    marks: 2,
    inClassNotes: true,
    professorMethodNote:
      'Matches the professor’s K_{m,n} drawing convention (22/9/26, Page 9): partitions vertices into V₁ (m = 2 vertices) and V₂ (n = 3 vertices) and joins every vertex in V₁ to every vertex in V₂.',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0012_2ece1732.jpg',
        label: 'Page 9: Complete Bipartite Graph K_{m,n}',
        date: '22/9/26',
      },
    ],
    answerLines: [
      {
        type: 'text',
        content:
          'A complete bipartite graph $K_{2,3}$ has vertex bipartition $V_1 = \\{u_1, u_2\\}$ ($|V_1| = 2$) and $V_2 = \\{v_1, v_2, v_3\\}$ ($|V_2| = 3$), where every vertex in $V_1$ is adjacent to every vertex in $V_2$. Total vertices $= 2 + 3 = 5$ and total edges $= 2 \\times 3 = 6$:',
      },
      { type: 'diagram', diagramId: 'partA-9-k23' },
    ],
  },
  {
    id: 'm5-partA-10',
    part: 'A',
    number: 10,
    questionLatex: 'Define a regular graph.',
    topic: 'Regular Graph',
    marks: 2,
    inClassNotes: true,
    professorMethodNote:
      'Exact verbatim definition from Professor’s notebook (18/9/26, Page 7): "If every vertex of a simple graph has the same degree then the graph is called regular graph."',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0010_403b853e.jpg',
        label: 'Page 7: Regular Graph Definition',
        date: '18/9/26',
      },
    ],
    answerLines: [
      {
        type: 'text',
        content:
          'If every vertex of a simple graph has the **same degree**, then the graph is called a **regular graph**. If every vertex in a regular graph has degree $k$, then the graph is called a **$k$-regular graph**.',
      },
    ],
  },

  // ==========================================
  // PART B - 6 MARK ANSWERS (10 QUESTIONS)
  // ==========================================
  {
    id: 'm5-partB-1',
    part: 'B',
    number: 1,
    questionLatex:
      'Prove that the number of vertices of odd degree in an undirected graph is even.',
    topic: 'Handshaking Theorem Corollary',
    marks: 6,
    inClassNotes: true,
    professorMethodNote:
      'Uses the professor’s Handshaking Theorem ∑ deg(v_i) = 2e and partitions V into V₁ (even degree vertices) and V₂ (odd degree vertices).',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0008_35fb5fc7.jpg',
        label: 'Page 5: Handshaking Theorem ∑ deg(v_i) = 2e',
        date: '17/9/26',
      },
    ],
    answerLines: [
      {
        type: 'subhead',
        content: 'Proof:',
      },
      {
        type: 'text',
        content:
          'Let $G = (V, E)$ be an undirected graph with $e$ edges. By the **Handshaking Theorem**, the sum of the degrees of all vertices in $G$ is twice the number of edges:',
      },
      {
        type: 'math',
        tex: '\\sum_{v \\in V} \\deg(v) = 2e',
      },
      {
        type: 'text',
        content:
          'Divide the vertex set $V$ into two disjoint subsets:',
      },
      {
        type: 'list',
        items: [
          '• Let $V_1$ be the set of vertices of **even** degree.',
          '• Let $V_2$ be the set of vertices of **odd** degree.',
        ],
      },
      {
        type: 'text',
        content: 'Then the Handshaking equation can be split as:',
      },
      {
        type: 'math',
        tex: '\\sum_{v \\in V_1} \\deg(v) + \\sum_{v \\in V_2} \\deg(v) = 2e',
      },
      {
        type: 'math',
        tex: '\\implies \\sum_{v \\in V_2} \\deg(v) = 2e - \\sum_{v \\in V_1} \\deg(v)',
      },
      {
        type: 'text',
        content:
          'Here, $2e$ is an **even** number. Also, since $\\deg(v)$ is even for every $v \\in V_1$, the sum $\\sum_{v \\in V_1} \\deg(v)$ is a sum of even numbers, which is also **even**.',
      },
      {
        type: 'text',
        content:
          'Since the difference of two even numbers is even, the left-hand side $\\sum_{v \\in V_2} \\deg(v)$ must be an **even** number.',
      },
      {
        type: 'text',
        content:
          'However, each term $\\deg(v)$ for $v \\in V_2$ is an **odd** integer. A sum of odd integers can be even **only if the number of terms in the sum is even**.',
      },
      {
        type: 'math',
        tex: '\\therefore \\text{The number of vertices of odd degree } |V_2| \\text{ is even. Hence proved.}',
      },
    ],
  },
  {
    id: 'm5-partB-2',
    part: 'B',
    number: 2,
    questionLatex: 'Draw a graph which contains,',
    subparts: [
      '(i) an Eulerian circuit that is also a Hamiltonian circuit,',
      '(ii) an Eulerian circuit, but not a Hamiltonian circuit.',
      '(iii) A Hamiltonian circuit, but not an Eulerian circuit.',
    ],
    topic: 'Eulerian & Hamiltonian Graphs',
    marks: 6,
    inClassNotes: true,
    professorMethodNote:
      'Draws three clean textbook graphs (C₄, Hourglass/Bowtie graph from Page 3, and K₄ from Page 8) and gives the exact vertex-degree / cut-vertex justification for each case.',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0006_8b65a500.jpg',
        label: 'Page 3: Hourglass Graph',
        date: '31/8/26',
      },
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0011_58516506.jpg',
        label: 'Page 8: Complete Graph K₄',
        date: '18/9/26',
      },
    ],
    answerLines: [
      { type: 'diagram', diagramId: 'partB-2-euler-ham' },
      {
        type: 'subhead',
        content: '(i) Graph with an Eulerian circuit that is also a Hamiltonian circuit:',
      },
      {
        type: 'text',
        content:
          'Consider the cycle graph $C_4$ on vertices $A, B, C, D$. Every vertex has even degree $2$. The closed circuit $A \\to B \\to C \\to D \\to A$ traverses every edge exactly once (**Eulerian circuit**) and also visits every vertex exactly once (**Hamiltonian circuit**).',
      },
      {
        type: 'subhead',
        content: '(ii) Graph with an Eulerian circuit, but not a Hamiltonian circuit:',
      },
      {
        type: 'text',
        content:
          'Consider the $5$-vertex hourglass (bowtie) graph with two triangles $A-B-C$ and $C-D-E$ sharing vertex $C$. The vertex degrees are $\\deg(A)=2, \\deg(B)=2, \\deg(C)=4, \\deg(D)=2, \\deg(E)=2$ (all even), so it has the **Eulerian circuit** $A \\to B \\to C \\to D \\to E \\to C \\to A$. However, it has **no Hamiltonian circuit** because any closed cycle visiting all vertices must pass through the central cut-vertex $C$ twice.',
      },
      {
        type: 'subhead',
        content: '(iii) Graph with a Hamiltonian circuit, but not an Eulerian circuit:',
      },
      {
        type: 'text',
        content:
          'Consider the complete graph $K_4$ on vertices $A, B, C, D$. It contains the **Hamiltonian circuit** $A \\to B \\to C \\to D \\to A$ visiting all $4$ vertices once. However, since $\\deg(A) = \\deg(B) = \\deg(C) = \\deg(D) = 3$ (odd degree), it has **no Eulerian circuit**.',
      },
    ],
  },
  {
    id: 'm5-partB-3',
    part: 'B',
    number: 3,
    questionLatex: 'State and prove the Handshaking theorem.',
    topic: 'Handshaking Theorem',
    marks: 6,
    inClassNotes: true,
    professorMethodNote:
      'Exact verbatim 6M Problem 2 from Professor’s notebook (17/9/26, Pages 5 & 6): includes the statement, the 8-vertex example with sum = 18 -> e = 9, and the exact 2-sentence proof.',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0008_35fb5fc7.jpg',
        label: 'Page 5: Handshaking Theorem (6M Statement, Example & Proof)',
        date: '17/9/26',
      },
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0009_6313d86e.jpg',
        label: 'Page 6: Continuation of Handshaking Proof',
        date: '17/9/26',
      },
    ],
    answerLines: [
      {
        type: 'subhead',
        content: 'Statement (Handshaking Theorem):',
      },
      {
        type: 'text',
        content:
          'Let $G = (V, E)$ be an undirected graph with $e$ edges. Then:',
      },
      {
        type: 'math',
        tex: '\\sum_{v_i \\in V} \\deg(v_i) = 2e',
      },
      {
        type: 'text',
        content:
          '(Or) The sum of the degrees of all the vertices of an undirected graph is twice the number of edges of the graph, and hence is even.',
      },
      {
        type: 'subhead',
        content: 'Proof (As taught in classwork):',
      },
      {
        type: 'text',
        content:
          'Since every edge in an undirected graph $G = (V, E)$ is incident with **exactly $2$ vertices** (or, in the case of a self-loop, is counted twice in the degree of its vertex), **every single edge contributes $2$ to the sum of the degrees of the vertices**.',
      },
      {
        type: 'text',
        content:
          'Therefore, all the $e$ edges together contribute $2e$ to the sum of the degrees of the vertices:',
      },
      {
        type: 'math',
        tex: '\\boxed{\\sum_{i=1}^{n} \\deg(v_i) = 2e}',
      },
      {
        type: 'subhead',
        content: 'Classwork Verification Example:',
      },
      {
        type: 'text',
        content:
          'For the $8$-vertex graph in classwork with vertex degrees $1, 3, 3, 2, 1, 4, 2, 2$ and $e = 9$ edges:',
      },
      {
        type: 'math',
        tex: '\\sum \\deg(v_i) = 1 + 3 + 3 + 2 + 1 + 4 + 2 + 2 = 18 = 2(9) = 2e \\implies \\text{No. of edges } e = \\frac{18}{2} = 9.',
      },
    ],
  },
  {
    id: 'm5-partB-4',
    part: 'B',
    number: 4,
    questionLatex: 'Write short notes on the following with illustration:',
    subparts: [
      '(i) Adjacency Matrix and its properties.',
      '(ii) Incident Matrix and its properties',
    ],
    topic: 'Matrix Representation of Graphs',
    marks: 6,
    inClassNotes: true,
    professorMethodNote:
      'Follows the professor’s exact definitions, piecewise formulas A=[a_{ij}] and B=[b_{ij}], symmetry property a_{ij}=a_{ji}, the two Incidence Matrix observations, and the exact classwork matrices (Pages 10–13).',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0013_29f51d9e.jpg',
        label: 'Page 10: Adjacency Matrix Definition',
        date: '22/9/26',
      },
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0014_d4c14fd3.jpg',
        label: 'Page 11: Adjacency Matrix Note & 6M Example',
        date: '22/9/26',
      },
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0015_925c4fa9.jpg',
        label: 'Page 12: Incidence Matrix Definition & Example',
        date: '22/9/26',
      },
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0016_1b62fc3f.jpg',
        label: 'Page 13: Incidence Matrix Properties',
        date: '24/9/26',
      },
    ],
    answerLines: [
      {
        type: 'subhead',
        content: '(i) Adjacency Matrix and its Properties:',
      },
      {
        type: 'text',
        content:
          '**Definition:** Let $G = (V, E)$ be a simple graph with $n$ vertices $\\{v_1, v_2, \\dots, v_n\\}$. The **adjacency matrix** of $G$ is the $n \\times n$ square matrix $A(G) = [a_{ij}]$ defined by:',
      },
      {
        type: 'math',
        tex: 'a_{ij} = \\begin{cases} 1, & \\text{if there exists an edge between } v_i \\text{ and } v_j \\\\ 0, & \\text{otherwise} \\end{cases}',
      },
      {
        type: 'text',
        content: '**Properties:**',
      },
      {
        type: 'list',
        items: [
          '1. The adjacency matrix of an undirected simple graph is **symmetric**, that is, $a_{ij} = a_{ji}$ for all $i, j$.',
          '2. For a simple graph (no self-loops), all diagonal entries are zero: $a_{ii} = 0$.',
          '3. The sum of the entries in the $i$-th row (or $i$-th column) is equal to the degree of vertex $v_i$: $\\sum_{j=1}^n a_{ij} = \\deg(v_i)$.',
        ],
      },
      {
        type: 'text',
        content:
          '**Illustration (From Classwork Problem 1):** Consider a simple graph on $4$ vertices $v_1, v_2, v_3, v_4$ where $v_1$ is adjacent to $v_2, v_3, v_4$, and $v_2$ is adjacent to $v_1, v_3$:',
      },
      {
        type: 'math',
        tex: 'A(G) = \\begin{array}{c|cccc} & v_1 & v_2 & v_3 & v_4 \\\\ \\hline v_1 & 0 & 1 & 1 & 1 \\\\ v_2 & 1 & 0 & 1 & 0 \\\\ v_3 & 1 & 1 & 0 & 0 \\\\ v_4 & 1 & 0 & 0 & 0 \\end{array}',
      },
      {
        type: 'subhead',
        content: '(ii) Incidence Matrix and its Properties:',
      },
      {
        type: 'text',
        content:
          '**Definition:** Let $G = (V, E)$ be an undirected graph with $n$ vertices $\\{v_1, v_2, \\dots, v_n\\}$ and $m$ edges $\\{e_1, e_2, \\dots, e_m\\}$ (with no self-loops). The **incidence matrix** is the $n \\times m$ matrix $B = [b_{ij}]$ defined by:',
      },
      {
        type: 'math',
        tex: 'b_{ij} = \\begin{cases} 1, & \\text{when edge } e_j \\text{ is incident on vertex } v_i \\\\ 0, & \\text{otherwise} \\end{cases}',
      },
      {
        type: 'text',
        content: '**Properties / Observations (As written in classwork):**',
      },
      {
        type: 'list',
        items: [
          '1. Since each edge is incident on **exactly two vertices**, each edge column (or row) of $B$ contains **exactly two $1$’s**.',
          '2. The sum of the entries in any vertex row gives the **degree of that vertex** $\\deg(v_i)$.',
          '3. A row with all $0$ entries represents an **isolated vertex**. Two identical edge columns represent **parallel edges**.',
        ],
      },
      {
        type: 'text',
        content:
          '**Illustration (From Classwork):** For a graph with $4$ vertices $v_1, v_2, v_3, v_4$ and $5$ edges $e_1=(v_1,v_2),\\, e_2=(v_1,v_3),\\, e_3=(v_2,v_3),\\, e_4=(v_2,v_4),\\, e_5=(v_3,v_4)$:',
      },
      {
        type: 'math',
        tex: 'B(G) = \\begin{array}{c|ccccc} & e_1 & e_2 & e_3 & e_4 & e_5 \\\\ \\hline v_1 & 1 & 1 & 0 & 0 & 0 \\\\ v_2 & 1 & 0 & 1 & 1 & 0 \\\\ v_3 & 0 & 1 & 1 & 0 & 1 \\\\ v_4 & 0 & 0 & 0 & 1 & 1 \\end{array}',
      },
    ],
  },
  {
    id: 'm5-partB-5',
    part: 'B',
    number: 5,
    questionLatex:
      'Define graph isomorphism and give an example for isomorphism and non-isomorphism with justification.',
    topic: 'Graph Isomorphism',
    marks: 6,
    inClassNotes: true,
    professorMethodNote:
      'Follows the professor’s definition and 3 necessary invariant conditions (24/9/26, Page 13): (i) same number of vertices |V(G₁)|=|V(G₂)|, (ii) same number of edges |E(G₁)|=|E(G₂)|, (iii) equal number of vertices of a given degree + adjacency preservation.',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0016_1b62fc3f.jpg',
        label: 'Page 13: Graph Isomorphism Definition & Note',
        date: '24/9/26',
      },
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0018_bb65c174.jpg',
        label: 'Page 15: Isomorphism Verification Example',
        date: '25/9/26',
      },
    ],
    answerLines: [
      {
        type: 'subhead',
        content: 'Definition (Graph Isomorphism):',
      },
      {
        type: 'text',
        content:
          'Two graphs $G_1 = (V_1, E_1)$ and $G_2 = (V_2, E_2)$ are said to be **isomorphic** to each other (denoted $G_1 \\cong G_2$) if there exists a **one-to-one correspondence (bijection)** $f: V_1 \\to V_2$ between their vertex sets and edge sets **preserving adjacency** — that is, vertices $u$ and $v$ are adjacent in $G_1$ if and only if $f(u)$ and $f(v)$ are adjacent in $G_2$.',
      },
      {
        type: 'subhead',
        content: 'Necessary Conditions (Invariants from Classwork Note):',
      },
      {
        type: 'list',
        items: [
          '(i) The same number of vertices: $|V(G_1)| = |V(G_2)|$.',
          '(ii) The same number of edges: $|E(G_1)| = |E(G_2)|$.',
          '(iii) An equal number of vertices with a given degree (same degree sequence).',
        ],
      },
      {
        type: 'subhead',
        content: 'Example 1 — Isomorphic Graphs:',
      },
      {
        type: 'text',
        content:
          'Let $G_1$ be the $4$-vertex wheel/tetrahedral graph on $\\{A, B, C, D\\}$ where every pair of vertices is joined by an edge, and let $G_2$ be the $4$-vertex square with both diagonals on $\\{V_1, V_2, V_3, V_4\\}$ (both represent $K_4$).',
      },
      {
        type: 'list',
        items: [
          '• $|V(G_1)| = |V(G_2)| = 4$ and $|E(G_1)| = |E(G_2)| = 6$.',
          '• Every vertex in both $G_1$ and $G_2$ has degree $3$.',
          '• The bijection $A \\to V_1,\\, B \\to V_2,\\, C \\to V_3,\\, D \\to V_4$ preserves all adjacencies ($A(G_1) = A(G_2)$). Hence $G_1 \\cong G_2$.',
        ],
      },
      {
        type: 'subhead',
        content: 'Example 2 — Non-Isomorphic Graphs (From Classwork):',
      },
      {
        type: 'text',
        content:
          'Consider two $6$-vertex trees $G$ and $G\'$ with $|V(G)| = |V(G\')| = 6$, $|E(G)| = |E(G\')| = 5$, and degree sequence $(3, 2, 2, 1, 1, 1)$:',
      },
      {
        type: 'list',
        items: [
          '• In $G$, the unique vertex $D$ of degree $3$ is adjacent to **two pendant vertices** of degree $1$ ($E, F$) and one vertex of degree $2$ ($C$).',
          '• In $G\'$, the unique vertex $c$ of degree $3$ is adjacent to **two vertices of degree $2$** ($b, e$) and only one vertex of degree $1$ ($d$).',
          '• Since adjacency of degrees is not preserved, $G$ and $G\'$ are **not isomorphic** ($G \\not\\cong G\'$).',
        ],
      },
    ],
  },
  {
    id: 'm5-partB-6',
    part: 'B',
    number: 6,
    questionLatex:
      'Find the number of vertices, the number of edges and the degree of each vertex in the following undirected graphs $G_1$ and $G_2$. Verify also the handshaking theorem in each case.',
    questionDiagramId: 'partB-6-g1-g2',
    topic: 'Degree of Vertex & Handshaking Verification',
    marks: 6,
    inClassNotes: true,
    professorMethodNote:
      'Matches the professor’s degree calculation on 17/9/26 (Page 4): counts self-loops twice in the degree of a vertex and verifies ∑ deg(v_i) = 2e for both G₁ and G₂.',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0007_d0474659.jpg',
        label: 'Page 4: Degree of Vertex (Loops Counted Twice)',
        date: '17/9/26',
      },
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0008_35fb5fc7.jpg',
        label: 'Page 5: Handshaking Verification ∑ deg(v_i) = 2e',
        date: '17/9/26',
      },
    ],
    answerLines: [
      {
        type: 'subhead',
        content: 'Case 1: For Undirected Graph $G_1$:',
      },
      {
        type: 'list',
        items: [
          '• **Number of vertices:** $|V(G_1)| = n = 6$ (namely $A, B, C, D, E, F$).',
          '• **Number of edges:** $|E(G_1)| = e = 9$ (edges: $AB, AC, BC, BE, BD, CD, CE, DE, EF$).',
          '• **Degree of each vertex:**',
        ],
      },
      {
        type: 'math',
        tex: '\\deg(A) = 2, \\quad \\deg(B) = 4, \\quad \\deg(C) = 4, \\quad \\deg(D) = 3, \\quad \\deg(E) = 4, \\quad \\deg(F) = 1',
      },
      {
        type: 'text',
        content: '**Verification of Handshaking Theorem for $G_1$:**',
      },
      {
        type: 'math',
        tex: '\\sum_{v_i \\in V(G_1)} \\deg(v_i) = \\deg(A) + \\deg(B) + \\deg(C) + \\deg(D) + \\deg(E) + \\deg(F)',
      },
      {
        type: 'math',
        tex: '= 2 + 4 + 4 + 3 + 4 + 1 = 18 = 2(9) = 2e \\quad \\text{(Verified)}',
      },
      {
        type: 'subhead',
        content: 'Case 2: For Undirected Pseudograph $G_2$ (Remember: each self-loop is counted twice!):',
      },
      {
        type: 'list',
        items: [
          '• **Number of vertices:** $|V(G_2)| = n = 5$ (namely $A, B, C, D, E$).',
          '• **Number of edges:** $|E(G_2)| = e = 10$ (consisting of: $1$ self-loop at $A$, $2$ parallel edges between $A$ and $B$, $1$ edge $AE$, $1$ edge $ED$, $1$ diagonal edge $EB$, $1$ edge $BD$, $1$ edge $BC$, $2$ parallel edges between $D$ and $C$ — or $1$ self-loop at $C$; total $e = 10$, or $e = 9$ in the $6$-vertex classwork variant).',
          '• **Degree of each vertex (with self-loops at $A$ and $C$ counted twice):**',
        ],
      },
      {
        type: 'math',
        tex: '\\deg(A) = 5 \\text{ (loop } 2 + 2 \\text{ parallel } AB + 1\\text{ edge } AE\\text{)}, \\quad \\deg(B) = 5, \\quad \\deg(C) = 5 \\text{ (loop } 2 + BC + 2\\text{ parallel } CD\\text{)}, \\quad \\deg(D) = 4, \\quad \\deg(E) = 3',
      },
      {
        type: 'text',
        content:
          '*(Note: If the top curve $AB$ is a single edge with the loop at $A$, then $\\deg(A)=4, \\deg(B)=4, \\deg(C)=5, \\deg(D)=4, \\deg(E)=3 \\implies \\sum \\deg = 20 = 2(10)$ edges; and in the professor’s $6$-vertex notebook version on Page 4, $\\deg(V_1)=5, \\deg(V_2)=3, \\deg(V_3)=5, \\deg(V_4)=3, \\deg(V_5)=1, \\deg(V_6)=1 \\implies \\sum \\deg(V_i) = 18 = 2(9)$).*',
      },
      {
        type: 'math',
        tex: '\\sum_{v_i \\in V(G_2)} \\deg(v_i) = 4 + 4 + 5 + 4 + 3 = 20 = 2(10) = 2e \\quad \\text{(Handshaking Theorem Verified)}',
      },
    ],
  },
  {
    id: 'm5-partB-7',
    part: 'B',
    number: 7,
    questionLatex:
      'Draw the graph with $5$ vertices, $A, B, C, D, E$ such that $\\deg(A) = 3$, $B$ is an odd vertex, $\\deg(C) = 2$ and $D$ and $E$ are adjacent.',
    topic: 'Graph Construction from Degree Constraints',
    marks: 6,
    inClassNotes: true,
    professorMethodNote:
      'Exact 6M Problem 1 from Professor’s notebook (17/9/26, Pages 4 & 5): shows both the exact graph drawn by the professor in class (with deg(A)=3, deg(B)=3 (odd), deg(C)=2, deg(D)=3, deg(E)=1, e=6) and the simple-graph version (deg(B)=1 (odd), e=5).',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0007_d0474659.jpg',
        label: 'Page 4: 6M Problem 1 Statement (A, B, C, D, E)',
        date: '17/9/26',
      },
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0008_35fb5fc7.jpg',
        label: 'Page 5: Professor’s Drawn Graph Solution for A, B, C, D, E',
        date: '17/9/26',
      },
    ],
    answerLines: [
      {
        type: 'text',
        content:
          '**Given Conditions:** Vertex set $V = \\{A, B, C, D, E\\}$ ($5$ vertices) such that:',
      },
      {
        type: 'list',
        items: [
          '1. $\\deg(A) = 3$',
          '2. $\\deg(B)$ is an **odd** degree (e.g., $\\deg(B) = 3$ or $\\deg(B) = 1$)',
          '3. $\\deg(C) = 2$',
          '4. Vertices $D$ and $E$ are **adjacent** (there is an edge between $D$ and $E$).',
        ],
      },
      { type: 'diagram', diagramId: 'partB-7-abcde' },
      {
        type: 'subhead',
        content: 'Verification of Vertex Degrees:',
      },
      {
        type: 'list',
        items: [
          '• **In Professor’s Classwork Graph (Left, $e = 6$):** $\\deg(A) = 3$, $\\deg(B) = 3$ (odd), $\\deg(C) = 2$, $\\deg(D) = 3$, $\\deg(E) = 1$, and $D$ is adjacent to $E$. Sum of degrees $= 3 + 3 + 2 + 3 + 1 = 12 = 2(6)$ (even).',
          '• **In Simple Graph Alternative (Right, $e = 5$):** Edges are $AB, AC, AD, CD, DE$. Then $\\deg(A) = 3$, $\\deg(B) = 1$ (odd), $\\deg(C) = 2$, $\\deg(D) = 3$, $\\deg(E) = 1$, and $D, E$ are adjacent. Sum of degrees $= 3 + 1 + 2 + 3 + 1 = 10 = 2(5)$ (even).',
        ],
      },
    ],
  },
  {
    id: 'm5-partB-8',
    part: 'B',
    number: 8,
    questionLatex:
      'Prove that the number of edges in a bipartite graph with $n$ vertices is atmost $(n^2/2)$.',
    topic: 'Bipartite Graph Maximum Edges',
    marks: 6,
    inClassNotes: true,
    professorMethodNote:
      'Uses the professor’s bipartition definition V = V₁ ∪ V₂ with |V₁| = r and |V₂| = n - r, maximizes r(n-r) at r = n/2 to get n²/4, and notes that n²/4 ≤ n²/2.',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0011_58516506.jpg',
        label: 'Page 8: Bipartite Graph Partition V₁, V₂',
        date: '18/9/26',
      },
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0012_2ece1732.jpg',
        label: 'Page 9: Complete Bipartite Graph K_{m,n}',
        date: '22/9/26',
      },
    ],
    answerLines: [
      {
        type: 'subhead',
        content: 'Proof:',
      },
      {
        type: 'text',
        content:
          'Let $G = (V, E)$ be a simple bipartite graph with $|V| = n$ vertices. By the definition of a bipartite graph, the vertex set $V$ is partitioned into two disjoint subsets $V_1$ and $V_2$ such that every edge has one end vertex in $V_1$ and the other end vertex in $V_2$.',
      },
      {
        type: 'text',
        content:
          'Let $|V_1| = r$. Since $|V_1| + |V_2| = n$, the number of vertices in $V_2$ is $|V_2| = n - r$.',
      },
      {
        type: 'text',
        content:
          'The maximum number of edges occurs when $G$ is a **complete bipartite graph** $K_{r, n-r}$, in which every vertex of $V_1$ is joined to every vertex of $V_2$. Hence, the maximum number of edges is:',
      },
      {
        type: 'math',
        tex: 'e \\le |V_1| \\times |V_2| = r(n - r)',
      },
      {
        type: 'text',
        content:
          'Using the algebraic identity $a b \\le \\left(\\frac{a + b}{2}\\right)^2$ (or completing the square):',
      },
      {
        type: 'math',
        tex: 'r(n - r) = \\left(\\frac{r + (n - r)}{2}\\right)^2 - \\left(\\frac{r - (n - r)}{2}\\right)^2 = \\frac{n^2}{4} - \\left(r - \\frac{n}{2}\\right)^2 \\le \\frac{n^2}{4}',
      },
      {
        type: 'text',
        content:
          'Since $\\frac{n^2}{4} \\le \\frac{n^2}{2}$ for all positive integers $n$ (and even counting directed/two-way incidences $2e \\le \\frac{n^2}{2}$), we have:',
      },
      {
        type: 'math',
        tex: '\\boxed{e \\le \\frac{n^2}{4} \\le \\frac{n^2}{2}}',
      },
      {
        type: 'text',
        content:
          'Hence, the number of edges in a bipartite graph with $n$ vertices is at most $\\frac{n^2}{4}$ (and therefore at most $\\frac{n^2}{2}$).',
      },
    ],
  },
  {
    id: 'm5-partB-9',
    part: 'B',
    number: 9,
    questionLatex:
      'Explain the Eulerian Graph of Eulerian path, Eulerian Circuit and also the Hamiltonian Graph of Hamiltonian path, Hamiltonian Circuit with suitable examples of graphical representations.',
    topic: 'Eulerian & Hamiltonian Graphs',
    marks: 6,
    inClassNotes: false,
    professorMethodNote:
      'Structured clearly with the 4 definitions (Eulerian Path, Eulerian Circuit, Eulerian Graph; Hamiltonian Path, Hamiltonian Circuit, Hamiltonian Graph), degree conditions, and graphical representations.',
    notebookRefs: [],
    answerLines: [
      {
        type: 'subhead',
        content: '1. Eulerian Path, Eulerian Circuit, and Eulerian Graph:',
      },
      {
        type: 'list',
        items: [
          '• **Eulerian Path:** A path in a graph $G$ that traverses **every edge** of $G$ **exactly once** is called an Eulerian path. (Exists iff $G$ is connected and has either $0$ or $2$ vertices of odd degree).',
          '• **Eulerian Circuit:** A closed Eulerian path (a circuit that traverses every edge of $G$ exactly once and starts and ends at the same vertex) is called an Eulerian circuit.',
          '• **Eulerian Graph:** A connected graph $G$ that contains an **Eulerian circuit** is called an Eulerian graph. **Necessary and Sufficient Condition:** A connected graph $G$ is Eulerian if and only if **every vertex of $G$ has even degree**.',
        ],
      },
      {
        type: 'subhead',
        content: '2. Hamiltonian Path, Hamiltonian Circuit, and Hamiltonian Graph:',
      },
      {
        type: 'list',
        items: [
          '• **Hamiltonian Path:** A simple path in a connected graph $G$ that visits **every vertex** of $G$ **exactly once** is called a Hamiltonian path.',
          '• **Hamiltonian Circuit:** A closed cycle in $G$ that visits **every vertex** of $G$ **exactly once** (except the starting/ending vertex) is called a Hamiltonian circuit.',
          '• **Hamiltonian Graph:** A graph $G$ that possesses a **Hamiltonian circuit** is called a Hamiltonian graph.',
        ],
      },
      {
        type: 'subhead',
        content: 'Graphical Representations & Examples:',
      },
      { type: 'diagram', diagramId: 'partB-2-euler-ham' },
      {
        type: 'list',
        items: [
          '• In **Graph (i) ($C_4$)**: $A \\to B \\to C \\to D \\to A$ is both an Eulerian circuit and a Hamiltonian circuit.',
          '• In **Graph (ii) (Hourglass)**: $A \\to B \\to C \\to D \\to E \\to C \\to A$ is an Eulerian circuit (all degrees are even: $2,2,4,2,2$), and $A \\to B \\to C \\to D \\to E$ is a Hamiltonian path.',
          '• In **Graph (iii) ($K_4$)**: $A \\to B \\to C \\to D \\to A$ is a Hamiltonian circuit.',
        ],
      },
    ],
  },
  {
    id: 'm5-partB-10',
    part: 'B',
    number: 10,
    questionLatex: 'Write a few properties of Hamiltonian Circuit.',
    topic: 'Properties of Hamiltonian Circuit',
    marks: 6,
    inClassNotes: false,
    professorMethodNote:
      'Lists the 6 standard university-exam properties of Hamiltonian circuits (length n, vertex degrees, cut-vertices, pendant vertices, Dirac’s Theorem, Ore’s Theorem, and count in K_n).',
    notebookRefs: [],
    answerLines: [
      {
        type: 'subhead',
        content: 'Properties of a Hamiltonian Circuit in a Graph $G$ with $n$ Vertices:',
      },
      {
        type: 'list',
        items: [
          '1. **Equal Number of Vertices and Edges:** A Hamiltonian circuit in a graph $G$ of $n$ vertices contains **exactly $n$ vertices and $n$ edges**, and every vertex in the Hamiltonian circuit has degree $2$ within the cycle.',
          '2. **No Pendant (Degree-$1$) or Isolated Vertices:** A graph with a pendant vertex ($\\deg(v) = 1$) or an isolated vertex ($\\deg(v) = 0$) **cannot** have a Hamiltonian circuit, because every vertex in a Hamiltonian graph must have $\\deg(v) \\ge 2$.',
          '3. **No Cut-Vertices (Articulation Points):** A Hamiltonian graph contains **no cut-vertex**, because removing any single vertex from a cycle leaves a connected path.',
          '4. **Complete Graph Property:** Every complete graph $K_n$ with $n \\ge 3$ is a Hamiltonian graph, and the number of distinct Hamiltonian circuits in $K_n$ is $\\frac{(n-1)!}{2}$.',
          '5. **Dirac’s Theorem (Sufficient Condition):** If $G$ is a simple graph with $n \\ge 3$ vertices such that $\\deg(v) \\ge \\frac{n}{2}$ for every vertex $v$ of $G$, then $G$ has a Hamiltonian circuit.',
          '6. **Ore’s Theorem (Sufficient Condition):** If $G$ is a simple graph with $n \\ge 3$ vertices such that $\\deg(u) + \\deg(v) \\ge n$ for every pair of non-adjacent vertices $u$ and $v$, then $G$ has a Hamiltonian circuit.',
        ],
      },
    ],
  },

  // ==========================================
  // PART C - 10 MARK ANSWERS (10 QUESTIONS)
  // ==========================================
  {
    id: 'm5-partC-1',
    part: 'C',
    number: 1,
    questionLatex:
      'Prove that the maximum number of edges in a simple disconnected graph with ‘$n$’ vertices and $k$ components is $\\frac{(n - k)(n - k + 1)}{2}$.',
    topic: 'Connectedness & Components',
    marks: 10,
    inClassNotes: false,
    professorMethodNote:
      'Standard step-by-step university proof using component sizes n₁, n₂, ..., n_k with ∑ n_i = n and the inequality ∑ n_i² ≤ (n - k + 1)² + (k - 1).',
    notebookRefs: [],
    answerLines: [
      {
        type: 'subhead',
        content: 'Proof:',
      },
      {
        type: 'text',
        content:
          'Let $G$ be a simple graph with $n$ vertices and $k$ connected components $G_1, G_2, \\dots, G_k$. Let the number of vertices in the $i$-th component $G_i$ be $n_i$ (where $n_i \\ge 1$ for $i = 1, 2, \\dots, k$). Then:',
      },
      {
        type: 'math',
        tex: '\\sum_{i=1}^{k} n_i = n_1 + n_2 + \\dots + n_k = n \\quad \\text{--- (1)}',
      },
      {
        type: 'text',
        content:
          'Since $n_i \\ge 1$, we have $n_i - 1 \\ge 0$. From (1):',
      },
      {
        type: 'math',
        tex: '\\sum_{i=1}^{k} (n_i - 1) = \\sum_{i=1}^{k} n_i - \\sum_{i=1}^{k} 1 = n - k',
      },
      {
        type: 'text',
        content: 'Squaring both sides:',
      },
      {
        type: 'math',
        tex: '\\left[\\sum_{i=1}^{k} (n_i - 1)\\right]^2 = (n - k)^2',
      },
      {
        type: 'math',
        tex: '\\implies \\sum_{i=1}^{k} (n_i - 1)^2 + 2 \\sum_{i < j} (n_i - 1)(n_j - 1) = (n - k)^2',
      },
      {
        type: 'text',
        content:
          'Since $n_i - 1 \\ge 0$ for all $i$, the cross-product terms $2 \\sum_{i < j} (n_i - 1)(n_j - 1) \\ge 0$. Dropping these non-negative terms gives:',
      },
      {
        type: 'math',
        tex: '\\sum_{i=1}^{k} (n_i - 1)^2 \\le (n - k)^2',
      },
      {
        type: 'text',
        content: 'Expanding $(n_i - 1)^2 = n_i^2 - 2n_i + 1$:',
      },
      {
        type: 'math',
        tex: '\\sum_{i=1}^{k} n_i^2 - 2\\sum_{i=1}^{k} n_i + \\sum_{i=1}^{k} 1 \\le (n - k)^2',
      },
      {
        type: 'math',
        tex: '\\implies \\sum_{i=1}^{k} n_i^2 - 2n + k \\le (n - k)^2 \\implies \\sum_{i=1}^{k} n_i^2 \\le (n - k)^2 + 2n - k \\quad \\text{--- (2)}',
      },
      {
        type: 'text',
        content:
          'Now, a simple component $G_i$ with $n_i$ vertices can have at most $\\frac{n_i(n_i - 1)}{2}$ edges (when $G_i$ is a complete graph $K_{n_i}$). Therefore, the maximum number of edges $e$ in the entire graph $G$ is:',
      },
      {
        type: 'math',
        tex: 'e \\le \\sum_{i=1}^{k} \\frac{n_i(n_i - 1)}{2} = \\frac{1}{2} \\sum_{i=1}^{k} n_i^2 - \\frac{1}{2} \\sum_{i=1}^{k} n_i = \\frac{1}{2} \\sum_{i=1}^{k} n_i^2 - \\frac{n}{2}',
      },
      {
        type: 'text',
        content: 'Substituting inequality (2) into the above expression:',
      },
      {
        type: 'math',
        tex: 'e \\le \\frac{1}{2}\\left[(n - k)^2 + 2n - k\\right] - \\frac{n}{2} = \\frac{(n - k)^2 + 2n - k - n}{2} = \\frac{(n - k)^2 + (n - k)}{2}',
      },
      {
        type: 'math',
        tex: '\\implies \\boxed{e \\le \\frac{(n - k)(n - k + 1)}{2}}',
      },
      {
        type: 'text',
        content:
          'Hence, the maximum number of edges in a simple disconnected graph with $n$ vertices and $k$ components is $\\frac{(n - k)(n - k + 1)}{2}$.',
      },
    ],
  },
  {
    id: 'm5-partC-2',
    part: 'C',
    number: 2,
    questionLatex: 'Answer the following:',
    subparts: [
      '(i) Define isomorphism of a graph $G$.',
      '(ii) Using circuits, check whether the following pairs of graphs $G_1$ and $G_2$ are isomorphic or not and justify your answer.',
    ],
    questionDiagramId: 'partC-2-g1-g2',
    topic: 'Graph Isomorphism',
    marks: 10,
    inClassNotes: true,
    professorMethodNote:
      'Uses the professor’s definition of Graph Isomorphism (Page 13), checks |V|, |E|, vertex degrees, circuit lengths (3-cycles and 4-cycles), and writes the Adjacency Matrices A(G₁) and A(G₂).',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0016_1b62fc3f.jpg',
        label: 'Page 13: Graph Isomorphism Definition & Note',
        date: '24/9/26',
      },
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0020_7987cac3.jpg',
        label: 'Page 17: Adjacency Matrix Comparison A(G) and A(G′)',
        date: '25/9/26',
      },
    ],
    answerLines: [
      {
        type: 'subhead',
        content: '(i) Definition of Graph Isomorphism:',
      },
      {
        type: 'text',
        content:
          'Two graphs $G_1 = (V_1, E_1)$ and $G_2 = (V_2, E_2)$ are said to be **isomorphic** to each other if there exists a one-to-one correspondence (bijection) between their vertex sets and edge sets preserving adjacency.',
      },
      {
        type: 'subhead',
        content: '(ii) Checking Isomorphism of $G_1$ and $G_2$ Using Circuits and Adjacency:',
      },
      {
        type: 'list',
        items: [
          '1. **Number of Vertices:** $|V(G_1)| = 4$ ($\\{A, B, C, D\\}$) and $|V(G_2)| = 4$ ($\\{V_1, V_2, V_3, V_4\\}$).',
          '2. **Number of Edges:** $|E(G_1)| = 6$ and $|E(G_2)| = 6$.',
          '3. **Degree of Vertices:** In $G_1$, $\\deg(A) = \\deg(B) = \\deg(C) = \\deg(D) = 3$. In $G_2$, $\\deg(V_1) = \\deg(V_2) = \\deg(V_3) = \\deg(V_4) = 3$.',
          '4. **Circuit Comparison:** Both $G_1$ and $G_2$ are representations of the complete graph $K_4$:',
          '   • **Circuits of length $3$ ($3$-cycles):** $G_1$ has $\\binom{4}{3} = 4$ circuits of length $3$: $(A-B-C-A),\\, (A-B-D-A),\\, (A-C-D-A),\\, (B-C-D-B)$. Similarly, $G_2$ has $4$ circuits of length $3$: $(V_1-V_2-V_3-V_1),\\, (V_1-V_2-V_4-V_1),\\, (V_1-V_3-V_4-V_1),\\, (V_2-V_3-V_4-V_2)$.',
          '   • **Circuits of length $4$ ($4$-cycles):** Both $G_1$ and $G_2$ have $3$ simple circuits of length $4$ (e.g., $A-B-C-D-A \\leftrightarrow V_1-V_2-V_4-V_3-V_1$).',
        ],
      },
      {
        type: 'text',
        content:
          '**5. Vertex Mapping and Adjacency Matrix Verification (Professor’s Method):** Define the one-to-one correspondence:',
      },
      {
        type: 'math',
        tex: 'A \\to V_1, \\qquad B \\to V_2, \\qquad C \\to V_3, \\qquad D \\to V_4',
      },
      {
        type: 'math',
        tex: 'A(G_1) = \\begin{array}{c|cccc} & A & B & C & D \\\\ \\hline A & 0 & 1 & 1 & 1 \\\\ B & 1 & 0 & 1 & 1 \\\\ C & 1 & 1 & 0 & 1 \\\\ D & 1 & 1 & 1 & 0 \\end{array} = \\begin{array}{c|cccc} & V_1 & V_2 & V_3 & V_4 \\\\ \\hline V_1 & 0 & 1 & 1 & 1 \\\\ V_2 & 1 & 0 & 1 & 1 \\\\ V_3 & 1 & 1 & 0 & 1 \\\\ V_4 & 1 & 1 & 1 & 0 \\end{array} = A(G_2)',
      },
      {
        type: 'math',
        tex: '\\because A(G_1) = A(G_2) \\text{ and all circuits match, } \\boxed{G_1 \\text{ and } G_2 \\text{ are isomorphic } (G_1 \\cong G_2).}',
      },
    ],
  },
  {
    id: 'm5-partC-3',
    part: 'C',
    number: 3,
    questionLatex: 'Prove the following fundamental theorems:',
    subparts: [
      '(i) If $G = (V, E)$ is an undirected graph with $e$ edges, then prove that $\\sum_i \\deg(v_i) = 2e$.',
      '(ii) Prove that the number of vertices of odd degree in an undirected graph is even.',
    ],
    topic: 'Handshaking Theorem & Odd Degree Corollary',
    marks: 10,
    inClassNotes: true,
    professorMethodNote:
      'Combines the professor’s exact Handshaking Theorem proof (Page 5) with the odd-degree vertex partition proof (V = V₁ ∪ V₂).',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0008_35fb5fc7.jpg',
        label: 'Page 5: Handshaking Theorem & Proof',
        date: '17/9/26',
      },
    ],
    answerLines: [
      {
        type: 'subhead',
        content: '(i) Proof of Handshaking Theorem ($\\sum_i \\deg(v_i) = 2e$):',
      },
      {
        type: 'text',
        content:
          'Let $G = (V, E)$ be an undirected graph with $n$ vertices and $e$ edges. By definition, the degree of a vertex $\\deg(v_i)$ is the number of edges incident at $v_i$ (with self-loops counted twice).',
      },
      {
        type: 'text',
        content:
          'Since every edge in $G$ is incident with **exactly $2$ vertices**, every single edge contributes **$2$** to the sum of the degrees of the vertices.',
      },
      {
        type: 'text',
        content:
          'Therefore, all the $e$ edges together contribute $2e$ to the sum of the degrees of all vertices:',
      },
      {
        type: 'math',
        tex: '\\boxed{\\sum_{i=1}^{n} \\deg(v_i) = 2e}',
      },
      {
        type: 'subhead',
        content: '(ii) Proof that the Number of Vertices of Odd Degree is Even:',
      },
      {
        type: 'text',
        content:
          'Partition the vertex set $V$ into two disjoint sets: $V_1$ (the set of vertices of **even** degree) and $V_2$ (the set of vertices of **odd** degree). By the Handshaking Theorem proved in (i):',
      },
      {
        type: 'math',
        tex: '\\sum_{v_i \\in V} \\deg(v_i) = \\sum_{v_i \\in V_1} \\deg(v_i) + \\sum_{v_i \\in V_2} \\deg(v_i) = 2e',
      },
      {
        type: 'math',
        tex: '\\implies \\sum_{v_i \\in V_2} \\deg(v_i) = 2e - \\sum_{v_i \\in V_1} \\deg(v_i)',
      },
      {
        type: 'text',
        content:
          'Since $2e$ is even, and $\\sum_{v_i \\in V_1} \\deg(v_i)$ is a sum of even numbers (hence even), their difference $2e - \\sum_{v_i \\in V_1} \\deg(v_i)$ is **even**.',
      },
      {
        type: 'text',
        content:
          'Thus $\\sum_{v_i \\in V_2} \\deg(v_i)$ is an even number. Because every term $\\deg(v_i)$ for $v_i \\in V_2$ is odd, the sum of odd integers can be even **only when the number of terms $|V_2|$ is even**.',
      },
      {
        type: 'math',
        tex: '\\therefore \\text{The number of vertices of odd degree in an undirected graph is even.}',
      },
    ],
  },
  {
    id: 'm5-partC-4',
    part: 'C',
    number: 4,
    questionLatex:
      'If all the vertices of an undirected graph are each of odd degree $k$, show that the number of edges of the graph is a multiple of $k$.',
    topic: 'Handshaking Theorem Application',
    marks: 10,
    inClassNotes: true,
    professorMethodNote:
      'Applies the professor’s Handshaking Theorem ∑ deg(v_i) = 2e (Pages 5 & 6) together with the odd-degree theorem to show n = 2m (even), giving e = m·k.',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0008_35fb5fc7.jpg',
        label: 'Page 5: Handshaking Theorem ∑ deg(v_i) = 2e',
        date: '17/9/26',
      },
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0009_6313d86e.jpg',
        label: 'Page 6: Regular Degree Application (n × k = 2e)',
        date: '17/9/26',
      },
    ],
    answerLines: [
      {
        type: 'subhead',
        content: 'Proof:',
      },
      {
        type: 'text',
        content:
          'Let $G = (V, E)$ be an undirected graph with $n$ vertices and $e$ edges, such that every vertex $v_i \\in V$ has the same **odd degree $k$** (that is, $\\deg(v_i) = k$ for $i = 1, 2, \\dots, n$, where $k$ is odd).',
      },
      {
        type: 'text',
        content: 'By the **Handshaking Theorem**:',
      },
      {
        type: 'math',
        tex: '\\sum_{i=1}^{n} \\deg(v_i) = 2e',
      },
      {
        type: 'text',
        content: 'Since $\\deg(v_i) = k$ for each of the $n$ vertices:',
      },
      {
        type: 'math',
        tex: '\\underbrace{k + k + \\dots + k}_{n \\text{ times}} = 2e \\implies n \\cdot k = 2e',
      },
      {
        type: 'text',
        content:
          'Since $2e$ is an **even** integer and $k$ is given to be an **odd** integer, the product $n \\cdot k$ can be even **only if $n$ is an even integer** (this also follows because the number of vertices of odd degree in any undirected graph is even).',
      },
      {
        type: 'text',
        content: 'Therefore, let $n = 2m$ for some positive integer $m \\in \\mathbb{Z}^+$. Substituting $n = 2m$ into $n \\cdot k = 2e$:',
      },
      {
        type: 'math',
        tex: '(2m) \\cdot k = 2e \\implies \\boxed{e = m \\cdot k}',
      },
      {
        type: 'text',
        content:
          'Since $m$ is a positive integer, $e = m \\cdot k$ shows that **the number of edges $e$ of the graph is a multiple of $k$**. Hence proved.',
      },
    ],
  },
  {
    id: 'm5-partC-5',
    part: 'C',
    number: 5,
    questionLatex: 'Solve the following on paths and circuits:',
    subparts: [
      '(i) Find which of the following vertex sequences are simple paths, paths, closed paths (circuits) and simple circuits with respect to the graph: (a) $A - D - E - B - C$, (b) $A - D - B - C - E$, (c) $A - E - C - B - E - A$, (d) $C - B - D - A - E - C$, (e) $A - D - B - E - C - B$.',
      '(ii) Find all the simple paths from $A$ to $F$ and all the circuits in the graph given.',
    ],
    questionDiagramId: 'partC-5-graphs',
    topic: 'Paths, Simple Paths, Circuits & Simple Circuits',
    marks: 10,
    inClassNotes: false,
    professorMethodNote:
      'Classifies each vertex sequence in 5(i) by checking edge existence, edge repetition, vertex repetition, and closedness, and lists all 7 simple paths from A to F and all simple circuits in 5(ii).',
    notebookRefs: [],
    answerLines: [
      {
        type: 'subhead',
        content: 'Part (i): Classification of Vertex Sequences in Graph 5(i):',
      },
      {
        type: 'text',
        content:
          'In Graph 5(i), the edge set is $E = \\{(A,D),\\, (A,E),\\, (B,D),\\, (B,E),\\, (B,C),\\, (C,E)\\}$ (note: there is **no** edge $(D,E)$ and **no** edge $(A,B)$).',
      },
      {
        type: 'list',
        items: [
          '• **(a) $A - D - E - B - C$:** **Not a path** because there is **no edge between $D$ and $E$** in the given graph.',
          '• **(b) $A - D - B - C - E$:** All edges $(A,D), (D,B), (B,C), (C,E)$ exist, and **no vertices or edges are repeated**. Therefore, it is a **Path** and a **Simple Path** (open).',
          '• **(c) $A - E - C - B - E - A$:** It starts and ends at $A$, so it is a **Closed Path (Walk)**, but it is **neither a simple path nor a circuit** because the edge $(A,E)$ is traversed twice ($A \\to E$ and $E \\to A$) and vertex $E$ is repeated.',
          '• **(d) $C - B - D - A - E - C$:** All edges $(C,B), (B,D), (D,A), (A,E), (E,C)$ exist, it starts and ends at $C$, and no edges or intermediate vertices are repeated. Therefore, it is a **Closed Path (Circuit)** and a **Simple Circuit (Cycle of length $5$)**.',
          '• **(e) $A - D - B - E - C - B$:** All edges $(A,D), (D,B), (B,E), (E,C), (C,B)$ exist with no repeated edges, so it is a **Path**, but **not a simple path** because vertex $B$ is repeated, and **not a circuit** because it starts at $A$ and ends at $B$.',
        ],
      },
      {
        type: 'subhead',
        content: 'Part (ii): All Simple Paths from $A$ to $F$ and All Simple Circuits in Graph 5(ii):',
      },
      {
        type: 'text',
        content:
          'In Graph 5(ii), the edges are $AB, AD, BD, BC, DE, CE, CF, EF$.',
      },
      {
        type: 'text',
        content: '**1. All Simple Paths from $A$ to $F$ ($7$ simple paths):**',
      },
      {
        type: 'list',
        items: [
          '1. $A \\to B \\to C \\to F$ (length $3$)',
          '2. $A \\to D \\to E \\to F$ (length $3$)',
          '3. $A \\to B \\to C \\to E \\to F$ (length $4$)',
          '4. $A \\to D \\to E \\to C \\to F$ (length $4$)',
          '5. $A \\to B \\to D \\to E \\to F$ (length $4$)',
          '6. $A \\to D \\to B \\to C \\to F$ (length $4$)',
          '7. $A \\to B \\to D \\to E \\to C \\to F$ and $A \\to D \\to B \\to C \\to E \\to F$ (length $5$)',
        ],
      },
      {
        type: 'text',
        content: '**2. All Simple Circuits (Cycles) in Graph 5(ii) ($6$ simple circuits):**',
      },
      {
        type: 'list',
        items: [
          '1. **3-Cycles ($2$):** $A - B - D - A$ and $C - E - F - C$.',
          '2. **4-Cycles ($2$):** $B - C - E - D - B$ and $A - B - C - E - D - A$ (5-cycle) / $B - C - F - E - D - B$ (5-cycle).',
          '3. **Complete List of Simple Circuits:**',
          '   • $A - B - D - A$ (length $3$)',
          '   • $C - F - E - C$ (length $3$)',
          '   • $B - C - E - D - B$ (length $4$)',
          '   • $A - B - C - E - D - A$ (length $5$)',
          '   • $B - C - F - E - D - B$ (length $5$)',
          '   • $A - B - C - F - E - D - A$ (length $6$ — Hamiltonian cycle).',
        ],
      },
    ],
  },
  {
    id: 'm5-partC-6',
    part: 'C',
    number: 6,
    questionLatex:
      'Prove that a simple graph with $n$ vertices must be connected if it has more than $\\frac{(n - 1)(n - 2)}{2}$ edges.',
    topic: 'Connectedness Threshold',
    marks: 10,
    inClassNotes: false,
    professorMethodNote:
      'Proof by contradiction using the result of Part C Q1: assumes G is disconnected with k ≥ 2 components, substitutes k = 2 into (n-k)(n-k+1)/2 to get e ≤ (n-1)(n-2)/2, contradicting the given condition.',
    notebookRefs: [],
    answerLines: [
      {
        type: 'subhead',
        content: 'Proof (By Contradiction):',
      },
      {
        type: 'text',
        content:
          'Let $G = (V, E)$ be a simple graph with $n$ vertices and $e$ edges such that:',
      },
      {
        type: 'math',
        tex: 'e > \\frac{(n - 1)(n - 2)}{2} \\quad \\text{--- (1)}',
      },
      {
        type: 'text',
        content:
          '**Assumption:** Suppose, on the contrary, that $G$ is **disconnected**. Then $G$ must have $k$ connected components, where $k \\ge 2$.',
      },
      {
        type: 'text',
        content:
          'We know that the maximum number of edges in a simple disconnected graph with $n$ vertices and $k$ components is given by:',
      },
      {
        type: 'math',
        tex: 'e_{\\max}(k) = \\frac{(n - k)(n - k + 1)}{2}',
      },
      {
        type: 'text',
        content:
          'Since $k \\ge 2$, the function $f(k) = \\frac{(n - k)(n - k + 1)}{2}$ is a decreasing function of $k$ (for $2 \\le k \\le n$), so it attains its largest possible value when $k = 2$ (that is, when $G$ has $2$ components of sizes $n_1 = n - 1$ and $n_2 = 1$).',
      },
      {
        type: 'text',
        content:
          'Substituting $k = 2$ into the maximum edges formula, any disconnected simple graph on $n$ vertices can have at most:',
      },
      {
        type: 'math',
        tex: 'e \\le \\frac{(n - 2)(n - 2 + 1)}{2} = \\frac{(n - 1)(n - 2)}{2}',
      },
      {
        type: 'text',
        content:
          'This **contradicts** the given hypothesis (1) that $e > \\frac{(n - 1)(n - 2)}{2}$.',
      },
      {
        type: 'math',
        tex: '\\therefore \\text{Our assumption that } G \\text{ is disconnected is false. Hence, } G \\text{ must be connected.}',
      },
    ],
  },
  {
    id: 'm5-partC-7',
    part: 'C',
    number: 7,
    questionLatex:
      'Explain the path, cycles and connectivity with suitable example of graphical representations.',
    topic: 'Paths, Cycles & Connectivity',
    marks: 10,
    inClassNotes: false,
    professorMethodNote:
      'Comprehensive 10-mark exam answer defining Walk, Path, Simple Path, Cycle (Simple Circuit), Connected vs. Disconnected Graph, and Connected Components with clear diagrams.',
    notebookRefs: [],
    answerLines: [
      {
        type: 'subhead',
        content: '1. Walk, Path, and Simple Path:',
      },
      {
        type: 'list',
        items: [
          '• **Walk:** A walk in a graph $G = (V, E)$ is a finite alternating sequence of vertices and edges $v_0, e_1, v_1, e_2, v_2, \\dots, e_k, v_k$, where each edge $e_i$ has endpoints $v_{i-1}$ and $v_i$. The number of edges $k$ is called the **length** of the walk.',
          '• **Path (Trail):** A walk in which **no edge is repeated** is called a path (or trail).',
          '• **Simple Path:** A path in which **no vertex is repeated** is called a simple path.',
        ],
      },
      {
        type: 'subhead',
        content: '2. Closed Path (Circuit) and Cycle (Simple Circuit):',
      },
      {
        type: 'list',
        items: [
          '• **Closed Path (Circuit):** A path of length $k \\ge 1$ that begins and ends at the same vertex ($v_0 = v_k$) with no repeated edges is called a circuit.',
          '• **Cycle (Simple Circuit):** A circuit in which **no vertex is repeated** except the initial and final vertex ($v_0 = v_k$) is called a cycle (or simple circuit). A cycle with $n$ vertices is denoted by $C_n$ ($n \\ge 3$).',
        ],
      },
      {
        type: 'subhead',
        content: '3. Connectivity and Connected Components:',
      },
      {
        type: 'list',
        items: [
          '• **Connected Graph:** An undirected graph $G$ is said to be **connected** if there exists a path between **every pair of distinct vertices** in $G$.',
          '• **Disconnected Graph:** A graph that is not connected is called a **disconnected graph**. A disconnected graph is the union of two or more disjoint connected subgraphs, each of which is called a **connected component** of $G$.',
        ],
      },
      {
        type: 'subhead',
        content: 'Graphical Illustration:',
      },
      { type: 'diagram', diagramId: 'partC-5-graphs' },
      {
        type: 'list',
        items: [
          '• In **Graph 5(ii) (Right)**:',
          '  – **Simple Path of length $3$:** $A \\to B \\to C \\to F$.',
          '  – **3-Cycle:** $A \\to B \\to D \\to A$; **4-Cycle:** $B \\to C \\to E \\to D \\to B$.',
          '  – **Connectivity:** Since there is a path between every pair of vertices in $\\{A,B,C,D,E,F\\}$, the graph is **connected** (number of components $k = 1$).',
        ],
      },
    ],
  },
  {
    id: 'm5-partC-8',
    part: 'C',
    number: 8,
    questionLatex:
      'For each of the following degree sequences, find if there exists a graph. In each case, either draw a graph or explain why no graphs exists.',
    subparts: [
      '(i) $(4, 4, 4, 3, 2)$',
      '(ii) $(5, 5, 4, 3, 2, 1)$',
      '(iii) $(3, 3, 3, 3, 2)$',
      '(iv) $(3, 3, 3, 3, 3)$',
    ],
    topic: 'Degree Sequences & Handshaking Theorem',
    marks: 10,
    inClassNotes: true,
    professorMethodNote:
      'Applies the Handshaking Theorem (∑ deg(v_i) = 2e must be even, and number of odd-degree vertices must be even) plus simple-graph vertex-degree bounds (max degree ≤ n - 1).',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0008_35fb5fc7.jpg',
        label: 'Page 5: Handshaking Theorem ∑ deg(v_i) = 2e',
        date: '17/9/26',
      },
    ],
    answerLines: [
      {
        type: 'subhead',
        content: '(i) Degree Sequence $(4, 4, 4, 3, 2)$:',
      },
      {
        type: 'text',
        content:
          'Here the number of vertices is $n = 5$. Let us check the sum of degrees by the Handshaking Theorem:',
      },
      {
        type: 'math',
        tex: '\\sum_{i=1}^{5} \\deg(v_i) = 4 + 4 + 4 + 3 + 2 = 17 \\quad (\\text{Odd})',
      },
      {
        type: 'text',
        content:
          'By the **Handshaking Theorem**, $\\sum \\deg(v_i) = 2e$ must always be an **even** number (equivalently, the sequence has only **one** vertex of odd degree $3$, whereas the number of odd-degree vertices must be even).',
      },
      {
        type: 'math',
        tex: '\\therefore \\boxed{\\text{No graph exists with degree sequence } (4, 4, 4, 3, 2).}',
      },
      {
        type: 'subhead',
        content: '(ii) Degree Sequence $(5, 5, 4, 3, 2, 1)$:',
      },
      {
        type: 'text',
        content:
          'Here the number of vertices is $n = 6$ and $\\sum \\deg(v_i) = 5 + 5 + 4 + 3 + 2 + 1 = 20$ (even). Let us check if a **simple graph** can exist:',
      },
      {
        type: 'list',
        items: [
          '• In a simple graph on $n = 6$ vertices, a vertex of degree $5$ must be adjacent to **all other $5$ vertices** in the graph.',
          '• Since there are **two** vertices of degree $5$ (say $v_1$ and $v_2$), every vertex in the graph is adjacent to both $v_1$ and $v_2$.',
          '• Therefore, every vertex in the graph must have degree **at least $2$** ($\\deg(v_i) \\ge 2$).',
          '• However, the given sequence contains a vertex of degree **$1$**, which is a **contradiction**! (By Havel–Hakimi: removing $5$ leaves $(4, 3, 2, 1, 0)$, and removing $4$ requires $4$ positive degrees, which fails).',
        ],
      },
      {
        type: 'math',
        tex: '\\therefore \\boxed{\\text{No simple graph exists with degree sequence } (5, 5, 4, 3, 2, 1).}',
      },
      {
        type: 'subhead',
        content: '(iii) Degree Sequence $(3, 3, 3, 3, 2)$:',
      },
      {
        type: 'text',
        content:
          'Here $n = 5$ vertices and the sum of degrees is:',
      },
      {
        type: 'math',
        tex: '\\sum_{i=1}^{5} \\deg(v_i) = 3 + 3 + 3 + 3 + 2 = 14 = 2e \\implies e = 7 \\text{ edges.}',
      },
      {
        type: 'text',
        content:
          '**Yes, a simple graph exists!** We draw the $5$-vertex graph with $\\deg(v_1)=\\deg(v_2)=\\deg(v_3)=\\deg(v_4)=3$ and $\\deg(v_5)=2$ below:',
      },
      { type: 'diagram', diagramId: 'partC-8-deg33332' },
      {
        type: 'subhead',
        content: '(iv) Degree Sequence $(3, 3, 3, 3, 3)$:',
      },
      {
        type: 'text',
        content:
          'Here $n = 5$ vertices, all of odd degree $3$. Summing the degrees:',
      },
      {
        type: 'math',
        tex: '\\sum_{i=1}^{5} \\deg(v_i) = 3 + 3 + 3 + 3 + 3 = 15 \\quad (\\text{Odd})',
      },
      {
        type: 'text',
        content:
          'Since the sum of degrees is $15$ (odd) and the number of odd-degree vertices is $5$ (odd), this violates the **Handshaking Theorem** ($\\sum \\deg(v_i) = 2e$ must be even).',
      },
      {
        type: 'math',
        tex: '\\therefore \\boxed{\\text{No graph exists with degree sequence } (3, 3, 3, 3, 3).}',
      },
    ],
  },
  {
    id: 'm5-partC-9',
    part: 'C',
    number: 9,
    questionLatex:
      'Determine whether the graph shown in the following figures are isomorphic.',
    questionDiagramId: 'partC-9-trees',
    topic: 'Graph Isomorphism',
    marks: 10,
    inClassNotes: true,
    professorMethodNote:
      'Exact verbatim Problem 2 from Professor’s notebook (25/9/26, Pages 18 & 19): labels vertices A..F and a..f, checks |V(G)|=6, |E(G)|=5, writes both 6×6 Adjacency Matrices A(G) and A(G′) with row-sum degree columns (1,2,2,3,1,1 vs 1,2,3,1,2,1), and compares adjacency of the degree-3 vertex.',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0021_7079d87a.jpg',
        label: 'Page 18: Part C Q9 — Trees G and G′ & Adjacency Matrix A(G)',
        date: '25/9/26',
      },
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0022_30339111.jpg',
        label: 'Page 19: Part C Q9 — Adjacency Matrix A(G′) with Row Sums',
        date: '25/9/26',
      },
    ],
    answerLines: [
      {
        type: 'subhead',
        content: 'Solution (Strictly following Professor’s Classwork Notes — 25/9/26):',
      },
      {
        type: 'text',
        content:
          'Label the vertices of graph (a) $G$ as $A(V_1),\\, B(V_2),\\, C(V_3),\\, D(V_4),\\, E(V_6),\\, F(V_5)$, and the vertices of graph (b) $G\'$ as $a(V\'_1),\\, b(V\'_2),\\, c(V\'_3),\\, d(V\'_6),\\, e(V\'_4),\\, f(V\'_5)$.',
      },
      {
        type: 'math',
        tex: '|V(G)| = 6, \\quad |E(G)| = 5 \\qquad \\text{and} \\qquad |V(G\')| = 6, \\quad |E(G\')| = 5',
      },
      {
        type: 'subhead',
        content: 'Adjacency Matrix $A(G)$ and Row-Sum Degrees:',
      },
      {
        type: 'math',
        tex: 'A(G) = \\begin{array}{c|cccccc|c} & A & B & C & D & E & F & \\text{Degree} \\\\ \\hline A & 0 & 1 & 0 & 0 & 0 & 0 & 1 \\\\ B & 1 & 0 & 1 & 0 & 0 & 0 & 2 \\\\ C & 0 & 1 & 0 & 1 & 0 & 0 & 2 \\\\ D & 0 & 0 & 1 & 0 & 1 & 1 & 3 \\\\ E & 0 & 0 & 0 & 1 & 0 & 0 & 1 \\\\ F & 0 & 0 & 0 & 1 & 0 & 0 & 1 \\end{array}',
      },
      {
        type: 'subhead',
        content: 'Adjacency Matrix $A(G\')$ and Row-Sum Degrees:',
      },
      {
        type: 'math',
        tex: 'A(G\') = \\begin{array}{c|cccccc|c} & a & b & c & d & e & f & \\text{Degree} \\\\ \\hline a & 0 & 1 & 0 & 0 & 0 & 0 & 1 \\\\ b & 1 & 0 & 1 & 0 & 0 & 0 & 2 \\\\ c & 0 & 1 & 0 & 1 & 1 & 0 & 3 \\\\ d & 0 & 0 & 1 & 0 & 0 & 0 & 1 \\\\ e & 0 & 0 & 1 & 0 & 0 & 1 & 2 \\\\ f & 0 & 0 & 0 & 0 & 1 & 0 & 1 \\end{array}',
      },
      {
        type: 'subhead',
        content: 'Adjacency Comparison & Conclusion:',
      },
      {
        type: 'list',
        items: [
          '• Both $G$ and $G\'$ have $6$ vertices, $5$ edges, and the same degree multiset: one vertex of degree $3$, two vertices of degree $2$, and three pendant vertices of degree $1$.',
          '• However, under any isomorphism, the unique vertex of degree $3$ in $G$ (namely $D$ / $V_4$) must map to the unique vertex of degree $3$ in $G\'$ (namely $c$ / $V\'_3$).',
          '• In graph $G$, vertex $D(V_4)$ of degree $3$ is adjacent to **two vertices of degree $1$** ($E, F$) and **one vertex of degree $2$** ($C$).',
          '• In graph $G\'$, vertex $c(V\'_3)$ of degree $3$ is adjacent to **only one vertex of degree $1$** ($d$) and **two vertices of degree $2$** ($b, e$).',
        ],
      },
      {
        type: 'math',
        tex: '\\therefore A(G) \\neq A(G\') \\text{ under any vertex permutation, so } \\boxed{\\text{the given graphs } G \\text{ and } G\' \\text{ are NOT isomorphic.}}',
      },
    ],
  },
  {
    id: 'm5-partC-10',
    part: 'C',
    number: 10,
    questionLatex:
      'Determine whether the graph shown in the following figures are isomorphic.',
    questionDiagramId: 'partC-10-cubes',
    topic: 'Graph Isomorphism',
    marks: 10,
    inClassNotes: true,
    professorMethodNote:
      'Applies the professor’s 3 invariant conditions (Page 13): checks |V(G₁)| vs |V(G₂)|, |E(G₁)| vs |E(G₂)|, and vertex degrees in G₁ (3-regular cube graph with 12 edges) vs G₂ (missing edge PT, 11 edges).',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0016_1b62fc3f.jpg',
        label: 'Page 13: Graph Isomorphism Necessary Conditions',
        date: '24/9/26',
      },
    ],
    answerLines: [
      {
        type: 'subhead',
        content: 'Solution (Using Professor’s Isomorphism Invariants):',
      },
      {
        type: 'text',
        content:
          'Let us check the necessary conditions for graph isomorphism between $G_1$ and $G_2$:',
      },
      {
        type: 'list',
        items: [
          '1. **Number of Vertices:**',
          '   • In $G_1$: $V(G_1) = \\{A, B, C, D, E, F, G, H\\} \\implies |V(G_1)| = 8$.',
          '   • In $G_2$: $V(G_2) = \\{O, P, Q, R, S, T, U, V\\} \\implies |V(G_2)| = 8$.',
          '2. **Number of Edges:**',
          '   • In $G_1$: Outer square ($4$ edges: $AB, BC, CD, DA$) $+$ Inner square ($4$ edges: $EF, FG, GH, HE$) $+$ $4$ connecting edges ($AE, BF, CG, DH$) $\\implies |E(G_1)| = 12$.',
          '   • In $G_2$: Outer square ($4$ edges: $OP, PQ, QR, RO$) $+$ Inner square ($4$ edges: $ST, TU, UV, VS$) $+$ $3$ connecting edges ($OS, QU, RV$; the edge $PT$ is missing) $\\implies |E(G_2)| = 11$.',
          '3. **Degree of Vertices:**',
          '   • In $G_1$: Every vertex $A, B, C, D, E, F, G, H$ has degree $3$ ($G_1$ is a $3$-regular graph).',
          '   • In $G_2$: Vertices $P$ and $T$ have degree $2$ ($\\deg(P) = 2,\\, \\deg(T) = 2$), while the remaining $6$ vertices have degree $3$.',
        ],
      },
      {
        type: 'math',
        tex: '\\because |E(G_1)| = 12 \\neq |E(G_2)| = 11 \\text{ and the vertex degrees do not match, } \\boxed{G_1 \\text{ and } G_2 \\text{ are NOT isomorphic.}}',
      },
      {
        type: 'text',
        content:
          '*(Note: If the edge $PT$ is considered present as a printing omission so that both graphs are the $3$-regular cube graph $Q_3$ with $|V|=8$ and $|E|=12$, then $G_1 \\cong G_2$ via the direct bijection $A \\to O,\\, B \\to P,\\, C \\to Q,\\, D \\to R,\\, E \\to S,\\, F \\to T,\\, G \\to U,\\, H \\to V$).*',
      },
    ],
  },

  // ==========================================
  // EXTRA SOLVED CLASSWORK PROBLEMS FROM MODULE 5 NOTEBOOK
  // ==========================================
  {
    id: 'm5-cw-1',
    part: 'CW',
    number: 1,
    questionLatex:
      'How many edges are there in a graph with $10$ vertices each of degree $6$?',
    topic: 'Handshaking Theorem Classwork Problem 3',
    marks: 6,
    inClassNotes: true,
    professorMethodNote:
      'Exact verbatim Problem 3 from Professor’s notebook (17/9/26, Page 6): writes ∑ deg(v_i) = 2e => 10 × 6 = 2e => 60 = 2e => e = 30.',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0009_6313d86e.jpg',
        label: 'Page 6: Problem 3 (10 vertices each of degree 6)',
        date: '17/9/26',
      },
    ],
    answerLines: [
      {
        type: 'text',
        content:
          'Given: Number of vertices $n = 10$, and degree of each vertex $\\deg(v_i) = 6$.',
      },
      {
        type: 'text',
        content: 'By the **Handshaking Theorem**:',
      },
      {
        type: 'math',
        tex: '\\sum_{i=1}^{10} \\deg(v_i) = 2e',
      },
      {
        type: 'math',
        tex: '10 \\times 6 = 2e \\implies 60 = 2e \\implies e = \\frac{60}{2} = \\boxed{30}',
      },
      {
        type: 'text',
        content: 'Therefore, there are $30$ edges in the graph.',
      },
    ],
  },
  {
    id: 'm5-cw-2',
    part: 'CW',
    number: 2,
    questionLatex:
      'In HITS, Padur, Chennai, in CSE-3B, there are $51$ students. If everyone handshaked with each one of them, the total number of handshakes will be?',
    topic: 'Handshaking Theorem Classwork Problem 4',
    marks: 6,
    inClassNotes: true,
    professorMethodNote:
      'Exact verbatim Problem 4 from Professor’s notebook (17/9/26, Page 6): models 51 students as vertices each of degree 50, and applies ∑ deg(v_i) = 2e => 51 × 50 = 2e => e = 1275.',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0009_6313d86e.jpg',
        label: 'Page 6: Problem 4 (51 students in CSE-3B handshakes)',
        date: '17/9/26',
      },
    ],
    answerLines: [
      {
        type: 'text',
        content:
          'Given: Total number of students (vertices) $= 51$. Since every student shakes hands with each of the remaining $50$ students, the degree of each vertex is $\\deg(v_i) = 50$.',
      },
      {
        type: 'text',
        content: 'By the **Handshaking Theorem**:',
      },
      {
        type: 'math',
        tex: '\\sum \\deg(v_i) = 2e',
      },
      {
        type: 'math',
        tex: '51 \\times 50 = 2e \\implies 2550 = 2e \\implies e = \\frac{2550}{2} = \\boxed{1275}',
      },
      {
        type: 'text',
        content: 'Therefore, the total number of handshakes is $1275$.',
      },
    ],
  },
  {
    id: 'm5-cw-3',
    part: 'CW',
    number: 3,
    questionLatex:
      'Determine whether the given graphs $G_1$ and $G_2$ on vertices $\\{A, B, C, D, E, F\\}$ are bipartite and whether they are complete bipartite.',
    topic: 'Bipartite & Complete Bipartite Check (Classwork 6M)',
    marks: 6,
    inClassNotes: true,
    professorMethodNote:
      'Exact verbatim 6M Problem 1 from Professor’s notebook (22/9/26, Pages 9 & 10): tests bipartition S₁={A,B,C} and S₂={D,E,F}.',
    notebookRefs: [
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0012_2ece1732.jpg',
        label: 'Page 9: 6M Problem on Bipartite Graphs G₁, G₂',
        date: '22/9/26',
      },
      {
        imagePath: '/assets/aistudio/IMG-20261030-WA0013_29f51d9e.jpg',
        label: 'Page 10: Solution for G₁ and G₂ Bipartite Check',
        date: '22/9/26',
      },
    ],
    answerLines: [
      {
        type: 'list',
        items: [
          '• **For $G_1$:** Let $S_1 = \\{A, B, C\\}$ and $S_2 = \\{D, E, F\\}$. Since vertices $A, B, C$ in $S_1$ have edges $AB$ and $BC$ within the same set (forming odd cycles), **$G_1$ is NOT a bipartite graph**.',
          '• **For $G_2$:** The vertex set $V(G_2)$ can be partitioned into two disjoint subsets $S_1 = \\{A, B, C\\}$ and $S_2 = \\{D, E, F\\}$ such that every edge has one endpoint in $S_1$ and the other in $S_2$. Therefore, **$G_2$ is a bipartite graph**.',
          '• **Complete Bipartite Check for $G_2$:** Since vertex $A \\in S_1$ is not adjacent to vertex $F \\in S_2$ (and $C$ is not adjacent to $D$), **$G_2$ is NOT a complete bipartite graph**.',
        ],
      },
    ],
  },
];
