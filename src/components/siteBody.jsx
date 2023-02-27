import React from 'react';
import EntrySec from "@/components/entrySec";
import AddEntrySec from "@/components/addEntrySec";
import Style from '../styles/style.module.scss';
const SiteBody = (props) => {
    return (
        <div className={Style.body}>
            <div>
                <EntrySec userFile={props.nameDataEntry} />
            </div>
            <div>
                <AddEntrySec />
            </div>
        </div>
    );
};

export default SiteBody;