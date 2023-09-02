import { Component, ReactNode } from "react";
import HomePresenter from "./HomePresenter";
import { homeApi } from "../../api/movie";

interface HomeContainerState {
    nowPlaying : any[] | null;
    movieDetail : any;
    loading : boolean;
    error : any;
}

class HomeContainer extends Component<{}, HomeContainerState> {
    constructor(props : {}){
        super(props);
        this.state = {
            nowPlaying : null,
            movieDetail : null,
            loading : true,
            error : null,
        }
    }

    //예약 함수 - 정해져 있는 함수기 때문에 명칭을 바꿀수 없다.
    async componentDidMount(){
        try{
            const {data} = await homeApi.nowPlaying();
            const movieArray = data.result.map((result:any) => result.id)
            const movieId = movieArray[Math.floor(Math.random() * movieArray.length)]

            try{
                const {data : movieDetail} = await homeApi.movieDetail(movieId);
                if(movieDetail.videos.result.length === 0){
                    const { data : defaultMovieDetail } = await homeApi.movieDetail(497698);
                    this.setState({movieDetail : defaultMovieDetail})
                }else{
                    this.setState({movieDetail : movieDetail})
                }
            }catch(error){
                this.setState({error : "비디오를 찾을 수 없습니다."})
            }
        }
        catch(error){
            this.setState({error : "비디오를 재생할 수 없습니다."})
        }
        finally {
            this.setState({loading : false})
        }
    }
    
    render() {
        return <HomePresenter {...this.state} />;
    }
}
export default HomeContainer