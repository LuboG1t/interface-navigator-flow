import { Card } from "@/components/ui/card";

export const TransformResults = () => {
    const templateCategories = ["Mapa de calor de color (TMCC)", "Tono (TT)", "Saturación (TS)", "Brillo (TB)", "Textura (TX)", "Contraste (TC)"];

    return (
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
    )
};
