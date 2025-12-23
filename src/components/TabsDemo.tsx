import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo() {
    const tabs = {
        HOME: "home",
        ABOUT: "about",
        PORTFOLIO: "portfolio"
    };

    return (
        <div className="flex w-full max-w-sm flex-col gap-6">
            <Tabs defaultValue={tabs.HOME}>
                {/* Tabs */}
                <TabsList>
                    <TabsTrigger value={tabs.HOME}>{tabs.HOME}</TabsTrigger>
                    <TabsTrigger value={tabs.ABOUT}>{tabs.ABOUT}</TabsTrigger>
                    <TabsTrigger value={tabs.PORTFOLIO}>{tabs.PORTFOLIO}</TabsTrigger>
                </TabsList>

                {/* Content */}
                <TabsContent value={tabs.HOME}>
                    <Card>
                        <CardHeader>
                            <CardTitle>{tabs.HOME}</CardTitle>
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
                </TabsContent>
            </Tabs>
        </div>
    )
}
