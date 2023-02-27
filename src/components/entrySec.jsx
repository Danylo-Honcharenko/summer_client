import React from 'react';
import Message from "@/components/message";
import ExclamationMark from '../svg/Exclamation Mark.svg';
import Clock from '../svg/Clock.svg';
import EntryContainer from "@/components/entryContainer";

const EntrySec = (props) => {
    return (
        <div>
            <Message image={ExclamationMark} altImg="ExclamationMark" text="Внимание не добавляйте линчую информацию в расходы"/>
            <Message image={Clock} altImg="Clock" text="Расходы автоматический очищаются каждые 15 минут"/>
            <EntryContainer userData1={props.userFile} />
        </div>
    );
};

export default EntrySec;