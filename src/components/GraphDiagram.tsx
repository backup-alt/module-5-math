import React from 'react';

interface GraphDiagramProps {
  diagramId: string;
}

export const GraphDiagram: React.FC<GraphDiagramProps> = ({ diagramId }) => {
  switch (diagramId) {
    case 'partA-1-pseudograph':
      return (
        <div className="my-2 p-3 bg-white border border-slate-200 rounded-md inline-block">
          <svg width="260" height="120" viewBox="0 0 260 120" className="text-black">
            {/* Self loop on V3 */}
            <path
              d="M 190 55 C 215 15, 245 55, 200 68"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            {/* Parallel edges between V1 and V2 */}
            <path
              d="M 45 65 Q 85 30 125 65"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M 45 65 Q 85 100 125 65"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            {/* Edge V2 to V3 */}
            <line x1="125" y1="65" x2="195" y2="65" stroke="currentColor" strokeWidth="1.8" />
            {/* Nodes */}
            <circle cx="45" cy="65" r="5" fill="currentColor" />
            <circle cx="125" cy="65" r="5" fill="currentColor" />
            <circle cx="195" cy="65" r="5" fill="currentColor" />
            {/* Labels */}
            <text x="35" y="90" fontSize="13" fontFamily="serif" fontStyle="italic">v₁</text>
            <text x="118" y="95" fontSize="13" fontFamily="serif" fontStyle="italic">v₂</text>
            <text x="188" y="90" fontSize="13" fontFamily="serif" fontStyle="italic">v₃</text>
            <text x="72" y="38" fontSize="11" fontFamily="serif">Parallel edges</text>
            <text x="208" y="28" fontSize="11" fontFamily="serif">Self loop</text>
          </svg>
        </div>
      );

    case 'partA-2-k4':
      return (
        <div className="my-2 p-3 bg-white border border-slate-200 rounded-md inline-block">
          <svg width="200" height="150" viewBox="0 0 200 150" className="text-black">
            {/* K4 square + diagonals */}
            <rect x="50" y="25" width="100" height="95" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <line x1="50" y1="25" x2="150" y2="120" stroke="currentColor" strokeWidth="1.8" />
            <line x1="150" y1="25" x2="50" y2="120" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="50" cy="25" r="4.5" fill="currentColor" />
            <circle cx="150" cy="25" r="4.5" fill="currentColor" />
            <circle cx="50" cy="120" r="4.5" fill="currentColor" />
            <circle cx="150" cy="120" r="4.5" fill="currentColor" />
            <text x="30" y="25" fontSize="13" fontFamily="serif" fontWeight="bold">v₁</text>
            <text x="158" y="25" fontSize="13" fontFamily="serif" fontWeight="bold">v₂</text>
            <text x="30" y="128" fontSize="13" fontFamily="serif" fontWeight="bold">v₄</text>
            <text x="158" y="128" fontSize="13" fontFamily="serif" fontWeight="bold">v₃</text>
            <text x="62" y="143" fontSize="12" fontFamily="serif">Complete Graph K₄ (6 edges)</text>
          </svg>
        </div>
      );

    case 'partA-3-eulerian':
      return (
        <div className="my-2 p-3 bg-white border border-slate-200 rounded-md inline-block">
          <svg width="420" height="145" viewBox="0 0 420 145" className="text-black">
            {/* Left: Eulerian Circuit & Path (Hourglass / Bowtie graph from Professor's Notes) */}
            <polygon points="40,25 110,25 75,70" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <polygon points="40,115 110,115 75,70" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="40" cy="25" r="4" fill="currentColor" />
            <circle cx="110" cy="25" r="4" fill="currentColor" />
            <circle cx="75" cy="70" r="4" fill="currentColor" />
            <circle cx="40" cy="115" r="4" fill="currentColor" />
            <circle cx="110" cy="115" r="4" fill="currentColor" />
            <text x="22" y="28" fontSize="12" fontFamily="serif">v₃</text>
            <text x="116" y="28" fontSize="12" fontFamily="serif">v₂</text>
            <text x="84" y="74" fontSize="12" fontFamily="serif">v₁</text>
            <text x="22" y="120" fontSize="12" fontFamily="serif">v₅</text>
            <text x="116" y="120" fontSize="12" fontFamily="serif">v₄</text>
            <text x="18" y="138" fontSize="11.5" fontFamily="serif">Eulerian Circuit &amp; Path (all deg even)</text>

            {/* Right: Eulerian Path (Rectangle with 1 diagonal) */}
            <rect x="255" y="25" width="110" height="85" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <line x1="255" y1="110" x2="365" y2="25" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="255" cy="25" r="4" fill="currentColor" />
            <circle cx="365" cy="25" r="4" fill="currentColor" />
            <circle cx="365" cy="110" r="4" fill="currentColor" />
            <circle cx="255" cy="110" r="4" fill="currentColor" />
            <text x="240" y="25" fontSize="12" fontFamily="serif">B</text>
            <text x="372" y="25" fontSize="12" fontFamily="serif">C</text>
            <text x="372" y="116" fontSize="12" fontFamily="serif">D</text>
            <text x="240" y="116" fontSize="12" fontFamily="serif">A</text>
            <text x="235" y="138" fontSize="11.5" fontFamily="serif">Eulerian Path: A–B–C–A–D–C</text>
          </svg>
        </div>
      );

    case 'partA-4-3regular':
      return (
        <div className="my-2 p-3 bg-white border border-slate-200 rounded-md inline-block">
          <svg width="210" height="140" viewBox="0 0 210 140" className="text-black">
            <rect x="55" y="20" width="90" height="85" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <line x1="55" y1="20" x2="145" y2="105" stroke="currentColor" strokeWidth="1.8" />
            <line x1="145" y1="20" x2="55" y2="105" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="55" cy="20" r="4.5" fill="currentColor" />
            <circle cx="145" cy="20" r="4.5" fill="currentColor" />
            <circle cx="55" cy="105" r="4.5" fill="currentColor" />
            <circle cx="145" cy="105" r="4.5" fill="currentColor" />
            <text x="36" y="24" fontSize="12" fontFamily="serif">v₁</text>
            <text x="152" y="24" fontSize="12" fontFamily="serif">v₂</text>
            <text x="36" y="110" fontSize="12" fontFamily="serif">v₄</text>
            <text x="152" y="110" fontSize="12" fontFamily="serif">v₃</text>
            <text x="28" y="128" fontSize="11.5" fontFamily="serif">3-Regular Graph K₄ (deg(vᵢ) = 3)</text>
          </svg>
        </div>
      );

    case 'partA-6-hamilton-q':
      return (
        <div className="my-2 p-3 bg-white border border-slate-200 rounded-md inline-block">
          <svg width="240" height="140" viewBox="0 0 240 140" className="text-black">
            <rect x="50" y="25" width="140" height="85" fill="none" stroke="currentColor" strokeWidth="2.2" />
            <line x1="50" y1="110" x2="190" y2="25" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="25" r="4.5" fill="currentColor" />
            <circle cx="190" cy="25" r="4.5" fill="currentColor" />
            <circle cx="190" cy="110" r="4.5" fill="currentColor" />
            <circle cx="50" cy="110" r="4.5" fill="currentColor" />
            <text x="34" y="22" fontSize="13" fontFamily="sans-serif" fontWeight="bold">B</text>
            <text x="196" y="22" fontSize="13" fontFamily="sans-serif" fontWeight="bold">C</text>
            <text x="34" y="125" fontSize="13" fontFamily="sans-serif" fontWeight="bold">A</text>
            <text x="196" y="125" fontSize="13" fontFamily="sans-serif" fontWeight="bold">D</text>
          </svg>
        </div>
      );

    case 'partA-9-k23':
      return (
        <div className="my-2 p-3 bg-white border border-slate-200 rounded-md inline-block">
          <svg width="260" height="150" viewBox="0 0 260 150" className="text-black">
            {/* Edges from u1, u2 (top) to v1, v2, v3 (bottom) */}
            {[80, 175].map((ux, i) =>
              [45, 130, 215].map((vx, j) => (
                <line
                  key={`${i}-${j}`}
                  x1={ux}
                  y1={35}
                  x2={vx}
                  y2={110}
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              ))
            )}
            <circle cx="80" cy="35" r="4.5" fill="currentColor" />
            <circle cx="175" cy="35" r="4.5" fill="currentColor" />
            <circle cx="45" cy="110" r="4.5" fill="currentColor" />
            <circle cx="130" cy="110" r="4.5" fill="currentColor" />
            <circle cx="215" cy="110" r="4.5" fill="currentColor" />
            <text x="72" y="22" fontSize="12.5" fontFamily="serif" fontWeight="bold">u₁</text>
            <text x="168" y="22" fontSize="12.5" fontFamily="serif" fontWeight="bold">u₂</text>
            <text x="38" y="128" fontSize="12.5" fontFamily="serif" fontWeight="bold">v₁</text>
            <text x="123" y="128" fontSize="12.5" fontFamily="serif" fontWeight="bold">v₂</text>
            <text x="208" y="128" fontSize="12.5" fontFamily="serif" fontWeight="bold">v₃</text>
            <text x="20" y="38" fontSize="11.5" fontFamily="serif" fontStyle="italic">V₁</text>
            <text x="12" y="114" fontSize="11.5" fontFamily="serif" fontStyle="italic">V₂</text>
            <text x="65" y="144" fontSize="11.5" fontFamily="serif">Complete Bipartite Graph K₂,₃</text>
          </svg>
        </div>
      );

    case 'partB-2-euler-ham':
      return (
        <div className="my-2 p-3 bg-white border border-slate-200 rounded-md overflow-x-auto">
          <svg width="620" height="160" viewBox="0 0 620 160" className="text-black">
            {/* (i) Both Eulerian & Hamiltonian: Cycle C4 */}
            <rect x="35" y="30" width="95" height="80" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="35" cy="30" r="4" fill="currentColor" />
            <circle cx="130" cy="30" r="4" fill="currentColor" />
            <circle cx="130" cy="110" r="4" fill="currentColor" />
            <circle cx="35" cy="110" r="4" fill="currentColor" />
            <text x="20" y="28" fontSize="12" fontFamily="serif">A</text>
            <text x="136" y="28" fontSize="12" fontFamily="serif">B</text>
            <text x="136" y="116" fontSize="12" fontFamily="serif">C</text>
            <text x="20" y="116" fontSize="12" fontFamily="serif">D</text>
            <text x="22" y="138" fontSize="11.5" fontFamily="serif" fontWeight="bold">(i) Both Eulerian &amp; Hamiltonian</text>
            <text x="35" y="152" fontSize="11" fontFamily="serif">(Cycle C₄: A–B–C–D–A)</text>

            {/* (ii) Eulerian circuit but NOT Hamiltonian: Bowtie / Hourglass */}
            <polygon points="235,30 235,110 295,70" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <polygon points="355,30 355,110 295,70" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="235" cy="30" r="4" fill="currentColor" />
            <circle cx="235" cy="110" r="4" fill="currentColor" />
            <circle cx="295" cy="70" r="4" fill="currentColor" />
            <circle cx="355" cy="30" r="4" fill="currentColor" />
            <circle cx="355" cy="110" r="4" fill="currentColor" />
            <text x="220" y="28" fontSize="12" fontFamily="serif">A</text>
            <text x="220" y="116" fontSize="12" fontFamily="serif">B</text>
            <text x="291" y="58" fontSize="12" fontFamily="serif">C</text>
            <text x="362" y="28" fontSize="12" fontFamily="serif">D</text>
            <text x="362" y="116" fontSize="12" fontFamily="serif">E</text>
            <text x="218" y="138" fontSize="11.5" fontFamily="serif" fontWeight="bold">(ii) Eulerian, NOT Hamiltonian</text>
            <text x="225" y="152" fontSize="11" fontFamily="serif">(C is repeated: A–B–C–D–E–C–A)</text>

            {/* (iii) Hamiltonian circuit, NOT Eulerian: K4 */}
            <rect x="465" y="30" width="95" height="80" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <line x1="465" y1="30" x2="560" y2="110" stroke="currentColor" strokeWidth="1.8" />
            <line x1="560" y1="30" x2="465" y2="110" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="465" cy="30" r="4" fill="currentColor" />
            <circle cx="560" cy="30" r="4" fill="currentColor" />
            <circle cx="560" cy="110" r="4" fill="currentColor" />
            <circle cx="465" cy="110" r="4" fill="currentColor" />
            <text x="450" y="28" fontSize="12" fontFamily="serif">A</text>
            <text x="566" y="28" fontSize="12" fontFamily="serif">B</text>
            <text x="566" y="116" fontSize="12" fontFamily="serif">C</text>
            <text x="450" y="116" fontSize="12" fontFamily="serif">D</text>
            <text x="442" y="138" fontSize="11.5" fontFamily="serif" fontWeight="bold">(iii) Hamiltonian, NOT Eulerian</text>
            <text x="452" y="152" fontSize="11" fontFamily="serif">(K₄: all vertices have odd deg 3)</text>
          </svg>
        </div>
      );

    case 'partB-6-g1-g2':
      return (
        <div className="my-2 p-3 bg-white border border-slate-200 rounded-md overflow-x-auto">
          <svg width="580" height="155" viewBox="0 0 580 155" className="text-black">
            {/* G1 */}
            <line x1="35" y1="115" x2="100" y2="30" stroke="currentColor" strokeWidth="1.7" />
            <line x1="35" y1="115" x2="100" y2="115" stroke="currentColor" strokeWidth="1.7" />
            <line x1="100" y1="30" x2="100" y2="115" stroke="currentColor" strokeWidth="1.7" />
            <line x1="100" y1="30" x2="165" y2="30" stroke="currentColor" strokeWidth="1.7" />
            <line x1="100" y1="115" x2="165" y2="115" stroke="currentColor" strokeWidth="1.7" />
            <line x1="165" y1="30" x2="165" y2="115" stroke="currentColor" strokeWidth="1.7" />
            <line x1="100" y1="30" x2="165" y2="115" stroke="currentColor" strokeWidth="1.7" />
            <line x1="100" y1="115" x2="165" y2="30" stroke="currentColor" strokeWidth="1.7" />
            <line x1="165" y1="30" x2="230" y2="115" stroke="currentColor" strokeWidth="1.7" />
            {[
              [35, 115, 'A', 28, 132],
              [100, 30, 'B', 95, 20],
              [100, 115, 'C', 95, 132],
              [165, 115, 'D', 160, 132],
              [165, 30, 'E', 160, 20],
              [230, 115, 'F', 226, 132],
            ].map(([cx, cy, lbl, lx, ly]) => (
              <g key={String(lbl)}>
                <circle cx={Number(cx)} cy={Number(cy)} r="3.5" fill="currentColor" />
                <text x={Number(lx)} y={Number(ly)} fontSize="13" fontFamily="sans-serif" fontStyle="italic">
                  {lbl}
                </text>
              </g>
            ))}
            <text x="122" y="146" fontSize="13" fontFamily="sans-serif" fontWeight="bold">G₁</text>

            {/* G2 */}
            {/* Self loop at A (340, 35) */}
            <circle cx="322" cy="35" r="16" fill="none" stroke="currentColor" strokeWidth="1.6" />
            {/* Self loop at C (510, 35) */}
            <circle cx="528" cy="35" r="16" fill="none" stroke="currentColor" strokeWidth="1.6" />
            {/* Square A(340,35) - B(425,35) - D(425,115) - E(340,115) */}
            <line x1="340" y1="35" x2="425" y2="35" stroke="currentColor" strokeWidth="1.6" />
            <path d="M 340 35 Q 382 52 425 35" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <line x1="340" y1="35" x2="340" y2="115" stroke="currentColor" strokeWidth="1.6" />
            <line x1="340" y1="115" x2="425" y2="115" stroke="currentColor" strokeWidth="1.6" />
            <line x1="425" y1="35" x2="425" y2="115" stroke="currentColor" strokeWidth="1.6" />
            <line x1="340" y1="115" x2="425" y2="35" stroke="currentColor" strokeWidth="1.6" />
            {/* B to C and parallel edges D to C */}
            <line x1="425" y1="35" x2="510" y2="35" stroke="currentColor" strokeWidth="1.6" />
            <path d="M 425 115 Q 460 65 510 35" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <path d="M 425 115 Q 480 85 510 35" fill="none" stroke="currentColor" strokeWidth="1.6" />
            {[
              [340, 35, 'A', 338, 22],
              [425, 35, 'B', 422, 22],
              [510, 35, 'C', 506, 65],
              [425, 115, 'D', 420, 134],
              [340, 115, 'E', 334, 134],
            ].map(([cx, cy, lbl, lx, ly]) => (
              <g key={String(lbl)}>
                <circle cx={Number(cx)} cy={Number(cy)} r="3.5" fill="currentColor" />
                <text x={Number(lx)} y={Number(ly)} fontSize="13" fontFamily="sans-serif" fontStyle="italic">
                  {lbl}
                </text>
              </g>
            ))}
            <text x="380" y="146" fontSize="13" fontFamily="sans-serif" fontWeight="bold">G₂</text>
          </svg>
        </div>
      );

    case 'partB-7-abcde':
      return (
        <div className="my-2 p-3 bg-white border border-slate-200 rounded-md overflow-x-auto">
          <svg width="540" height="150" viewBox="0 0 540 150" className="text-black">
            {/* Left: Exact Graph drawn in Professor's Classwork Notebook (17/9/26) */}
            <path d="M 45 35 Q 95 15 145 35" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <line x1="45" y1="35" x2="145" y2="35" stroke="currentColor" strokeWidth="1.8" />
            <line x1="45" y1="35" x2="45" y2="105" stroke="currentColor" strokeWidth="1.8" />
            <line x1="45" y1="105" x2="145" y2="105" stroke="currentColor" strokeWidth="1.8" />
            <line x1="145" y1="35" x2="145" y2="105" stroke="currentColor" strokeWidth="1.8" />
            <line x1="145" y1="105" x2="215" y2="105" stroke="currentColor" strokeWidth="1.8" />
            {[
              [45, 35, 'A (deg 3)', 18, 25],
              [145, 35, 'B (deg 3)', 135, 25],
              [45, 105, 'C (deg 2)', 18, 123],
              [145, 105, 'D (deg 3)', 125, 123],
              [215, 105, 'E (deg 1)', 198, 123],
            ].map(([cx, cy, lbl, lx, ly]) => (
              <g key={String(lbl)}>
                <circle cx={Number(cx)} cy={Number(cy)} r="4" fill="currentColor" />
                <text x={Number(lx)} y={Number(ly)} fontSize="11.5" fontFamily="serif" fontWeight="bold">
                  {lbl}
                </text>
              </g>
            ))}
            <text x="30" y="142" fontSize="11.5" fontFamily="serif">
              Professor’s Classwork Graph (17/9/26): e = 6
            </text>

            {/* Right: Simple Graph Alternative (No Parallel Edges) */}
            <line x1="315" y1="35" x2="405" y2="35" stroke="currentColor" strokeWidth="1.8" />
            <line x1="315" y1="35" x2="315" y2="105" stroke="currentColor" strokeWidth="1.8" />
            <line x1="315" y1="35" x2="405" y2="105" stroke="currentColor" strokeWidth="1.8" />
            <line x1="315" y1="105" x2="405" y2="105" stroke="currentColor" strokeWidth="1.8" />
            <line x1="405" y1="105" x2="480" y2="105" stroke="currentColor" strokeWidth="1.8" />
            {[
              [315, 35, 'A (deg 3)', 290, 25],
              [405, 35, 'B (deg 1)', 390, 25],
              [315, 105, 'C (deg 2)', 290, 123],
              [405, 105, 'D (deg 3)', 390, 123],
              [480, 105, 'E (deg 1)', 462, 123],
            ].map(([cx, cy, lbl, lx, ly]) => (
              <g key={String(lbl)}>
                <circle cx={Number(cx)} cy={Number(cy)} r="4" fill="currentColor" />
                <text x={Number(lx)} y={Number(ly)} fontSize="11.5" fontFamily="serif" fontWeight="bold">
                  {lbl}
                </text>
              </g>
            ))}
            <text x="315" y="142" fontSize="11.5" fontFamily="serif">
              Simple Graph Alternative: e = 5
            </text>
          </svg>
        </div>
      );

    case 'partC-2-g1-g2':
      return (
        <div className="my-2 p-3 bg-white border border-slate-200 rounded-md overflow-x-auto">
          <svg width="460" height="150" viewBox="0 0 460 150" className="text-black">
            {/* G1: Triangle A,B,C with center D */}
            <polygon points="105,22 40,115 170,115" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <line x1="105" y1="22" x2="105" y2="80" stroke="currentColor" strokeWidth="1.8" />
            <line x1="40" y1="115" x2="105" y2="80" stroke="currentColor" strokeWidth="1.8" />
            <line x1="170" y1="115" x2="105" y2="80" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="105" cy="22" r="3.5" fill="currentColor" />
            <circle cx="40" cy="115" r="3.5" fill="currentColor" />
            <circle cx="170" cy="115" r="3.5" fill="currentColor" />
            <circle cx="105" cy="80" r="3.5" fill="currentColor" />
            <text x="100" y="15" fontSize="13" fontFamily="serif" fontStyle="italic">A</text>
            <text x="23" y="118" fontSize="13" fontFamily="serif" fontStyle="italic">B</text>
            <text x="178" y="118" fontSize="13" fontFamily="serif" fontStyle="italic">C</text>
            <text x="90" y="75" fontSize="13" fontFamily="serif" fontStyle="italic">D</text>
            <text x="98" y="142" fontSize="13" fontFamily="serif" fontStyle="italic">G₁</text>

            {/* G2: Square V1, V2, V3, V4 with diagonals */}
            <rect x="275" y="25" width="120" height="90" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <line x1="275" y1="25" x2="395" y2="115" stroke="currentColor" strokeWidth="1.8" />
            <line x1="395" y1="25" x2="275" y2="115" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="275" cy="25" r="3.5" fill="currentColor" />
            <circle cx="395" cy="25" r="3.5" fill="currentColor" />
            <circle cx="275" cy="115" r="3.5" fill="currentColor" />
            <circle cx="395" cy="115" r="3.5" fill="currentColor" />
            <text x="253" y="28" fontSize="13" fontFamily="serif" fontStyle="italic">V₁</text>
            <text x="403" y="28" fontSize="13" fontFamily="serif" fontStyle="italic">V₂</text>
            <text x="253" y="120" fontSize="13" fontFamily="serif" fontStyle="italic">V₃</text>
            <text x="403" y="120" fontSize="13" fontFamily="serif" fontStyle="italic">V₄</text>
            <text x="328" y="142" fontSize="13" fontFamily="serif" fontStyle="italic">G₂</text>
          </svg>
        </div>
      );

    case 'partC-5-graphs':
      return (
        <div className="my-2 p-3 bg-white border border-slate-200 rounded-md overflow-x-auto">
          <svg width="520" height="140" viewBox="0 0 520 140" className="text-black">
            {/* Graph (i): A, B, C, D, E */}
            <line x1="40" y1="30" x2="40" y2="105" stroke="currentColor" strokeWidth="1.6" />
            <line x1="40" y1="30" x2="115" y2="105" stroke="currentColor" strokeWidth="1.6" />
            <line x1="40" y1="105" x2="115" y2="30" stroke="currentColor" strokeWidth="1.6" />
            <line x1="115" y1="30" x2="115" y2="105" stroke="currentColor" strokeWidth="1.6" />
            <line x1="115" y1="30" x2="165" y2="68" stroke="currentColor" strokeWidth="1.6" />
            <line x1="115" y1="105" x2="165" y2="68" stroke="currentColor" strokeWidth="1.6" />
            {[
              [40, 30, 'A', 35, 20],
              [115, 30, 'B', 110, 20],
              [165, 68, 'C', 173, 72],
              [40, 105, 'D', 35, 122],
              [115, 105, 'E', 110, 122],
            ].map(([cx, cy, lbl, lx, ly]) => (
              <g key={String(lbl)}>
                <circle cx={Number(cx)} cy={Number(cy)} r="3.5" fill="currentColor" />
                <text x={Number(lx)} y={Number(ly)} fontSize="12" fontFamily="sans-serif">
                  {lbl}
                </text>
              </g>
            ))}
            <text x="55" y="136" fontSize="11.5" fontFamily="serif" fontWeight="bold">Graph for 5(i)</text>

            {/* Graph (ii): A, B, C, D, E, F */}
            <polygon points="270,68 325,28 325,108" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <rect x="325" y="28" width="95" height="80" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <polygon points="475,68 420,28 420,108" fill="none" stroke="currentColor" strokeWidth="1.6" />
            {[
              [270, 68, 'A', 253, 72],
              [325, 28, 'B', 320, 18],
              [420, 28, 'C', 416, 18],
              [325, 108, 'D', 320, 124],
              [420, 108, 'E', 416, 124],
              [475, 68, 'F', 483, 72],
            ].map(([cx, cy, lbl, lx, ly]) => (
              <g key={String(lbl)}>
                <circle cx={Number(cx)} cy={Number(cy)} r="3.5" fill="currentColor" />
                <text x={Number(lx)} y={Number(ly)} fontSize="12" fontFamily="sans-serif" fontStyle="italic">
                  {lbl}
                </text>
              </g>
            ))}
            <text x="335" y="136" fontSize="11.5" fontFamily="serif" fontWeight="bold">Graph for 5(ii)</text>
          </svg>
        </div>
      );

    case 'partC-8-deg33332':
      return (
        <div className="my-2 p-3 bg-white border border-slate-200 rounded-md inline-block">
          <svg width="240" height="145" viewBox="0 0 240 145" className="text-black">
            {/* Simple graph on 5 vertices with degrees (3, 3, 3, 3, 2) */}
            {/* Square v1-v2-v3-v4 with diagonal v1-v3, and v5 connected to v2 and v4 */}
            <polygon points="50,35 125,35 125,105 50,105" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <line x1="50" y1="35" x2="125" y2="105" stroke="currentColor" strokeWidth="1.8" />
            <line x1="125" y1="35" x2="190" y2="70" stroke="currentColor" strokeWidth="1.8" />
            <line x1="125" y1="105" x2="190" y2="70" stroke="currentColor" strokeWidth="1.8" />
            {[
              [50, 35, 'v₁ (3)', 12, 32],
              [125, 35, 'v₂ (3)', 115, 22],
              [125, 105, 'v₃ (3)', 115, 122],
              [50, 105, 'v₄ (3)', 12, 112],
              [190, 70, 'v₅ (2)', 196, 74],
            ].map(([cx, cy, lbl, lx, ly]) => (
              <g key={String(lbl)}>
                <circle cx={Number(cx)} cy={Number(cy)} r="4" fill="currentColor" />
                <text x={Number(lx)} y={Number(ly)} fontSize="11.5" fontFamily="serif" fontWeight="bold">
                  {lbl}
                </text>
              </g>
            ))}
            <text x="20" y="138" fontSize="11.5" fontFamily="serif">
              Graph for (iii) (3, 3, 3, 3, 2) with e = 7 edges
            </text>
          </svg>
        </div>
      );

    case 'partC-9-trees':
      return (
        <div className="my-2 p-3 bg-white border border-slate-200 rounded-md overflow-x-auto">
          <svg width="560" height="125" viewBox="0 0 560 125" className="text-black">
            {/* (a) Tree G: V1 - V2 - V3 - V4, and V4 branches to V6 and V5 */}
            <line x1="30" y1="65" x2="180" y2="65" stroke="currentColor" strokeWidth="1.8" />
            <line x1="180" y1="65" x2="230" y2="30" stroke="currentColor" strokeWidth="1.8" />
            <line x1="180" y1="65" x2="230" y2="100" stroke="currentColor" strokeWidth="1.8" />
            {[
              [30, 65, 'V₁ (A)', 18, 84],
              [80, 65, 'V₂ (B)', 68, 84],
              [130, 65, 'V₃ (C)', 118, 84],
              [180, 65, 'V₄ (D)', 165, 84],
              [230, 30, 'V₆ (E)', 225, 20],
              [230, 100, 'V₅ (F)', 225, 116],
            ].map(([cx, cy, lbl, lx, ly]) => (
              <g key={String(lbl)}>
                <circle cx={Number(cx)} cy={Number(cy)} r="3.5" fill="currentColor" />
                <text x={Number(lx)} y={Number(ly)} fontSize="11" fontFamily="serif">
                  {lbl}
                </text>
              </g>
            ))}
            <text x="115" y="116" fontSize="12" fontFamily="sans-serif">(a) Graph G</text>

            {/* (b) Tree G': V'1 - V'2 - V'3 - V'4 - V'5, and V'3 branches up to V'6 */}
            <line x1="310" y1="65" x2="510" y2="65" stroke="currentColor" strokeWidth="1.8" />
            <line x1="410" y1="65" x2="410" y2="25" stroke="currentColor" strokeWidth="1.8" />
            {[
              [310, 65, "V'₁ (a)", 295, 84],
              [360, 65, "V'₂ (b)", 348, 84],
              [410, 65, "V'₃ (c)", 398, 84],
              [410, 25, "V'₆ (d)", 418, 28],
              [460, 65, "V'₄ (e)", 448, 84],
              [510, 65, "V'₅ (f)", 498, 84],
            ].map(([cx, cy, lbl, lx, ly]) => (
              <g key={String(lbl)}>
                <circle cx={Number(cx)} cy={Number(cy)} r="3.5" fill="currentColor" />
                <text x={Number(lx)} y={Number(ly)} fontSize="11" fontFamily="serif">
                  {lbl}
                </text>
              </g>
            ))}
            <text x="395" y="116" fontSize="12" fontFamily="sans-serif">(b) Graph G′</text>
          </svg>
        </div>
      );

    case 'partC-10-cubes':
      return (
        <div className="my-2 p-3 bg-white border border-slate-200 rounded-md overflow-x-auto">
          <svg width="500" height="150" viewBox="0 0 500 150" className="text-black">
            {/* G1 */}
            <rect x="40" y="20" width="140" height="95" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="70" y="42" width="80" height="50" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="40" y1="20" x2="70" y2="42" stroke="currentColor" strokeWidth="1.5" />
            <line x1="180" y1="20" x2="150" y2="42" stroke="currentColor" strokeWidth="1.5" />
            <line x1="40" y1="115" x2="70" y2="92" stroke="currentColor" strokeWidth="1.5" />
            <line x1="180" y1="115" x2="150" y2="92" stroke="currentColor" strokeWidth="1.5" />
            {[
              [40, 20, 'A', 25, 24],
              [180, 20, 'B', 186, 24],
              [180, 115, 'C', 186, 120],
              [40, 115, 'D', 25, 120],
              [70, 42, 'E', 72, 37],
              [150, 42, 'F', 154, 48],
              [150, 92, 'G', 154, 94],
              [70, 92, 'H', 55, 92],
            ].map(([cx, cy, lbl, lx, ly]) => (
              <g key={String(lbl)}>
                <circle cx={Number(cx)} cy={Number(cy)} r="3" fill="currentColor" />
                <text x={Number(lx)} y={Number(ly)} fontSize="11.5" fontFamily="sans-serif" fontStyle="italic">
                  {lbl}
                </text>
              </g>
            ))}
            <text x="102" y="138" fontSize="12.5" fontFamily="sans-serif" fontStyle="italic">G₁</text>

            {/* G2 */}
            <rect x="290" y="20" width="140" height="95" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="320" y="42" width="80" height="50" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="290" y1="20" x2="320" y2="42" stroke="currentColor" strokeWidth="1.5" />
            <line x1="430" y1="115" x2="400" y2="92" stroke="currentColor" strokeWidth="1.5" />
            <line x1="290" y1="115" x2="320" y2="92" stroke="currentColor" strokeWidth="1.5" />
            {[
              [290, 20, 'O', 274, 24],
              [430, 20, 'P', 436, 24],
              [430, 115, 'Q', 436, 120],
              [290, 115, 'R', 274, 120],
              [320, 42, 'S', 322, 37],
              [400, 42, 'T', 405, 44],
              [400, 92, 'U', 405, 94],
              [320, 92, 'V', 318, 106],
            ].map(([cx, cy, lbl, lx, ly]) => (
              <g key={String(lbl)}>
                <circle cx={Number(cx)} cy={Number(cy)} r="3" fill="currentColor" />
                <text x={Number(lx)} y={Number(ly)} fontSize="11.5" fontFamily="sans-serif" fontStyle="italic">
                  {lbl}
                </text>
              </g>
            ))}
            <text x="352" y="138" fontSize="12.5" fontFamily="sans-serif" fontStyle="italic">G₂</text>
          </svg>
        </div>
      );

    default:
      return null;
  }
};
