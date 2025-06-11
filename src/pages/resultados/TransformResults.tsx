import { TransformChart } from "./TransformChart";

const transformations = [
    { key: "color_heat_map", label: "Mapa de calor de color (TMCC)" },
    { key: "tone", label: "Tono (TT)" },
    { key: "saturation", label: "Saturación (TS)" },
    { key: "brightness", label: "Brillo (TB)" },
    { key: "texture", label: "Textura (TX)" },
    { key: "contrast", label: "Contraste (TC)" },
];

export const TransformResults = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center px-6 py-8 scroll-view items-center">
        <div className="text-center max-w-7xl mx-auto space-y-6">
                <div className="flex flex-col items-center text-center gap-2 mb-12">
                    <p className="text-foreground max-w-3xl text-xl font-bold md:text-2xl mt-2">Gráficos por Transformación</p>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
                        {transformations.map(t => (
                            <div key={t.key} >
                                <span className="text-base font-bold text-center z-10 group-hover:scale-105 transition-transform duration-300">
                                    {t.label}
                                </span>
                                <TransformChart transform={t.key} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};
