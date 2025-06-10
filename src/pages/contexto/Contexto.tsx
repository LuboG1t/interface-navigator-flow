import { Brain, Lightbulb, Shield } from "lucide-react";
import { ValueProp } from "./ValueProp";
import { Navbar } from "../../components/Navbar";

export const Contexto = () => {

    return (
        <div className="space-y-0">
            <Navbar />

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
                    <div className="flex w-full max-w-full overflow-hidden justify-center">
                        <img
                            src="/workflow_step/3_1.jpg"
                            alt="Imagen 1"
                            className="h-full w-[300px] object-contain"
                        />
                        <img
                            src="/workflow_step/3_2.jpg"
                            alt="Imagen 2"
                            className="h-full w-[270px] object-contain"
                        />
                        <img
                            src="/workflow_step/3_3.jpg"
                            alt="Imagen 3"
                            className="h-full w-[600px] object-contain"
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