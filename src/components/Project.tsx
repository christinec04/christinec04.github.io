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

const projects = [
  {
    title: "Unboxd",
    description: "A recommendation system for Letterboxd movies.",
    tags: ["Python", "Flask", "Machine Learning"],
    img: "",
  },
  {
    title: "BinGenius",
    description: "",
    tags: ["C#", "Unity", "Game Development"],
    img: "",
  },
  {
    title: "LeCourse",
    description: "",
    tags: ["Java", "Android Development"],
    img: "",
  },
]

export function Project() {
  return (
    <div className="flex w-full flex-col gap-6">
      <ItemGroup className="gap-4">
        {projects.map((project) => (
          <Item key={project.title} variant="outline" asChild role="listitem">
            <a href="#">
              <ItemMedia variant="image" className="w-[210px] h-[150px]">
                <img
                  src={project.img}
                  alt={project.title}
                  className="object-cover"
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>
                  {project.title}
                </ItemTitle>
                <ItemDescription className="line-clamp-none">{project.description}</ItemDescription>
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
