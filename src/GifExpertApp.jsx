import { useState } from "react"
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => 
{
    const [categories, setCategories] = useState(['one punch']);

    const onAddCategory = (category) => {
        if(categories.includes(category) ) return;
        setCategories((c) => [category, ...c] );
    }

    return (
        <main className="container mx-auto p-4">
            <div className="flex justify-between md:justify-start md:items-center flex-col md:flex-row gap-2">

                <h1 className="text-2xl font-bold tracking-wide text-gray-950 md:basis-1/6">Gif Expert App</h1>
            
                <AddCategory 
                //setCategories={setCategories}
                onNewCategory={ onAddCategory }
                />
            </div>
            {/** Listado de Gif */}
            <div className="mt-5 flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center flex-wrap">
                {
                    categories.map((category) => (<GifGrid category={category} key={category} />))
                }
            </div>
        </main>
    )
}