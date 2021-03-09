export type Player = {
    name: string;
    image: string;
    role: string;
};

export type Team = {
    teamName: string;
    logo: string;
    description: string;
    gameName: string;
    staff: Player[];
    players: Player[];
};

const StaticTeamData: Team[] = [
    {
        teamName: "shurikens",
        logo: "/akuma-shurikens.png",
        description: "Shurken Team",
        gameName: "League of Legends",
        staff: [],
        players: [
            {
                name: "Froge",
                image: "/akuma-claymores.png",
                role: "TWITCH OTP"
            },
            {
                name: "Froge",
                image: "/akuma-claymores.png",
                role: "TWITCH OTP"
            },
            {
                name: "Froge",
                image: "/akuma-claymores.png",
                role: "TWITCH OTP"
            },
            {
                name: "Froge",
                image: "/akuma-claymores.png",
                role: "TWITCH OTP"
            },
            {
                name: "Froge",
                image: "/akuma-claymores.png",
                role: "TWITCH OTP"
            }
        ]
    },
    {
        teamName: "claymores",
        logo: "/akuma-claymores.png",
        description: "Claymore Team",
        gameName: "League of Legends",
        staff: [],
        players: [
            {
                name: "Froge",
                image: "/akuma-claymores.png",
                role: "TWITCH OTP"
            }
        ]
    },
    {
        teamName: "glaives",
        logo: "/akuma-glaives.png",
        description: "Glaive Team",
        gameName: "League of Legends",
        staff: [],
        players: [
            {
                name: "Froge",
                image: "/akuma-claymores.png",
                role: "TWITCH OTP"
            }
        ]
    },
    {
        teamName: "sabers",
        logo: "/akuma-sabers.png",
        description: "Saber Team",
        gameName: "League of Legends",
        staff: [],
        players: [
            {
                name: "Froge",
                image: "/akuma-claymores.png",
                role: "TWITCH OTP"
            }
        ]
    },
    {
        teamName: "scythes",
        logo: "/akuma-scythes.png",
        description: "Scythe Team",
        gameName: "League of Legends",
        staff: [],
        players: [
            {
                name: "Froge",
                image: "/akuma-claymores.png",
                role: "TWITCH OTP"
            }
        ]
    },
    {
        teamName: "blades",
        logo: "/akuma-blades.png",
        description: "Blade Team",
        gameName: "League of Legends",
        staff: [],
        players: [
            {
                name: "Froge",
                image: "/akuma-claymores.png",
                role: "TWITCH OTP"
            }
        ]
    },
    {
        teamName: "tridents",
        logo: "/akuma-tridents.png",
        description: "Tridents Team",
        gameName: "League of Legends",
        staff: [],
        players: [
            {
                name: "Froge",
                image: "/akuma-claymores.png",
                role: "TWITCH OTP"
            }
        ]
    }
];

export default StaticTeamData;
