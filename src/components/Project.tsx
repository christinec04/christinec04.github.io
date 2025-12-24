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
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Unboxd",
    description: "A recommendation system for Letterboxd movies using Python and FastAPI backend, and Next.js frontend. Demo coming soon.",
    img: "",
    links: [ 
      {
        label: "code",
        url: "https://github.com/christinec04/Unboxd",
      },
    ],
  },
  {
    title: "BinGenius",
    description: "Developed an AI-powered recycling classification system by fine-tuning PyTorch MobileNetV2, a convolutional neural network (CNN), on the Kaggle TrashNet dataset.",
    img: "",
    links: [ 
      {
        label: "code",
        url: "https://github.com/christinec04/BinGenius",
      },
    ],
  },
  {
    title: "LeCourse",
    description: "A course planning tool, integrating Googles Gemini API, that recommends academic courses with Lebron James' persona.",
    img: "/public/lecourse.jpg",
    links: [ 
      {
        label: "code",
        url: "https://github.com/iuermili/LeCourse",
      },
      {
        label: "demo",
        url: "https://unboxd.example.com",
      }
    ],
  },
]

export function Project() {
  return (
    <div className="flex w-full flex-col gap-6">
      <ItemGroup className="gap-4">
        {projects.map((project) => (
          <Item key={project.title} variant="outline" role="listitem" className="flex flex-row flex-wrap">
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
                <ItemDescription className="line-clamp-none">
                  {project.description}
                  <div className="flex flex-wrap gap-2 my-2">
                    {project.links?.map((link) => (
                      <Button variant="secondary" size="sm" asChild>
                        <a href={link.url} target="_blank" rel="noopener noreferrer" >
                          {link.label} 
                        </a>
                      </Button>
                    ))}
                  </div>
                </ItemDescription>
              </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )
}
