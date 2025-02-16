import React from "react";
import { Pagination } from "../ui/pagination";
import SortControls from "./SortControls";
import SlokaCard from "./SlokaCard";

import { Sloka } from "@/data/sampleSlokas";

type Result = Sloka;

interface ResultsSectionProps {
  results?: Result[];
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  onSortChange?: (field: string, direction: "asc" | "desc") => void;
  sortField?: string;
  sortDirection?: "asc" | "desc";
  isLoading?: boolean;
}

const ResultsSection = ({
  results = [
    {
      id: "1",
      slokaText: "॥ श्रीः ॥ श्रीमते रामानुजाय नमः ॥",
      padaCheda: "श्रीः । श्रीमते । रामानुजाय । नमः ।",
      bhashyam:
        "This is a sample bhashyam text explaining the meaning and significance of the sloka.",
    },
    {
      id: "2",
      slokaText: "धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ।",
      padaCheda: "धर्मक्षेत्रे । कुरुक्षेत्रे । समवेताः । युयुत्सवः ।",
      bhashyam: "Another sample bhashyam explaining the meaning of this verse.",
    },
  ],
  currentPage = 1,
  totalPages = 10,
  onPageChange = () => {},
  onSortChange = () => {},
  sortField = "granthah",
  sortDirection = "asc",
  isLoading = false,
}: ResultsSectionProps) => {
  return (
    <div className="w-full bg-amber-50 rounded-lg p-4 space-y-4">
      <SortControls
        onSortChange={onSortChange}
        sortField={sortField}
        sortDirection={sortDirection}
      />

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-700" />
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
