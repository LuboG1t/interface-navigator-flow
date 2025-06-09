
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Brain, Shield, Lightbulb, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ValueProp = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode,
  title: string,
  description: string
}) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-foreground/80">{description}</p>
    </div>
  );
};

const Index = () => {
  const [currentInterface, setCurrentInterface] = useState<'inicio' | 'contexto' | 'resultados'>('inicio');

  // Move all useState hooks to the top level
  const [selectedTerm, setSelectedTerm] = useState<'caracteristicas' | 'transformaciones' | 'representaciones'>('caracteristicas');
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const templateCategories = ["Mapa de calor de color (TMCC)", "Tono (TT)", "Saturación (TS)", "Brillo (TB)", "Textura (TX)", "Contraste (TC)"];

  const interfaceNames = {
    inicio: 'Inicio',
    contexto: 'Contexto',
    resultados: 'Resultados'
  };

  // Auto-scroll functionality for views
  useEffect(() => {
    const handleScroll = () => {
      const views = document.querySelectorAll('.scroll-view');
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      views.forEach((view, index) => {
        const rect = view.getBoundingClientRect();
        const viewTop = rect.top + scrollY;
        const viewBottom = viewTop + rect.height;

        // Check if view is mostly in viewport
        if (scrollY + windowHeight / 2 >= viewTop && scrollY + windowHeight / 2 <= viewBottom) {
          // Smooth scroll to center the view
          if (Math.abs(rect.top) > 10) {
            view.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      });
    };

    const throttledScroll = () => {
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  // Generate matrix data with more rows for pagination
  const generateMatrixData = () => {
    const data = [];
    for (let i = 1; i <= 270; i++) {
      data.push({
        pair: i,
        tmcc: (0.764 + Math.random() * 0.2).toFixed(3),
        tt: (0.825 + Math.random() * 0.15).toFixed(3),
        ts: (0.862 + Math.random() * 0.1).toFixed(3),
        tb: (0.912 + Math.random() * 0.08).toFixed(3),
        tx: (0.955 + Math.random() * 0.04).toFixed(3),
        tc: (0.896 + Math.random() * 0.06).toFixed(3)
      });
    }
    return data;
  };

  const allMatrixData = generateMatrixData();
  const itemsPerPage = 10;
  const totalPages = Math.ceil(allMatrixData.length / itemsPerPage);
  const currentMatrixData = allMatrixData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handleRowClick = (rowPair: number) => {
    setSelectedRow(selectedRow === rowPair ? null : rowPair);
    // Scroll to comparison visualization
    if (selectedRow !== rowPair) {
      setTimeout(() => {
        const comparisonView = document.querySelector('.comparison-view');
        if (comparisonView) {
          comparisonView.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  const renderInicio = () => {
    const termContent = {
      caracteristicas: {
        title: "Características de bajo nivel",
        content: "Las características visuales de bajo nivel son atributos primarios de una imagen que no requieren interpretación cognitiva para ser detectados. Incluyen propiedades como color, textura, brillo, bordes y contraste. Estas características se extraen directamente a partir de los valores de píxeles mediante filtros o transformaciones simples. Son fundamentales en visión por computadora porque permiten describir visualmente una imagen antes de aplicar análisis más complejos o modelos de aprendizaje profundo."
      },
      transformaciones: {
        title: "Transformaciones visuales",
        content: "Las transformaciones visuales son operaciones aplicadas a una imagen para modificar aspectos específicos de su apariencia, como el color, la textura o la forma. Su propósito puede ser estético, funcional o experimental, y se utilizan comúnmente en aprendizaje automático para aumentar datos o probar la robustez de modelos. Sin embargo, una mala elección de transformaciones puede distorsionar características visuales esenciales, afectando negativamente el análisis, especialmente en contextos artísticos o estilísticos."
      },
      representaciones: {
        title: "Representaciones vectoriales",
        content: "Las representaciones vectoriales son formas numéricas en las que se codifican imágenes u objetos para facilitar su análisis computacional. Estas representaciones sintetizan múltiples características visuales en un solo vector multidimensional que puede ser comparado con otros mediante métricas matemáticas. Son esenciales en tareas como clasificación, búsqueda por similitud o recuperación de imágenes, ya que permiten analizar relaciones visuales sin necesidad de comparar directamente los píxeles originales de las imágenes."
      }
    };

    return (
      <div className="space-y-0">
        {/* Hero Section - Centered on screen */}
        <div className="min-h-screen flex flex-col items-center justify-center px-6 space-y-8 scroll-view">
          {/* Two-color title */}
          <div className="text-center space-y-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-blue-600">
                Análisis de características visuales de bajo nivel mediante representaciones vectoriales
              </span>
              <span className="text-black"> en la similitud compositiva de pinturas impresionistas</span>
            </h1>
          </div>

          {/* View Results Button */}
          <div className="text-center">
            <Button
              className="bg-gray-800 hover:bg-gray-700 font-bold text-white px-8 py-2 rounded-full"
              onClick={() => setCurrentInterface('resultados')}
            >
              Ver resultados
            </Button>
          </div>
        </div>

        {/* First view - Main content */}
        <div className="min-h-screen flex flex-col items-center justify-center px-6 space-y-12 scroll-view">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-blue-600">¿Cómo nace el Experimento?</h1>
              <p className="text-gray-700 max-w-2xl mx-auto justify-center">
                Surgió la pregunta, ¿Cómo la similitud compositiva de pinturas impresionistas varía según las características visuales de bajo nivel mediante representaciones vectoriales?
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-3 text-left">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-3 mt-2">Problemática</h2>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    En el análisis computacional de obras de arte, las características visuales de bajo nivel, como el color y la textura,
                    son esenciales para preservar la coherencia estilística. Sin embargo, el uso inadecuado de transformaciones visuales
                    para representar estas características puede distorsionar los elementos compositivos de las pinturas, especialmente
                    en estilos sensibles como el impresionismo. A esto se suma la limitación de los modelos actuales, que priorizan
                    patrones estructurales pero descuidan detalles visuales finos. Por ello, se requiere un enfoque que permita evaluar
                    cómo cada transformación afecta la representación de estas características, utilizando representaciones vectoriales
                    que capten mejor la variación en la similitud compositiva.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-left">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-3 mt-2">Importancia</h2>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    Esta experimentación es relevante porque enfrenta una limitación crítica en el análisis digital del arte: la elección
                    incorrecta de transformaciones visuales puede comprometer la fidelidad de las representaciones. Al identificar
                    cuáles transformaciones de color y textura preservan mejor la similitud compositiva en pinturas impresionistas, se
                    contribuye a una representación más precisa de las obras, facilitando el desarrollo de herramientas digitales más
                    confiables para su análisis y conservación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second view - Basic terms */}
        <div className="min-h-screen flex flex-col items-center justify-center px-6 space-y-8 scroll-view">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold">Términos Básicos</h2>

            <div className="flex justify-center space-x-8">
              <button
                className={`pb-2 border-b-2 transition-all duration-500 ease-in-out ${selectedTerm === 'caracteristicas'
                  ? 'text-blue-600 border-blue-600 font-medium'
                  : 'text-gray-600 border-transparent hover:text-gray-800'
                  }`}
                onClick={() => setSelectedTerm('caracteristicas')}
              >
                Características de bajo nivel
              </button>
              <button
                className={`pb-2 border-b-2 transition-all duration-500 ease-in-out ${selectedTerm === 'transformaciones'
                  ? 'text-blue-600 border-blue-600 font-medium'
                  : 'text-gray-600 border-transparent hover:text-gray-800'
                  }`}
                onClick={() => setSelectedTerm('transformaciones')}
              >
                Transformaciones visuales
              </button>
              <button
                className={`pb-2 border-b-2 transition-all duration-500 ease-in-out ${selectedTerm === 'representaciones'
                  ? 'text-blue-600 border-blue-600 font-medium'
                  : 'text-gray-600 border-transparent hover:text-gray-800'
                  }`}
                onClick={() => setSelectedTerm('representaciones')}
              >
                Representaciones vectoriales
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed text-justify">
                {termContent[selectedTerm].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  };

  const renderContexto = () => {

    return (
      <div className="space-y-0">

        {/* About Section - Second view */}
        <div className="min-h-screen flex flex-col items-center justify-center px-6 space-y-12 scroll-view">

          <div className="py-16 px-4 rounded-lg glass-panel my-24">
            <h2 className="text-3xl font-bold text-center mb-3">Acerca del Experimento</h2>
            <p className="text-xl text-center text-foreground/80 max-w-3xl mx-auto mb-16">
              Con el objetivo de determinar la variación de la similitud compositiva de pinturas
              impresionistas según las características visuales de bajo nivel mediante
              representaciones vectoriales, las fases que se siguieron fueron:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ValueProp
                icon={<Brain className="w-8 h-8 text-blue-600" />}
                title="Aplicar transformaciones visuales"
                description="Resalta características visuales de bajo nivel."
              />
              <ValueProp
                icon={<Shield className="w-8 h-8 text-blue-600" />}
                title="Extraer representaciones vectoriales"
                description="por cada transformación visual aplicada."
              />
              <ValueProp
                icon={<Lightbulb className="w-8 h-8 text-blue-600" />}
                title="Calcular la similitud compositiva"
                description="a partir de las representaciones vectoriales de cada transformación aplicada."
              />
            </div>
          </div>
        </div>

        {/* Flow Representation Section - Third view */}
        <div className="min-h-screen flex flex-col items-center justify-center px-8 space-y-12 scroll-view">
          <div className="max-w-6xl mx-auto space-y-8 text-center">
            <h3 className="text-2xl font-bold">Representación del Flujo</h3>

            {/* Process Image */}
            <div className="w-full flex justify-center">
              <img
                src="/workflow.jpg"
                alt="Proceso del experimento"
                className="max-w-full h-auto"
              />
            </div>

            {/* Technical Details in 3 columns */}
            <div className="space-y-1 mt-2">
              <h2 className="text-lg font-bold mb-6 text-center text-primary">Detalles Técnicos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-base font-bold mb-1">Dataset</h3>
                  <p className="text-foreground/80 mb-4 text-base">
                    Conjunto de pares de imágenes similares de pinturas impresionistas.
                  </p>
                  <h3 className="text-base font-bold mb-1">Transformaciones</h3>
                  <p className="text-foreground/80 text-base">
                    Mapa de calor de color, tono, saturación, brillo, textura y contraste.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1">Métrica</h3>
                  <p className="text-foreground/80 mb-4 text-base">
                    Similitud de coseno.
                  </p>
                  <h3 className="text-base font-bold mb-1">Representaciones vectoriales</h3>
                  <p className="text-foreground/80 text-base">
                    a través de la red neuronal CLIP (Contrastive Language-Image Pretraining).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    );
  };

  const renderResultados = () => {
    return (
      <div className="space-y-0">
        {/* First view - Title and Total Chart */}
        <div className="min-h-screen flex flex-col items-center justify-center px-6 space-y-8 scroll-view">
          <div className="text-center space-y-6">
            <h1 className="text-3xl font-bold text-blue-600">Resultados</h1>
            <h2 className="text-xl font-bold">Gráfico Total de Transformaciones</h2>
            <div className="w-full max-w-5xl h-96 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400">📊</span>
            </div>
          </div>
        </div>

        {/* Second view - Charts by transformation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 scroll-view">
          <div className="text-center space-y-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center gap-2 mb-12">
              <p className="text-foreground max-w-3xl text-xl font-bold md:text-2xl mt-2">Gráficos por Transformación</p>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
                {templateCategories.map((template, idx) => (
                  <div key={idx} >
                    <span className="text-base font-bold text-center z-10 group-hover:scale-105 transition-transform duration-300">
                      {template}
                    </span>
                    <span className="ml-2 text-gray-400 text-xs">📊</span>
                    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer">
                      <div className="relative h-40 bg-gradient-to-br from-primary/5 to-primary/20 p-6 flex items-center justify-center">
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"></div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Third view - Results matrix */}
        <div className="min-h-screen flex flex-col items-center justify-center px-6 space-y-6 scroll-view">
          <div className="max-w-6xl mx-auto space-y-4 text-center">
            <div className="flex justify-center items-center space-x-4">
              <h2 className="text-xl font-bold">Matriz de Resultados por Par similar</h2>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <span className="text-sm text-gray-600">
                {currentPage * itemsPerPage + 1} - {Math.min((currentPage + 1) * itemsPerPage, allMatrixData.length)} › {allMatrixData.length}
              </span>

              <button
                onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                disabled={currentPage === totalPages - 1}
                className="p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow mx-auto">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-2 text-left">N° Par</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">TMCC</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">TT</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">TS</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">TB</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">TX</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">TC</th>
                  </tr>
                </thead>
                <tbody>
                  {currentMatrixData.map((row) => (
                    <tr
                      key={row.pair}
                      className={`hover:bg-gray-50 cursor-pointer ${selectedRow === row.pair ? 'bg-blue-50' : ''
                        }`}
                      onClick={() => handleRowClick(row.pair)}
                    >
                      <td className="border border-gray-200 px-4 py-2">{row.pair}</td>
                      <td className="border border-gray-200 px-4 py-2">{row.tmcc}</td>
                      <td className="border border-gray-200 px-4 py-2">{row.tt}</td>
                      <td className="border border-gray-200 px-4 py-2">{row.ts}</td>
                      <td className="border border-gray-200 px-4 py-2">{row.tb}</td>
                      <td className="border border-gray-200 px-4 py-2">{row.tx}</td>
                      <td className="border border-gray-200 px-4 py-2">{row.tc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Fourth view - Visualization comparison */}
        <div className="min-h-screen flex flex-col items-center justify-center px-6 space-y-8 comparison-view scroll-view">
          <div className="max-w-6xl mx-auto space-y-6 text-center">
            <h2 className="text-xl font-bold">Visualización de la Comparación</h2>
            <p className="text-sm text-gray-600">
              Seleccione una fila de la Matriz de Resultados por Par similar para visualizar todo el proceso de experimentación
            </p>

            {/* Two main images */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-center">Imagen Original A</h3>
                <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-400 text-xs">🖼️</span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-center">Imagen Original B</h3>
                <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-400 text-xs">🖼️</span>
                </div>
              </div>
            </div>

            {/* Three columns with transformation percentages */}
            <div className="grid grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="text-center">
                  <h4 className="font-bold text-lg">Mapa de Calor de Color</h4>
                  <div className="text-2xl font-bold text-blue-600">76.4%</div>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-lg">Tono</h4>
                  <div className="text-2xl font-bold text-blue-600">82.5%</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-center">
                  <h4 className="font-bold text-lg">Saturación</h4>
                  <div className="text-2xl font-bold text-blue-600">86.2%</div>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-lg">Brillo</h4>
                  <div className="text-2xl font-bold text-blue-600">91.2%</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-center">
                  <h4 className="font-bold text-lg">Textura</h4>
                  <div className="text-2xl font-bold text-blue-600">95.5%</div>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-lg">Contraste</h4>
                  <div className="text-2xl font-bold text-blue-600">89.6%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-center space-x-8">
            {Object.entries(interfaceNames).map(([key, name]) => (
              <button
                key={key}
                onClick={() => setCurrentInterface(key as 'inicio' | 'contexto' | 'resultados')}
                className={`relative px-4 py-2 font-medium transition-colors duration-300 ${currentInterface === key
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
                  }`}
              >
                {name}
                {currentInterface === key && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-20">
        {currentInterface === 'inicio' && renderInicio()}
        {currentInterface === 'contexto' && renderContexto()}
        {currentInterface === 'resultados' && renderResultados()}
      </div>
    </div>
  );
};

export default Index;
