
import { useState } from "react";
import { ChevronDown, Beaker } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const [currentInterface, setCurrentInterface] = useState<'inicio' | 'contexto' | 'resultados'>('inicio');

  const interfaceNames = {
    inicio: 'Inicio',
    contexto: 'Contexto', 
    resultados: 'Resultados'
  };

  const renderInicio = () => (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-blue-600 leading-tight">
          Análisis de características visuales de bajo nivel<br />
          mediante representaciones vectoriales
        </h1>
        <p className="text-gray-700">
          en la similitud compositiva de pinturas impresionistas
        </p>
      </div>

      {/* Image Selector */}
      <div className="flex items-center justify-center space-x-4">
        <div className="flex space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center bg-gray-50">
              <span className="text-xs text-gray-400">📷</span>
            </div>
          ))}
        </div>
        <div className="text-2xl text-gray-400">→</div>
        <div className="w-16 h-16 border-2 border-gray-400 rounded-full flex items-center justify-center bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors" onClick={() => setCurrentInterface('resultados')}>
          <Beaker className="w-8 h-8 text-gray-600" />
        </div>
        <div className="text-2xl text-gray-400">→</div>
        <div className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center bg-gray-50">
          <span className="text-xs text-gray-400">🔍</span>
        </div>
      </div>
      
      <div className="flex space-x-4 justify-center">
        <span className="text-sm text-gray-600">[ ]</span>
        <span className="text-sm text-gray-600">[ ]</span>
      </div>

      <div className="text-center">
        <Button 
          className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-2 rounded-full"
          onClick={() => setCurrentInterface('resultados')}
        >
          Ver resultados
        </Button>
      </div>

      {/* About Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">Acerca del Experimento</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          Con el objetivo de determinar la variación de la similitud compositiva de pinturas 
          impresionistas según las características visuales de bajo nivel mediante 
          representaciones vectoriales, las fases que se siguieron fueron:
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="font-bold">Aplicar transformaciones visuales</h3>
            <p className="text-sm text-gray-600">
              para resaltar las características visuales de bajo nivel individualmente
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="font-bold">Extraer representaciones vectoriales</h3>
            <p className="text-sm text-gray-600">
              por cada transformación visual aplicada
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="font-bold">Calcular la similitud compositiva</h3>
            <p className="text-sm text-gray-600">
              a partir de las representaciones vectoriales de cada transformación aplicada
            </p>
          </div>
        </div>
      </div>

      {/* Technical Details */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center mb-6">
          <span className="text-gray-400">📷</span>
        </div>
        
        <h3 className="font-bold mb-4">Detalles Técnicos</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-start space-x-2">
            <span className="text-green-600 mt-1">✓</span>
            <div>
              <strong>Dataset:</strong> Conjunto de pares de imágenes similares de pinturas impresionistas
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-green-600 mt-1">✓</span>
            <div>
              <strong>Representaciones vectoriales:</strong> a través de la red neuronal CLIP (Contrastive Language-Image Pretraining)
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-green-600 mt-1">✓</span>
            <div>
              <strong>Transformaciones:</strong> Mapa de calor de color, tono, saturación, brillo, textura y contraste
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-green-600 mt-1">✓</span>
            <div>
              <strong>Métrica:</strong> Similitud de coseno
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContexto = () => {
    const [selectedTerm, setSelectedTerm] = useState<'caracteristicas' | 'transformaciones' | 'representaciones'>('caracteristicas');

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
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-blue-600">¿Cómo nace el Experimento?</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Surgió la pregunta, ¿Cómo la similitud compositiva de pinturas impresionistas varía según las características visuales de bajo nivel mediante representaciones vectoriales?
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start space-x-3">
            <span className="text-2xl">⚡</span>
            <div>
              <h2 className="text-xl font-bold mb-3">Problemática</h2>
              <p className="text-gray-700 leading-relaxed">
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

          <div className="flex items-start space-x-3">
            <span className="text-2xl">⚡</span>
            <div>
              <h2 className="text-xl font-bold mb-3">Importancia</h2>
              <p className="text-gray-700 leading-relaxed">
                Esta experimentación es relevante porque enfrenta una limitación crítica en el análisis digital del arte: la elección 
                incorrecta de transformaciones visuales puede comprometer la fidelidad de las representaciones. Al identificar 
                cuáles transformaciones de color y textura preservan mejor la similitud compositiva en pinturas impresionistas, se 
                contribuye a una representación más precisa de las obras, facilitando el desarrollo de herramientas digitales más 
                confiables para su análisis y conservación.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Términos Básicos</h2>
          
          <div className="flex justify-center space-x-8">
            <button
              className={`pb-2 border-b-2 transition-colors ${
                selectedTerm === 'caracteristicas' 
                  ? 'text-blue-600 border-blue-600 font-medium' 
                  : 'text-gray-600 border-transparent hover:text-gray-800'
              }`}
              onClick={() => setSelectedTerm('caracteristicas')}
            >
              Características de bajo nivel
            </button>
            <button
              className={`pb-2 border-b-2 transition-colors ${
                selectedTerm === 'transformaciones' 
                  ? 'text-blue-600 border-blue-600 font-medium' 
                  : 'text-gray-600 border-transparent hover:text-gray-800'
              }`}
              onClick={() => setSelectedTerm('transformaciones')}
            >
              Transformaciones visuales
            </button>
            <button
              className={`pb-2 border-b-2 transition-colors ${
                selectedTerm === 'representaciones' 
                  ? 'text-blue-600 border-blue-600 font-medium' 
                  : 'text-gray-600 border-transparent hover:text-gray-800'
              }`}
              onClick={() => setSelectedTerm('representaciones')}
            >
              Representaciones vectoriales
            </button>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              {termContent[selectedTerm].content}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderResultados = () => {
    const [selectedRow, setSelectedRow] = useState<number | null>(null);

    const matrixData = [
      { pair: 1, tmcc: 0.764, tt: 0.825, ts: 0.862, tb: 0.912, tx: 0.955, tc: 0.896 },
      { pair: 2, tmcc: 0.764, tt: 0.825, ts: 0.862, tb: 0.912, tx: 0.955, tc: 0.896 },
      { pair: 3, tmcc: 0.891, tt: 0.873, ts: 0.902, tb: 0.934, tx: 0.967, tc: 0.923 },
      { pair: 4, tmcc: 0.856, tt: 0.847, ts: 0.888, tb: 0.925, tx: 0.951, tc: 0.912 },
      { pair: 5, tmcc: 0.923, tt: 0.889, ts: 0.918, tb: 0.941, tx: 0.973, tc: 0.935 },
      { pair: 6, tmcc: 0.867, tt: 0.852, ts: 0.895, tb: 0.928, tx: 0.964, tc: 0.919 },
      { pair: 7, tmcc: 0.905, tt: 0.881, ts: 0.911, tb: 0.937, tx: 0.969, tc: 0.928 },
      { pair: 8, tmcc: 0.874, tt: 0.859, ts: 0.901, tb: 0.931, tx: 0.958, tc: 0.915 },
      { pair: 9, tmcc: 0.912, tt: 0.885, ts: 0.915, tb: 0.939, tx: 0.971, tc: 0.931 },
      { pair: 10, tmcc: 0.883, tt: 0.863, ts: 0.898, tb: 0.929, tx: 0.962, tc: 0.921 }
    ];

    return (
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        <h1 className="text-3xl font-bold text-blue-600 text-center">Resultados</h1>
        
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-center">Gráfico Total de Transformaciones</h2>
          <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-400">📊</span>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold text-center">Gráficos por Transformación</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              'Transformación por\nMapa de calor de color (TMCC)',
              'Transformación por Tono (TT)',
              'Transformación por Saturación (TS)',
              'Transformación por Brillo (TB)',
              'Transformación por Textura (TX)',
              'Transformación por Contraste (TC)'
            ].map((title, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-sm font-medium text-center whitespace-pre-line">{title}</h3>
                <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-400 text-xs">📊</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Matriz de Resultados por Par similar</h2>
            <Button className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded">
              Exportar
            </Button>
          </div>
          
          <div className="text-sm text-gray-600">10 - 270 ›</div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow">
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
                {matrixData.map((row) => (
                  <tr 
                    key={row.pair}
                    className={`hover:bg-gray-50 cursor-pointer ${
                      selectedRow === row.pair ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => setSelectedRow(selectedRow === row.pair ? null : row.pair)}
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

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Visualización de la Comparación</h2>
          <p className="text-sm text-gray-600">
            Seleccione una fila de la Matriz de Resultados por Par similar para visualizar todo el proceso de experimentación
          </p>
          
          <div className="grid grid-cols-3 gap-4">
            {['Mapa de Calor de color', 'Tono', 'Saturación'].map((title, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-sm font-medium text-center">{title}</h3>
                <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-400 text-xs">📷</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {['Brillo', 'Textura', 'Contraste'].map((title, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-sm font-medium text-center">{title}</h3>
                <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-400 text-xs">📷</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <div className="border-2 border-blue-500 rounded p-4 bg-blue-50">
              <div className="text-center space-y-2">
                <div className="text-sm text-blue-600">Similitud</div>
                <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center mx-auto">
                  <span className="text-gray-400 text-xs">📊</span>
                </div>
                <div className="text-xs text-blue-600">Vector</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Dropdown */}
      <div className="border-b border-gray-200 p-4">
        <div className="max-w-6xl mx-auto flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center space-x-2">
                <span>🧪</span>
                <span>{interfaceNames[currentInterface]}</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setCurrentInterface('inicio')}>
                <span>🧪</span>
                <span className="ml-2">Inicio</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCurrentInterface('contexto')}>
                <span>🧪</span>
                <span className="ml-2">Contexto</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCurrentInterface('resultados')}>
                <span>🧪</span>
                <span className="ml-2">Resultados</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Content */}
      <div className="py-6">
        {currentInterface === 'inicio' && renderInicio()}
        {currentInterface === 'contexto' && renderContexto()}
        {currentInterface === 'resultados' && renderResultados()}
      </div>
    </div>
  );
};

export default Index;
