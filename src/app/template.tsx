import { ReactNode } from "react";
import Header from "@/components/Header";
import Script from "next/script";


const Template = async ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <Script
                src="https://kit.fontawesome.com/4ef8c63dd7.js"
                crossOrigin="anonymous"
            />
        </>
    )
}
export default Template;
