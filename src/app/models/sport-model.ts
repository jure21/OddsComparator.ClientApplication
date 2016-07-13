export class SportModel
{
    public sportId : string;
    public sportName: string;
    public image: string;

    constructor(sportId:string='', sportName:string='', image:string='') {
        this.sportId = sportId;
        this.sportName = sportName;
        this.image = image;    
    }
}