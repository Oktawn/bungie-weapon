import { useEffect, useState } from "react";
import { Placeholder } from "rsuite";

function CacheImage({ src, alt, className }: { src: string, alt?: string, className?: string }) {
  const [loaded, setLoaded] = useState<string>("");

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(src);

  }, [src]);

  return (
    loaded ?
      <img src={loaded} alt={alt} className={className} />
      :
      <Placeholder.Paragraph graph="square"/>
  )

}
export default CacheImage