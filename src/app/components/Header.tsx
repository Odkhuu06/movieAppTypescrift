import { cn } from "@/lib/utils";
import { Film, Search } from "lucide-react";
import { DarkToggle } from "./Dark";
import { HeaderGenre } from "@/Genre/HeaderGenre";
import { HeaderSearch } from "../search/Search";
;

export const Header = () => {
  return (
    <div className="flex gap-3 my-3 max-w-[1280px] mx-auto justify-between">
       <div className="flex">
          <Film color="#4338CA" />
          <p className="text-[16px] text-[#4338CA] ">Movie Z</p>
        </div>
      <HeaderGenre/>
      <div className="flex align-bottom ">
        <div className={cn("relative text-muted-foreground", "w-[379px]")}>
          <Search
            size={16}
            className="absolute -translate-y-1/2 left-3 top-1/2"
          />
          <HeaderSearch />
        </div>
      </div>
      <DarkToggle/>
    </div>
  );
};