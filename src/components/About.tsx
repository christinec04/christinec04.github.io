import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { TABS } from "@/constants/tabs"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Heading2, Languages, ThumbsUp } from 'lucide-react';
import { Badge } from "@/components/ui/badge"

export function About() {
    const interests = ["cosplay", "chainsaw man", "hercule poirot", "crochet", "indie games"];  
    const languages = ["English", "Mandarin Chinese"];

    return (
        <Card className="tabCard windowSize">
            <CardHeader className="border-b">
                <CardTitle className="hidden sm:inline mb-6">{TABS.ABOUT}</CardTitle>
                <div className="flex flex-row flex-wrap gap-6 items-center">
                    <Avatar className="size-25">
                        <AvatarImage
                        src="/public/avatar.jpg"
                        alt="avatar"
                        />
                        <AvatarFallback>CC</AvatarFallback>
                    </Avatar>
                    <CardDescription >
                        <h1 className="inline text-2xl">Christine Chen</h1> <span>陳羿婷</span>

                        <p>student, learner, developer</p>
                        {/* Quick Links */}
                    </CardDescription>
                </div>
            </CardHeader>

            <CardContent className="grid gap-6">
                <section>
                <h2>Background</h2>
                <p>Hi! I'm Christine. I...</p>
                <ul>
                    <li>was born in Taiwan and raised in Australia!</li>
                    <li>am finishing my education in the United States</li>
                    <li>have always loved math and currently love programming</li>
                    <li>am exploring artificial intelligence and computer vision work</li>
                </ul>
                </section>

                <section>
                <h2>Education</h2>
                <blockquote>                    
                    <p className="font-semibold">Indiana University Bloomington</p>
                    <p className="italic">Bachelor of Science in Computer Science, 2026</p>
                    <p>Minors in Data Science, Mathematics &amp; Informatics</p>
                </blockquote>
                </section>

                <section className="flex flex-col gap-3">
                <h2>Stats</h2>
                <div className="flex gap-2">
                    <ThumbsUp className="size-4 mr-2" />
                    {interests.map((interest) => (
                        <Badge variant="outline" className="lowercase" key={interest}>{interest}</Badge>
                    ))} 
                </div>
                <div className="flex gap-2"> 
                    <Languages className="size-4 mr-2" />
                    {languages.map((language) => (
                        <Badge variant="outline" className="lowercase" key={language}>{language}</Badge>
                    ))}
                </div>
                </section>
            </CardContent>
        </Card>
    )
}
