import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChefHat,
} from "lucide-react"

export default async function Cooking() {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a 1-second delay
    return (
        <Card className="h-full shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl flex flex-row gap-2 items-center"><ChefHat />Cooking</CardTitle>
                <CardDescription>Level 1 - 0/100 XP</CardDescription>
                <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card >
    );
}