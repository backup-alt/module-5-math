import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const outPath = path.resolve('public', 'EMA51005_Module_5_Final_Answer_Key.pdf');
const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 45, bottom: 45, left: 50, right: 50 },
  bufferPages: true,
  autoFirstPage: true,
});

const writeStream = fs.createWriteStream(outPath);
doc.pipe(writeStream);

function drawRunningHeader() {
  doc.save();
  doc.font('Helvetica').fontSize(9).fillColor('#333333');
  doc.text('EMA51005 - Discrete Mathematics', 50, 28, { align: 'left' });
  doc.text('Unit V - Graph Theory', 50, 28, { align: 'right', width: 495 });
  doc.strokeColor('#aaaaaa').lineWidth(0.5).moveTo(50, 40).lineTo(545, 40).stroke();
  doc.restore();
}

function titleBlock() {
  doc.moveDown(0.5);
  doc.font('Helvetica-Bold').fontSize(16).fillColor('#000000').text('EMA51005 - Discrete Mathematics', { align: 'center' });
  doc.font('Helvetica-Bold').fontSize(13).text('UNIT V - Graph Theory', { align: 'center' });
  doc.font('Helvetica').fontSize(11).text('Final Exam Answer Key', { align: 'center' });
  doc.moveDown(0.8);
  doc.font('Helvetica-Oblique').fontSize(9).fillColor('#444444').text(
    'This answer key strictly follows the professor\'s handwritten classwork notes: Pseudograph & Simple Graph definitions, Degree of a vertex (with self-loops counted twice), Handshaking Theorem (∑ deg(v_i) = 2e), Complete & Regular Graphs (K_n), Bipartite & Complete Bipartite Graphs (K_{m,n}), Adjacency Matrix A=[a_{ij}], Incidence Matrix B=[b_{ij}], and Graph Isomorphism verification using Adjacency Matrix row-sum degrees.',
    { align: 'justify' }
  );
  doc.moveDown(1);
}

function sectionHeader(title: string) {
  doc.moveDown(0.5);
  doc.font('Helvetica-Bold').fontSize(12).fillColor('#000000').text(title);
  doc.moveDown(0.4);
}

function q(num: string, question: string, answer: string[]) {
  if (doc.y > 690) {
    doc.addPage();
  }
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor('#000000').text(`${num}. ${question}`, {
    align: 'justify',
  });
  doc.moveDown(0.2);
  doc.font('Helvetica').fontSize(9).fillColor('#111111');
  for (let i = 0; i < answer.length; i++) {
    const line = answer[i];
    if (doc.y > 750) {
      doc.addPage();
    }
    if (line.startsWith('Answer:')) {
      doc.font('Helvetica-Bold').text('Answer: ', { continued: true }).font('Helvetica').text(line.replace(/^Answer:\s*/, ''), { align: 'justify' });
    } else if (line.startsWith('   ') || line.startsWith('\t')) {
      doc.text(line, { indent: 14, align: 'justify' });
    } else {
      doc.text(line, { align: 'justify' });
    }
    doc.moveDown(0.15);
  }
  doc.moveDown(0.45);
}

// Build Document
titleBlock();
sectionHeader('Part A - Short Answers');

q('1', 'Define a pseudograph.', [
  'Answer: A graph in which self-loops and parallel (multiple) edges are allowed is called a pseudograph.',
  'Example: A 3-vertex graph {v_1, v_2, v_3} having two parallel edges between v_1 and v_2 and a self-loop at v_3.'
]);

q('2', 'What is complete graph? Draw a complete graph on 4 vertices.', [
  'Answer: In a simple graph, if there is an existing edge between every pair of distinct vertices, then such a graph is called a complete graph. Every complete graph is a regular graph; a complete graph on n vertices has degree (n - 1) and is denoted by K_n.',
  'For n = 4 vertices (K_4): Vertices V = {v_1, v_2, v_3, v_4} (drawn as a square with both diagonals v_1v_3 and v_2v_4), where every vertex has degree 3 and total edges e = 4(3)/2 = 6.'
]);

q('3', 'Draw a graph which contains Eulerian path and circuit.', [
  'Answer: An Eulerian path traverses every edge of G exactly once; an Eulerian circuit is a closed Eulerian path that starts and ends at the same vertex (exists iff G is connected and every vertex has even degree).',
  '• Graph with Eulerian Circuit & Closed Path: 5-vertex Hourglass (bowtie) graph with two triangles (v_1, v_2, v_3) and (v_1, v_4, v_5) sharing vertex v_1. Degrees are deg(v_1)=4, deg(v_2)=deg(v_3)=deg(v_4)=deg(v_5)=2 (all even). Eulerian circuit: v_1 → v_2 → v_3 → v_1 → v_4 → v_5 → v_1.',
  '• Graph with Open Eulerian Path: Rectangle A-B-C-D with diagonal A-C (deg(A)=deg(C)=3, deg(B)=deg(D)=2). Eulerian path: A → B → C → A → D → C.'
]);

q('4', 'Define a 3-regular graphs with an example.', [
  'Answer: If every vertex of a simple graph has the same degree k = 3 (i.e., deg(v_i) = 3 for all v_i ∈ V), then the graph is called a 3-regular graph (or cubic graph).',
  'Example: Complete graph K_4 on 4 vertices {v_1, v_2, v_3, v_4}, where deg(v_1) = deg(v_2) = deg(v_3) = deg(v_4) = 3.'
]);

q('5', 'What you mean by bipartite graph and give an example.', [
  'Answer: A graph G is said to be bipartite if its vertex set V(G) can be partitioned into two disjoint non-empty sets V_1 and V_2 (V_1 ∪ V_2 = V(G) and V_1 ∩ V_2 = ∅) such that every edge in E(G) has one end vertex in V_1 and the other end vertex in V_2.',
  'Example: Complete bipartite graph K_{2,3} with V_1 = {u_1, u_2} and V_2 = {v_1, v_2, v_3}.'
]);

q('6', 'Check Hamilton circuit is existing or not for the following graph (Rectangle A-B-C-D with diagonal A-C).', [
  'Answer: Yes, a Hamiltonian circuit exists for the given graph G on vertices {A, B, C, D}.',
  'Since a Hamiltonian circuit visits every vertex exactly once and returns to the starting vertex, the required Hamiltonian circuit is: A → B → C → D → A.'
]);

q('7', 'State Handshaking theorem.', [
  'Answer: Let G = (V, E) be an undirected graph with e edges. Then:',
  '   ∑ deg(v_i) = 2e',
  '(Or) The sum of the degrees of all the vertices of an undirected graph is twice the number of edges of the graph and hence even.'
]);

q('8', 'Define a multigraph.', [
  'Answer: A graph G = (V, E) in which parallel (multiple) edges having the same end vertices are allowed (without self-loops) is called a multigraph.'
]);

q('9', 'Draw a complete bipartite graph K_{2,3}.', [
  'Answer: A complete bipartite graph K_{2,3} has vertex bipartition V_1 = {u_1, u_2} (m = 2 vertices in top row) and V_2 = {v_1, v_2, v_3} (n = 3 vertices in bottom row), with all 2 × 3 = 6 edges joining each u_i ∈ V_1 to every v_j ∈ V_2.'
]);

q('10', 'Define a regular graph.', [
  'Answer: If every vertex of a simple graph has the same degree, then the graph is called a regular graph. If every vertex in a regular graph has degree k, then the graph is called a k-regular graph.'
]);

// Part B
doc.addPage();
sectionHeader('Part B - 6 Mark Answers');

q('1', 'Prove that the number of vertices of odd degree in an undirected graph is even.', [
  'Answer: Let G = (V, E) be an undirected graph with e edges. By the Handshaking Theorem:',
  '   ∑_{v ∈ V} deg(v) = 2e.',
  'Partition the vertex set V into two disjoint subsets: V_1 (vertices of even degree) and V_2 (vertices of odd degree). Then:',
  '   ∑_{v ∈ V_1} deg(v) + ∑_{v ∈ V_2} deg(v) = 2e',
  '   ⇒ ∑_{v ∈ V_2} deg(v) = 2e - ∑_{v ∈ V_1} deg(v).',
  'Here 2e is even, and ∑_{v ∈ V_1} deg(v) is a sum of even integers, which is also even. Therefore, the RHS is even, so ∑_{v ∈ V_2} deg(v) must be an even integer.',
  'Since each term deg(v) for v ∈ V_2 is odd, a sum of odd integers can be even only if the number of terms |V_2| is even.',
  '∴ The number of vertices of odd degree in an undirected graph is even. Hence proved.'
]);

q('2', 'Draw a graph which contains: (i) an Eulerian circuit that is also a Hamiltonian circuit, (ii) an Eulerian circuit, but not a Hamiltonian circuit, (iii) A Hamiltonian circuit, but not an Eulerian circuit.', [
  'Answer: (i) Both Eulerian and Hamiltonian circuit: Cycle graph C_4 on vertices A-B-C-D-A. Every vertex has even degree 2. The circuit A → B → C → D → A traverses every edge once (Eulerian) and visits every vertex once (Hamiltonian).',
  '(ii) Eulerian circuit, but NOT Hamiltonian circuit: 5-vertex Hourglass (bowtie) graph with two triangles A-B-C and C-D-E sharing central vertex C. Vertex degrees are 2, 2, 4, 2, 2 (all even), so A → B → C → D → E → C → A is an Eulerian circuit. However, it has no Hamiltonian circuit because C is a cut-vertex and must be visited twice.',
  '(iii) Hamiltonian circuit, but NOT Eulerian circuit: Complete graph K_4 on vertices A, B, C, D. It has the Hamiltonian circuit A → B → C → D → A, but since every vertex has odd degree 3, it has no Eulerian circuit.'
]);

q('3', 'State and prove the Handshaking theorem.', [
  'Answer: Statement: Let G = (V, E) be an undirected graph with e edges. Then ∑ deg(v_i) = 2e. (Or) The sum of the degrees of all the vertices of an undirected graph is twice the number of edges of the graph and hence even.',
  'Proof (As written in classwork notes): Since every edge is incident with exactly 2 vertices (and a self-loop is counted twice at its vertex), every edge contributes 2 to the sum of the degrees of the vertices.',
  'Therefore, all the edges (e) contribute 2e to the sum of the degrees of the vertices:',
  '   ∑ deg(v_i) = 2e.',
  'Classwork Verification Example: For a graph with 8 vertices of degrees 1, 3, 3, 2, 1, 4, 2, 2 and e = 9 edges: ∑ deg(v_i) = 1 + 3 + 3 + 2 + 1 + 4 + 2 + 2 = 18 = 2(9) ⇒ No. of edges e = 9.'
]);

q('4', 'Write short notes on the following with illustration: (i) Adjacency Matrix and its properties, (ii) Incident Matrix and its properties.', [
  'Answer: (i) Adjacency Matrix: Let G = (V, E) be a simple graph with n vertices {v_1, ..., v_n}. The adjacency matrix is the n × n matrix A(G) = [a_{ij}] where a_{ij} = 1 if there is an edge between v_i and v_j, and 0 otherwise.',
  'Properties: (1) The adjacency matrix of a simple undirected graph is symmetric (a_{ij} = a_{ji}). (2) All diagonal entries are 0 (a_{ii} = 0). (3) The sum of entries in row i equals deg(v_i).',
  'Illustration (4-vertex graph from classwork): Row 1: [0, 1, 1, 1], Row 2: [1, 0, 1, 0], Row 3: [1, 1, 0, 0], Row 4: [1, 0, 0, 0].',
  '(ii) Incidence Matrix: Let G = (V, E) be an undirected graph with n vertices {v_1, ..., v_n} and m edges {e_1, ..., e_m}. The n × m matrix B = [b_{ij}] is defined by b_{ij} = 1 when edge e_j is incident on vertex v_i, and 0 otherwise.',
  'Observations / Properties (From classwork): (1) Since each edge is incident on exactly two vertices, each edge column of B contains exactly two 1\'s. (2) The sum of entries in any vertex row gives the degree of that vertex deg(v_i).'
]);

q('5', 'Define graph isomorphism and give an example for isomorphism and non-isomorphism with justification.', [
  'Answer: Definition: Two graphs G_1 and G_2 are said to be isomorphic to each other if there exists a one-to-one correspondence between their vertex sets and edge sets preserving adjacency.',
  'Necessary Invariant Conditions (From Classwork Note): If G_1 and G_2 are isomorphic, then they must have: (i) The same number of vertices |V(G_1)| = |V(G_2)|, (ii) The same number of edges |E(G_1)| = |E(G_2)|, and (iii) An equal number of vertices with a given degree.',
  '• Isomorphism Example: Two drawings of K_4 (tetrahedral wheel G_1 on {A,B,C,D} and square with diagonals G_2 on {V_1,V_2,V_3,V_4}) both have |V|=4, |E|=6, all degrees = 3, and identical adjacency matrices A(G_1) = A(G_2).',
  '• Non-Isomorphism Example: Two 6-vertex trees G and G\' with degree sequence (3,2,2,1,1,1) where the degree-3 vertex in G is adjacent to two degree-1 vertices, whereas in G\' it is adjacent to only one degree-1 vertex.'
]);

q('6', 'Find the number of vertices, the number of edges and the degree of each vertex in the following undirected graphs G_1 and G_2. Verify also the handshaking theorem in each case.', [
  'Answer: Case 1 (Graph G_1):',
  '• Number of vertices: |V(G_1)| = 6 (A, B, C, D, E, F). Number of edges: |E(G_1)| = e = 9.',
  '• Vertex degrees: deg(A) = 2, deg(B) = 4, deg(C) = 4, deg(D) = 3, deg(E) = 4, deg(F) = 1.',
  '• Verification of Handshaking Theorem: ∑ deg(v_i) = 2 + 4 + 4 + 3 + 4 + 1 = 18 = 2(9) = 2e (Verified).',
  'Case 2 (Pseudograph G_2 — Self-loops counted twice):',
  '• Number of vertices: |V(G_2)| = 5 (A, B, C, D, E). Number of edges: |E(G_2)| = e = 10.',
  '• Vertex degrees (loops at A and C counted twice): deg(A) = 4, deg(B) = 4, deg(C) = 5, deg(D) = 4, deg(E) = 3. (In the 6-vertex classwork version on Page 4: deg(V_1)=5, deg(V_2)=3, deg(V_3)=5, deg(V_4)=3, deg(V_5)=1, deg(V_6)=1 ⇒ ∑ = 18 = 2(9)).',
  '• Verification of Handshaking Theorem: ∑ deg(v_i) = 4 + 4 + 5 + 4 + 3 = 20 = 2(10) = 2e (Verified).'
]);

q('7', 'Draw the graph with 5 vertices, A, B, C, D, E such that deg(A) = 3, B is an odd vertex, deg(C) = 2 and D and E are adjacent.', [
  'Answer: (Exact 6M Problem 1 from Professor\'s Classwork Notes — 17/9/26):',
  '• Professor\'s Classwork Graph (e = 6): Connect A and B with 2 parallel edges, and connect A to C (so deg(A) = 3). Connect B to D (so deg(B) = 3, which is odd). Connect C to D (so deg(C) = 2). Connect D to E (so D and E are adjacent, deg(D) = 3, deg(E) = 1). Sum of degrees = 3 + 3 + 2 + 3 + 1 = 12 = 2(6).',
  '• Simple Graph Alternative (e = 5): Edges AB, AC, AD, CD, DE. Then deg(A) = 3, deg(B) = 1 (odd), deg(C) = 2, deg(D) = 3, deg(E) = 1, and D, E are adjacent.'
]);

q('8', 'Prove that the number of edges in a bipartite graph with n vertices is atmost (n^2 / 2).', [
  'Answer: Let G = (V, E) be a bipartite graph with n vertices partitioned into two disjoint sets V_1 and V_2.',
  'Let |V_1| = r; then |V_2| = n - r. The maximum number of edges occurs when every vertex in V_1 is adjacent to every vertex in V_2 (complete bipartite graph K_{r, n-r}):',
  '   e ≤ r(n - r) = (n^2 / 4) - (r - n/2)^2 ≤ n^2 / 4 ≤ n^2 / 2.',
  'Hence, the number of edges in a bipartite graph with n vertices is at most n^2 / 4 (and therefore at most n^2 / 2).'
]);

q('9', 'Explain the Eulerian Graph of Eulerian path, Eulerian Circuit and also the Hamiltonian Graph of Hamiltonian path, Hamiltonian Circuit with suitable examples of graphical representations.', [
  'Answer: 1. Eulerian Path, Circuit & Graph: An Eulerian path traverses every edge of G exactly once. An Eulerian circuit is a closed Eulerian path. A connected graph containing an Eulerian circuit is an Eulerian graph (exists iff every vertex has even degree, e.g., C_4 or Hourglass graph).',
  '2. Hamiltonian Path, Circuit & Graph: A Hamiltonian path visits every vertex of G exactly once. A Hamiltonian circuit is a closed cycle visiting every vertex exactly once. A graph containing a Hamiltonian circuit is a Hamiltonian graph (e.g., C_4 or K_4).'
]);

q('10', 'Write a few properties of Hamiltonian Circuit.', [
  'Answer: (1) A Hamiltonian circuit in an n-vertex graph contains exactly n vertices and n edges. (2) A Hamiltonian graph cannot have any pendant vertex (deg = 1) or isolated vertex (deg = 0); every vertex must satisfy deg(v) ≥ 2. (3) A Hamiltonian graph has no cut-vertices (articulation points). (4) Every complete graph K_n (n ≥ 3) is Hamiltonian with (n - 1)! / 2 Hamiltonian circuits. (5) Dirac\'s Condition: If deg(v) ≥ n/2 for all v ∈ V (n ≥ 3), then G is Hamiltonian.'
]);

// Part C
doc.addPage();
sectionHeader('Part C - 10 Mark Answers');

q('1', 'Prove that the maximum number of edges in a simple disconnected graph with \'n\' vertices and k components is (n - k)(n - k + 1)/2.', [
  'Answer: Let G be a simple graph with n vertices and k components G_1, G_2, ..., G_k having n_1, n_2, ..., n_k vertices respectively (where n_i ≥ 1 and ∑_{i=1}^k n_i = n).',
  'Since n_i - 1 ≥ 0, we have ∑_{i=1}^k (n_i - 1) = n - k. Squaring both sides:',
  '   [∑_{i=1}^k (n_i - 1)]^2 = (n - k)^2 ⇒ ∑_{i=1}^k (n_i - 1)^2 + 2 ∑_{i<j} (n_i - 1)(n_j - 1) = (n - k)^2.',
  'Since cross terms are ≥ 0: ∑_{i=1}^k (n_i^2 - 2n_i + 1) ≤ (n - k)^2 ⇒ ∑_{i=1}^k n_i^2 - 2n + k ≤ (n - k)^2 ⇒ ∑_{i=1}^k n_i^2 ≤ (n - k)^2 + 2n - k.',
  'The maximum number of edges e in G is:',
  '   e ≤ ∑_{i=1}^k n_i(n_i - 1)/2 = (1/2) ∑ n_i^2 - n/2 ≤ (1/2)[(n - k)^2 + 2n - k] - n/2 = [(n - k)^2 + (n - k)] / 2 = (n - k)(n - k + 1) / 2.',
  'Hence proved.'
]);

q('2', '(i) Define isomorphism of a graph G. (ii) Using circuits, check whether the following pairs of graphs G_1 and G_2 are isomorphic or not and justify your answer.', [
  'Answer: (i) Two graphs G_1 and G_2 are isomorphic if there exists a one-to-one correspondence between their vertex sets and edge sets preserving adjacency.',
  '(ii) Both G_1 (vertices A,B,C,D) and G_2 (vertices V_1,V_2,V_3,V_4) have |V| = 4 vertices, |E| = 6 edges, and every vertex has degree 3 (both represent K_4).',
  '• Circuit Check: Both G_1 and G_2 have exactly four 3-cycles (circuits of length 3) and three 4-cycles (circuits of length 4).',
  '• Bijection A → V_1, B → V_2, C → V_3, D → V_4 preserves all edges and gives identical 4 × 4 adjacency matrices A(G_1) = A(G_2). Therefore, G_1 and G_2 are isomorphic (G_1 ≅ G_2).'
]);

q('3', '(i) If G = (V, E) is an undirected graph with e edges, then prove that ∑_i deg(v_i) = 2e. (ii) Prove that the number of vertices of odd degree in an undirected graph is even.', [
  'Answer: (i) By definition, deg(v_i) is the number of edges incident on vertex v_i (with loops counted twice). Since every edge is incident with exactly 2 vertices, each edge contributes 2 to the sum of the degrees of all vertices. Thus all e edges contribute 2e: ∑_i deg(v_i) = 2e.',
  '(ii) Let V_1 and V_2 be the sets of vertices of even and odd degrees respectively. Then ∑_{v ∈ V_2} deg(v) = 2e - ∑_{v ∈ V_1} deg(v). Since 2e and ∑_{v ∈ V_1} deg(v) are both even, ∑_{v ∈ V_2} deg(v) is even. Since each term in V_2 is odd, the number of terms |V_2| must be even.'
]);

q('4', 'If all the vertices of an undirected graph are each of odd degree k, show that the number of edges of the graph is a multiple of k.', [
  'Answer: Let G have n vertices, each of odd degree k. By the Handshaking Theorem:',
  '   ∑_{i=1}^n deg(v_i) = 2e ⇒ n · k = 2e.',
  'Since 2e is even and k is odd, n must be an even integer (also because the number of odd-degree vertices is even). Let n = 2m for some integer m ≥ 1. Then:',
  '   (2m) · k = 2e ⇒ e = m · k.',
  'Therefore, the number of edges e is a multiple of k. Hence proved.'
]);

q('5', '(i) Find which of the following vertex sequences are simple paths, paths, closed paths (circuits) and simple circuits with respect to the graph: (a) A-D-E-B-C, (b) A-D-B-C-E, (c) A-E-C-B-E-A, (d) C-B-D-A-E-C, (e) A-D-B-E-C-B. (ii) Find all the simple paths from A to F and all the circuits in the graph given.', [
  'Answer: Part (i) [Edges in 5(i): AD, AE, BD, BE, BC, CE; no edge DE or AB]:',
  '• (a) A-D-E-B-C: Not a path (since edge DE does not exist).',
  '• (b) A-D-B-C-E: Path and Simple Path (no repeated edges or vertices).',
  '• (c) A-E-C-B-E-A: Closed walk (not a circuit or simple path because edge AE and vertex E are repeated).',
  '• (d) C-B-D-A-E-C: Closed Path (Circuit) and Simple Circuit (Cycle of length 5).',
  '• (e) A-D-B-E-C-B: Path (no repeated edge), but NOT a simple path (vertex B is repeated) and NOT closed.',
  'Part (ii) [Graph 5(ii) on A, B, C, D, E, F]:',
  '• All Simple Paths from A to F (7 paths): (1) A-B-C-F, (2) A-D-E-F, (3) A-B-C-E-F, (4) A-D-E-C-F, (5) A-B-D-E-F, (6) A-D-B-C-F, (7) A-B-D-E-C-F and A-D-B-C-E-F.',
  '• All Simple Circuits (6 cycles): (1) A-B-D-A, (2) C-F-E-C, (3) B-C-E-D-B, (4) A-B-C-E-D-A, (5) B-C-F-E-D-B, (6) A-B-C-F-E-D-A.'
]);

q('6', 'Prove that a simple graph with n vertices must be connected if it has more than (n - 1)(n - 2)/2 edges.', [
  'Answer: Suppose, by contradiction, that G is a disconnected simple graph with n vertices and k ≥ 2 components. By the theorem on disconnected graphs, the maximum number of edges for k components is f(k) = (n - k)(n - k + 1)/2.',
  'For k ≥ 2, f(k) is maximized when k = 2, which gives:',
  '   e ≤ (n - 2)(n - 2 + 1)/2 = (n - 1)(n - 2)/2.',
  'This contradicts the given condition that e > (n - 1)(n - 2)/2. Therefore, G cannot be disconnected; hence G must be connected.'
]);

q('7', 'Explain the path, cycles and connectivity with suitable example of graphical representations.', [
  'Answer: • Walk: An alternating sequence of vertices and edges v_0, e_1, v_1, ..., e_k, v_k.',
  '• Path: A walk with no repeated edges. A Simple Path is a path with no repeated vertices.',
  '• Cycle (Simple Circuit): A closed path (v_0 = v_k) of length ≥ 3 with no other repeated vertices.',
  '• Connectivity: An undirected graph G is connected if there is a path between every pair of distinct vertices. Otherwise, G is disconnected and consists of k ≥ 2 connected components.'
]);

q('8', 'For each of the following degree sequences, find if there exists a graph. In each case, either draw a graph or explain why no graphs exists: (i) (4,4,4,3,2), (ii) (5,5,4,3,2,1), (iii) (3,3,3,3,2), (iv) (3,3,3,3,3).', [
  'Answer: (i) (4,4,4,3,2): Sum of degrees = 4 + 4 + 4 + 3 + 2 = 17 (Odd). Violates Handshaking Theorem (∑ deg(v_i) = 2e must be even). ∴ No graph exists.',
  '(ii) (5,5,4,3,2,1): Here n = 6. In a simple 6-vertex graph, two vertices of degree 5 must each be adjacent to all other 5 vertices, so every vertex must have degree ≥ 2. This contradicts the vertex of degree 1. ∴ No simple graph exists.',
  '(iii) (3,3,3,3,2): Sum of degrees = 3 + 3 + 3 + 3 + 2 = 14 = 2e ⇒ e = 7 (Even). Yes, a simple 5-vertex graph exists: form a 4-cycle v_1-v_2-v_3-v_4-v_1 with chord v_1-v_3, and connect v_5 to v_2 and v_4.',
  '(iv) (3,3,3,3,3): Sum of degrees = 15 (Odd, and 5 odd-degree vertices). Violates Handshaking Theorem. ∴ No graph exists.'
]);

q('9', 'Determine whether the graph shown in the following figures are isomorphic (6-vertex trees G and G\').', [
  'Answer: (Verbatim Problem 2 from Professor\'s Classwork Notes — 25/9/26):',
  '• Both G and G\' have |V| = 6 vertices and |E| = 5 edges.',
  '• In A(G), the vertex row-sum degrees for A, B, C, D, E, F are (1, 2, 2, 3, 1, 1). In A(G\'), the row-sum degrees for a, b, c, d, e, f are (1, 2, 3, 1, 2, 1).',
  '• In graph (a) G, the unique vertex D (V_4) of degree 3 is adjacent to two pendant vertices of degree 1 (E, F) and one vertex of degree 2 (C).',
  '• In graph (b) G\', the unique vertex c (V\'_3) of degree 3 is adjacent to only one vertex of degree 1 (d) and two vertices of degree 2 (b, e).',
  '• Since adjacency of vertex degrees is not preserved, G and G\' are NOT isomorphic.'
]);

q('10', 'Determine whether the graph shown in the following figures are isomorphic (8-vertex graphs G_1 and G_2).', [
  'Answer: • Number of vertices: |V(G_1)| = 8 and |V(G_2)| = 8.',
  '• Number of edges: In G_1, |E(G_1)| = 12 (all 8 vertices have degree 3). In G_2, the edge between P and T is missing, so |E(G_2)| = 11 (vertices P and T have degree 2).',
  '• Since |E(G_1)| ≠ |E(G_2)| and the degree sequences do not match, G_1 and G_2 are NOT isomorphic.'
]);

// Finalize running headers and page numbers
const range = doc.bufferedPageRange();
for (let i = range.start; i < range.start + range.count; i++) {
  doc.switchToPage(i);
  drawRunningHeader();
  doc.save();
  doc.font('Helvetica').fontSize(9).fillColor('#444444');
  doc.text(`${i + 1}`, 50, 800, { align: 'center', width: 495 });
  doc.restore();
}

doc.end();

writeStream.on('finish', () => {
  console.log(`Module 5 PDF successfully generated at: ${outPath}`);
});
