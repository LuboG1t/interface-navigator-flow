import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Brain, Shield, Lightbulb, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Inicio } from "./inicio/Inicio";
import { Contexto } from "./contexto/Contexto";
import { GeneralResult } from "./resultados/GeneralResult";
import { TransformResults } from "./resultados/TransformResults";
import { TableResults } from "./resultados/TableResults";
import SimilarityViewer from "./resultados/par/SimilarityViewer";

const Index = () => {
  const [currentInterface, setCurrentInterface] = useState<'inicio' | 'contexto' | 'resultados'>('inicio');

  // Move all useState hooks to the top level
  const [selectedTerm, setSelectedTerm] = useState<'caracteristicas' | 'transformaciones' | 'representaciones'>('caracteristicas');


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


  const renderResultados = () => {
    return (
      <div className="space-y-0">
        <GeneralResult />

        <TransformResults />

        <TableResults />

        {/* Fourth view - Visualization comparison */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 scroll-view">
          <div className="text-center space-y-6 max-w-6xl mx-auto">
            <SimilarityViewer />
            {/* <h2 className="text-xl font-bold">Visualización de la Comparación</h2>
            <p className="text-sm text-gray-600">
              Seleccione una fila de la Matriz de Resultados por Par similar para visualizar todo el proceso de experimentación
            </p>

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
            </div> */}
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
        {currentInterface === 'inicio' && (
          <Inicio
            viewsResultButton={() => setCurrentInterface('resultados')}
            basicTermOne={() => setSelectedTerm('caracteristicas')}
            basicTermTwo={() => setSelectedTerm('transformaciones')}
            basicTermThree={() => setSelectedTerm('representaciones')}
            selectedTerm={selectedTerm}
          />
        )}
        {currentInterface === 'contexto' && <Contexto />}
        {currentInterface === 'resultados' && renderResultados()}
      </div>
    </div>
  );
};

export default Index;
