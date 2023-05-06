import { ChangeEvent } from "react";

const Search = (props:any)=>{


    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const filter = props.animes.filter((anime:any) => {
            if(anime.title.toLocaleUpperCase().includes(e.target.value.toLocaleUpperCase())){
                return anime
            }
        });
        props.setfiltered(filter)
    }

    return<>
        <input onChange={handleChange} 
            className="list-group-item bg-neutral-800 text-zinc-400
            text-lg" 
            style={{width:"100%", marginBottom:"5px"}} 
            type="text" 
            placeholder="Busca un anime"/>
    </>
}

export default Search;