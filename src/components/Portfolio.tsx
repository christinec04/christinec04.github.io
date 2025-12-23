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
import { ItemImage } from "@/components/Project"

export function Portfolio({isMobile}: { isMobile: boolean }) {

    return (
        <Card className={`overflow-y-auto ${isMobile ? "border-0 shadow-none" : ""}`}>
            <CardHeader>
                <CardTitle>{TABS.PORTFOLIO}</CardTitle>
            </CardHeader>

            <CardContent className="grid gap-6">
                <section>
                    <h2>Development</h2>

                    <h2>Databases</h2>

                    <h2>Tools</h2>
                </section>

                <section>
                    <h2>Projects</h2>
                    <ItemImage />
                </section>

            </CardContent>
        </Card>
    )
}
