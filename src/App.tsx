import React, { useState, useMemo } from 'react';
import {
  Printer,
  Copy,
  Check,
  Download,
  Search,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Eye,
  FileCode,
  FileText,
  Moon,
  Sun,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import {
  MODULE_2_QUESTIONS,
  ALL_NOTEBOOK_PAGES,
  QuestionItem,
  NotebookRef,
} from './data/module2AnswerKey';
import {
  MODULE_5_QUESTIONS,
  MODULE_5_NOTEBOOK_PAGES,
} from './data/module5AnswerKey';
import { MODULE_2_LATEX_SOURCE } from './data/latexSource';
import { MODULE_5_LATEX_SOURCE } from './data/module5LatexSource';
import { Math } from './components/Math';
import { RichTextWithMath } from './components/RichTextWithMath';
import { GraphDiagram } from './components/GraphDiagram';

type ActiveModule = 'module5' | 'module2';
type ViewMode = 'key' | 'split' | 'latex';
type PartFilter = 'ALL' | 'A' | 'B' | 'C' | 'CW';
type Theme = 'light' | 'dark';

export default function App() {
  const [activeModule, setActiveModule] = useState<ActiveModule>(() => {
    if (typeof window !== 'undefined') {
      const requested = new URLSearchParams(window.location.search).get('module');
      if (requested === 'module2' || requested === 'module5') return requested;
    }
    return 'module5';
  });
  const [viewMode, setViewMode] = useState<ViewMode>('split');
  const [partFilter, setPartFilter] = useState<PartFilter>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfNotes, setShowProfNotes] = useState(true);
  const [includeSupplementInPrint, setIncludeSupplementInPrint] = useState(false);
  const [selectedNotebookPage, setSelectedNotebookPage] = useState<NotebookRef>(
    MODULE_5_NOTEBOOK_PAGES[0]
  );
  const [imageZoom, setImageZoom] = useState<number>(1);
  const [copiedLatex, setCopiedLatex] = useState(false);
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    document.documentElement.style.colorScheme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage unavailable (private mode); theme persists for this session only.
    }
    setTheme(next);
  };

  const activeQuestions =
    activeModule === 'module5' ? MODULE_5_QUESTIONS : MODULE_2_QUESTIONS;
  const activeNotebookPages =
    activeModule === 'module5' ? MODULE_5_NOTEBOOK_PAGES : ALL_NOTEBOOK_PAGES;
  const activeLatexSource =
    activeModule === 'module5' ? MODULE_5_LATEX_SOURCE : MODULE_2_LATEX_SOURCE;

  const handleSwitchModule = (mod: ActiveModule) => {
    setActiveModule(mod);
    setPartFilter('ALL');
    setSearchQuery('');
    setImageZoom(1);
    setSelectedNotebookPage(
      mod === 'module5' ? MODULE_5_NOTEBOOK_PAGES[0] : ALL_NOTEBOOK_PAGES[0]
    );
  };

  const filteredQuestions = useMemo(() => {
    return activeQuestions.filter((q) => {
      if (partFilter !== 'ALL' && q.part !== partFilter) return false;
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      return (
        q.questionLatex.toLowerCase().includes(query) ||
        q.topic.toLowerCase().includes(query) ||
        q.professorMethodNote.toLowerCase().includes(query) ||
        `${q.part}${q.number}`.toLowerCase().includes(query)
      );
    });
  }, [activeQuestions, partFilter, searchQuery]);

  const partAQuestions = useMemo(
    () => filteredQuestions.filter((q) => q.part === 'A'),
    [filteredQuestions]
  );
  const partBQuestions = useMemo(
    () => filteredQuestions.filter((q) => q.part === 'B'),
    [filteredQuestions]
  );
  const partCQuestions = useMemo(
    () => filteredQuestions.filter((q) => q.part === 'C'),
    [filteredQuestions]
  );
  const cwQuestions = useMemo(
    () => filteredQuestions.filter((q) => q.part === 'CW'),
    [filteredQuestions]
  );

  const currentNotebookIndex = useMemo(() => {
    const idx = activeNotebookPages.findIndex(
      (p) => p.imagePath === selectedNotebookPage.imagePath
    );
    return idx >= 0 ? idx : 0;
  }, [activeNotebookPages, selectedNotebookPage]);

  const handleSelectNotebookRef = (ref: NotebookRef) => {
    setSelectedNotebookPage(ref);
    setImageZoom(1);
    if (viewMode === 'key') {
      setViewMode('split');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLatex = async () => {
    try {
      await navigator.clipboard.writeText(activeLatexSource);
      setCopiedLatex(true);
      setTimeout(() => setCopiedLatex(false), 2000);
    } catch {
      // Fallback copy
    }
  };

  const handleDownloadLatex = () => {
    const blob = new Blob([activeLatexSource], {
      type: 'text/plain;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download =
      activeModule === 'module5'
        ? 'EMA51005_Module_5_Final_Answer_Key.tex'
        : 'EMA51005_Module_2_Final_Answer_Key.tex';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const jumpToPart = (part: PartFilter, sectionId?: string) => {
    setPartFilter(part);
    if (viewMode === 'latex') {
      setViewMode('split');
    }
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    }
  };

  const renderQuestionBlock = (q: QuestionItem) => {
    return (
      <div key={q.id} className="question-block mb-6 pb-3">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div className="text-[16px] leading-relaxed text-black">
            <span className="font-bold mr-1.5">{q.number}.</span>
            <span className="font-bold">
              <RichTextWithMath text={q.questionLatex} />
            </span>
          </div>

          {/* Quiet unboxed metadata + notebook link (hidden when printing) */}
          <div className="no-print flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-sans shrink-0">
            <span>{q.topic}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{q.marks} Marks</span>
            {q.notebookRefs.length > 0 && (
              <>
                <span aria-hidden="true">·</span>
                <button
                  type="button"
                  onClick={() => handleSelectNotebookRef(q.notebookRefs[0])}
                  className="text-sky-700 hover:text-sky-900 underline underline-offset-2 font-medium cursor-pointer whitespace-nowrap shrink-0 dark:text-sky-400 dark:hover:text-sky-300"
                >
                  View Class Note ({q.notebookRefs[0].date || 'Scan'})
                </button>
              </>
            )}
          </div>
        </div>

        {/* Subparts in question if present */}
        {q.subparts && q.subparts.length > 0 && (
          <div className="mt-1.5 ml-5 space-y-1 text-[15.5px] font-semibold text-black">
            {q.subparts.map((sp, i) => (
              <div key={i}>
                <RichTextWithMath text={sp} />
              </div>
            ))}
          </div>
        )}

        {/* Question diagram if present */}
        {q.questionDiagramId && (
          <div className="mt-2 ml-4">
            <GraphDiagram diagramId={q.questionDiagramId} />
          </div>
        )}

        {/* Professor alignment note (screen-only, optional) */}
        {showProfNotes && (
          <div className="no-print mt-2 mb-2.5 px-3 py-2 rounded-md bg-slate-50 border border-slate-200 font-sans text-xs text-slate-600 dark:text-slate-400 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="font-semibold text-slate-800 dark:text-slate-300">
                Professor’s Classwork Method:{' '}
              </span>
              <span>{q.professorMethodNote}</span>
            </div>
            {q.notebookRefs.length > 1 && (
              <div className="flex items-center gap-2 shrink-0">
                {q.notebookRefs.map((ref, idx) => (
                  <button
                    key={ref.imagePath}
                    type="button"
                    onClick={() => handleSelectNotebookRef(ref)}
                    className="text-sky-700 hover:text-sky-900 underline underline-offset-2 font-medium cursor-pointer whitespace-nowrap dark:text-sky-400 dark:hover:text-sky-300"
                  >
                    Page {idx + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Answer Body in authentic University Exam Answer Key flow */}
        <div className="mt-1.5 ml-4 text-[15.5px] text-black space-y-1.5">
          {q.answerLines.map((line, idx) => {
            const isFirstLine = idx === 0;
            if (line.type === 'diagram' && line.diagramId) {
              return (
                <div key={idx} className="py-1">
                  {isFirstLine && (
                    <div className="font-bold mb-1">Answer:</div>
                  )}
                  <GraphDiagram diagramId={line.diagramId} />
                </div>
              );
            }
            if (line.type === 'subhead') {
              return (
                <div key={idx} className="font-bold text-black pt-1">
                  {isFirstLine && <span>Answer: </span>}
                  <RichTextWithMath text={line.content || ''} />
                </div>
              );
            }
            if (line.type === 'math') {
              return (
                <div key={idx} className="py-0.5">
                  {isFirstLine && <span className="font-bold mr-1">Answer:</span>}
                  <Math tex={line.tex || ''} block />
                </div>
              );
            }
            if (line.type === 'list') {
              return (
                <div key={idx} className="space-y-1 pl-4">
                  {isFirstLine && <div className="font-bold -ml-4">Answer:</div>}
                  {(line.items || []).map((item, itemIdx) => (
                    <div key={itemIdx} className="text-black">
                      <RichTextWithMath text={item} />
                    </div>
                  ))}
                </div>
              );
            }
            return (
              <div key={idx} className="text-black leading-relaxed">
                {isFirstLine && <span className="font-bold mr-1.5">Answer:</span>}
                <RichTextWithMath text={line.content || ''} />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const pdfHref =
    activeModule === 'module5'
      ? `${import.meta.env.BASE_URL}EMA51005_Module_5_Final_Answer_Key.pdf`
      : `${import.meta.env.BASE_URL}EMA51005_Module_2_Final_Answer_Key.pdf`;
  const pdfDownloadName =
    activeModule === 'module5'
      ? 'EMA51005_Module_5_Final_Answer_Key.pdf'
      : 'EMA51005_Module_2_Final_Answer_Key.pdf';

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] dark:bg-slate-950 dark:text-slate-200">
      {/* Strict 3-Zone Top Bar Contract (Hidden when printing) */}
      <header className="no-print sticky top-0 z-30 flex items-center justify-between gap-8 px-6 py-3.5 bg-white border-b border-slate-200 dark:bg-slate-900 dark:border-slate-800">
        {/* Zone 1: Brand Title */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            jumpToPart('ALL', 'top');
          }}
          className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 whitespace-nowrap shrink-0"
        >
          EMA51005 Discrete Mathematics
        </a>

        {/* Zone 2: 4 Concise Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
          <button
            type="button"
            onClick={() => jumpToPart('ALL', 'section-part-a')}
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer dark:hover:text-slate-100"
          >
            Part A (Short)
          </button>
          <button
            type="button"
            onClick={() => jumpToPart('ALL', 'section-part-b')}
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer dark:hover:text-slate-100"
          >
            Part B (6 Marks)
          </button>
          <button
            type="button"
            onClick={() => jumpToPart('ALL', 'section-part-c')}
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer dark:hover:text-slate-100"
          >
            Part C (10 Marks)
          </button>
          <button
            type="button"
            onClick={() => jumpToPart('ALL', 'section-part-cw')}
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer dark:hover:text-slate-100"
          >
            Classwork Notes
          </button>
        </nav>

        {/* Zone 3: Primary Action - Theme Toggle, Download PDF and Print */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 cursor-pointer shrink-0"
          >
            {theme === 'dark' ? (
              <Sun className="w-3.5 h-3.5" />
            ) : (
              <Moon className="w-3.5 h-3.5" />
            )}
          </button>
          <a
            href={pdfHref}
            download={pdfDownloadName}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            <Download className="w-3.5 h-3.5" />
            <span>
              {activeModule === 'module5'
                ? 'Download Module 5 PDF'
                : 'Download Module 2 PDF'}
            </span>
          </a>
          <button
            type="button"
            onClick={handlePrint}
            className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print View</span>
          </button>
        </div>
      </header>

      {/* Workspace Control Bar (Below Header, Hidden in Print) */}
      <section
        id="top"
        className="no-print bg-white border-b border-slate-200 px-6 py-3 dark:bg-slate-900 dark:border-slate-800"
      >
        <div className="max-w-[1400px] mx-auto flex flex-col gap-3">
          {/* Row 1: Module Switcher + View Mode Segmented Control */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Module Switcher */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg dark:bg-slate-800">
              <button
                type="button"
                onClick={() => handleSwitchModule('module5')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeModule === 'module5'
                    ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                Unit V — Graph Theory (Module 5)
              </button>
              <button
                type="button"
                onClick={() => handleSwitchModule('module2')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeModule === 'module2'
                    ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                Unit II — Combinatorics (Module 2)
              </button>
            </div>

            {/* View Mode Segmented Control */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg dark:bg-slate-800">
              <button
                type="button"
                onClick={() => setViewMode('key')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                  viewMode === 'key'
                    ? 'bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Exam Answer Key View</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('split')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                  viewMode === 'split'
                    ? 'bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>
                  Split View + Professor’s Notebook ({activeNotebookPages.length}{' '}
                  Pages)
                </span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('latex')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                  viewMode === 'latex'
                    ? 'bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>LaTeX (.tex) &amp; Reference PDFs</span>
              </button>
            </div>
          </div>

          {/* Row 2: Part Filter + Search + Toggles */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg dark:bg-slate-800">
              {(
                [
                  { id: 'ALL', label: 'All (30 Qs)' },
                  { id: 'A', label: 'Part A (10)' },
                  { id: 'B', label: 'Part B (10)' },
                  { id: 'C', label: 'Part C (10)' },
                  {
                    id: 'CW',
                    label: `Extra Classwork (${
                      activeModule === 'module5' ? '3' : '4'
                    })`,
                  },
                ] as { id: PartFilter; label: string }[]
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setPartFilter(tab.id)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    partFilter === tab.id
                      ? 'bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search question, theorem, matrix..."
                  className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 dark:bg-slate-950 dark:border-slate-700 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-slate-500 w-56"
                />
              </div>

              <label className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 cursor-pointer select-none whitespace-nowrap shrink-0">
                <input
                  type="checkbox"
                  checked={showProfNotes}
                  onChange={(e) => setShowProfNotes(e.target.checked)}
                  className="rounded border-slate-300 text-slate-900 focus:ring-0"
                />
                <span>Show Professor Method Notes</span>
              </label>

              <label className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 cursor-pointer select-none whitespace-nowrap shrink-0">
                <input
                  type="checkbox"
                  checked={includeSupplementInPrint}
                  onChange={(e) => setIncludeSupplementInPrint(e.target.checked)}
                  className="rounded border-slate-300 text-slate-900 focus:ring-0"
                />
                <span>Include Extra Classwork in Print</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-6 py-6">
        {viewMode === 'latex' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* LaTeX Code Panel */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-xl p-6 dark:bg-slate-900 dark:border-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    LaTeX Source Code (
                    {activeModule === 'module5'
                      ? 'EMA51005_Module_5_Final_Answer_Key.tex'
                      : 'EMA51005_Module_2_Final_Answer_Key.tex'}
                    )
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Formatted with the exact same LaTeX preamble, fancyhdr running headers, and boxed equations as the Unit III and Unit IV Answer Keys.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyLatex}
                    className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                  >
                    {copiedLatex ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied .tex</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy LaTeX</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleDownloadLatex}
                    className="px-3 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download .tex</span>
                  </button>
                </div>
              </div>
              <pre className="p-4 bg-slate-950 text-slate-100 rounded-lg text-xs font-mono overflow-x-auto max-h-[680px] leading-relaxed dark:border dark:border-slate-800">
                {activeLatexSource}
              </pre>
            </div>

            {/* Reference PDFs & Grading Summary Panel */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 dark:bg-slate-900 dark:border-slate-800">
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Generated &amp; Uploaded PDFs
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-4">
                  Download the Final Answer Key PDFs or inspect the original Question Banks.
                </p>
                <div className="space-y-2.5 text-xs">
                  <a
                    href={`${import.meta.env.BASE_URL}EMA51005_Module_5_Final_Answer_Key.pdf`}
                    download="EMA51005_Module_5_Final_Answer_Key.pdf"
                    className="flex items-center justify-between p-3 rounded-lg border border-blue-200 bg-blue-50/60 hover:bg-blue-50 transition-colors text-blue-900 font-semibold dark:border-blue-900/60 dark:bg-blue-950/30 dark:hover:bg-blue-900/30 dark:text-blue-200"
                  >
                    <span>Unit V (Module 5) Final Answer Key PDF</span>
                    <Download className="w-4 h-4 text-blue-700 dark:text-blue-400 shrink-0" />
                  </a>
                  <a
                    href={`${import.meta.env.BASE_URL}EMA51005_Module_2_Final_Answer_Key.pdf`}
                    download="EMA51005_Module_2_Final_Answer_Key.pdf"
                    className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors text-slate-800 font-medium dark:border-slate-700 dark:hover:border-slate-600 dark:hover:bg-slate-800 dark:text-slate-300"
                  >
                    <span>Unit II (Module 2) Final Answer Key PDF</span>
                    <Download className="w-4 h-4 text-slate-500 shrink-0" />
                  </a>
                  <a
                    href={`${import.meta.env.BASE_URL}assets/aistudio/DM_EMA51005_Question_Bank_Module_5_0dac0262.pdf`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors text-slate-800 font-medium dark:border-slate-700 dark:hover:border-slate-600 dark:hover:bg-slate-800 dark:text-slate-300"
                  >
                    <span>Unit V Question Bank (Graph Theory)</span>
                    <Eye className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" />
                  </a>
                  <a
                    href={`${import.meta.env.BASE_URL}assets/aistudio/DM_EMA51005_Question_Bank_Module_2__1__8e66367d.pdf`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors text-slate-800 font-medium dark:border-slate-700 dark:hover:border-slate-600 dark:hover:bg-slate-800 dark:text-slate-300"
                  >
                    <span>Unit II Question Bank (Combinatorics)</span>
                    <Eye className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" />
                  </a>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 dark:bg-slate-900 dark:border-slate-800">
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Professor’s Key Marking Conventions (
                  {activeModule === 'module5' ? 'Module 5' : 'Module 2'})
                </h3>
                {activeModule === 'module5' ? (
                  <ul className="mt-3 space-y-2.5 text-xs text-slate-600 leading-relaxed dark:text-slate-400">
                    <li>
                      <strong className="text-slate-900 dark:text-slate-200">
                        1. Degree of Vertex &amp; Loops:
                      </strong>{' '}
                      Always state that self-loops are counted twice in{' '}
                      <Math tex="\deg(v_i)" />.
                    </li>
                    <li>
                      <strong className="text-slate-900 dark:text-slate-200">
                        2. Handshaking Theorem:
                      </strong>{' '}
                      Write <Math tex="\sum \deg(v_i) = 2e" /> and state that each edge is incident with <Math tex="2" /> vertices and contributes <Math tex="2" /> to the sum of degrees.
                    </li>
                    <li>
                      <strong className="text-slate-900 dark:text-slate-200">
                        3. Adjacency &amp; Incidence Matrices:
                      </strong>{' '}
                      Include the piecewise definition of <Math tex="a_{ij}" /> and <Math tex="b_{ij}" />, symmetry <Math tex="a_{ij}=a_{ji}" />, and that each column of <Math tex="B" /> has two <Math tex="1" />’s.
                    </li>
                    <li>
                      <strong className="text-slate-900 dark:text-slate-200">
                        4. Graph Isomorphism:
                      </strong>{' '}
                      Check <Math tex="|V(G)|" />, <Math tex="|E(G)|" />, and write out the Adjacency Matrices <Math tex="A(G)" /> and <Math tex="A(G')" /> with row-sum degree columns.
                    </li>
                  </ul>
                ) : (
                  <ul className="mt-3 space-y-2.5 text-xs text-slate-600 leading-relaxed dark:text-slate-400">
                    <li>
                      <strong className="text-slate-900 dark:text-slate-200">
                        1. Induction Working Rule:
                      </strong>{' '}
                      Always write <Math tex="P(1)\text{ is true}" />,{' '}
                      <Math tex="\text{Assume } P(k)\text{ is true}" />, and{' '}
                      <Math tex="\text{To prove } P(k+1)\text{ is true}" />.
                    </li>
                    <li>
                      <strong className="text-slate-900 dark:text-slate-200">
                        2. Generalised Pigeonhole Principle:
                      </strong>{' '}
                      Explicitly identify <Math tex="m" /> (pigeons) and{' '}
                      <Math tex="n" /> (holes) and write{' '}
                      <Math tex="\left[\frac{m-n}{n}\right] + 1" />.
                    </li>
                    <li>
                      <strong className="text-slate-900 dark:text-slate-200">
                        3. Permutations &amp; Combinations:
                      </strong>{' '}
                      Write out <Math tex="nP_r = \frac{n!}{(n-r)!}" /> and{' '}
                      <Math tex="nC_r = \frac{n!}{(n-r)!\,r!}" /> with expanded factorials.
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`grid grid-cols-1 ${
              viewMode === 'split' ? 'lg:grid-cols-12 gap-6 items-start' : ''
            }`}
          >
            {/* Left / Main Column: Authentic LaTeX Exam Answer Key Sheet */}
            <div
              className={
                viewMode === 'split'
                  ? 'lg:col-span-7 xl:col-span-7'
                  : 'max-w-[860px] mx-auto w-full'
              }
            >
              <article className="latex-page latex-document bg-white border border-slate-200 shadow-xs rounded-none sm:rounded-md px-6 sm:px-12 py-10">
                {/* Running Header matching Unit III & Unit IV PDFs */}
                <div className="flex items-center justify-between text-[13.5px] text-black pb-1.5 border-b border-black mb-7">
                  <span>EMA51005 - Discrete Mathematics</span>
                  <span>
                    {activeModule === 'module5'
                      ? 'Unit V - Graph Theory'
                      : 'Unit II - Combinatorics'}
                  </span>
                </div>

                {/* Title Block matching Unit III & Unit IV PDFs */}
                <div className="text-center mb-6">
                  <h1 className="text-[22px] font-bold tracking-normal text-black leading-snug">
                    EMA51005 - Discrete Mathematics
                  </h1>
                  <h2 className="text-[18px] font-bold text-black mt-0.5">
                    {activeModule === 'module5'
                      ? 'UNIT V - Graph Theory'
                      : 'UNIT II - Combinatorics'}
                  </h2>
                  <div className="text-[15px] font-bold text-black mt-0.5">
                    Final Exam Answer Key
                  </div>
                </div>

                {/* Italic Classwork Note matching Unit III & Unit IV PDFs */}
                {activeModule === 'module5' ? (
                  <p className="italic text-[14.5px] text-black mb-7 leading-relaxed">
                    This answer key strictly follows the professor’s handwritten classwork notes: Pseudograph and Simple Graph definitions, Degree of a vertex (with self-loops counted twice), Handshaking Theorem (<Math tex="\sum \deg(v_i) = 2e" />), Complete and Regular Graphs (<Math tex="K_n" />), Bipartite and Complete Bipartite Graphs (<Math tex="K_{m,n}" />), Adjacency Matrix <Math tex="A = [a_{ij}]" />, Incidence Matrix <Math tex="B = [b_{ij}]" />, and Graph Isomorphism verification using Adjacency Matrix row-sum degrees.
                  </p>
                ) : (
                  <p className="italic text-[14.5px] text-black mb-7 leading-relaxed">
                    This answer key strictly follows the handwritten classwork flow: Induction Working Rule (<Math tex="P(1) \to P(k) \to P(k+1)" />), Generalised Pigeonhole Principle (<Math tex="\left[\frac{m-n}{n}\right] + 1" />), step-by-step factorial expansion for <Math tex="nP_r" /> and <Math tex="nC_r" />, Inclusion–Exclusion, and characteristic root <Math tex="m" /> for recurrence relations.
                  </p>
                )}

                {/* Part A - Short Answers */}
                {partAQuestions.length > 0 && (
                  <section id="section-part-a" className="mb-8">
                    <h3 className="text-[19px] font-bold text-black mb-4">
                      Part A - Short Answers
                    </h3>
                    <div>{partAQuestions.map(renderQuestionBlock)}</div>
                  </section>
                )}

                {/* Part B - 6 Mark Answers */}
                {partBQuestions.length > 0 && (
                  <section id="section-part-b" className="part-break mb-8 pt-2">
                    <div className="hidden print:flex items-center justify-between text-[13.5px] text-black pb-1.5 border-b border-black mb-6">
                      <span>EMA51005 - Discrete Mathematics</span>
                      <span>
                        {activeModule === 'module5'
                          ? 'Unit V - Graph Theory'
                          : 'Unit II - Combinatorics'}
                      </span>
                    </div>
                    <h3 className="text-[19px] font-bold text-black mb-4">
                      Part B - 6 Mark Answers
                    </h3>
                    <div>{partBQuestions.map(renderQuestionBlock)}</div>
                  </section>
                )}

                {/* Part C - 10 Mark Answers */}
                {partCQuestions.length > 0 && (
                  <section id="section-part-c" className="part-break mb-8 pt-2">
                    <div className="hidden print:flex items-center justify-between text-[13.5px] text-black pb-1.5 border-b border-black mb-6">
                      <span>EMA51005 - Discrete Mathematics</span>
                      <span>
                        {activeModule === 'module5'
                          ? 'Unit V - Graph Theory'
                          : 'Unit II - Combinatorics'}
                      </span>
                    </div>
                    <h3 className="text-[19px] font-bold text-black mb-4">
                      Part C - 10 Mark Answers
                    </h3>
                    <div>{partCQuestions.map(renderQuestionBlock)}</div>
                  </section>
                )}

                {/* Extra Classwork Supplement from Professor's Notebook */}
                {cwQuestions.length > 0 && (
                  <section
                    id="section-part-cw"
                    className={`${
                      includeSupplementInPrint ? 'part-break' : 'no-print'
                    } pt-4 border-t border-slate-200`}
                  >
                    <h3 className="text-[19px] font-bold text-black mb-2">
                      Additional Solved Classwork Problems (From Professor’s Notebook)
                    </h3>
                    <p className="italic text-[14px] text-black mb-4">
                      {activeModule === 'module5'
                        ? 'These additional problems were solved in the professor’s handwritten Unit-5 class notes (10 vertices of degree 6, 51 students handshaking in CSE-3B, and Bipartite graph verification).'
                        : 'These additional problems were solved in the professor’s handwritten Unit-2 class notes (determinant method for recurrence relations and strong induction divisibility by 43).'}
                    </p>
                    <div>{cwQuestions.map(renderQuestionBlock)}</div>
                  </section>
                )}
              </article>
            </div>

            {/* Right Column: Interactive Professor's Handwritten Notebook Inspector (Split View) */}
            {viewMode === 'split' && (
              <aside className="no-print lg:col-span-5 xl:col-span-5 lg:sticky lg:top-16 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs dark:bg-slate-900 dark:border-slate-800">
                <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        Professor’s Handwritten Class Notes (
                        {activeModule === 'module5' ? 'Module 5' : 'Module 2'})
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Click “View Class Note” on any question or browse all{' '}
                        {activeNotebookPages.length} notebook pages below.
                      </p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() =>
                          setImageZoom((z) => (z > 1 ? +(z - 0.25).toFixed(2) : 1))
                        }
                        title="Zoom Out"
                        className="p-1.5 text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-md cursor-pointer dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:text-slate-100"
                      >
                        <ZoomOut className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-mono tabular-nums px-1.5 text-slate-600 dark:text-slate-400">
                        {window.Math.round(imageZoom * 100)}%
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setImageZoom((z) => (z < 2 ? +(z + 0.25).toFixed(2) : 2))
                        }
                        title="Zoom In"
                        className="p-1.5 text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-md cursor-pointer dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:text-slate-100"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Page Selector Dropdown + Prev/Next */}
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      type="button"
                      disabled={currentNotebookIndex <= 0}
                      onClick={() => {
                        if (currentNotebookIndex > 0) {
                          setSelectedNotebookPage(
                            activeNotebookPages[currentNotebookIndex - 1]
                          );
                        }
                      }}
                      className="p-1.5 bg-white border border-slate-200 rounded-md text-slate-700 hover:bg-slate-100 disabled:opacity-40 cursor-pointer shrink-0 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <select
                      value={selectedNotebookPage.imagePath}
                      onChange={(e) => {
                        const found = activeNotebookPages.find(
                          (p) => p.imagePath === e.target.value
                        );
                        if (found) setSelectedNotebookPage(found);
                      }}
                      className="flex-1 text-xs bg-white border border-slate-200 rounded-md px-2.5 py-1.5 text-slate-800 font-medium focus:outline-none focus:border-slate-400 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:focus:border-slate-500 truncate"
                    >
                      {activeNotebookPages.map((page, idx) => (
                        <option key={page.imagePath} value={page.imagePath}>
                          {idx + 1}/{activeNotebookPages.length} — {page.label} (
                          {page.date})
                        </option>
                      ))}
                    </select>

                    <button
                      type="button"
                      disabled={
                        currentNotebookIndex >= activeNotebookPages.length - 1
                      }
                      onClick={() => {
                        if (
                          currentNotebookIndex <
                          activeNotebookPages.length - 1
                        ) {
                          setSelectedNotebookPage(
                            activeNotebookPages[currentNotebookIndex + 1]
                          );
                        }
                      }}
                      className="p-1.5 bg-white border border-slate-200 rounded-md text-slate-700 hover:bg-slate-100 disabled:opacity-40 cursor-pointer shrink-0 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Notebook Image Canvas with Resilient Fallback */}
                <div className="bg-slate-900 dark:bg-slate-950 overflow-auto max-h-[680px] flex items-start justify-center p-3">
                  {!imageErrorMap[selectedNotebookPage.imagePath] ? (
                    <img
                      src={`${import.meta.env.BASE_URL}${selectedNotebookPage.imagePath.replace(/^\//, '')}`}
                      alt={selectedNotebookPage.label}
                      referrerPolicy="no-referrer"
                      style={{
                        transform: `scale(${imageZoom})`,
                        transformOrigin: 'top center',
                      }}
                      onError={() =>
                        setImageErrorMap((prev) => ({
                          ...prev,
                          [selectedNotebookPage.imagePath]: true,
                        }))
                      }
                      className="max-w-full h-auto rounded shadow-sm transition-transform duration-150"
                    />
                  ) : (
                    <div className="w-full py-16 px-6 text-center bg-slate-800 rounded-lg text-slate-200">
                      <BookOpen className="w-8 h-8 mx-auto mb-2 text-slate-400" />
                      <p className="text-sm font-semibold">
                        {selectedNotebookPage.label}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        Class Date: {selectedNotebookPage.date}
                      </p>
                    </div>
                  )}
                </div>

                {/* Notebook Footer Info */}
                <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 dark:bg-slate-950 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="truncate">{selectedNotebookPage.label}</span>
                  <span className="tabular-nums shrink-0 ml-2">
                    Page {currentNotebookIndex + 1} of{' '}
                    {activeNotebookPages.length} · {selectedNotebookPage.date}
                  </span>
                </div>
              </aside>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
