import { RegionModel} from './';
 
export class LeagueModel extends RegionModel
{
    public leagueId : string;
    public leagueName: string;
    public totalGames: number;
    public regionImage:string;

    /**
     *
     */
    constructor(
        sportId:string='',
        sportName:string='',
        regionId:string='',
        regionName:string='',
        totalLeagues:number=0,
        regionImage:string='',
        leagueId:string='',
        leagueName:string='',
        totalGames:number=0
        ) 
        {
            super(sportId,sportName,leagueId,leagueName, regionImage);
            this.leagueId = leagueId;
            this.leagueName = leagueName;
            this.totalLeagues = totalGames;
            this.regionImage = regionImage;
        }
}