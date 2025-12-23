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
import { Languages, ThumbsUp } from 'lucide-react';
import { Badge } from "@/components/ui/badge"

export function About({isMobile}: { isMobile: boolean }) {
    const interests = ["cosplay", "chainsaw man", "hercule poirot", "crochet", "indie games"];  
    const languages = ["English", "Mandarin Chinese"];

    return (
        <Card className={`overflow-y-auto ${isMobile ? "border-0 shadow-none" : "h-[70vh]"}`}>
            <CardHeader>
                <CardTitle>{TABS.ABOUT}</CardTitle>
                <div>
                    <Avatar className="w-[100px] h-[100px]">
                        <AvatarImage
                        src="/public/avatar.jpg"
                        alt="avatar"
                        />
                        <AvatarFallback>CC</AvatarFallback>
                    </Avatar>
                    <CardDescription>
                        

                        <h1>Christine Chen</h1> <span>陳羿婷</span>

                        <p>student, learner, developer</p>
                        {/* Quick Links */}
                    </CardDescription>
                </div>
            </CardHeader>

            <CardContent className="grid gap-6">
                <h2>Education</h2>

                <h2>Background</h2>

                <h2>Stats</h2>
                <div className="">
                    <ThumbsUp className="w-4 h-4" />
                    {interests.map((interest) => (
                        <Badge variant="outline" key={interest}>{interest}</Badge>
                    ))} 
                </div>
                <div>
                    <Languages className="w-4 h-4" />
                    {languages.map((language) => (
                        <Badge variant="outline" key={language}>{language}</Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
