import React, {useEffect} from "react";
import {DEV_VERSION} from "../../../../config";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {getPacks} from "../p-2-bll/getPacksThunk";
import TableNya from "../../../../cnf-0-common/c-1-ui/table/TableNya";
import {packsModel} from "./PacksModel";
import {addPack} from "../p-2-bll/addPackThunk";
import {deletePack} from "../p-2-bll/deletePackThunk";
import {updatePack} from "../p-2-bll/updatePackThunk";

const PacksContainer = React.memo(() => {
    const {packs} = useSelector((store: AppStoreType) => store.packs);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPacks());

    }, [dispatch]);

    const model = packsModel(
        () => dispatch(addPack()),
        (id: string) => dispatch(deletePack(id)),
        (id: string) => dispatch(updatePack(id)),
    );

    DEV_VERSION && console.log("render PacksContainer");
    return (
        <div>
            <TableNya model={model} data={packs} title={"CardPacks"}/>
        </div>
    )
});

export default PacksContainer;
