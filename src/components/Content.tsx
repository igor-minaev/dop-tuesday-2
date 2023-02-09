import React from 'react';
import {PageType} from "../data/dataState";

type ContentPropsType = {
    page: PageType
}

export const Content = (props:ContentPropsType) => {
    return (
        <div>
            <h3>{props.page.heading}</h3>
            <div>{props.page.about}</div>
        </div>
    );
};

