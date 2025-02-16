import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  suggestions?: string[];
  onSuggestionSelect?: (suggestion: string) => void;
  loading?: boolean;
}

const SearchBar = ({
  onSearch = () => {},
  suggestions = ["रामायण", "महाभारत", "भगवद्गीता", "उपनिषद्", "वेदान्त"],
  onSuggestionSelect = () => {},
  loading = false,
}: SearchBarProps) => {
  const [query, setQuery] = React.useState("");
  const [showSuggestions, setShowSuggestions] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
    setShowSuggestions(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center">
          <Input
            type="text"
            placeholder="Search Sanskrit slokas..."
            className="w-full pl-4 pr-10 py-2 text-lg border-2 border-slate-200 rounded-lg focus:border-indigo-400 focus:ring-indigo-400 font-sanskrit"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(true);
            }}
          />
          <Button
            type="submit"
            size="icon"
            className="absolute right-2 hover:bg-slate-100"
            variant="ghost"
            disabled={loading}
          >
            <Search className="h-5 w-5 text-indigo-600" />
          </Button>
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <Command className="absolute w-full mt-1 border rounded-lg shadow-lg">
            <CommandList>
              <CommandGroup heading="Suggestions">
                {suggestions.map((suggestion) => (
                  <CommandItem
                    key={suggestion}
                    onSelect={() => {
                      setQuery(suggestion);
                      onSuggestionSelect(suggestion);
                      setShowSuggestions(false);
                    }}
                  >
                    {suggestion}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
