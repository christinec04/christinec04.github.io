import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

const projects = [
  {
    title: "Unboxd",
    description: "A recommendation system for Letterboxd movies using Python and FastAPI backend, and Next.js frontend. Web application coming soon.",
    img: "/unboxd.png",
    caption: "Unboxd web application screenshot",
    links: [ 
      {
        label: "code",
        url: "https://github.com/christinec04/Unboxd",
      },
      {
        label: "demo",
        url: "https://www.linkedin.com/posts/christinechen04_just-wanted-to-share-what-dhruv-chavan-eric-activity-7409682403075522560-uDkS/",
      },
    ],
  },
  {
    title: "BinGenius",
    description: "Developed an AI-powered recycling classification system by fine-tuning PyTorch MobileNetV2, a convolutional neural network (CNN), on the Kaggle TrashNet dataset.",
    img: "/bingenius.jpg",
    caption: "User interface of BinGenius app",
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
    img: "/lecourse.jpg",
    caption: "LeCourse interface screenshot",
    links: [ 
      {
        label: "code",
        url: "https://github.com/iuermili/LeCourse",
      },
      {
        label: "demo",
        url: "https://www.youtube.com/watch?v=hvD-gemIfTo",
      }
    ],
  },
]

export function Project() {
  return (
    <div className="flex flex-col gap-6">
      <ItemGroup className="gap-4">
        {projects.map((project) => (
          <Item key={project.title} variant="outline" role="listitem" className="flex flex-row flex-wrap items-start max-sm:justify-center">
              {/* Project Image */}
              <Dialog>
                <DialogTrigger>
                  <ItemMedia variant="image" className="w-[270px] h-[135px] max-w-[calc(100vw-80px)]">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="object-cover"
                    />
                  </ItemMedia>
                </DialogTrigger>
                <DialogContent showCloseButton={false} className="p-0 bg-transparent border-0 shadow-none">
                  <img
                      src={project.img}
                      alt={project.title}
                      className="rounded-sm"
                    />
                  <p className="text-center text-white">{project.caption}</p>
                </DialogContent>
              </Dialog>

              {/* Project Content */}
              <ItemContent className="min-w-[200px] max-w-[calc(100vw-80px)]">
                <ItemTitle>
                  {project.title}
                </ItemTitle>
                <ItemDescription className="line-clamp-none w-full text-wrap">
                  {project.description}

                  {/* Project Links */}
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
