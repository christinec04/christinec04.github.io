import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react"

const music = [
  {
    title: "Midnight City Lights",
    artist: "Neon Dreams",
    album: "Electric Nights",
    duration: "3:45",
  },
  {
    title: "Coffee Shop Conversations",
    artist: "The Morning Brew",
    album: "Urban Stories",
    duration: "4:05",
  },
  {
    title: "Digital Rain",
    artist: "Cyber Symphony",
    album: "Binary Beats",
    duration: "3:30",
  },
]

export function ItemImage() {
  return (
    <div className="flex w-full flex-col gap-6">
      <ItemGroup className="gap-4">
        {music.map((song) => (
          <Item key={song.title} variant="outline" asChild role="listitem">
            <a href="#">
              <ItemMedia variant="image" className="w-[210px] h-[150px]">
                <img
                  src={'/public/avatar.jpg'}
                  alt="Project"
                  className="object-cover"
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>
                  Project title
                </ItemTitle>
                <ItemDescription className="line-clamp-none">Project description ajdnajk dna jknd asdja sjd nakdn adnasnda sdadnja dasda dada djadjk an djknand andjad</ItemDescription>
              </ItemContent>
              <ItemActions>
                <ExternalLinkIcon className="size-4 muted-foreground" />
              </ItemActions>
            </a>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )
}
