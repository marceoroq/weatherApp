export interface City {
    id:        number;
    coord:     Coord;
    country:   string;
    geoname:   Geoname;
    langs?:    { [key: string]: string }[];
    name:      string;
    nameFormated?:     string;
    stat:      Stat;
    stations?: Station[];
    zoom:      number;
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface Geoname {
    cl:     Cl;
    parent: number;
}

export enum Cl {
    A = "A",
    Empty = "",
    P = "P",
}

export interface Stat {
    level:      number;
    population: number;
}

export interface Station {
    id:   number;
    dist: number;
    kf:   number;
}