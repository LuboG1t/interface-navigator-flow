import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const TableResults = () => {
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(0);

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

    return (

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 scroll-view">
            <div className="text-center space-y-6 max-w-6xl mx-auto">
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
    )
};