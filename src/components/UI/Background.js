import './Background.css';
import Card from "./Card.js";
import TallyCard from "../analysis/TallyCard.js";

function Background(){
    return <div className="background">
     <Card></Card>
     <TallyCard></TallyCard>
    </div>
}

export default Background;