import { Component } from "react";
import MoviePresenter from "./MoviePresenter";
import { movieApi } from "../../api/movie";

interface MovieContainerState{
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

class MovieContainer extends Component<{}, MovieContainerState>{
    
    state: MovieContainerState ={
        nowPlaying : null,
        upcoming : null,
        popular:  null,
        topRated: null,
        error: null,
        loading: true, 
        popularInfinite: null,
        nowPlayingInfinite: null,
        upcomingInfinite: null,
        topRatedInfinite: null
    };

    async componentDidMount(){
        try{
            const { data : {results : nowPlaying}} = await movieApi.nowPlaying();
            const { data : {results : upcoming}} = await movieApi.upcoming();
            const { data : {results : popular}} = await movieApi.popular();
            const { data : {results : topRated}} = await movieApi.topRated();
            const { data : {results : popularInfinite}} = await movieApi.popularInfinite();
            const { data : {results : nowPlayingInfinite}} = await movieApi.nowPlayingInfinite();
            const { data : {results : upcomingInfinite}} = await movieApi.upcomingInfinite();
            const { data : {results : topRatedInfinite}} = await movieApi.topRatedInfinite();

            this.setState({
                nowPlaying,
                upcoming,
                popular,
                topRated,
                popularInfinite,
                nowPlayingInfinite,
                upcomingInfinite,
                topRatedInfinite
            });
        }
        catch{
            this.setState({error : "영화 정보를 찾을 수 없습니다."});
        }
        finally{
            this.setState({loading : false});
        }
    }
    
    render() {
        return <MoviePresenter {...this.state} />
    }
}

export default MovieContainer;