import { Helpers } from "@/helpers";
import { ISBProducts } from "@/helpers/types";
import dynamic from "next/dynamic";
const Search_Client = dynamic(() => import("../../components/Search_Client"));

const Search = async ({
    params,
    searchParams,
}: {
        params: { id: string };
        searchParams: { id: string };
    }) => {
    const items = await Helpers.fetchSupabaseProducts() as ISBProducts[]
    const {id} = searchParams 
    const item =  items.find((item) => item.id === id) as ISBProducts

    return (
        <Search_Client item={item} />
    )
}

export default Search