import { Component, ReactNode } from "react";
import DetailPresenter from "./DetailPresenter";
import { useParams } from "react-router-dom";
import withRouter from "../../components/util/withRouter";
import { movieApi } from "../../api/movie";
import { faL } from "@fortawesome/free-solid-svg-icons";

interface DetailContainerState {
    result : any | null,
    error : string | null,
    loading : boolean,
    recommendations : any,
    cast : any,
    keywords : any,
    backdrops : any,
    posters : any,
    tvDetail2 : any,
    reviews : any
}

class DetailContainer extends Component<{params : number}, DetailContainerState>{

    constructor(props : any){
        super(props);
        this.state={
            result : [],
            error : null,
            loading : true,
            recommendations : [null],
            cast : [],
            keywords : [],
            reviews : [],
            backdrops : [],
            posters : [],
            tvDetail2 : []
        };
    }
    
    async componentDidMount() {
        try{
            const parseId = this.props.params;

            const { data : result } = await movieApi.movieDetail(parseId);
            const { data : {result : recommendations}} = await movieApi.recommendations(parseId);
            const { data : {cast}} = await movieApi.credits(parseId);
            const { data : {keywords}} = await movieApi.keywords(parseId);
            const { data : {result : reviews}} = await movieApi.reviews(parseId);
            const { data : {backdrops}, data : {posters}} = await movieApi.images(parseId);

            this.setState({
                result,
                recommendations,
                cast,
                keywords,
                reviews,
                backdrops : backdrops && backdrops,
                posters : posters && posters,
                loading : false,
                error : null
            });
        }
        catch(err){
            this.setState({ error : "상세정보를 가져올 수 없습니다."});
        }   
    }


    render(){
        return <DetailPresenter {...this.state}/>
    }

};

export default withRouter(DetailContainer);