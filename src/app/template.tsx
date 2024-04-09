import { ReactNode } from "react";
import AppLayout from "@/components/AppLayout";
import { readUserSession } from "@/helpers/supabase";


const Template = async ({ children }: { children: ReactNode }) => {
    const user = await readUserSession()
    const getSession = user.data.user?.user_metadata ?? null
    // console.log(getSession)
    return (
        <AppLayout session={getSession}>
            {children}
        </AppLayout>
    )
}
export default Template;
