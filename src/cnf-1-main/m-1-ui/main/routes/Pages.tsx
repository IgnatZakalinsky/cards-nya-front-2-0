import React, {ReactNode} from "react";
import LoginPage from "../../../../cnf-2-fatures/f-1-auth/a-1-login/l-1-ui/LoginPage";
import RegisterPage from "../../../../cnf-2-fatures/f-1-auth/a-2-register/r-1-ui/RegisterPage";
import ProfilePage from "../../../../cnf-2-fatures/f-1-auth/a-7-profile/p-1-ui/ProfilePage";
import AuthRedirectPage from "../../../../cnf-0-common/c-1-ui/redirect/AuthRedirectPage";
// import PacksPage from "../../../../cnf-2-fatures/f-2-cards/c-1-packs/p-1-ui/PacksPage";
// import CardsPage from "../../../../cnf-2-fatures/f-2-cards/c-2-cards/c-1-ui/CardsPage";
// import LearnPage from "../../../../cnf-2-fatures/f-3-learn/l-1-ui/LearnPage";
// import TestPage from "../../../../cnf-2-fatures/f-4-file/f-1-ui/TestPage";

export type PageType = {
    _id: number;
    title: string;
    path?: string;
    params?: string;
    exact?: boolean;
    page: ReactNode;
};

export const PATH = {
    LOGIN: "/login",
    REGISTER: "/register",
    PROFILE: "/profile",
    // PACKS: '/packs',
    // CARDS: '/cards',
    // LEARN: '/learn',
    // TEST: '/text',
};

export const pages: PageType[] = [
    {_id: 0, title: "login", path: PATH.LOGIN, exact: true, page: <LoginPage/>},
    {_id: 1, title: "register", path: PATH.REGISTER, exact: true, page: <RegisterPage/>},
    // {
    //     id: 2, title: 'profile', path: PATH.PROFILE, params: '/:id', exact: true,
    //     page: (p) => <div>{p.match.params.id}</div>
    // },
    {
        _id: 2, title: "profile", path: PATH.PROFILE, exact: true,
        page: <AuthRedirectPage><ProfilePage/></AuthRedirectPage>
    },
    // {id: 3, title: 'packs', path: PATH.PACKS, exact: true, page: () => <PacksPage/>},
    // {id: 4, title: 'cards', path: PATH.CARDS, params: '/:id', exact: true, page: () => <CardsPage/>},
    // {id: 5, title: 'learn', path: PATH.LEARN, params: '/:id', exact: true, page: () => <LearnPage/>},
    // {id: 6, title: 'test', path: PATH.TEST, exact: true, page: () => <TestPage/>},

    {_id: 9999, title: "error404", page: <div>error404</div>}
];
