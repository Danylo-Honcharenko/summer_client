import store from "@/states/store";
import {setData, setDataError} from "@/states/action";

const postEntry = async (title, price, day, month, year) => {
    const response = await fetch("http://ec2-3-8-33-223.eu-west-2.compute.amazonaws.com:8000/api/create-entry", {
        method: 'POST',
        body: JSON.stringify({title, price, day, month, year}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json();
    const dataErr = data.errors?.errors[0].msg;
    const dataString = data.mess;
    store.dispatch(setData(dataString));
    store.dispatch(setDataError(dataErr));
    if(dataString) {
        setTimeout(() => {
            location.reload()
        }, 1000)
    }
}
export default postEntry;