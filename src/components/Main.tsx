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
import { ChevronsDown, User, Briefcase, Linkedin, Mail, Github } from "feather-icons-react"

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
                    <Card className="windowSize flex flex-col justify-center">
                        <CardHeader className="text-center sm:mb-4">
                            <h1> <span className="text-foreground">hi, </span>i'm christine!</h1>
                            <CardDescription>
                                student, learner, developer
                            </CardDescription>
                        </CardHeader>


                        <CardContent className="flex flex-row flex-wrap gap-6 justify-center">
                            {isSmall && <>
                                {/* About Mobile */}
                                <Drawer>
                                    <DrawerTrigger asChild>
                                        <Button variant="outline" className="btn-stacked">
                                            <User />
                                            <span>{TABS.ABOUT}</span>
                                        </Button>
                                    </DrawerTrigger>
                                    <DrawerContent>
                                        <DrawerHeader className="flex flex-row justify-between items-center bg-accent-foreground rounded-t-lg">
                                            <DrawerTitle className="text-accent">{TABS.ABOUT}</DrawerTitle>
                                            <DrawerClose asChild>
                                                <Button variant="outline" size="icon" className="rounded-full"><ChevronsDown /></Button>
                                            </DrawerClose>
                                        </DrawerHeader>
                                        <About />
                                    </DrawerContent>
                                </Drawer>

                                {/* Portfolio Mobile */}
                                <Drawer>
                                    <DrawerTrigger asChild>
                                        <Button variant="outline" className="btn-stacked">
                                            <Briefcase />
                                            <span>{TABS.PORTFOLIO}</span>
                                        </Button>
                                    </DrawerTrigger>
                                    <DrawerContent>
                                        <DrawerHeader className="flex flex-row justify-between items-center bg-accent-foreground rounded-t-lg">
                                            <DrawerTitle className="text-accent">{TABS.PORTFOLIO}</DrawerTitle>
                                            <DrawerClose asChild>
                                                <Button variant="outline" size="icon" className="rounded-full"><ChevronsDown /></Button>
                                            </DrawerClose>
                                        </DrawerHeader>
                                        <Portfolio />
                                    </DrawerContent>
                                </Drawer>
                            </>}
                        
                            {/* Quick Links */}
                            <Button variant="outline" className="btn-stacked" asChild>
                                <a href="https://github.com/christinec04/"><Github /> github</a>
                            </Button>
                            <Button variant="outline" className="btn-stacked" asChild>
                                <a href="https://linkedin.com/in/christinechen04/"><Linkedin /> linkedin</a>
                            </Button>
                            <Button variant="outline" className="btn-stacked" asChild>
                                <a href="mailto:christine.chxn@gmail.com"><Mail />email</a>
                            </Button>
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
