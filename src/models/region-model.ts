import { SportModel } from '../models'

export class RegionModel extends SportModel
{
    public regionId: string;
    public regionName: string;
    public totalLeagues: number;

    /**
     *
     */
    constructor(regionId, regionName, totalLeagues) {
        super(regionId, regionName);
        this.regionId = regionId;
        this.regionName = regionName;
        this.totalLeagues = totalLeagues;
    }   
}