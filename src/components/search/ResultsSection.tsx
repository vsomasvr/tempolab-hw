import React from "react";
import { Pagination } from "../ui/pagination";
import SortControls from "./SortControls";
import SlokaCard from "./SlokaCard";
import { Sloka } from "@/data/sampleSlokas";

interface ResultsSectionProps {
  results?: Sloka[];
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  onSortChange?: (field: string, direction: "asc" | "desc") => void;
  sortField?: string;
  sortDirection?: "asc" | "desc";
  isLoading?: boolean;
  expandedSlokas?: string[];
  onToggleExpand?: (slokaId: string) => void;
}

const ResultsSection = ({
  results = [],
  currentPage = 1,
  totalPages = 10,
  onPageChange = () => {},
  onSortChange = () => {},
  sortField = "granthah",
  sortDirection = "asc",
  isLoading = false,
  expandedSlokas = [],
  onToggleExpand = () => {},
}: ResultsSectionProps) => {
  return (
    <div className="w-full bg-slate-50 rounded-lg p-4 space-y-4">
      <SortControls
        onSortChange={onSortChange}
        sortField={sortField}
        sortDirection={sortDirection}
      />

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
        </div>
      ) : results.length === 0 ? (
        <div className="text-center py-8 text-gray-500">No results found</div>
      ) : (
        <div className="space-y-4">
          {results.map((result) => (
            <SlokaCard
              key={result.id}
              slokah={result.slokah}
              padaCheda={result.padaCheda}
              bhashyam={result.bhashyam}
              anvaya={result.anvaya}
              granthah={result.granthah}
              granthasya_khandah={result.granthasya_khandah}
              expanded={expandedSlokas.includes(result.id)}
              onToggleExpand={() => onToggleExpand(result.id)}
            />
          ))}
        </div>
      )}

      <div className="flex justify-center mt-4">
        <Pagination
          count={totalPages}
          page={currentPage}
          onPageChange={(page) => onPageChange(page)}
        />
      </div>
    </div>
  );
};

export default ResultsSection;
