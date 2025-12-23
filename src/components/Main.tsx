import { TABS } from "@/constants/tabs"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { About } from "@/components/About"
import { Portfolio } from "@/components/Portfolio"
import { useIsMatchMedia } from '@/hooks/use-is-match-media'
import { useEffect, useState } from "react"

export function Main() {
    const isSmall = useIsMatchMedia("(max-width: 640px)")
    const LOCKED_TAB = TABS.HOME
    const [tab, setTab] = useState(LOCKED_TAB)

    useEffect(() => {
        if (isSmall) {
            setTab(LOCKED_TAB)
        }
    }, [isSmall])

    const handleChange = (value: string) => { setTab(value) }

    return (
        <div className="flex flex-col">
            <Tabs defaultValue={TABS.HOME} value={tab} onValueChange={handleChange}>
                {/* Tabs */}
                {!isSmall &&
                    <TabsList>
                        {Object.values(TABS).map((tab) => (
                            <TabsTrigger value={tab}>{tab}</TabsTrigger>
                        ))}
                    </TabsList>}

                {/* Content */}
                <TabsContent value={TABS.HOME}>
                    <Card className="windowSize">
                        <CardHeader>
                            <CardTitle> hi, i'm christine!</CardTitle>
                            <CardDescription>
                                some witty description
                            </CardDescription>
                        </CardHeader>


                        <CardContent className="grid gap-6">
                            {isSmall && <>
                                {/* About Mobile */}
                                <Drawer>
                                    <DrawerTrigger asChild>
                                        <Button variant="outline">{TABS.ABOUT}</Button>
                                    </DrawerTrigger>
                                    <DrawerContent>
                                        <DrawerHeader className="pt-2">
                                            <DrawerClose asChild>
                                                <Button variant="outline">Cancel</Button>
                                            </DrawerClose>
                                        </DrawerHeader>
                                        <About />
                                    </DrawerContent>
                                </Drawer>

                                {/* Portfolio Mobile */}
                                <Drawer>
                                    <DrawerTrigger asChild>
                                        <Button variant="outline">{TABS.PORTFOLIO}</Button>
                                    </DrawerTrigger>
                                    <DrawerContent>
                                        <DrawerHeader className="pt-2">
                                            <DrawerClose asChild>
                                                <Button variant="outline">Cancel</Button>
                                            </DrawerClose>
                                        </DrawerHeader>
                                        <Portfolio />
                                    </DrawerContent>
                                </Drawer>
                            </>}
                        
                            {/* Quick Links */}
                            <Button variant="outline">github</Button>
                            <Button variant="outline">linkedin</Button>
                            <Button variant="outline">email</Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value={TABS.ABOUT}>
                    <About />
                </TabsContent>

                <TabsContent value={TABS.PORTFOLIO}>
                    <Portfolio />
                </TabsContent>
            </Tabs>
        </div>
    )
}
