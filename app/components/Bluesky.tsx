import Image from "next/image";
// svg
function Bluesky(params: { size: number }) {
    const { size } = params;
    return (
        <Image src="/bluesky.svg" alt="Bluesky" width={size} height={size} />
    )
}

export default Bluesky;