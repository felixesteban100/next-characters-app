import { TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

type FeatureTabContainerProps = {
    children: JSX.Element;
    valueTab: string;
    extraClassNames: string;
}

function FeatureTabContainer({ children, valueTab, extraClassNames  }: FeatureTabContainerProps) {
    return (
        <TabsContent value={valueTab}>
            <Card className={`${extraClassNames}`}>
                <CardContent 
                    //max-h-[30rem]
                    className="h-[70vh] overflow-y-scroll"
                >
                    {children}
                </CardContent>
            </Card>
        </TabsContent>
    )
}

export default FeatureTabContainer