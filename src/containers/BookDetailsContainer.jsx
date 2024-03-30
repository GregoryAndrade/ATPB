import { Text, View } from "react-native";
import BookDetailsCard from "../components/BookDetailsCard";

export default function BookDetailsContainer(props) {
    const { params } = props.route;
    return (
        <BookDetailsCard book={params}/>
    )
}