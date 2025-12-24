import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { TABS } from "@/constants/tabs"
import { Languages, ThumbsUp } from 'lucide-react';
import { Badge } from "@/components/ui/badge"
import { Project } from "@/components/Project"

export function Portfolio() {
    const skills = {
        "Development": ["Python", "C#", "C", "Java", "JavaScript", "HTML/CSS", "React", "Next.js", "Tailwind", "Flask", "SQL", "& more"],
        "Tools": ["Git", "GitHub Actions", "Docker", "Azure DevOps", "Unix/Linux", "Microsoft Office", "MySQL", "SQLite",]
    }

    return (
        <Card className="tabCard windowSize">
            <CardHeader className="hidden sm:inline">
                <CardTitle>{TABS.PORTFOLIO}</CardTitle>
            </CardHeader>

            <CardContent className="grid gap-6">
                {/* skills */}
                <section className="grid gap-6 sm:grid-cols-2">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="flex flex-col gap-3">
                        <h2>{category}</h2>
                        <div className="flex flex-wrap gap-2">
                            {items.map((item) => (
                                <Badge variant="outline" key={item}>{item}</Badge>
                            ))}
                        </div>
                    </div>
                ))}
                </section>

                <section>
                    <h2>Projects</h2>
                    <Project />
                </section>

                <section >
                    <h2>Other work</h2>
                    <ul>
                        <li>This website!!</li>
                    </ul>
                </section>


            </CardContent>
        </Card>
    )
}
