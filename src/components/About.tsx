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

export function About({borderless}: { borderless: boolean }) {
    return (
        <Card className={borderless ? "border-0 shadow-none" : ""}>
            <CardHeader>
                <CardTitle>{TABS.ABOUT}</CardTitle>
                <CardDescription>
                    Make changes to your account here. Click save when you&apos;re
                    done.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
            </CardContent>
            <CardFooter>
                <Button>Save changes</Button>
            </CardFooter>
        </Card>
    )
}
