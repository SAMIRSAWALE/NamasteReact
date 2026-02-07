import ReactDOM from "react-dom/client"
import Header from "./component/Header";
import Body from "./component/body";

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
};
const root = ReactDOM.createRoot(
    document.getElementById("root")
)
root.render(<AppLayout />);