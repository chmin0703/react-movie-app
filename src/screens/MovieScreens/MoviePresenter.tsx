import Loader from "../../components/Loader/Loader";

interface MoviePresenterProps{
    nowPlaying: any[] | null;
    upcoming: any[] | null;
    popular: any[] | null;
    topRated: any[] | null;
    error: string | null;
    loading: boolean;
    popularInfinite: any[] | null;
    nowPlayingInfinite: any[] | null;
    upcomingInfinite: any[] | null;
    topRatedInfinite: any[] | null;
}

const MoviePresenter : React.FC<MoviePresenterProps>=({
    nowPlaying,
    upcoming,
    popular,
    topRated,

    loading,

    popularInfinite,
    nowPlayingInfinite,
    upcomingInfinite,
    topRatedInfinite
})=>{

    const { location : {pathname}} = window;

    console.log("무비 플레이")

    return loading ? (
            <Loader/>
        ) : 
        (
        <div>무비 앱임</div>
        );
}

export default MoviePresenter;