import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Badge } from "../ui/badge";
import { X } from "lucide-react";

interface FilterSectionProps {
  onFilterChange?: (type: string, value: string) => void;
  onFilterRemove?: (type: string, value: string) => void;
  selectedFilters?: {
    granthah?: string;
    kanda?: string;
    sargah?: string;
    tags?: string[];
  };
}

const FilterSection = ({
  onFilterChange = () => {},
  onFilterRemove = () => {},
  selectedFilters = {
    granthah: "",
    kanda: "",
    sargah: "",
    tags: ["dharma", "karma"],
  },
}: FilterSectionProps) => {
  return (
    <div className="w-full p-4 bg-white border-b">
      <div className="flex flex-wrap gap-4">
        {/* Granthah Filter */}
        <div className="flex-1 min-w-[200px]">
          <Select
            value={selectedFilters.granthah}
            onValueChange={(value) => onFilterChange("granthah", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Granthah" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="भगवद्गीता">भगवद्गीता</SelectItem>
              <SelectItem value="रामायण">रामायण</SelectItem>
              <SelectItem value="महाभारत">महाभारत</SelectItem>
              <SelectItem value="उपनिषद्">उपनिषद्</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Kanda Filter */}
        <div className="flex-1 min-w-[200px]">
          <Select
            value={selectedFilters.kanda}
            onValueChange={(value) => onFilterChange("kanda", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Kanda" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="अध्याय १">अध्याय १</SelectItem>
              <SelectItem value="अध्याय २">अध्याय २</SelectItem>
              <SelectItem value="बालकाण्ड">बालकाण्ड</SelectItem>
              <SelectItem value="अयोध्याकाण्ड">अयोध्याकाण्ड</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sargah Filter */}
        <div className="flex-1 min-w-[200px]">
          <Select
            value={selectedFilters.sargah}
            onValueChange={(value) => onFilterChange("sargah", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Sargah" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Sargah 1</SelectItem>
              <SelectItem value="2">Sargah 2</SelectItem>
              <SelectItem value="3">Sargah 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tags Filter */}
        <div className="flex-1 min-w-[200px]">
          <Select
            value=""
            onValueChange={(value) => onFilterChange("tags", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Tags" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dharma">Dharma</SelectItem>
              <SelectItem value="karma">Karma</SelectItem>
              <SelectItem value="moksha">Moksha</SelectItem>
              <SelectItem value="bhakti">Bhakti</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Selected Filters Display */}
      <div className="flex flex-wrap gap-2 mt-4">
        {selectedFilters.granthah && (
          <Badge
            variant="secondary"
            className="px-3 py-1 flex items-center gap-2"
          >
            {selectedFilters.granthah}
            <X
              className="h-3 w-3 cursor-pointer"
              onClick={() =>
                onFilterRemove("granthah", selectedFilters.granthah)
              }
            />
          </Badge>
        )}
        {selectedFilters.kanda && (
          <Badge
            variant="secondary"
            className="px-3 py-1 flex items-center gap-2"
          >
            {selectedFilters.kanda}
            <X
              className="h-3 w-3 cursor-pointer"
              onClick={() => onFilterRemove("kanda", selectedFilters.kanda)}
            />
          </Badge>
        )}
        {selectedFilters.sargah && (
          <Badge
            variant="secondary"
            className="px-3 py-1 flex items-center gap-2"
          >
            {selectedFilters.sargah}
            <X
              className="h-3 w-3 cursor-pointer"
              onClick={() => onFilterRemove("sargah", selectedFilters.sargah)}
            />
          </Badge>
        )}
        {selectedFilters.tags?.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="px-3 py-1 flex items-center gap-2"
          >
            {tag}
            <X
              className="h-3 w-3 cursor-pointer"
              onClick={() => onFilterRemove("tags", tag)}
            />
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
