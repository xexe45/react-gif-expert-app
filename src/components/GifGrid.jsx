import { GifCard } from "./GifCard";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  
  return (
    <>
        {
            isLoading && (<h4>Cargando...</h4>)
        }
      {
        images.map((image) => (
            <GifCard key={image.id} {...image} />
        ))
      
      }
    </>
  );
};
