import Team from "./Team";

export default interface Player {
    id: number;
    first_name: string;
    last_name: string;
    height_feet: number;
    height_inches: number;
    team: Team;
    position: string;
    weight_pounds: number;
}