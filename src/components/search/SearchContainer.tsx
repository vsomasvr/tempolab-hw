import React from "react";
import SearchBar from "./SearchBar";
import FilterSection from "./FilterSection";
import ResultsSection from "./ResultsSection";

interface SearchContainerProps {
  onSearch?: (query: string) => void;
  onFilterChange?: (type: string, value: string) => void;
  onFilterRemove?: (type: string, value: string) => void;
  onSortChange?: (field: string, direction: "asc" | "desc") => void;
  onPageChange?: (page: number) => void;
  isLoading?: boolean;
  results?: Array<Sloka>;
  expandedSlokas?: string[];
  onToggleExpand?: (slokaId: string) => void;
  currentPage?: number;
  totalPages?: number;
  selectedFilters?: {
    granthah?: string;
    kanda?: string;
    sargah?: string;
    tags?: string[];
  };
  sortField?: string;
  sortDirection?: "asc" | "desc";
}

const SearchContainer = ({
  onSearch = () => {},
  onFilterChange = () => {},
  onFilterRemove = () => {},
  onSortChange = () => {},
  onPageChange = () => {},
  isLoading = false,
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
  selectedFilters = {
    granthah: "",
    kanda: "",
    sargah: "",
    tags: ["dharma", "karma"],
  },
  sortField = "granthah",
  sortDirection = "asc",
}: SearchContainerProps) => {
  return (
    <div className="min-h-screen bg-amber-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-amber-900 mb-2">
            Sanskrit Sloka Search
          </h1>
          <p className="text-amber-700">
            Search and explore ancient Sanskrit wisdom
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <SearchBar
            onSearch={onSearch}
            loading={isLoading}
            suggestions={[
              "रामायण",
              "महाभारत",
              "भगवद्गीता",
              "उपनिषद्",
              "वेदान्त",
            ]}
          />
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md">
          <FilterSection
            onFilterChange={onFilterChange}
            onFilterRemove={onFilterRemove}
            selectedFilters={selectedFilters}
          />
        </div>

        {/* Results */}
        <ResultsSection
          results={results}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          onSortChange={onSortChange}
          sortField={sortField}
          sortDirection={sortDirection}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default SearchContainer;
