export const GeneralResult = () => {
    return <div className="min-h-screen flex flex-col items-center justify-center px-6 space-y-8 scroll-view">
        <div className="text-center space-y-6">
            <h1 className="text-3xl font-bold text-blue-600">Resultados</h1>
            <h2 className="text-xl font-bold">Gráfico Total de Transformaciones</h2>
            <div className="w-full max-w-5xl h-96 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-400">📊</span>
            </div>
        </div>
    </div>
}