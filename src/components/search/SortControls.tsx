import React from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ArrowDownAZ, ArrowUpAZ, Calendar } from "lucide-react";

interface SortControlsProps {
  onSortChange?: (field: string, direction: "asc" | "desc") => void;
  sortField?: string;
  sortDirection?: "asc" | "desc";
}

const SortControls = ({
  onSortChange = () => {},
  sortField = "granthah",
  sortDirection = "asc",
}: SortControlsProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-700">Sort by:</span>
        <Select
          value={sortField}
          onValueChange={(value) => onSortChange(value, sortDirection)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select field" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="granthah">Granthah</SelectItem>
            <SelectItem value="serialNumber">Serial Number</SelectItem>
            <SelectItem value="createdDate">Created Date</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant={sortDirection === "asc" ? "default" : "outline"}
          size="icon"
          onClick={() => onSortChange(sortField, "asc")}
          className="w-8 h-8"
        >
          <ArrowUpAZ className="h-4 w-4" />
        </Button>
        <Button
          variant={sortDirection === "desc" ? "default" : "outline"}
          size="icon"
          onClick={() => onSortChange(sortField, "desc")}
          className="w-8 h-8"
        >
          <ArrowDownAZ className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default SortControls;
