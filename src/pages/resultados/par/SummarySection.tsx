import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatSimilarity, getHighestSimilarity, getHighestTransformation } from "@/utils/similarity";

interface SummarySectionProps {
  transformations: { similarity: number; name: string }[];
  isLoading: boolean;
}

const SummarySection = ({ transformations, isLoading }: SummarySectionProps) => {
  const highest = getHighestTransformation(transformations);

  return (
    <div className="text-center animate-fade-in-up">
      <Card className="p-8 max-w-2xl mx-auto mb-8 shadow-lg">
        <h3 className="text-xl font-serif font-bold text-gallery-800 mb-4">Resumen del Análisis</h3>
        <p className="text-gallery-600 mb-4">Mayor similitud composicional obtenida:</p>
        <div className="flex justify-center items-center space-x-4">
          {!isLoading && (
            <span className="text-lg font-medium text-gallery-700">
              {highest?.name}
            </span>
          )}
          <Badge className="bg-academic-600 text-white text-lg px-3 py-1">
            {isLoading ? "- %" : formatSimilarity(getHighestSimilarity(transformations))}
          </Badge>
        </div>
      </Card>
    </div>
  );
};

export default SummarySection;
