import { SportModel } from './sport-model';

export class RegionModel extends SportModel
{
    public regionId: string;
    public regionName: string;
    public totalLeagues: number;
    public regionImage: string;
      
    constructor(
        sportId:string='',
        sportName:string='',
        sportImage:string='',
        regionId:string='',
        regionName:string='',
        totalLeagues:number=0,
        regionImage:string='') 
        {
            super(sportId, sportName, sportImage);
            this.regionId = regionId;
            this.regionName = regionName;
            this.totalLeagues = totalLeagues;
            this.regionImage = regionImage;
        }
}