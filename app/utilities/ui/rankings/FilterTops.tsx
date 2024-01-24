"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useSearchParams, useRouter } from "next/navigation"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Slider } from "@/components/ui/slider"
import { ALLALIGMENTS, ALLGENDERS, ALLRACES, ALLUNIVERSE, getTeamByUniverse } from "../../lib/constants"

const formSchema = z.object({
    fixedAttribute: z.string(),
    groupAffiliation: z.string(),
    alignment: z.string(),
    race: z.string(),
    publisher: z.string(),
    gender: z.string(),
    numberOfTop: z.string(),
    order: z.string(),
})

export default function FilterTops() {
    const searchParams = useSearchParams()
    // const pathname = usePathname()
    const { replace } = useRouter()
    const params = new URLSearchParams(searchParams)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fixedAttribute: searchParams.get('fixedAttribute') ?? "powerstats.power",
            groupAffiliation: searchParams.get('groupAffiliation') ?? "All",
            alignment: searchParams.get('alignment') ?? "All",
            race: searchParams.get('race') ?? "All",
            publisher: searchParams.get('publisher') ?? 'All',
            gender: searchParams.get('gender') ?? 'both',
            numberOfTop: searchParams.get('numberOfTop') ?? '10',
            order: searchParams.get('order') ?? "desc",
        },
    })

    const fixedAttributes = ["powerstats.power", "powerstats.intelligence", "powerstats.strength", "powerstats.durability", "powerstats.combat", "powerstats.speed"]
    const teamByUniverse: { name: string, value: string }[] = getTeamByUniverse(form.watch().publisher)

    function onSubmit(values: z.infer<typeof formSchema>) {
        if (values.numberOfTop !== "" && values.numberOfTop !== "10") {
            params.set('numberOfTop', values.numberOfTop)
        } else {
            params.delete('numberOfTop')
        }

        if (values.order !== "" && values.order !== "desc") {
            params.set('order', values.order)
        } else {
            params.delete('order')
        }

        if (values.fixedAttribute !== "") {
            params.set('fixedAttribute', values.fixedAttribute)
        } else {
            params.delete('fixedAttribute')
        }

        if (values.publisher !== "" && values.publisher !== "All") {
            params.set('publisher', values.publisher)
            params.delete('groupAffiliation')
            if (values.groupAffiliation !== "" && values.groupAffiliation !== "All") {
                params.set('groupAffiliation', values.groupAffiliation)
            }
        } else {
            params.delete('publisher')
            params.delete('groupAffiliation')
        }

        if (values.alignment !== "" && values.alignment !== "All") {
            params.set('alignment', values.alignment)
        } else {
            params.delete('alignment')
        }

        if (values.gender !== "" && values.gender !== "both") {
            params.set('gender', values.gender)
        } else {
            params.delete('gender')
        }

        if (values.race !== "" && values.race !== "All") {
            params.set('race', values.race)
        } else {
            params.delete('race')
        }

        // console.log(`${pathname}?${params.toString()}`)

        // replace(`${pathname}?${params.toString()}`)
        replace(`/rankings?${params.toString()}`)
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                // className="space-y-8"
                className="h-[78vh] overflow-y-scroll"
            >
                {/* <ScrollArea className="max-h-[700px] w-full p-5"> */}
                <FormField
                    control={form.control}
                    name="fixedAttribute"
                    render={({ field }) => (
                        <FormItem className="w-[95%] mx-auto mt-5">
                            <FormLabel>Main attribute of top</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a fixed Attribute" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {fixedAttributes.map((c) => (
                                        <SelectItem key={c} value={c}>{c}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormDescription>
                                Example: power, speed, intelligence...
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                
               <FormField
                    control={form.control}
                    name="numberOfTop"
                    render={({ field }) => (
                        <FormItem className="w-[95%] mx-auto mt-5">
                            <FormLabel>numberOfTop</FormLabel>
                            <FormControl>
                                <Slider
                                    onValueChange={(value) => field.onChange(value[0].toString())}
                                    defaultValue={[parseInt(field.value)]}
                                    max={714}
                                    min={1}
                                    // step={5}
                                />
                            </FormControl>
                            <FormDescription>
                                {field.value}
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                
                <FormField
                    control={form.control}
                    name="order"
                    render={({ field }) => (
                        <FormItem className="w-[95%] mx-auto mt-5">
                            <FormLabel>Sort Direction</FormLabel>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-row space-y-1"
                            >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="asc" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Ascending</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="desc" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Descending</FormLabel>
                                </FormItem>
                            </RadioGroup>
                            <FormDescription>
                                Example: ascendend or descendent
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="alignment"
                    render={({ field }) => (
                        <FormItem className="w-[95%] mx-auto mt-5">
                            <FormLabel>Side</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a side" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {ALLALIGMENTS.map((c) => (
                                        <SelectItem key={c.value} value={c.value}>{c.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormDescription>
                                Example: good, bad, neutral
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                        <FormItem className="w-[95%] mx-auto mt-5">
                            <FormLabel>Gender</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a gender" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {ALLGENDERS.map((c) => (
                                        <SelectItem key={c.value} value={c.value}>{c.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormDescription>
                                Example: both, female, male
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="race"
                    render={({ field }) => (
                        <FormItem className="w-[95%] mx-auto mt-5">
                            <FormLabel>Race</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a race" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <ScrollArea className="h-[200px]">
                                        {ALLRACES.map((c) => (
                                            <SelectItem key={c.value} value={c.value}>{c.name}</SelectItem>
                                        ))}
                                    </ScrollArea>
                                </SelectContent>
                            </Select>
                            <FormDescription>
                                Example: human, alien, kryptonian...
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="publisher"
                    render={({ field }) => (
                        <FormItem className="w-[95%] mx-auto mt-5">
                            <FormLabel>Universe</FormLabel>
                            <Select
                                onValueChange={(e) => {
                                    field.onChange(e)
                                    form.setValue('groupAffiliation', 'All')
                                }}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a universe" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <ScrollArea className="h-[200px]">
                                        {ALLUNIVERSE.map((c, index) => (
                                            <SelectItem key={`${c.value}-${index}`} value={c.value}>{c.name}</SelectItem>
                                        ))}
                                    </ScrollArea>
                                </SelectContent>
                            </Select>
                            <FormDescription>
                                Example: Marvel, DC, Shueisha...
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {
                    teamByUniverse.length > 0 ?
                        <FormField
                            control={form.control}
                            name="groupAffiliation"
                            render={({ field }) => (
                                <FormItem className="w-[95%] mx-auto mt-5">
                                    <FormLabel>Team</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a team" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <ScrollArea className="h-[200px]">
                                                <SelectItem value="All">All teams</SelectItem>
                                                {teamByUniverse.map((c, index) => (
                                                    <SelectItem key={`${c.value}-${index}`} value={c.value}>{c.name}</SelectItem>
                                                ))}
                                            </ScrollArea>
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>
                                        Example: Avengers, Justice League...
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        : null
                }

                {/* </ScrollArea> */}
                <div className="w-full flex justify-end">
                    <Button type="submit">Filter</Button>
                </div>
            </form>
        </Form>

    )
}
