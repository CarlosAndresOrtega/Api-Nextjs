import styles from './user.module.css'
import {useRouter} from 'next/router';

const User = (props: any) => {
    const router =useRouter();
    return <>
        <ul className="list-group flex flex-col gap-3">
            {
                props.animes.map((anime: any) => { 
                    return <>
                        <li key={anime.mal_id} className={`list-group-item list-group-item-action ${styles.containerData}
                         bg-neutral-800 p-4 rounded-md gap-5 cursor-pointer`}
                        onClick={e=>router.push('/anime/[id]',`/anime/${anime.mal_id}`)}
                        >
                            <div className='flex flex-col gap-2 text-zinc-400 text-justify'>
                                <h5 className='text-lg max-[600px]:text-xs'>{anime.title}</h5>
                                <h5 className='text-slg'>{anime.title_japanese}</h5>
                                <h5 className='text-base max-sm:hidden'>{anime.synopsis}</h5>

                            </div>
                            <img src={anime.images.jpg.image_url} className="max-[600px]:h-32 max-[600px]:w-32" alt="" />
                        </li>
                    </>
                })
            }
        </ul>


    </>
}

export default User;