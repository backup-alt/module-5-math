export const MODULE_5_LATEX_SOURCE = `\\documentclass[11pt,a4paper]{article}
\\usepackage[margin=0.8in]{geometry}
\\usepackage{amsmath,amssymb,amsfonts}
\\usepackage{enumitem}
\\usepackage{fancyhdr}
\\usepackage{array}

\\pagestyle{fancy}
\\fancyhf{}
\\lhead{EMA51005 - Discrete Mathematics}
\\rhead{Unit V - Graph Theory}
\\cfoot{\\thepage}
\\renewcommand{\\headrulewidth}{0.4pt}

\\begin{document}

\\begin{center}
    {\\Large \\textbf{EMA51005 - Discrete Mathematics}}\\\\[4pt]
    {\\large \\textbf{UNIT V - Graph Theory}}\\\\[2pt]
    \\textbf{Final Exam Answer Key}
\\end{center}

\\noindent \\textit{This answer key strictly follows the professor's handwritten classwork notes: Pseudograph and Simple Graph definitions, Degree of a vertex (with self-loops counted twice), Handshaking Theorem ($\\sum \\deg(v_i) = 2e$), Complete and Regular Graphs ($K_n$), Bipartite and Complete Bipartite Graphs ($K_{m,n}$), Adjacency Matrix $A=[a_{ij}]$, Incidence Matrix $B=[b_{ij}]$, and Graph Isomorphism verification using Adjacency Matrix row-sum degrees.}

\\section*{Part A - Short Answers}

\\begin{enumerate}[label=\\textbf{\\arabic*.}, leftmargin=*]
\\item \\textbf{Define a pseudograph.}\\\\
\\textbf{Answer:} A graph in which self-loops and parallel (multiple) edges are allowed is called a \\textbf{pseudograph}.

\\item \\textbf{What is complete graph? Draw a complete graph on $4$ vertices.}\\\\
\\textbf{Answer:} In a simple graph, if there is an existing edge between every pair of distinct vertices, then such a graph is called a \\textbf{complete graph}. Every complete graph on $n$ vertices has degree $n-1$ and is denoted by $K_n$. For $n=4$ ($K_4$), there are $4$ vertices each of degree $3$ and $\\frac{4(3)}{2} = 6$ edges.

\\item \\textbf{Draw a graph which contains Eulerian path and circuit.}\\\\
\\textbf{Answer:} A $5$-vertex hourglass graph $V = \\{v_1, v_2, v_3, v_4, v_5\\}$ consisting of two triangles $(v_1,v_2,v_3)$ and $(v_1,v_4,v_5)$ sharing vertex $v_1$ has even degrees $(4,2,2,2,2)$, so it contains the Eulerian circuit (and closed Eulerian path) $v_1 \\to v_2 \\to v_3 \\to v_1 \\to v_4 \\to v_5 \\to v_1$.

\\item \\textbf{Define a $3$-regular graphs with an example.}\\\\
\\textbf{Answer:} If every vertex of a simple graph has the same degree $k=3$ ($\\deg(v_i)=3$ for all $v_i \\in V$), then the graph is called a \\textbf{$3$-regular graph}. Example: Complete graph $K_4$.

\\item \\textbf{What you mean by bipartite graph and give an example.}\\\\
\\textbf{Answer:} A graph $G$ is said to be \\textbf{bipartite} if its vertex set $V(G)$ can be partitioned into two disjoint non-empty sets $V_1$ and $V_2$ ($V_1 \\cup V_2 = V(G)$, $V_1 \\cap V_2 = \\emptyset$) such that every edge in $E(G)$ has one end vertex in $V_1$ and the other end vertex in $V_2$. Example: $K_{2,3}$.

\\item \\textbf{Check Hamilton circuit is existing or not for the following graph ($A-B-C-D$ with diagonal $A-C$).}\\\\
\\textbf{Answer:} \\textbf{Yes}, a Hamiltonian circuit exists: $\\boxed{A \\to B \\to C \\to D \\to A}$, which visits every vertex $A, B, C, D$ exactly once and returns to $A$.

\\item \\textbf{State Handshaking theorem.}\\\\
\\textbf{Answer:} Let $G = (V, E)$ be an undirected graph with $e$ edges. Then $\\boxed{\\sum_{v_i \\in V} \\deg(v_i) = 2e}$. (Or) The sum of the degrees of all the vertices of an undirected graph is twice the number of edges of the graph and hence even.

\\item \\textbf{Define a multigraph.}\\\\
\\textbf{Answer:} A graph in which parallel (multiple) edges between the same pair of vertices are allowed (without self-loops) is called a \\textbf{multigraph}.

\\item \\textbf{Draw a complete bipartite graph $K_{2,3}$.}\\\\
\\textbf{Answer:} $K_{2,3}$ has bipartition $V_1 = \\{u_1, u_2\\}$ ($2$ vertices) and $V_2 = \\{v_1, v_2, v_3\\}$ ($3$ vertices) with all $2 \\times 3 = 6$ edges joining every vertex of $V_1$ to every vertex of $V_2$.

\\item \\textbf{Define a regular graph.}\\\\
\\textbf{Answer:} If every vertex of a simple graph has the same degree, then the graph is called a \\textbf{regular graph}. If every vertex has degree $k$, it is called a $k$-regular graph.
\\end{enumerate}

\\newpage
\\section*{Part B - 6 Mark Answers}

\\begin{enumerate}[label=\\textbf{\\arabic*.}, leftmargin=*]
\\item \\textbf{Prove that the number of vertices of odd degree in an undirected graph is even.}\\\\
\\textbf{Answer:} Let $G=(V,E)$ be an undirected graph with $e$ edges. Partition $V$ into $V_1$ (vertices of even degree) and $V_2$ (vertices of odd degree). By the Handshaking Theorem:
\\[
\\sum_{v \\in V_1} \\deg(v) + \\sum_{v \\in V_2} \\deg(v) = 2e \\implies \\sum_{v \\in V_2} \\deg(v) = 2e - \\sum_{v \\in V_1} \\deg(v)
\\]
Since $2e$ is even and $\\sum_{v \\in V_1} \\deg(v)$ is a sum of even numbers (even), the RHS is even. Thus $\\sum_{v \\in V_2} \\deg(v)$ is an even sum of odd integers, which is possible only if the number of terms $|V_2|$ is \\textbf{even}.

\\item \\textbf{Draw a graph which contains: (i) an Eulerian circuit that is also a Hamiltonian circuit, (ii) an Eulerian circuit, but not a Hamiltonian circuit, (iii) a Hamiltonian circuit, but not an Eulerian circuit.}\\\\
\\textbf{Answer:} (i) Cycle graph $C_4$ ($A-B-C-D-A$): all degrees are $2$ (even), so $A-B-C-D-A$ is both Eulerian and Hamiltonian. (ii) $5$-vertex hourglass/bowtie graph ($A-B-C-A$ and $C-D-E-C$): degrees are $2,2,4,2,2$ (Eulerian), but cut-vertex $C$ prevents a Hamiltonian circuit. (iii) Complete graph $K_4$: $A-B-C-D-A$ is Hamiltonian, but every vertex has odd degree $3$ (not Eulerian).

\\item \\textbf{State and prove the Handshaking theorem.}\\\\
\\textbf{Answer:} \\textbf{Statement:} If $G=(V,E)$ is an undirected graph with $e$ edges, then $\\sum \\deg(v_i) = 2e$.\\\\
\\textbf{Proof:} Since every edge is incident with exactly $2$ vertices, every edge contributes $2$ to the sum of the degrees of the vertices. Therefore, all the $e$ edges contribute $2e$ to the sum of the degrees of the vertices: $\\sum \\deg(v_i) = 2e$.

\\item \\textbf{Write short notes on: (i) Adjacency Matrix and its properties, (ii) Incidence Matrix and its properties.}\\\\
\\textbf{Answer:} (i) \\textbf{Adjacency Matrix:} $A = [a_{ij}]_{n \\times n}$ where $a_{ij}=1$ if $(v_i,v_j) \\in E$ and $0$ otherwise. Properties: Symmetric ($a_{ij}=a_{ji}$) for undirected simple graphs; diagonal $a_{ii}=0$; row sum $= \\deg(v_i)$.\\\\
(ii) \\textbf{Incidence Matrix:} $B = [b_{ij}]_{n \\times m}$ where $b_{ij}=1$ when edge $e_j$ is incident on vertex $v_i$, and $0$ otherwise. Properties: Each edge column contains exactly two $1$'s; each vertex row sum gives $\\deg(v_i)$.

\\item \\textbf{Define graph isomorphism and give an example for isomorphism and non-isomorphism with justification.}\\\\
\\textbf{Answer:} Two graphs $G_1$ and $G_2$ are isomorphic if there exists a one-to-one correspondence between their vertex sets and edge sets preserving adjacency. Invariants: same $|V|$, same $|E|$, and same degree sequence.

\\item \\textbf{Find the number of vertices, the number of edges and the degree of each vertex in $G_1$ and $G_2$. Verify also the handshaking theorem.}\\\\
\\textbf{Answer:} For $G_1$: $|V|=6$, $|E|=9$, $\\deg(A)=2, \\deg(B)=4, \\deg(C)=4, \\deg(D)=3, \\deg(E)=4, \\deg(F)=1 \\implies \\sum \\deg = 18 = 2(9)$.\\\\
For $G_2$ (with self-loops counted twice): $|V|=5$, $|E|=10$, $\\deg(A)=4, \\deg(B)=4, \\deg(C)=5, \\deg(D)=4, \\deg(E)=3 \\implies \\sum \\deg = 20 = 2(10)$ (or in the $6$-vertex classwork graph: $5+3+5+3+1+1 = 18 = 2(9)$).

\\item \\textbf{Draw the graph with $5$ vertices, $A, B, C, D, E$ such that $\\deg(A)=3$, $B$ is an odd vertex, $\\deg(C)=2$ and $D$ and $E$ are adjacent.}\\\\
\\textbf{Answer:} As drawn in classwork ($17/9/26$): join $A$ to $B$ with $2$ parallel edges and $A$ to $C$ with $1$ edge ($\\deg(A)=3$); join $B$ to $D$ ($\\deg(B)=3$, odd); join $C$ to $D$ ($\\deg(C)=2$); join $D$ to $E$ ($\\deg(D)=3, \\deg(E)=1$).

\\item \\textbf{Prove that the number of edges in a bipartite graph with $n$ vertices is atmost $(n^2/2)$.}\\\\
\\textbf{Answer:} Partition $V$ into $V_1$ ($|V_1|=r$) and $V_2$ ($|V_2|=n-r$). Max edges $e \\le r(n-r) = \\frac{n^2}{4} - (r - \\frac{n}{2})^2 \\le \\frac{n^2}{4} \\le \\frac{n^2}{2}$.

\\item \\textbf{Explain Eulerian Graph (path, circuit) and Hamiltonian Graph (path, circuit) with examples.}\\\\
\\textbf{Answer:} Eulerian path traverses every edge once; Eulerian circuit is a closed Eulerian path (exists iff connected and all degrees are even). Hamiltonian path visits every vertex once; Hamiltonian circuit is a closed cycle visiting every vertex once.

\\item \\textbf{Write a few properties of Hamiltonian Circuit.}\\\\
\\textbf{Answer:} Contains $n$ vertices and $n$ edges; no pendant ($\\deg=1$) or cut-vertices; $K_n$ ($n \\ge 3$) has $(n-1)!/2$ Hamiltonian circuits; Dirac's condition ($\\deg(v) \\ge n/2$).
\\end{enumerate}

\\newpage
\\section*{Part C - 10 Mark Answers}

\\begin{enumerate}[label=\\textbf{\\arabic*.}, leftmargin=*]
\\item \\textbf{Prove that the maximum number of edges in a simple disconnected graph with $n$ vertices and $k$ components is $(n-k)(n-k+1)/2$.}\\\\
\\textbf{Answer:} Let component sizes be $n_1, \\dots, n_k \\ge 1$ with $\\sum n_i = n$. Then $\\sum(n_i-1) = n-k \\implies \\sum(n_i-1)^2 \\le (n-k)^2 \\implies \\sum n_i^2 \\le (n-k)^2 + 2n - k$. Thus $e \\le \\frac{1}{2}\\sum n_i(n_i-1) \\le \\frac{(n-k)(n-k+1)}{2}$.

\\item \\textbf{(i) Define isomorphism of a graph $G$. (ii) Using circuits, check whether $G_1$ and $G_2$ are isomorphic.}\\\\
\\textbf{Answer:} Both $G_1$ and $G_2$ have $4$ vertices of degree $3$, $6$ edges, four $3$-cycles, and three $4$-cycles ($K_4$). Bijection $A \\to V_1, B \\to V_2, C \\to V_3, D \\to V_4$ gives $A(G_1)=A(G_2)$, so $G_1 \\cong G_2$.

\\item \\textbf{(i) Prove $\\sum_i \\deg(v_i) = 2e$. (ii) Prove the number of vertices of odd degree is even.}\\\\
\\textbf{Answer:} Each edge is incident with $2$ vertices and contributes $2$ to $\\sum \\deg(v_i)$, giving $2e$. Splitting into even ($V_1$) and odd ($V_2$) degree vertices shows $\\sum_{v \\in V_2} \\deg(v) = 2e - \\sum_{v \\in V_1} \\deg(v)$ is even, so $|V_2|$ is even.

\\item \\textbf{If all the vertices of an undirected graph are each of odd degree $k$, show that the number of edges is a multiple of $k$.}\\\\
\\textbf{Answer:} By Handshaking Theorem, $n \\cdot k = 2e$. Since $2e$ is even and $k$ is odd, $n$ must be even: $n = 2m$. Thus $2mk = 2e \\implies e = mk$, which is a multiple of $k$.

\\item \\textbf{(i) Classify vertex sequences in 5(i); (ii) Find all simple paths from $A$ to $F$ and all circuits in 5(ii).}\\\\
\\textbf{Answer:} 5(i): (a) Not a path ($DE \\notin E$); (b) Simple path; (c) Closed walk (edge $AE$ repeated); (d) Simple circuit of length $5$; (e) Path (not simple, $B$ repeated).\\\\
5(ii): $7$ simple paths from $A$ to $F$ ($ABCF, ADEF, ABCEF, ADECF, ABDEF, ADBCF, ABDECF/ADBCEF$) and $6$ simple circuits ($ABDA, CFEC, BCEDB, ABCEDA, BCFEDB, ABCFEDA$).

\\item \\textbf{Prove that a simple graph with $n$ vertices must be connected if it has more than $(n-1)(n-2)/2$ edges.}\\\\
\\textbf{Answer:} If $G$ were disconnected ($k \\ge 2$ components), its maximum number of edges would occur at $k=2$: $e \\le \\frac{(n-2)(n-1)}{2}$, contradicting $e > \\frac{(n-1)(n-2)}{2}$. Hence $G$ is connected.

\\item \\textbf{Explain path, cycles and connectivity with suitable graphical representations.}\\\\
\\textbf{Answer:} Defines Walk, Path (no repeated edge), Simple Path (no repeated vertex), Cycle (closed simple path), Connected Graph, and Connected Components.

\\item \\textbf{Check degree sequences: (i) $(4,4,4,3,2)$, (ii) $(5,5,4,3,2,1)$, (iii) $(3,3,3,3,2)$, (iv) $(3,3,3,3,3)$.}\\\\
\\textbf{Answer:} (i) Sum $=17$ (odd) $\\implies$ No graph. (ii) Two degree-$5$ vertices in a $6$-vertex simple graph force every vertex to have degree $\\ge 2$, contradicting degree $1$ $\\implies$ No simple graph. (iii) Sum $=14=2(7) \\implies$ Graph exists ($e=7$). (iv) Sum $=15$ (odd) $\\implies$ No graph.

\\item \\textbf{Determine whether the $6$-vertex trees $G$ and $G'$ are isomorphic.}\\\\
\\textbf{Answer:} $|V|=6, |E|=5$. In $G$, the degree-$3$ vertex $D(V_4)$ is adjacent to two degree-$1$ vertices ($E,F$) and one degree-$2$ vertex ($C$). In $G'$, the degree-$3$ vertex $c(V'_3)$ is adjacent to one degree-$1$ vertex ($d$) and two degree-$2$ vertices ($b,e$). Thus $G \\not\\cong G'$.

\\item \\textbf{Determine whether the $8$-vertex graphs $G_1$ and $G_2$ are isomorphic.}\\\\
\\textbf{Answer:} $|V(G_1)|=|V(G_2)|=8$, but $|E(G_1)|=12$ ($3$-regular) whereas $|E(G_2)|=11$ (edge $PT$ is missing, so $\\deg(P)=\\deg(T)=2$). Since $|E(G_1)| \\neq |E(G_2)|$, $G_1 \\not\\cong G_2$.
\\end{enumerate}

\\end{document}
`;
