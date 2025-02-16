import React from "react";
import SearchContainer from "./search/SearchContainer";
import { sampleSlokas, Sloka } from "../data/sampleSlokas";

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchResults, setSearchResults] =
    React.useState<Sloka[]>(sampleSlokas);
  const [expandedSlokas, setExpandedSlokas] = React.useState<string[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [filters, setFilters] = React.useState({
    granthah: "",
    kanda: "",
    sargah: "",
    tags: ["dharma", "karma"],
  });
  const [sortConfig, setSortConfig] = React.useState({
    field: "granthah",
    direction: "asc" as "asc" | "desc",
  });

  const handleSearch = (query: string) => {
    setIsLoading(true);
    // Simulate API call with filtering
    setTimeout(() => {
      const filteredResults = sampleSlokas.filter((sloka) => {
        const matchesQuery = query
          ? sloka.slokah.toLowerCase().includes(query.toLowerCase()) ||
            sloka.anvaya.toLowerCase().includes(query.toLowerCase()) ||
            sloka.bhashyam.toLowerCase().includes(query.toLowerCase())
          : true;

        const matchesGranthah = filters.granthah
          ? sloka.granthah === filters.granthah
          : true;

        const matchesKanda = filters.kanda
          ? sloka.granthasya_khandah === filters.kanda
          : true;

        const matchesTags = filters.tags?.length
          ? filters.tags.every((tag) => sloka.tags.includes(tag))
          : true;

        return matchesQuery && matchesGranthah && matchesKanda && matchesTags;
      });

      setSearchResults(filteredResults);
      setIsLoading(false);
    }, 500);
  };

  const handleFilterChange = (type: string, value: string) => {
    setFilters((prev) => {
      if (type === "tags") {
        return {
          ...prev,
          tags: [...(prev.tags || []), value],
        };
      }
      return {
        ...prev,
        [type]: value,
      };
    });
  };

  const handleFilterRemove = (type: string, value: string) => {
    setFilters((prev) => {
      if (type === "tags") {
        return {
          ...prev,
          tags: prev.tags?.filter((tag) => tag !== value) || [],
        };
      }
      return {
        ...prev,
        [type]: "",
      };
    });
  };

  const handleSortChange = (field: string, direction: "asc" | "desc") => {
    setSortConfig({ field, direction });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <SearchContainer
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
        onFilterRemove={handleFilterRemove}
        onSortChange={handleSortChange}
        onPageChange={handlePageChange}
        isLoading={isLoading}
        results={searchResults}
        expandedSlokas={expandedSlokas}
        onToggleExpand={(slokaId) => {
          setExpandedSlokas((prev) =>
            prev.includes(slokaId)
              ? prev.filter((id) => id !== slokaId)
              : [...prev, slokaId],
          );
        }}
        currentPage={currentPage}
        totalPages={10}
        selectedFilters={filters}
        sortField={sortConfig.field}
        sortDirection={sortConfig.direction}
      />
    </div>
  );
};

export default Home;
