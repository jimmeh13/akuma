import React from "react";

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
    twitter?: string;
    staff: Player[];
    players: Player[];
};

export type Match = {
    teamOne: Team;
    teamTwo: Team;
    teamOneScore: number;
    teamTwoScore: number;
    date: string;
    twitch?: string;
    youtube?: string;
    winner: number | undefined;
};

export type NewsArticle = {
    title: string;
    description: string;
    body: string;
    date: string;
    slug: string;
    bgImage: string;
};

export type Partner = {
    title: string;
    plug?: React.ReactElement;
    code: string;
    bonus: string;
    logo: string;
    link: string;
};

export const StaticPartners: Partner[] = [
    {
        title: "Rogue Energy",
        plug: (
            <span>
                Use code <span style={{ color: "green" }}>AKMWIN</span> for <span style={{ color: "green" }}>10%</span> discount on ALL products.
            </span>
        ),
        code: "AKMWIN",
        bonus: "10% OFF",
        logo: "/rogue-energy.png",
        link: "https://www.rogueenergy.com/?rfsn=4854491.4c2329&utm_source=refersion&utm_medium=affiliate&utm_campaign=4854491.4c2329"
    }
];

export const StaticNewsArticles: NewsArticle[] = [
    {
        title: "Tridents pop off",
        description: "Trients clap some nerds in tournament.",
        body:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        date: "March 10, 2021",
        slug: "tridents-pop-off",
        bgImage: "/league-bg.jpg"
    },
    {
        title: "Tridents pop off",
        description: "Trients clap some nerds in tournament.",
        body:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        date: "March 9, 2021",
        slug: "tridents-pop-off",
        bgImage: "/league-bg.jpg"
    },
    {
        title: "Tridents pop off",
        description: "Trients clap some nerds in tournament.",
        body:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        date: "March 7, 2021",
        slug: "tridents-pop-off",
        bgImage: "/league-bg.jpg"
    },
    {
        title: "Tridents pop off",
        description: "Trients clap some nerds in tournament.",
        body:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        date: "March 3, 2021",
        slug: "tridents-pop-off",
        bgImage: "/league-bg.jpg"
    }
];

export const StaticMatchData: Match[] = [
    {
        teamOne: {
            teamName: "shurikens",
            logo: "/akuma-shurikens.png",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            gameName: "League of Legends",
            twitter: "https://twitter.com/team1",
            staff: [
                {
                    name: "Froge",
                    image: "/twitch.jpg",
                    role: "MANAGER"
                }
            ],
            players: [
                {
                    name: "Froge",
                    image: "/twitch.jpg",
                    role: "ADC"
                },
                {
                    name: "Froge",
                    image: "/twitch.jpg",
                    role: "TOP"
                },
                {
                    name: "Froge",
                    image: "/twitch.jpg",
                    role: "JUNGLE / TWITCH OTP"
                },
                {
                    name: "Froge",
                    image: "/twitch.jpg",
                    role: "SUPPORT"
                },
                {
                    name: "Froge",
                    image: "/twitch.jpg",
                    role: "MID"
                }
            ]
        },
        teamTwo: {
            teamName: "claymores",
            logo: "/akuma-claymores.png",
            description: "Claymore Team",
            gameName: "League of Legends",
            twitter: "https://twitter.com/team2",
            staff: [],
            players: [
                {
                    name: "Froge",
                    image: "/akuma-claymores.png",
                    role: "TWITCH OTP"
                }
            ]
        },
        teamOneScore: 0,
        teamTwoScore: 0,
        twitch: "twitch.tv/vodlink",
        youtube: "youtube.com/vodlink",
        date: "March 20, 2021 19:00EST",
        winner: undefined
    }
];

const StaticTeamData: Team[] = [
    {
        teamName: "shurikens",
        logo: "/akuma-shurikens.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        gameName: "League of Legends",
        staff: [
            {
                name: "Froge",
                image: "/twitch.jpg",
                role: "MANAGER"
            }
        ],
        players: [
            {
                name: "Froge",
                image: "/twitch.jpg",
                role: "ADC"
            },
            {
                name: "Froge",
                image: "/twitch.jpg",
                role: "TOP"
            },
            {
                name: "Froge",
                image: "/twitch.jpg",
                role: "JUNGLE / TWITCH OTP"
            },
            {
                name: "Froge",
                image: "/twitch.jpg",
                role: "SUPPORT"
            },
            {
                name: "Froge",
                image: "/twitch.jpg",
                role: "MID"
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
