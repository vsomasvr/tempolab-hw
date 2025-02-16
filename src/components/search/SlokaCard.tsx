import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";

interface SlokaCardProps {
  slokah?: string;
  padaCheda?: string;
  bhashyam?: string;
  anvaya?: string;
  granthah?: string;
  granthasya_khandah?: string;
  expanded?: boolean;
  onToggleExpand?: () => void;
}

const SlokaCard = ({
  slokah = "",
  padaCheda = "",
  bhashyam = "",
  anvaya = "",
  granthah = "",
  granthasya_khandah = "",
  expanded = false,
  onToggleExpand = () => {},
}: SlokaCardProps) => {
  return (
    <Card
      className="w-full bg-white border border-amber-100 hover:border-amber-200 transition-colors cursor-pointer"
      onClick={onToggleExpand}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-sm text-amber-700 mb-1">
              {granthah} - {granthasya_khandah}
            </div>
            <div className="font-sanskrit text-xl text-amber-900">{slokah}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {expanded ? (
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-amber-800 mb-1">
                पदच्छेद (Pada Cheda):
              </h4>
              <div className="text-sm text-amber-800 font-sanskrit">
                {padaCheda}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-amber-800 mb-1">
                अन्वय (Anvaya):
              </h4>
              <div className="text-sm text-amber-800 font-sanskrit">
                {anvaya}
              </div>
            </div>
            <Separator className="my-3 bg-amber-100" />
            <div>
              <h4 className="text-sm font-medium text-amber-800 mb-1">
                भाष्यम् (Bhashyam):
              </h4>
              <div className="text-sm text-gray-600">{bhashyam}</div>
            </div>
          </div>
        ) : (
          <div className="text-sm text-gray-600 line-clamp-2">{bhashyam}</div>
        )}
      </CardContent>
    </Card>
  );
};

export default SlokaCard;
