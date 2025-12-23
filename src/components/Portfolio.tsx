import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { TABS } from "@/constants/tabs"

export function Portfolio() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{TABS.PORTFOLIO}</CardTitle>
                <CardDescription>
                    Portfolio
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
            </CardContent>
            <CardFooter>
                
            </CardFooter>
        </Card>
    )
}
