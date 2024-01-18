"use client"

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Character } from "../../lib/definitions";
import { useSearchParams, useRouter } from "next/navigation"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { fetchCharacterById } from "../../lib/data";

type SelectCharacterForBattleProps = {
    selectedCharacter: Character;
    urlParameterToChange: string;
}

const formSchema = z.object({
    id: z.string().min(1, {
        message: "Id must be at least 1 characters.",
    }),
})

export default function SelectCharacterForBattle({ selectedCharacter, urlParameterToChange }: SelectCharacterForBattleProps) {
    const searchParams = useSearchParams()
    // const pathname = usePathname()
    const { replace } = useRouter()
    const params = new URLSearchParams(searchParams)

    function onSubmit(values: z.infer<typeof formSchema>) {
        params.set(urlParameterToChange, values.id);
        replace(`/fightCharacter?${params.toString()}`)
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            // id: selectedCharacter.id.toString(),
            id: ""
        },
    })

    async function getRandomIdRecursively() {
        const randomCharacter = await fetchCharacterById((Math.floor(Math.random() * 780) + 1).toString())

        if (!randomCharacter) {
            return getRandomIdRecursively()
        }

        return randomCharacter?.id.toString()
    }


    async function RandomCharacter() {
        params.set(urlParameterToChange, await getRandomIdRecursively());
        replace(`/fightCharacter?${params.toString()}`)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Image
                    width={500}
                    height={500}
                    // className={`transition-all duration-300 absolute w-[95%] h-[95%] object-cover rounded-md right-[15px] top-[15px] md:object-top`}
                    // className={`transition-all duration-300 absolute w-[100%] h-[100%] object-cover rounded-md md:object-top`}
                    className="w-[10rem] h-[15rem] md:w-[35rem] md:h-[35rem] object-cover object-top"
                    src={selectedCharacter.images.md}
                    alt={selectedCharacter.name}
                    loading="lazy"
                />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Select {urlParameterToChange} character</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when youre done.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="id"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Id</FormLabel>
                                    <FormControl>
                                        <Input placeholder="70" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Write the id here
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogClose className="flex justify-start items-center gap-2">
                            <Button type="submit">Submit</Button>
                            <Button onClick={() => RandomCharacter()}>Random</Button>
                        </DialogClose>
                    </form>
                </Form>
                <DialogFooter>
                    {/* <Button onClick={() => RandomCharacter()}>Random</Button> */}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}