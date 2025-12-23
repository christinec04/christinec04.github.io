import { TABS } from "@/constants/tabs"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { About } from "@/components/About"
import { Portfolio } from "@/components/Portfolio"
import { useIsMatchMedia } from '@/hooks/use-is-match-media'

export function Main() {
    const isTablet = useIsMatchMedia("(min-width: 640px)")

    return (
        <div className="flex w-full max-w-sm flex-col gap-6">
            <Tabs defaultValue={TABS.HOME}>
                {/* Tabs */}
                {isTablet &&
                <TabsList>
                    {Object.values(TABS).map((tab) => (
                        <TabsTrigger value={tab}>{tab}</TabsTrigger>
                    ))}
                </TabsList>}

                {/* Content */}
                <TabsContent value={TABS.HOME}>
                    <Card>
                        <CardHeader>
                            <CardTitle> hi, i'm christine!</CardTitle>
                            <CardDescription>
                                some witty description
                            </CardDescription>
                        </CardHeader>

                        {!isTablet && 
                        <CardContent className="grid gap-6">
                            {/* About Mobile */}
                            <Drawer>
                                <DrawerTrigger>Open</DrawerTrigger>
                                <DrawerContent>
                                    <About borderless={true} />
                                </DrawerContent>
                            </Drawer>

                            {/* Portfolio Mobile */}
                            <Drawer>
                                <DrawerTrigger>Open</DrawerTrigger>
                                <DrawerContent>
                                    <Portfolio />
                                </DrawerContent>
                            </Drawer>

                        </CardContent>}
                    </Card>
                </TabsContent>

                <TabsContent value={TABS.ABOUT}>
                    <About borderless={false}/>
                </TabsContent>
            </Tabs>
        </div>
    )
}
