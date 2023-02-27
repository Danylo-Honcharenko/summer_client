import React, {useState} from 'react';
import Style from '../styles/style.module.scss';
import PostEntry from '../module/postData';
import {useSelector} from "react-redux";
import EntrySuccessfully from "@/components/entrySuccessfully";
import EmptyEntry from "@/components/emptyEntry";
import ErrorPhoto from '../svg/Error.svg';
const AddEntrySec = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const dataString = useSelector(state => state.data);
    const dataErr = useSelector(state => state.dataErr);

    return (
        <div className={Style.containerAddEntry}>
            {dataString ? <EntrySuccessfully text={`${dataString}`} />:
                <>
                    <h2 className={Style.titleAddEntry}>Добавить новый расход</h2>
                    <div>
                        <span className={Style.inputsContainer}>
                            <input
                                type="text"
                                placeholder='Название'
                                className={Style.inputStyle}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder='Сумма'
                                className={Style.inputStyle}
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </span>
                                <div className={Style.dateContainer}>
                                    <p>Дата покупки (число, месяц, год)</p>
                                </div>
                                <span className={Style.inputsContainerDate}>
                            <input
                                type="number"
                                className={Style.inputStyleDate}
                                value={day}
                                onChange={(e) => setDay(e.target.value)}
                            />
                            <input
                                type="number"
                                className={Style.inputStyleDate}
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                            />
                            <input
                                type="number"
                                className={Style.inputStyleYear}
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />
                        </span>
                        <div className={Style.buttonSendContainer}>
                            <button
                                onClick={e => PostEntry(title, price, day, month, year)}
                                className={Style.buttonSend}
                            >Добавить расход</button>
                        </div>
                        {dataErr && <EmptyEntry image={ErrorPhoto} text={`${dataErr}`}/>}
                    </div>
                </>
            }
        </div>
    );
};

export default AddEntrySec;
