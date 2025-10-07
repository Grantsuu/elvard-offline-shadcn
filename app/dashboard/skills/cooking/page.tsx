import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default async function Cooking() {
    await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate a 3-second delay
    return (
        <Card className="h-full shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl">Cooking</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
}