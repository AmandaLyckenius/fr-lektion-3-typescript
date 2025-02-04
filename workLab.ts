export interface Superhero {
    name: string,
    superpower: string,
    strength: number,
    speed: number,
    health: number,
    damage: number,
    isAlive: boolean,
    peopleSaved: number,
    age: number,
    gender: string,
    hasCape: boolean,
    hasWeapon: boolean,
    isAnomomus: boolean,
    sidekickList: Sidekick[]
    //sidekick: Sidekick

}


export interface Sidekick {
    name: string,
    superpower: string,
    strength: number,
}