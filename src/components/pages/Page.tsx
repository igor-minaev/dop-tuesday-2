import React from 'react';
import {dataState, PageType} from "../../data/dataState";
import {useParams} from "react-router-dom";
import {Content} from "../Content";

type PagePropsType = {
    pages: PageType[]
}

export const Page = (props: PagePropsType) => {
    const params = useParams<'id'>()
    console.log(Number(params.id))
    return (
        <div>
            {(Number(params.id) < props.pages.length && Number(params.id) >= 0) ?
                <Content page={props.pages[Number(params.id)]}/> : <Content page={props.pages[0]}/>}
            {/*<Content page={props.pages[Number(params.id)]}/>*/}
        </div>
    );
};

