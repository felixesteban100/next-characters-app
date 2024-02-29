import TitlePage from "@/components/custom-ui/TitlePage";
import Teams from "@/components/custom-ui/teams/Teams";
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