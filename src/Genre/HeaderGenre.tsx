
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AllGenres } from "./AllGenre";


export const HeaderGenre = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border rounded-lg">Genres</DropdownMenuTrigger>
      <DropdownMenuContent className="p-5 w-[577px] z-1">
        <h1 className="text-2xl text-foreground">Genres</h1>
        <p>See lists of movies by genre</p>
        <DropdownMenuSeparator className="my-4" />
        <DropdownMenuItem className="p-0 hover:!bg-transparent">
          <AllGenres />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};