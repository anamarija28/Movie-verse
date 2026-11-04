import { NextResponse } from "next/server";
import { getAllCourses } from "@/lib/data";

// API e async?
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url); // od URL to gi zemame parametrite i tie params gi cuvame vo searchParams
    const q = searchParams.get("q")?.trim() ?? ""; // go zemame parametarot q koj e vo url-to i go trimuvame da nema prazno mesto pred i na krajot na taa recenica koja nekoj ke ja pisuva

    let courses = getAllCourses();

    // Ako korisnikot napisal nesto, napravi go toa vo {}
    if(q) { 
        const needle = q.toLowerCase(); // toa sto nekoj go napisa, go pretvorame vo mali bukvi bidejki e polesno da se prebaruva
        courses = courses.filter(
            (c) => c.title.toLocaleLowerCase().includes(needle) // gi zemame naslovite na kursevite i gi stavame vo mali bukvi i potoa barame dali toj naslov sodrzi toa sto korisnikot go pobaral
        );
    }

    // JSON - bidejki API raboti so JSON
    return NextResponse.json({
        count: courses.length, // kolku kursevi ima
        courses // kolku kursevi sme vratile
    })

}