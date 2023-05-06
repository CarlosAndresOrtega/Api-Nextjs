import { NextApiRequest } from "next"
import Link from "next/link";

const Anime = (props: any) => {
    return <>
        <div className="
            container 
            h-screen 
            w-screen
            flex
            items-center
            max-[320px]:items-start
            ">
            <div className="card w-full h-auto bg-zinc-800 flex justify-center items-center">

                <img src={props.data.images.jpg.image_url}
                    className="
                    card-img-top 
                    h-3/6 
                    w-2/6 
                    m-2
                    xl:w-1/6
                    min-[320px]:h-1/6
                    min-[320px]:w-2/6
                    "
                    alt="..." />
                <div className="card-body text-zinc-400 flex flex-col content-between h-auto gap-4 text-justify ">
                    <h5 className="card-title">{props.data.title}</h5>
                    <div className="flex justify-around ">
                        <div className="btn bg-indigo-600 text-white max-[320px]:text-xs 
                            flex justify-center items-center">
                            {props.data.themes[0].name}
                        </div>
                        <div className="btn bg-indigo-600 text-white max-[320px]:text-xs">
                            {props.data.themes[0].type}
                        </div>
                        <Link href={props.data.themes[0].url} 
                            className="btn bg-indigo-600 text-white max-[320px]:text-xs">Page</Link>
                    </div>
                    <p className="card-text min-[320px]:text-xs">{props.data.synopsis}</p>
                    <Link href="/" className="btn bg-indigo-600 text-white">Go Home</Link>
                </div>
            </div>
        </div>

    </>
}
Anime.getInitialProps = async (req: NextApiRequest) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${req.query.id}`)
    const json = await res.json()
    return { data: json.data }
}
export default Anime;