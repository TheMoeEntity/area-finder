import { createSupabaseServerClient } from "@/helpers/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {

    const { firstName, lastName, userName, email, password } = await req.json()
    const supabase = await createSupabaseServerClient()
    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                // emailRedirectTo: 'http://localhost:3000/login',
                data: {
                    userName,
                    firstName,
                    lastName
                }
            }
        })
        if (error?.message) {
            return NextResponse.json({ success: false, error:error.message}, { status: 400 });
        }
       
        return NextResponse.json({ success: true, data }, { status: 201 });
    } catch (error) {
       
        return NextResponse.json({ error: "Failed to create user: " + error }, { status: 500 });
    }
}