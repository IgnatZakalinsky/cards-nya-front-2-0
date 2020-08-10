import React, {DetailedHTMLProps, HTMLAttributes, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStoreType} from "../../../cnf-1-main/m-2-bll/store";
import {PATH} from "../../../cnf-1-main/m-1-ui/main/routes/Pages";
import {ProfileActions} from "../../../cnf-2-fatures/f-1-auth/a-7-profile/p-2-bll/ProfileActions";
import {getMe} from "../../../cnf-2-fatures/f-1-auth/a-7-profile/p-2-bll/getMeThunk";

type DivPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type AuthRedirectPagePropsType = DivPropsType & {}

const AuthRedirectPage: React.FC<AuthRedirectPagePropsType> = React.memo((
    {
        children,
        ...restProps
    }
) => {
    const {user, error, success} = useSelector((store: AppStoreType) => store.profile);
    const [firstRendering, setFirstRendering] = useState<boolean>(true);
    const [redirect, setRedirect] = useState<boolean>(false);
    const [spin, setSpin] = useState<boolean>(user._id === "0"); // !!! add request /auth/me

    const dispatch = useDispatch();
    useEffect(() => {
        if (firstRendering) {
            if (success || error) dispatch(ProfileActions.setError(''));

            if (user._id === "0") {
                dispatch(getMe());
            }
            setFirstRendering(false); // + rerender
        } else {
            if (error && !redirect) {
                setTimeout(() => setRedirect(true), 1500);
            }
            if (success && spin) setSpin(false);
        }
    }, [firstRendering, setFirstRendering, user._id, setRedirect, success, error,
        dispatch, redirect, spin, setSpin]);

    if (redirect) return <Redirect to={PATH.LOGIN}/>;
    if (spin) return <div>spin... {error}</div>;

    return (
        <>
            {/*<Log s={renderLog || "rendering AuthRedirectPage"}/>*/}
            <div {...restProps}>
                {children}
            </div>
        </>
    );
});

export default AuthRedirectPage;
