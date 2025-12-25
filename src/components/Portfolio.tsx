import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { TABS } from "@/constants/tabs"
import { Badge } from "@/components/ui/badge"
import { Project } from "@/components/Project"

export function Portfolio() {
    const skills = {
        "Languages & Frameworks": ["Python", "C#", "C", "Java", "JavaScript", "HTML/CSS", "React", "Next.js", "Tailwind", "Flask", "SQL", "MySQL", "SQLite", "PostgreSQL", "SQLAlchemy"],
        "Tools": ["Git", "GitHub Actions", "Docker", "Unix/Linux", "Azure DevOps", "Microsoft Office"]
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
                                <Badge variant="secondary" key={item}>{item}</Badge>
                            ))}
                        </div>
                    </div>
                ))}
                </section>

                <section>
                    <h2 className="mb-3">Full-stack Projects</h2>
                    <Project />
                </section>

                <section >
                    <h2>Other work</h2>
                    <ul>
                        <li>This website!!</li>
                        <li><a href="https://www.youtube.com/watch?v=r6A4q5nO0rY">The Luddy 2024 Eclipse Livestream</a></li>
                    </ul>
                </section>


            </CardContent>
        </Card>
    )
}
