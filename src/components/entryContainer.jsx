import React from 'react';
import Style from '../styles/style.module.scss';
import Entry from "@/components/entry";
import EmptyEntry from "@/components/emptyEntry";
import Cloud from '../svg/Cloud.svg';

const EntryContainer = (props) => {
    const userData1 = props.userData1;
    return (
        <div className={Style.entryContainer}>
            <div>
                <h2 className={Style.entryContainerTitle}>Все расходы</h2>
            </div>
            <div className={Style.entryColumnTitle}>
               <div>
                   <p>Название</p>
               </div>
                <div>
                    <p>Сумма</p>
                </div>
                <div>
                    <p>Дата покупки</p>
                </div>
                <div>
                    <p>Дата создания</p>
                </div>
            </div>
            <div>
                {Array.isArray(userData1) ?
                    userData1.map((data) =>
                        <Entry key={data._id} title={data.title} price={data.price} dateBuy={data.dateBuy} dateCreate={data.dateCreate}/>
                    ) : <EmptyEntry image={Cloud} text={userData1.mess} />
                }
            </div>
        </div>
    );
};

export default EntryContainer;
