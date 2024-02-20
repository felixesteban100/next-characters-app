import TitlePage from "@/app/utilities/ui/TitlePage";
import Teams from "../../utilities/ui/teams/Teams";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Teams',
  }

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
    }
}) {
    
    return (
        <main
        >
            <TitlePage
                label={'Explore Teams'}
            />

            <Teams />
        </main>
    );
}